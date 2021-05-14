const help = (prefix) => {
	return ` *Comandos de figu* <

 comando: *${prefix} sticker* 
 desc: convertir imagen / gif / video a sticker
 uso: responder imagen / gif / vídeo o enviar imagen / gif / video con subtítulo\n

 comando: *${prefix} sticker nobg*
 desc: convierte la imagen en un sticker mientras quita el fondo
 uso: responder imagen o enviar imagen con título\n

 comando: *${prefix} toimg*
 desc: converter sticker en imagen
 uso: etiqueta de respuesta\n

 comando: *${prefix} tsticker*
 desc: converter texto en sticker
 uso: *${prefix} texto tsticker aqui*\n

 > *Comandos Meme* <

 comando: *${prefix} meme*
 desc: imagenes de memes al azar [español]
 uso: basta enviar el comando\n

 comando: *${prefix} memeindo*
 desc: imagenes aleatórias de meme [español]
 uso: basta enviar o comando\n

 > *Otros comandos* <

 comando: *${prefix} gtts*
 desc: convertir texto a voz / audio
 uso: *${prefix} gtts [cc] [texto]* \ ejemplo: *${prefix} gtts Hatsune-chan*/n

 comando: *${prefix} loli*
 desc: imágenes aleatorias de loli
 uso: basta enviar el comando\n

 comando: *${prefix} nsfwloli*
 desc: imagenes aleatórias de nsfw loli
 uso: basta enviar el comando\n

 comando: *${prefix} url2img*
 desc: toma capturas de pantalla de la web
 uso: *${prefix} url2img [type] [url]*\n

 comando: *${prefix} simi*
 desc: su mensaje será respondido por simi
 uso: *${prefix} simi tu mensaje*\n

 comando: *${prefix} ocr*
 desc:quitar el texto de la imagen
 uso: responder imagen o enviar imagen con título\n

 comando: *${prefix} wait*
 desc: responder imagen o enviar imagen con título 
 uso: responder imagen o enviar imagen con título\n
 comando: *${prefix} setprefix*
 desc: reemplazar prefijo
 uso: *${prefix} setprefix [texto | opcional]*\n
 nota: este comando solo puede ser utilizado por el propietario del bot\n

 > *Comandos de Grupo* <

 comando: *${prefix} add*
 desc: agregar miembro al grupo
 uso: *${prefix} add 5528xxxxx*\n
 Nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador!\n

 comando: *${prefix} kick*
 desc: expulsar miembros del grupo
 uso: *${prefix} kick @ tagmember*\n
 nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador!\n

 comando: *${prefix} promover*
 desc: convertir al miembro del grupo en administrador del grupo
 uso: *${prefix} promote @ tagmember*\n
 nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador
 comando: *${prefix} demote*
 desc: hacer que el administrador del grupo sea miembro del grupo
 uso: *${prefix} demote @ tagmember*\n
 nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador!\n

 comando: *${prefix} linkgroup*
 desc: obtener el enlace del grupo
 uso: basta enviar el comando
 nota: solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador!\n

 comando: *${prefix} leave*
 desc: Haz que el bot abandone el grupo
 uso: basta enviar el comando
 nota: solo puede ser utilizado por administradores de grupo y propietarios de bots\n

 comando: *${prefix} tagall*
 desc: marca a todos los miembros del grupo, incluidos los administradores también
 uso: basta enviar el comando
 nota: este comando se puede utilizar si es un administrador de grupo\n

 comando: *${prefix} simih*
 desc: activa el modo simi en el grupo
 uso: *${prefix} simih 1* para activar el modo simi y *${prefix} simih 0* para desactivar el modo simi
 nota: este comando se puede utilizar si es un administrador de grupo\n

BOT CREADO POR: Dark Gūnter ♠️
`
}

exports.help = help
