const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*SIMPLE USER WHATS APP BOT QUEEN-NETHU-MD*

*➤ REPO LINK*

🔗◦https://github.com/Nethmikakaushalyaherath/QUEEN-NETHU-MD/tree/main

*➤ SUBSCRIBE MY YOUTUBE CHANNEL*

🔗◦ https://www.youtube.com/@SlNethuMax

*➤ FOLLOW MY WHATSAPP CHANNEL*

🔗◦ https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/50206061aac79a468a33a.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
