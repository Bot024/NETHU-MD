const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ NETHU MD Repastitory Information*

*| ɴᴀᴍᴇ*: ɴᴇᴛʜᴜ-ᴍᴅ
*| ᴏᴡɴᴇʀ*: ɴᴇᴛʜᴍɪᴋᴀ ᴋᴀᴜꜱʜᴀʟʏᴀ (ꜱʟ ɴᴇᴛʜᴜ ᴍᴀx)
*| ɴᴜᴍʙᴇʀ*: 94704227534
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/Nethmikakaushalyaherath/QUEEN-NETHU-MD/tree/main

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://www.youtube.com/@SlNethuMax

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/50206061aac79a468a33a.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
