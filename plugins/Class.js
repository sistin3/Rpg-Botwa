//Being Created

let handler = async (m, { conn, usedPrefix, command, text, args }) => {

  let player = global.DATABASE._data.users[m.sender]
  let pick = (args[0] || '').toLowerCase()
  switch (pick) {
      case 'tank':
        player.class = tank
        player.attack = player.attack + 5
        player.defense = player.defense + 15
        break
      case 'assasins':
      case 'asasin':
        player.class = assasins
        player.attack = player.attack + 12
        player.defense = player.defense + 3
        break
