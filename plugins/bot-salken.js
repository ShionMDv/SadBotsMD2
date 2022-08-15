let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah SadBot, SadBot adalah Sebuah Bot yang bisa membantumu di grup ini, Jangan Spam ya! nanti ownerku marah hehe, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), `${wm3}`, ['📮Menu', ['.menu'], m)
	}

handler.command = /^(salken)$/i

export default handler 

let wm = global.botwm
