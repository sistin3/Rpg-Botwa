let handler = async (m, { conn, text }) => {

let player = global.DATABASE.data.users[m.sender]
if (player.potion < 1) throw 'Anda Tidak Memiliki Potion' 

if (player.hp < 100) {
    player.hp += 20
    m.reply(`+20 HP, ${player.hp}/${player.max_hp}`)
if (player.hp > 100)
    player.hp = player.max_hp
    player.potion -= 1
    return
    }
    m.reply(`Healt Point Anda Sudah Max, ${player.hp}/${player.max_hp}`)
}

handler.help = ['heal']
handler.tags = ['game']
handler.command = /^heal/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


