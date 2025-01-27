const { sticker } = require("../../lib/convert");
const lang = require("../other/text.json");

module.exports = {
    name: "s",
    alias: ['sticker', 'stick', 'stik', 'stiker', 'stickergif', 'stikergif', 'gifstiker', 'gifsticker'],
    category: "general",
    desc: "Create a sticker from image or video",
    async exec(msg, sock) {
        const { quoted, from, type } = msg;

        const content = JSON.stringify(quoted);
        const isMedia = type === 'imageMessage' || type === 'videoMessage';
        const isQImg = type === 'extendedTextMessage' && content.includes('imageMessage');
        const isQVid = type === 'extendedTextMessage' && content.includes('videoMessage');
        const isQDoc = type === 'extendedTextMessage' && content.includes('documentMessage');

        try {
            if ((isMedia && !msg.message.videoMessage) || isQImg) {
                const buffer = isQImg ? await quoted.download() : await msg.download();
                const stickerBuffer = await sticker(buffer, { isImage: true, cmdType: "1" });
                await sock.sendMessage(from, { sticker: stickerBuffer }, { quoted: msg });
            } else if (
                (isMedia && msg.message.videoMessage.fileLength < 2 << 20) ||
                (isQVid && quoted.message.videoMessage.fileLength < 2 << 20)
            ) {
                const buffer = isQVid ? await quoted.download() : await msg.download();
                const stickerBuffer = await sticker(buffer, { isVideo: true, cmdType: "1" });
                await sock.sendMessage(from, { sticker: stickerBuffer }, { quoted: msg });
            } else if (
                isQDoc && (/image/.test(quoted.message.documentMessage.mimetype) ||
                    (/video/.test(quoted.message.documentMessage.mimetype) && quoted.message.documentMessage.fileLength < 2 << 20))
            ) {
                let ext = /image/.test(quoted.message.documentMessage.mimetype) ? { isImage: true }
                    : /video/.test(quoted.message.documentMessage.mimetype) ? { isVideo: true } : null;
                if (!ext) return await msg.reply("Document mimetype unknown");
                const buffer = await quoted.download();
                const stickerBuffer = await sticker(buffer, { ...ext, cmdType: "1" });
                await sock.sendMessage(from, { sticker: stickerBuffer }, { quoted: msg });
            } else {
                await msg.reply(`IND:\n${lang.indo.stick}\n\nEN:\n${lang.eng.stick}`);
            }
        } catch (e) {
            await msg.reply("Error while creating sticker");
        }
    }
}