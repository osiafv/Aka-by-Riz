//===========< Downloader Menu >===========

case prefix+'igstory': case prefix+'instagramstory': {
    if(!isRegistered) return sock.send5Loc(from, daftar1, daftar2, pic, butCmd2) 
    if (isBan) return ads(mess.ban)
    if (!args[0]) return ads(`Example :\n${command} AKA.xyz`)
    try {
    hx.igstory(args[0]).then(async(resed) => {
    ini_anu = []
    anu_list = []
    textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
    urut = 1
    for (let i = 0; i < resed.medias.length; i++) {
    ini_anu.push({
     "type": resed.medias[i].fileType,
     "url": resed.medias[i].url
    })
    }
    ilod = 1
    for (let i of ini_anu) {
    anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
    }
    textbv += `\n\n_Pilih media dibawah untuk mendownload_`
    let buttons = anu_list
    let buttonMessage = {
    image:log0,
    jpegThumbnail:thum,
    caption: textbv,
    footer: global.footer,
    buttons: buttons,
    headerType: 4
    }
    sock.sendMessage(from, buttonMessage, {quoted:m})
    })
    } catch (err) {
    ads(String(err))
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'igdl': case prefix+'ig': case prefix+'instagram': {
    if(!isRegistered) return sock.send5Loc(from, daftar1, daftar2, pic, butCmd2) 
    if (isBan) return ads(mess.ban)
    if (q.includes('--help')) return ads(examlink) 
    if (!args[0]) return ads('Linknya mana?')
    try{
      const options = {
        method: 'GET',
        url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
        params: {url: `${args[0]}`},
        headers: {
          'X-RapidAPI-Key': '463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d',
          'X-RapidAPI-Host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
       let linck = response.data.media
       let desksz = `Success`
      if (linck.includes("mp4")){
        sock.sendMessage(from, { video: { url : linck }, caption: desksz}, { quoted: m } )
       } else 
      if (linck.includes("jpg")){
        sock.sendMessage(from, { image: { url : linck }, caption: desksz}, { quoted: m } )
      }
      console.log(data)
     }
     )
    } catch { ads('err') }
    }
    addCmd(command.slice(1), 1, commund)
    break

    case prefix+'tt': case prefix+'ttdl': case prefix+'tiktok': case prefix+'ttmp4': case prefix+'ttmp3': case prefix+'tiktoknowm':{
        if(!isRegistered) return sock.send5Loc(from, daftar1, daftar2, pic, butCmd2) 
        if (q.includes('--help')) return reply(examlink) 
        if (!q) return reply('Linknya?')
        if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
        const options = {
          method: 'GET',
          url: 'https://download-videos-tiktok.p.rapidapi.com/tiktok',
          params: {url: `${q}`},
          headers: {
            'X-RapidAPI-Key': '463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d',
            'X-RapidAPI-Host': 'download-videos-tiktok.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
          console.log(response.data);
          const musim_duren_as = response.data.itemData.video.no_watermark.hd.url
          const musim_duren_stat = response.data.itemData.statistics
             let buttons = [
              {
               buttonId: `#ttaudio ${q}`, 
               buttonText: {
                displayText: 'Audio'
              }, type: 1},
            ]
            let buttonMessage = {
              video: { url: musim_duren_as },
              caption: `nih`,
              footer: `Tekan tombol Dibawah Untuk Menjadikan Audio\n${global.namebot}`,
              buttons: buttons,
              headerType: 4,
              contextInfo: {"externalAdReply": { title: "WHATSAPP BOT",mediaType: 3, renderLargerThumbnail: false , showAdAttribution: true, body: "🤫",jpegThumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),mediaUrl: global.linkgrupss, thumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),sourceUrl: global.linkgrupss }}}
            
             sock.sendMessage(from, buttonMessage, { quoted: m })
          //sock.sendMessage(from, { video: { url: musim_duren_as }, caption: `Nih` }, { quoted: m })
          //sock.sendMessage(from, { audio: { url: musim_duren_as }, mimetype: 'audio/mp4' }, { quoted: m }
        })
      }
      addCmd(command.slice(1), 1, commund)
      break
        case prefix+'ttaudio':{
            if(!isRegistered) return sock.send5Loc(from, daftar1, daftar2, pic, butCmd2) 
          if (args[0].includes('--help')) return ads(examlink) 
            if (!args[0]) return ads('Linknya?')
            if (!args[0].includes('tiktok')) return ads('Itu bukan link tiktok!')
            const options = {
              method: 'GET',
              url: 'https://download-videos-tiktok.p.rapidapi.com/tiktok',
              params: {url: `${q}`},
              headers: {
                'X-RapidAPI-Key': '463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d',
                'X-RapidAPI-Host': 'download-videos-tiktok.p.rapidapi.com'
              }
            };
            
            axios.request(options).then(function (response) {
              console.log(response.data);
              const musim_duren_a = response.data.itemData.video.no_watermark.hd.url
              sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4', contextInfo: {"externalAdReply": { title: "WHATSAPP BOT",mediaType: 3, renderLargerThumbnail: false , showAdAttribution: true, body: "🤫",jpegThumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),mediaUrl: global.linkgrupss, thumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),sourceUrl: global.linkgrupss }}}, { quoted: m })
             })
            }
            addCmd(command.slice(1), 1, commund)
      break
      case prefix+'unduh':
          if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        if (!q) return ads(`Penggunaan :\n*${prefix}unduh* mp4/jpg link`)
        if (!args[1]) return ads("Linknya mana kak?")
        if (args[0].toLowerCase() === 'mp4'){
            try {
                sock.sendMessage(from, {video:{url:args[1]}, caption:"Succes", contextInfo:{externalAdReply:{
                title: global.namebot,
                body:global.footer,
                thumbnail: log0,
                mediaType:2,
                mediaUrl: "https://youtu.be/TmX43Io_v8s",
                sourceUrl: "https://youtu.be/TmX43Io_v8s"
                }}}, {quoted:m})
                } catch {
                ads("Linknya Error")
                }
        } else if (args[0].toLowerCase() === 'jpeg'){
            try {
                sock.sendMessage(from, {image:{url:args[1]}, caption:"Succes", contextInfo:{externalAdReply:{
                title: global.namebot,
                body:global.footer,
                thumbnail: log0,
                mediaType:2,
                mediaUrl: "https://youtu.be/TmX43Io_v8s",
                sourceUrl: "https://youtu.be/TmX43Io_v8s"
                }}}, {quoted:m})
                } catch {
                ads("Linknya Error")
                }
        } else {
            ads(`Penggunaan :\n*${prefix}unduh* mp4/jpeg link`)}
          addCmd(command.slice(1), 1, commund)
          break
          case prefix+'play': case prefix+'ytsearch': case prefix+'ytplay':{
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            let yts = require("yt-search")
            let search = await yts(text)
            let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
            let ytvc = await hx.youtube(anu.url)
            let buttons = [
            {buttonId: `${prefix}ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
            {buttonId: `${prefix}ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
            ]
            let buttonMessage = {
            image: { url: anu.thumbnail },
            caption: `*| YOUTUBE PLAY |*
            
            ⭔ Title : ${anu.title}
            ⭔ Ext : Search
            ⭔ ID : ${anu.videoId}
            ⭔ Duration : ${anu.timestamp}
            ⭔ Viewers : ${anu.views}
            ⭔ Upload At : ${anu.ago}
            ⭔ Author : ${anu.author.name}
            ⭔ Channel : ${anu.author.url}
            ⭔ Description : ${anu.description}
            ⭔ Url : ${anu.url}`,
            footer: global.footer,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title: anu.title,
            body: global.footer,
            thumbnail: log0,
            mediaType:2,
            mediaUrl: anu.url,
            sourceUrl: anu.url
            }}
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'ytdl': case prefix+'yt': case prefix+'youtube': case prefix+'ytmp4': case prefix+'ytmp3': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
                if (isBan) return ads(mess.ban)
            if (!args[0]) return ads(mess.linkm)
            try {
            hx.youtube(args[0]).then(async(res) => {
            textyt = `*| YOUTUBE DOWNLOADER |*
            
            ⭔ Title : ${res.title}
            ⭔ Size : ${res.size}
            ⭔ Quality : ${res.quality}
            
            _Pilih video atau audio dan tunggu beberapa saat_`
            let buttons = [
            {buttonId: `${prefix}ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
            {buttonId: `${prefix}ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
            ]
            let buttonMessage = {
            image: {url:res.thumb},
            caption: textyt,
            footer: global.footer,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title: res.title,
            body: global.footer,
            thumbnail: {url:res.thumb},
            mediaType:2,
            mediaUrl: args[0],
            sourceUrl: args[0]
            }}
            }
            sock.sendMessage(from, buttonMessage, {quoted:m})
            }).catch(_ => _)
            } catch {
            ads("Linknya Error!")
            }
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'ytvd': {
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            sock.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
            title: global.namebot,
            body:global.footer,
            thumbnail: log0,
            mediaType:2,
            mediaUrl: "https://youtu.be/TmX43Io_v8s",
            sourceUrl: "https://youtu.be/TmX43Io_v8s"
            }}}, {quoted:m})
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'ytad': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            sock.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
            title: global.namebot,
            body:global.footer,
            thumbnail: log0,
            mediaType:2,
            mediaUrl: "https://youtu.be/TmX43Io_v8s",
            sourceUrl: "https://youtu.be/TmX43Io_v8s"
            }}}, {quoted:m})
            }
            addCmd(command.slice(1), 1, commund)
            break

//====================================

//===========< Group Menu >===========

case prefix+'vote': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.isGroup) return ads(mess.group)
  if (m.chat in vote) return ads(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
  if (!args.join(" ")) return ads(`Masukkan Alasan Melakukan Vote, Example: *${command} Owner Ganteng*`)
  ads(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
  vote[m.chat] = [args.join(" "), [], []]
  await sleep(1000)
  upvote = vote[m.chat][1]
  devote = vote[m.chat][2]
  teks_vote = `*「 VOTE 」*
  
  *Alasan:* ${vote[m.chat][0]}
  
  ┌〔 UPVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][1].length}
  │
  │ 
  └────
  
  ┌〔 DEVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][2].length}
  │
  │ 
  └────
  
  *${prefix}hapusvote* - untuk menghapus vote`
  let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
  ]
  
  let buttonMessageVote = {
  image: log0,
  jpegThumbnail: thum,
  caption: teks_vote,
  footer: global.footer,
  buttons: buttonsVote,
  headerType: 1
  }
  sock.sendMessage(m.chat, buttonMessageVote)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'upvote': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.isGroup) return ads(mess.group)
  if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
  isVote = vote[m.chat][1].concat(vote[m.chat][2])
  wasVote = isVote.includes(m.sender)
  if (wasVote) return ads('Kamu Sudah Vote')
  vote[m.chat][1].push(m.sender)
  menvote = vote[m.chat][1].concat(vote[m.chat][2])
  teks_vote = `*「 VOTE 」*
  
  *Alasan:* ${vote[m.chat][0]}
  
  ┌〔 UPVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][1].length}
  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  ┌〔 DEVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][2].length}
  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  *${prefix}hapusvote* - untuk menghapus vote`
  let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
  ]
  
  let buttonMessageUpvote = {
  image: log0,
  jpegThumbnail: thum,
  caption: teks_vote,
  footer: global.footer,
  buttons: buttonsUpvote,
  headerType: 1,
  mentions: menvote
  }
  sock.sendMessage(m.chat, buttonMessageUpvote)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'devote': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.isGroup) return ads(mess.group)
  if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
  isVote = vote[m.chat][1].concat(vote[m.chat][2])
  wasVote = isVote.includes(m.sender)
  if (wasVote) return ads('Kamu Sudah Vote')
  vote[m.chat][2].push(m.sender)
  menvote = vote[m.chat][1].concat(vote[m.chat][2])
  teks_vote = `*「 VOTE 」*
  
  *Alasan:* ${vote[m.chat][0]}
  
  ┌〔 UPVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][1].length}
  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  ┌〔 DEVOTE 〕
  │ 
  ├ Total: ${vote[m.chat][2].length}
  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  *${prefix}hapusvote* - untuk menghapus vote`
  let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
  ]
  
  let buttonMessageDevote = {
  image: log0,
  jpegThumbnail: thum,
  caption: teks_vote,
  footer: global.footer,
  buttons: buttonsDevote,
  headerType: 1,
  mentions: menvote
  }
  sock.sendMessage(m.chat, buttonMessageDevote)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'cekvote': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.isGroup) return ads(mess.group)
  if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
  teks_vote = `*「 VOTE 」*
  
  *Alasan:* ${vote[m.chat][0]}
  
  ┌〔 UPVOTE 〕
  │ 
  ├ Total: ${upvote.length}
  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  ┌〔 DEVOTE 〕
  │ 
  ├ Total: ${devote.length}
  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
  │ 
  └────
  
  *${prefix}hapusvote* - untuk menghapus vote
  
  
  ©${sock.user.id}
  `
  sock.sendTextWithMentions(m.chat, teks_vote, m)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'welcome': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
    if (args[0] === "on") {
    if (welcm) return ads('Sudah Aktif')
    wlcm.push(from)
    ads('Succes menyalakan welcome di group ini')
    } else if (args[0] === "off") {
    if (!welcm) return ads('Sudah Mati')
    let off = wlcm.indexOf(from)
    wlcm.splice(off, 1)
    ads('Succes mematikan welcome di group ini')
    } else {
    ads('on untuk mengaktifkan, off untuk menonaktifkan')
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'autorevoke': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
    if (args[0] === "on") {
    if (GcRvk) return ads('Sudah Aktif')
    gcrevoke.push(from)
    ads('Succes menyalakan autorevoke di group ini')
    } else if (args[0] === "off") {
    if (!GcRvk) return ads('Sudah Mati')
    let off = wlcm.indexOf(from)
    gcrevoke.splice(off, 1)
    ads('Succes mematikan autorevoke di group ini')
    } else {
    ads('on untuk mengaktifkan, off untuk menonaktifkan')
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'antilink': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
    if (args[0] === "on") {
    if (AntiLink) return ads('Sudah Aktif')
    ntilink.push(from)
    ads('Succes menyalakan antilink di group ini')
    var groupe = await sock.groupMetadata(from)
    var members = groupe['participants']
    var mems = []
    members.map(async adm => {
    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
    })
    sock.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
    } else if (args[0] === "off") {
    if (!AntiLink) return ads('Sudah Mati')
    let off = ntilink.indexOf(from)
    ntilink.splice(off, 1)
    ads('Succes mematikan antilink di group ini')
    } else {
    ads('on untuk mengaktifkan, off untuk menonaktifkan')
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'listonline': case prefix+'listaktif': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    let liston = 1
    sock.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'setname': case prefix+'setsubject': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (!text) return ads('Text ?')
    await sock.groupUpdateSubject(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'setdesc': case prefix+'setdesk': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (!text) return ads('Text ?')
    await sock.groupUpdateDescription(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
    ads(mess.success)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tagall': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    let teks = `══✪〘 *👥 Tag All* 〙✪══
     
     ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
    for (let mem of participants) {
    teks += `⭔ @${mem.id.split('@')[0]}\n`
    }
    sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'hidetag': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    sock.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'linkgroup': case prefix+'linkgc': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    let response = await sock.groupInviteCode(m.chat)
    sock.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
    mimetype: "image/jpeg",
    text: global.fake,
    "forwardingScore": 1000000000,
    isForwarded: true,
    sendEphemeral: true,
    "externalAdReply": {
    "title": global.fake,
    "body": `Subscribe To Channel YouTube ${global.nameyt}`,
    "previewType": "PHOTO",
    "thumbnailUrl": thum,
    "thumbnail": thum,
    "sourceUrl": "https://youtu.be/TmX43Io_v8s"
    }}}, { quoted: m, detectLink: true })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'revoke': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    sock.groupRevokeInvite(m.chat)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'ephemeral': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (!args[0]) return ads('Masukkan value enable/disable')
    if (args[0] === 'enable') {
    await sock.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
    } else if (args[0] === 'disable') {
    await sock.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'editinfo': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (args[0] === 'open'){
    await sock.groupSettingUpdate(m.chat, 'unlocked').then((res) => ads(`Sukses Membuka Edit Info Group`)).catch((err) => ads(jsonformat(err)))
    } else if (args[0] === 'close'){
    await sock.groupSettingUpdate(m.chat, 'locked').then((res) => ads(`Sukses Menutup Edit Info Group`)).catch((err) => ads(jsonformat(err)))
    } else {
    let buttons = [
    { buttonid: '##editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
    { buttonid: '##editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    let buttonMessage = {
    image: log0,
    jpegThumbnail: thum,
    caption: `*「 ${global.nameyt} 」*\n\nChange Info, Select Open Or Close`,
    footer: global.footer,
    buttons: buttons,
    headerType: 4
    }
    sock.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'group': case prefix+'grup': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    if (args[0] === 'close'){
    await sock.groupSettingUpdate(m.chat, 'announcement').then((res) => ads(`Sukses Menutup Group`)).catch((err) => ads(jsonformat(err)))
    } else if (args[0] === 'open'){
    await sock.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ads(`Sukses Membuka Group`)).catch((err) => ads(jsonformat(err)))
    } else {
    let buttons = [
    { buttonid: '##group open', buttonText: { displayText: 'Open' }, type: 1 },
    { buttonid: '##group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    let buttonMessage = {
    image: log0,
    jpegThumbnail: thum,
    caption: `*「 ${global.namebot}」*\n\nChange Group Setting, Select Open Or Close`,
    footer: global.footer,
    buttons: buttons,
    headerType: 4
    }
    sock.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'promote': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => ads(jsonformat('Success'))).catch((err) => ads(jsonformat('Error')))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'demote': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => ads(jsonformat('Success'))).catch((err) => ads(jsonformat('Error')))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'kick': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ads(jsonformat('Success'))).catch((err) => ads(jsonformat('Error')))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'add': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.isGroup) return ads(mess.group)
    if (!isBotAdmins) return ads(mess.botAdmin)
    if (!isAdmins && !isCreator) return ads(mess.admin)
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => ads(jsonformat('Success'))).catch((err) => ads(jsonformat('Error')))
    }
    addCmd(command.slice(1), 1, commund)
    break

//===================================

//=========< TextPro Menu >==========

case prefix+'textmaker': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (args.length < 1) return ads(`Example :\n${command} <name>`)
    if (args[0] === 'glitch') {
    if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
    let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
    sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
    } else if (args[0] === 'glow') {
    if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
    let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
    sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
    } else {
    ads(`*List Text Maker :*\n•> glitch\n•> glow`)
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
case prefix+'glitch3':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'3dbox':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break


case prefix+'drapwater':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
    .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'lion2':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if(!q) return ads(`Penggunaan ${command} teks`)
  ads(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
     .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'papercut':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'transformer':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
   

case prefix+'herryp':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
       if(!q) return ads(`Penggunaan ${command} teks|teks`)
       ads(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
 .catch((err) => console.log(err));
 addCmd(command.slice(1), 1, commund)
break


case prefix+'neondevil':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'3dstone':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'3davengers':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'thunder':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'window':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'graffiti':
   case prefix+'grafiti':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pornhub':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'blackpink':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'glitch':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch2':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch3':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dspace':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'lion':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dneon':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neon':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'greenneon':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   
  
case prefix+'bokeh':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   

case prefix+'hollographic':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'bear':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'wolf':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break




case prefix+'joker':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'dropwater':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neonlight':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'natural':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'carbon':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pencil':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
  
 
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
 case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
 case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'leaves': 
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})         
    if (!q) return ads(`Example : ${command} AKA`) 
             ads(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                sock.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
             addCmd(command.slice(1), 1, commund)
break

//===================================

//========< Sticker Maker Tele >=========

case prefix+'emojimix2': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return m.reply(mess.ban)
    if (!args.join(" ")) return m.reply(`Example : ${command} 😅`)
    try {
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
    for (let res of anu.results) {
    let encmedia = await sock.sendImageAsSticker(sender, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
    }
    m.reply('Liat Private chat bot untuk melihat hasil') 
    } catch {
    m.reply("Tidak ditemukan!")
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'emojimix': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (!q) throw `*Example :* ${command} 😅+🤔`
    let [emoji1, emoji2] = q.split`+`
    let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of kuntuh.results) {
    let encmedia = await sock.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'emoji': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        if (isBan) return ads(mess.ban)
        if (!args.join(" ")) return ads('emojinya?')
        emoji.get(args.join(" ")).then(async(emoji) => {
        let mese = await sock.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
        await sock.sendMessage(from, {text:"s"}, {quoted:mese})
        })
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'attp': {
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
        sock.sendMessage(from, { sticker : buff}) 
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'gura':
        case prefix+'gurastick':{
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'gura':
        case prefix+'gurastick':{
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'doge':
        case prefix+'dogestick':{
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'bucinstick':
        case prefix+'bucinp' :{
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
        }
        addCmd(command.slice(1), 1, commund)
        break
        case prefix+'patrik':
        case prefix+'patrick': {
            if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
        var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
        var wifegerak = ano.split('\n')
        var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
        await fs.unlinkSync(encmedia)
        }
        addCmd(command.slice(1), 1, commund)
        break

//===================================

//=========< Convert Menu >==========

case prefix+'swm': case prefix+'stickerwm': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!args.join(" ")) return ads(`Example :\nswm AKAFBot ~ Aka | AKA`)
    const swn = args.join(" ")
    const pcknm = swn.split("|")[0];
    const atnm = swn.split("|")[1];
    if (m.quoted.isAnimated === true) {
    sock.downloadAndSaveMediaMessage(quoted, "gifee")
    sock.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
    } else if (/image/.test(mime)) {
    let media = await quoted.download()
    let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
    await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
    let media = await quoted.download()
    let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
    await fs.unlinkSync(encmedia)
    } else {
    ads(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'smeme': case prefix+'smm': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!args.join(" ")) return ads("Masukan Textnya!")
    if (/image/.test(mime)) {
    var media = await sock.downloadAndSaveMediaMessage(quoted, "smeme")
    imgbbUploader('b9a90f1e63f41bac31532712c87e4c25', media)
    .then(async (data) => {
    var bgsd = args.join(" ")
    var urls = data.display_url
    let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
    sock.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
    })
    .catch(err => {
    throw err
    })
    } else {
    ads("Kirim foto dengan caption smeme")
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'sticker': case prefix+'s': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (/image/.test(mime)) {
    let media = await quoted.download()
    let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
    await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
    let media = await quoted.download()
    let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
    await fs.unlinkSync(encmedia)
    } else {
    ads(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'toimage': case prefix+'toimg': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.quoted) return ads('Reply Image')
    if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
    ads(mess.wait)
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    let ran = await getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) throw err
    let buffer = fs.readFileSync(ran)
    sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
    fs.unlinkSync(ran)
    })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tomp4': case prefix+'tovideo': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.quoted) return ads('Reply Image')
    if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
    ads(mess.wait)
    let { webp2mp4File } = require('./lib/scrape/uploader')
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
    await fs.unlinkSync(media)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'toaud': case prefix+'toaudio': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
    if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
    ads(mess.wait)
    let media = await quoted.download()
    let { toAudio } = require('./lib/converter')
    let audio = await toAudio(media, 'mp4')
    sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tomp3': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (/document/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
    if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
    if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
    ads(mess.wait)
    let media = await quoted.download()
    let { toAudio } = require('./lib/converter')
    let audio = await toAudio(media, 'mp4')
    sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name} (${m.id}).mp3`}, { quoted : m })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tovn': case prefix+'toptt': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
    if (!m.quoted) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
    ads(mess.wait)
    let media = await quoted.download()
    let { toPTT } = require('./lib/converter')
    let audio = await toPTT(media, 'mp4')
    sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'togif': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.quoted) return ads('Reply Image')
    if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
    ads(mess.wait)
    let { webp2mp4File } = require('./lib/scrape/uploader')
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
    await fs.unlinkSync(media)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tourl': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    ads(mess.wait)
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/scrape/uploader')
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    ads(util.format(anu))
    } else if (!/image/.test(mime)) {
    let anu = await TelegraPh(media)
    ads(util.format(anu))
    }
    await fs.unlinkSync(media)
    }
    addCmd(command.slice(1), 1, commund)
    break

//===================================

//=========< Search Menu >==========

        
            case prefix+'google': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args[0]) return ads(`Example: ${command} <query>\nUses : ${command} apa arti cinta`)
            let google = require('google-it')
            google({'query': args.join(" ")}).then(res => {
            let teks = `Google Search From : ${text}\n\n`
            for (let g of res) {
            teks += `⭔ *Title* : ${g.title}\n`
            teks += `⭔ *Description* : ${g.snippet}\n`
            teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
            } 
            ads(teks)
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'pinterest': case prefix+'image': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args.join(" ")) return ads("Mau cari gambar apa kak?")
            try {
            hx.pinterest(args.join(" ")).then(async(res) => {
            imgnyee = res[Math.floor(Math.random() * res.length)]
            let buttons = [
            {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
            ]
            let buttonMessage = {
            image: { url: imgnyee },
            caption:  '⭔ Title : ' + args.join(" ") + '\n⭔ Media Url : '+imgnyee,
            footer: global.footer,
            buttons: buttons,
            headerType: 4,
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            }).catch(_ => _)
            } catch {
            ads("Error")
            }
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'gimage': case prefix+'gig': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args[0]) return ads("Mau cari gambar apa kak?")
            let gis = require('g-i-s')
            gis(args.join(" "), async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            let buttons = [
            button = {Id: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
            ]
            let buttonMessage = {
            image: { url: images },
            caption: `*| GOOGLE IMAGE |*
            
            🤠 Query : ${text}
            🔗 Media Url : ${images}`,
            footer: global.footer,
            buttons: buttons,
            headerType: 4,
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'mcserver': case prefix+'mcquery': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args.join(" ")) return ads(`Example : \n${command} ip|port\nUses : \n${command} play.zacksock.com|19132`)
            const Query = require("minecraft-query");
            
            const qury = args.join(" ")
            const iphost = qury.split("|")[0];
            const portnya = qury.split("|")[1];
            
            if (!iphost) return ads("ipnya mana kak?")
            if (!portnya) return ads("portnya mana kak?")
            
            const q = new Query({host: iphost, port: portnya, timeout: 7500});
            
            q.fullStat()
            .then(success => {
            ads(jsonformat(success));
            return q.basicStat()
            })
            .then(success => {
            ads(jsonformat(success));
            q.close();
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'mcpedl': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args.join(" ")) return ads(`Example : ${command} shader`)
            yogipw.mcpedl(args.join(" ")).then(async(res) => {
            teks = `*| MCPEDL SEARCH |*`
            for (let i of res) {
            teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
            }
            let buttons = [
            {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
            ]
            let buttonMessage = {
            image: log0,
            jpegThumbnail: thum,
            caption: teks,
            footer: global.footer,
            buttons: buttons,
            headerType: 4
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'happymod': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args.join(" ")) return ads(`Example : ${command} mobile legend`)
            yogipw.happymod(args.join(" ")).then(async(res) => {
            teks = '```「 HappyMod Search 」```'
            for (let i of res) {
            teks += `\n\n${i.name}\n`
            teks += `${i.link}`
            }
            let buttons = [
            {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
            ]
            let buttonMessage = {
            image: {url:res[0].icon},
            jpegThumbnail: thum,
            caption: teks,
            footer: global.footer,
            buttons: buttons,
            headerType: 4
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'searchgc': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (args.length < 1) return ads(`Example :\n${prefix}searchgc Editor Berkelas`)
            nae = args.join(" ")
            hx.linkwa(nae).then(res => {
            teks = '```「 Search Group 」```'
            for (let i of res) {
            teks += `\n\n•> Group Whatsapp :\n`
            teks += `${i.link}\n`
            teks += `${i.nama}`
            }
            let buttons = [
            {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
            ]
            let buttonMessage = {
            image: log0,
            jpegThumbnail: thum,
            caption: teks,
            footer: global.footer,
            buttons: buttons,
            headerType: 4
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'servermc': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            yogipw.servermc().then(async(res) => {
            let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
            let no = 1
            for (let i of res) {
            teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
            }
            let buttons = [
            {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
            ]
            let buttonMessage = {
            image: log0,
            jpegThumbnail: thum,
            caption: teks,
            footer: global.footer,
            buttons: buttons,
            headerType: 4
            }
            sock.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            addCmd(command.slice(1), 1, commund)
            break
            case prefix+'yts': case prefix+'ytsearch': {
                if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (isBan) return ads(mess.ban)
            if (!args.join(" ")) return ads(`Example : ${command} dj 30 detik`)
            let yts = require("yt-search")
            let search = await yts(args.join(" "))
            let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
            let no = 1
            for (let i of search.all) {
            teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
            }
            sock.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            addCmd(command.slice(1), 1, commund)
            break

//==================================

//==========< Store Menu >==========
//==================================

//==========< Anime Menu >==========

case prefix+'waifu': case prefix+'megumin': case prefix+'shinobu': case prefix+'awoo': case prefix+'neko': case prefix+'bully': case prefix+'cuddle': case prefix+'hug': case prefix+'cry': case prefix+'kiss': case prefix+'lick': case prefix+'pat': case prefix+'bonk': case prefix+'yeet': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    m.reply(`Tunggu`) 
    let link
    if (/waifu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/waifu`)
    if (/neko/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/neko`)
    if (/awoo/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/awoo`)
    if (/megumin/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/megumin`)
    if (/shinobu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/shinobu`)
    if (/bully/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bully`)
    if (/cuddle/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cuddle`)
    if (/hug/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/hug`)
    if (/cry/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cry`)
    if (/kiss/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/kiss`)
    if (/lick/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/lick`)
    if (/pat/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/pat`)
    if (/bonk/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bonk`)
    if (/yeet/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/yeet`)
    let buttons = [ { buttonId: `${command}`,  buttonText: { displayText: 'Next' }, type: 1}, ]
    let buttonMessage = { image: { url: heriWibu.url }, caption: global.resultwibu, footer: global.footer,buttons: buttons, headerType: 4}
    sock.sendMessage(from, buttonMessage, { quoted: m }) } 
    addCmd(command.slice(1), 1, commund)
    break

//==================================

//===========< Fun Menu >===========

case prefix+'tebakkabupaten':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung") 
  
     
     let datta = tebakkabupaten
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.title
     let gambar = data.url
     let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s`
     _tebakkabupaten[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
    sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
     await sleep(_tebakkabupaten[m.sender.split('@')[0]].time)
     if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebakkabupaten[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
   case prefix+'tebakanime':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
  
     
     let datta = tebakanime
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.jawaban
     let gambar = data.image
     let japan = data.name_jp
     let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
     _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
    sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
     await sleep(_tebakanime[m.sender.split('@')[0]].time)
     if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebakanime[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
   case prefix+'tebakbendera':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
  
     
     /*
     / 1000 = 1 detik
     / 60000 = 1 menit
     >_tebakbendera
     */
     let datta = tebakbendera
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.name
     let gambar = data.img
     let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s`
     _tebakbendera[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
    sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
     await sleep(_tebakbendera[m.sender.split('@')[0]].time)
     if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebakbendera[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tebaklagu':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta =  tebaklagu
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.title
     let soal = data.artists
     let songs = data.songs
     let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s`
     _tebaklagu[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
  sock.sendMessage(from, { text : teks}, { quoted: m })
  await sock.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
    await sleep(_tebaklagu[m.sender.split('@')[0]].time)
     if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebaklagu[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tebaklirik':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta =  tebaklirik
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.jawaban
     let soal = data.soal
     let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
     _tebaklirik[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
    sock.sendMessage(from, { text : teks}, { quoted: m })
     await sleep(_tebaklirik[m.sender.split('@')[0]].time)
     if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebaklirik[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tebakkalimat':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta = tebakkalimat
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.jawaban
     let soal = data.soal
     let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
     let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
     _tebakkalimat[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
    sock.sendMessage(from, { text : teks}, { quoted: m })
     await sleep(_tebakkalimat[m.sender.split('@')[0]].time)
     if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tebakkalimat[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'susunkata':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta = susunkata
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.jawaban
     let soal = data.soal
     let tipe = data.tipe
     let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s`
     _susunkata[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
    sock.sendMessage(from, { text : teks}, { quoted: m })
     await sleep(_susunkata[m.sender.split('@')[0]].time)
     if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _susunkata[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'asahotak':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
   if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta = asahotak
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.jawaban
     let soal = data.soal
     let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s`
     _asahotak[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
    fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
    sock.sendMessage(from, { text : teks}, { quoted: m })
     await sleep(_asahotak[m.sender.split('@')[0]].time)
     if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _asahotak[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tebakkimia':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  
   if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
     
     let datta = tebakkimia
     let jsonData = JSON.parse(datta);
     let xm = Math.floor(Math.random() * jsonData.length);
     let data = jsonData[xm];
     console.log(data)//hasil di tampilkan di cmd
     let jawaban = data.lambang
     let unsur = data.unsur
     let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${waktu}s`
     sock.sendMessage(from, { text : teks}, { quoted: m }).then(() => {
     _tbkkimia[sender.split('@')[0]] = jawaban.toLowerCase()
     fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
  })
     await sleep(30000)
     if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) {
        sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
  { quoted : m }) 
        delete _tbkkimia[m.sender.split('@')[0]]
        fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
   
      }
   }
   addCmd(command.slice(1), 1, commund)
  break
case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.quoted && !args.join(" ")) return ads(`Kirim/reply text dengan caption ${command}`)
    ter = command[1].toLowerCase()
    tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
    ads(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return ads('Kamu masih didalam game')
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
    if (room) {
    ads('Partner ditemukan!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    let str = `Room ID: ${room.id}
    
    ${arr.slice(0, 3).join('')}
    ${arr.slice(3, 6).join('')}
    ${arr.slice(6).join('')}
    
    Menunggu @${room.game.currentTurn.split('@')[0]}
    
    Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
    } else {
    room = {
    id: '#tictactoe-' + (+new Date),
    x: m.chat,
    o: '',
    game: new TicTacToe(m.sender, 'o'),
    state: 'WAITING'
    }
    if (args.join(" ")) room.name = args.join(" ")
    ads('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${command} ${args.join(" ")}` : ''))
    this.game[room.id] = room
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'delttc': case prefix+'delttt': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    this.game = this.game ? this.game : {}
    try {
    if (this.game) {
    delete this.game
    sock.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
    } else if (!this.game) {
    ads(`Session TicTacToe🎮 tidak ada`)
    } else throw '?'
    } catch (e) {
    ads('rusak')
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'caklontong':{
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
     if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
       
       let datta = caklontong
       let jsonData = JSON.parse(datta);
       let xm = Math.floor(Math.random() * jsonData.length);
       let data = jsonData[xm];
       console.log(data)//hasil di tampilkan di cmd
       let jawaban = data.jawaban
       let soal = data.soal
       let desk = data.deskripsi
       let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
       _caklontong[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
      fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
      sock.sendMessage(from, { text : teks}, { quoted: m })
       await sleep(_caklontong[m.sender.split('@')[0]].time)
       if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) {
          sock.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [m.sender] },
    { quoted : m }) 
          delete _caklontong[m.sender.split('@')[0]]
          fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
     
        }
     }
     addCmd(command.slice(1), 1, commund)
    break
    case prefix+'suitpvp': case prefix+'suit': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    this.suit = this.suit ? this.suit : {}
    let poin = 10
    let poin_lose = 10
    let timeout = 60000
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) ads(`Selesaikan suit mu yang sebelumnya`)
    if (m.mentionedJid[0] === m.sender) return ads(`Tidak bisa bermain dengan diri sendiri !`)
    if (!m.mentionedJid[0]) return ads(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
    let id = 'suit_' + new Date() * 1
    let caption = `_*SUIT PvP*_
    
    @${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
    
    Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
    this.suit[id] = {
    chat: await sock.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
    if (this.suit[id]) sock.sendText(m.chat, `_Waktu suit habis_`, m)
    delete this.suit[id]
    }, 60000), poin, poin_lose, timeout
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'family100': {
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if ('family100'+m.chat in _family100) {
    ads('Masih Ada Sesi Yang Belum Diselesaikan!')
    throw false
    }
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
    _family100['family100'+m.chat] = {
    id: '#family100'+m.chat,
    pesan: await sock.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'tekateki':{
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
     if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
       
       let datta = tekateki
       let jsonData = JSON.parse(datta);
       let xm = Math.floor(Math.random() * jsonData.length);
       let data = jsonData[xm];
       console.log(data)//hasil di tampilkan di cmd
       let jawaban = data.jawaban
       let soal = data.soal
       let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
       _tekateki[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
      fs.writeFileSync("./worker/src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
      sock.sendMessage(from, { text : teks}, { quoted: m })
       await sleep(_tekateki[m.sender.split('@')[0]].time)
       if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) {
          sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
    { quoted : m }) 
          delete _tekateki[m.sender.split('@')[0]]
          fs.writeFileSync("./worker/src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
     
        }
     }
     addCmd(command.slice(1), 1, commund)
    break

//==================================

//=========< Tools Menu >===========

case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ads(mess.wait)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ads(err)
                let buff = fs.readFileSync(ran)
                sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', contextInfo: {"externalAdReply": { title: "WHATSAPP BOT",mediaType: 3, renderLargerThumbnail: false , showAdAttribution: true, body: "🤫",jpegThumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),mediaUrl: global.linkgrupss, thumbnail: fs.readFileSync('./worker/media/image/randomMenu/wpmobile.png'),sourceUrl: global.linkgrupss }} }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else ads(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                ads(e)
                }
                addCmd(command.slice(1), 1, commund)
break
case prefix+'nulis': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}nulis AKA|91|#ff020a|Manusia terganteng adalah AKA`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await ads('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return ads("Jumlah teks kelas maximal 4")
if (nams.length > 34) return ads("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return ads("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => ads('Error') )
.on('exit', () => {
sock.sendMessage(from, {image:fs.readFileSync('./worker/storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => ads('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'kalkulator': case prefix+'kal': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
ads('Error')
} else {
ads(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'join': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return ads("Link invalid!")
if (isCreator) {
await sock.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
sock.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./worker/media/image/Deff.jpg'), 2022, "AKA~MD", "6289501060783@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await sock.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
ads("Error")
}
}).catch(_ => _)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'infochat': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (isBan) return ads(mess.ban)
if (!m.quoted) ads('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getidgc':
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
addCmd(command.slice(1), 1, commund)
break 

//==================================

//=========< Owner Menu >===========

case prefix+'mute':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
               if (!m.isGroup) return ads('Khusus Grup')
               if (!isAdmins) return ads('Khusus Admin')
               if (args.length < 1) return ads(`${command }enable/disable`)
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return ads(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./worker/src/mute.json', JSON.stringify(mute))
               ads(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./worker/src/mute.json', JSON.stringify(mute))
               ads(`*...:* *MUTE OFF* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya`)
               } else {
               ads(`Pilih enable atau disable`)
}
               addCmd(command.slice(1), 1, commund)
break
case prefix+"modeprefix":
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (!isCreator) return ads('Khusus Owner') 
        if (!args.length) return ads(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          oneprefix = false;
          ads("berhasil mengubah ke multi prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          oneprefix = true;
          ads(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          ads("pilih multi, atau oneprefix")
        }
        addCmd(command.slice(1), 1, commund)
break
        case prefix+"setprefix":
if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
          if (!q) return ads("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbott':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (quoted) {
                var media = await sock.downloadAndSaveMediaMessage(quoted)
                if (args[1] == '\'panjang\'') {
                    var { img } = await generateProfilePicture(media)
                    await sock.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type:'set', 
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
					    ]
                    })
					fs.unlinkSync(media)
					ads(`Sukses`)
				} else {
					var data = await sock.updateProfilePicture(botNumber, { url: media })
			        fs.unlinkSync(media)
				    ads(`Sukses`)
				}
            } else {
                ads(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
            }
            addCmd(command.slice(1), 1, commund)
break
case prefix+'list':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: 'Silahkan Pilih Produk Nya',
                buttonText: 'Click Here!',
                footer: 'My list', 
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            sock.sendMessage(from, listMsg)
addCmd(command.slice(1), 1, commund)
break
        case prefix+'addlist':
          if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./lib/scrape/uploader')
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        addResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }
            addCmd(command.slice(1), 1, commund)
break
        case prefix+'dellist':
          if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!q) return m.reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${q}*`)
            addCmd(command.slice(1), 1, commund)
break
        case prefix+'updatelist': 
        if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        updateResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        m.reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses update respon list dengan key *${args1}*`)
            }
            addCmd(command.slice(1), 1, commund)
break
case prefix+'getcase':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (!isCreator) return m.reply(mess.owner)
const getCase = (cases) => {
return "case prefix+"+`'${cases}'`+fs.readFileSync("worker/command.js").toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
}
ads(`${getCase(q)}`)
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewa':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (!isCreator) return m.reply('Khusus Owner') 
if (!q) return ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
ads(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./worker/src/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewalist': 
case prefix+'listsewa':
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
ads(txtnyee)
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewacheck':
case prefix+'ceksewa': 
if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
if (!m.isGroup) return ads('khusus Grup')
if (!isSewa) return ads(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
ads(sewanya)
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbot': {
  if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
                if (!isCreator) return ads(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                addCmd(command.slice(1), 1, commund)
break
case prefix+'public': {
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    sock.public = true
    ads('Sukse Change To Public Usage')
    sock.setStatus(`Mode : Public`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'self': {
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    sock.public = false
    ads('Sukses Change To Self Usage')
    sock.setStatus(`Mode : Self`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'bcgc': case prefix+'bcgroup': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${command}  ${global.nameyt}`)
    let getGroups = await sock.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    ads(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
    for (let i of anu) {
    await sleep(1500)
    let btn = [{
    urlButton: {
    displayText: 'Source Code',
    url: 'https://github.com/'
    }
    }, {
    urlButton: {
    displayText: 'Group Whatsapp',
    url: linkgrupss
    }
    }, {
    quickReplyButton: {
    displayText: 'Status Bot',
    id: '#ping'
    }
    }, {
    quickReplyButton: {
    displayText: 'Contact Owner',
    id: '#owner'
    }  
    }, {
    quickReplyButton: {
    displayText: 'Script',
    id: '#sc'
    }
    }]
    let txt = `*「 Broadcast」*\n\n${text}`
    sock.send5ButImg(i, txt, global.footer, log0, btn, thum)
    }
    ads(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${command}  ${global.nameyt}`)
    let anu = await store.chats.all().map(v => v.id)
    ads(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
    for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
    urlButton: {
    displayText: 'Source Code',
    url: 'https://github.com/'
    }
    }, {
    urlButton: {
    displayText: 'Group Whatsapp',
    url: linkgrupss
    }
    }, {
    quickReplyButton: {
    displayText: 'Status Bot',
    id: '#ping'
    }
    }, {
    quickReplyButton: {
    displayText: 'Contact Owner',
    id: '#owner'
    }  
    }, {
    quickReplyButton: {
    displayText: 'Script',
    id: '#sc'
    }
    }]
    let txt = `*「 Broadcast」*\n\n${text}`
    sock.send5ButImg(yoi, txt, global.footer, log0, btn, thum)
    }
    ads('Sukses Broadcast')
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'chat': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (!isCreator) return ads(mess.owner)
    if (!args.join(" ")) return ads(`Example :\n${command} 62813xxxx|Woi`)
    const cpes = args.join(" ")
    const nony = cpes.split("|")[0];
    const pesny = cpes.split("|")[1];
    lolh = `*| CHAT FITUR |*
    
    Pesan dari admin bot
    Nomor : @${m.sender.split("@")[0]}
    Pesan : ${pesny}`
    sock.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
    }
    await ads("Succes")
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'cowner': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    if (!args[0]) return ads(`Pilih add atau del`)
    if (args[1]) {
    orgnye = args[1]
    } else if (m.quoted) {
    orgnye = m.quoted.sender.split("@")[0]
    }
    const isCwner = owner.includes(orgnye)
    if (args[0] === "add") {
    if (isCwner) return ads('User sudah menjadi owner')
    owner.push(orgnye)
    ads(`Succes add friends`)
    } else if (args[0] === "del") {
    if (!isCwner) return ads('User bukan owner')
    let delcwner = owner.indexOf(orgnye)
    owner.splice(delcwner, 1)
    ads(`Succes del friends`)
    } else {
    ads("Error")
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'ban': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (!isCreator) return ads(mess.owner)
    if (!args[0]) return ads(`Pilih add atau del`)
    if (args[1]) {
    orgnye = args[1] + "@s.whatsapp.net"
    } else if (m.quoted) {
    orgnye = m.quoted.sender
    }
    const isBane = banUser.includes(orgnye)
    if (args[0] === "add") {
    if (isBane) return ads('User sudah dibanned')
    banUser.push(orgnye)
    ads(`Succes ban`)
    } else if (args[0] === "del") {
    if (!isBane) return ads('User tidak dibanned')
    let delbans = banUser.indexOf(orgnye)
    banUser.splice(delbans, 1)
    ads(`Succes delban`)
    } else {
    ads("Error")
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'antitag': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return
    if (args.length < 1) return ads(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
    if (args[0] === 'on') {
    if (antitags === true) return
    global.antitags = true
    ads(`Berhasil mengaktifkan antitag!`)
    } else if (args[0] === 'off') {
    if (antitags === false) return
    global.antitags = false
    ads(`Berhasil menonaktifkan antitag!`)
    } else {
    ads('Pilih on atau off')
    }
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'setppbot': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
    let media = await sock.downloadAndSaveMediaMessage(quoted)
    await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
    ads(mess.success)
    }
    addCmd(command.slice(1), 1, commund)
    break

//==================================

//========< Storage Menu >==========

case prefix+'setcmd': {
    if (isBan) return ads(mess.ban)
    if (!m.quoted) return ads('Reply Pesan!')
    if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
    if (!args.join(" ")) return ads(`Untuk Command Apa?`)
    let hash = m.quoted.fileSha256.toString('base64')
    if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to change this sticker command')
    global.db.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: m.sender,
    at: + new Date,
    locked: false,
    }
    ads(`Done!`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'delcmd': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    let hash = m.quoted.fileSha256.toString('base64')
    if (!hash) return ads(`Tidak ada hash`)
    if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to delete this sticker command')
    delete global.db.sticker[hash]
    ads(`Done!`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'listcmd': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    let teks = `
    *List Hash*
    Info: *bold* hash is Locked
    ${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
    `.trim()
    sock.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'lockcmd': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!isCreator) return ads(mess.owner)
    if (!m.quoted) return ads('Reply Pesan!')
    if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
    let hash = m.quoted.fileSha256.toString('base64')
    if (!(hash in global.db.sticker)) return ads('Hash not found in database')
    global.db.sticker[hash].locked = !/^un/i.test(command)
    ads('Done!')
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'addmsg': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!m.quoted) return ads('Reply Message Yang Ingin Disave Di Database')
    if (!args.join(" ")) return ads(`Example : ${command} nama file`)
    let msgs = global.db.database
    if (text.toLowerCase() in msgs) return ads(`'${args.join(" ")}' telah terdaftar di list pesan`)
    msgs[text.toLowerCase()] = quoted.fakeObj
    ads(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
        
    Akses dengan ${prefix}getmsg ${args.join(" ")}
    
    Lihat list Pesan Dengan ${prefix}listmsg`)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'getmsg': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return ads(mess.ban)
    if (!args.join(" ")) return ads(`Example : ${command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
    let msgs = global.db.database
    if (!(text.toLowerCase() in msgs)) return ads(`'${args.join(" ")}' tidak terdaftar di list pesan`)
    sock.copyNForward(m.chat, msgs[text.toLowerCase()], true)
    }
    addCmd(command.slice(1), 1, commund)
    break
    case prefix+'listmsg': {
      if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (isBan) return m.reply(mess.ban)
    try {
    let msgs = JSON.parse(fs.readFileSync('./worker/src/database.json'))
    let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
    listMsgs = []
    for (let i of seplit) {
    listMsgs.push({
    title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
    }
    const sections = [
    {
    title: "Total Message " + seplit.length,
    rows: listMsgs
    }
    ]
    
    const listMessage = {
    text: "ketuk button dibawah untuk melihat daftar list respon message, ketuk lagi untuk menjalankan fiturnya",
    footer: global.footer,
    title: "     「 List Respon Message 」",
    buttonText: "List Message",
    sections
    }
    sock.sendMessage(from, listMessage, {quoted:m})
    } catch {
    m.reply(`Belum ada respon message yang ditambahkan dalam list`)
    }
    }
    addCmd(command.slice(1), 1, commund)
    break

//==================================

//========< Other Menu >============

case prefix+'whatmusic':{ //Ngambil Dari mans :v
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  let media = await quoted.download()
  let res = await Ikyy.search.whatmusic(media)
  reply(`${res.title ? "» Title : " + res.title + "\n" : ""}${res.artists ? "» Artists : " + res.artists + "\n" : ""}${res.album ? "» Album : " + res.album + "\n" : ""}${res.duration ? "» Duration : " + res.duration + "\n" : ""}${res.release ? "» Release : " + res.release + "\n" : ""}${res.genre_music ? "» Genre : " + res.genre_music + "\n" : ""}${res.sumber ? "» Sumber : " + res.sumber + "\n" : ""} ${res.message ? "» Message : " + res.message : ""}`)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'expand': { //Fungsinya untuk mengubah link short menjadi link original seperti link bitly 
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    if (!q) return reply(`Example : ${command} link url`) 
  exp = await hikki.tools.expandedUrl(q)
  reply(exp) }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tinyurl': 
  request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
  try {
  reply(body)
  } catch (e) {
  reply(e)
  }
  })
  addCmd(command.slice(1), 1, commund)
  break
  /*case prefix+'addupdate':
               if (!isCreator) return m.reply('Khusus Owner')
               if (!q) return m.reply(`Example: ${command} update fitur`)
             changelog.push(q)
               fs.writeFileSync('./worker/src/changelog/change.json', JSON.stringify(changelog))
               ads(`Update fitur berhasil ditambahkan ke database!`)
               addCmd(command.slice(1), 1, commund)
  break
        
  
        case  prefix+'update':
               let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
               for (let i of changelog) {
               updateList += `࿃ *${i.replace(changelog)}*\n\n`
  }
               ads(updateList)
               addCmd(command.slice(1), 1, commund)
  break*/
  case prefix+'catalog': { // Nemu di Sc chika
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  tod = await reSize(`./worker/media/image/randomMenu/${rndmmenu}.png`, 200, 200) 
  var messa = await prepareWAMessageMedia({ image: tod}, { upload: sock.waUploadToServer })
  var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  "productMessage": {
  "product": {
  "productImage": messa.imageMessage,
  "productId": "7091718154232528",
  "title": `ALL MENU`,
  "description": `${listmn}`,
  "footerText":  global.footer,
  "currencyCode": "IDR",
  "priceAmount1000": "100000000000000000",
  "productImageCount": 1,
  "firstImageId": 1,
  "salePriceAmount1000": "1000",
  "retailerId": global.author,
  "url": `hdhhd`
  },
  "businessOwnerJid": "6289501060783@s.whatsapp.net",
  }
  }), { userJid: m.chat, quoted: ftroli })
  sock.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
  }
  addCmd(command.slice(1), 1, commund)
  break
              
  case prefix+'dashboard': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return reply(mess.ban)
  var jumlahCmd = commund.length
  if (jumlahCmd > 10) jumlahCmd = 10
  teks = `*「 Total Hit Command 」*\nGlobal Hit : ${cmdBotHarian || 'Load Detect'}\nToday Hit : ${cmdBotHarian || 'Load Detect'}\n*Most Command Global*\n`
  for (let i = 0; i < jumlahCmd ; i ++) {
  teks += `\n » Command : #${commund[i].id}, ${commund[i].total} used`
  }
  ads(teks) 
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tes':
  ads('y') 
  
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'react': { 
    sock.sendMessage(m.chat, reactionMessage)} 
  addCmd(command.slice(1), 1, commund)
  break  
  case prefix+'cerpen':{
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (!q) return ads(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
  let cerpe = await cerpen(q)
  ads(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
  }
  addCmd(command.slice(1), 1, commund)
  break
  /*case prefix+'menu': { Ini Menu location
  const dbs = new Database()
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  templateMessage: {
  hydratedTemplate: {
  hydratedContentText : listmn, 
  locationMessage: {
  jpegThumbnail: tamnel},
  hydratedFooterText: tqto(), 
  hydratedButtons: [{
  urlButton: {
  displayText: 'Group Whatsapp',
  url: linkgrupss
  }
  }, {
  quickReplyButton: {
  displayText: '📈𝘚𝘵𝘢𝘵𝘶𝘴',
  id: '#ping'
  }
  }, {
  quickReplyButton: {
  displayText: '📊𝘋𝘢𝘴𝘩𝘣𝘰𝘢𝘳𝘥',
  id: '#dashboard'
  }  
  }, {
  quickReplyButton: {
  displayText: '🌐𝘊𝘰𝘮𝘮𝘢𝘯𝘥',
  id: '#command'
  }
  }]
  }
  }
  }), { userJid: m.chat, quoted: m })
  sock.relayMessage(m.chat, template.message, { messageId: template.key.id })
  }
  
  addCmd(command.slice(1), 1, commund)
  break*/
  
  case prefix+'verify': {
    if (isRegistered) return ads('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
    //if (isCapuser) return sock.sendMessage(sender, { text : 'Sebutkan kode diatas untuk verifikasi'})  //By Deff
     datta = captcha
     jsonData = JSON.parse(datta);
        de = Math.floor(Math.random() * jsonData.length);
        data = jsonData[de];
       console.log(data)//hasil di tampilkan di cmd
        jawaban = data.kode
        gambar = data.captcha
      fs.writeFileSync("./worker/src/captcha/capuser.json", JSON.stringify(capuser))
    
              
            sock.sendMessage(
             sender, 
             { 
             caption: `*Hello ${pushname}*\nSilahkan Daftar dulu\nSebutkan kode Verifikasi diatas ini`, 
             location: { 
              jpegThumbnail: await reSize(gambar, 200, 200) 
             }, 
             footer: 'AKAbotz ~ Aka', mentions: [sender] 
             })
    sock.sendMessage(from, { text : 'Cek pesan pribadi bot'}, { quoted : m}) 
    sock.sendMessage(sender, { text : 'Sebutkan kode diatas untuk verifikasi\nKode ini berlaku hingga 15 detik\nJika telat ketik #verify untuk daftar ulang/Reset code'}, { quoted : m}).then(() => {
      capuser[m.sender.split('@')[0]] = jawaban.toLowerCase()
      })}
      addCmd(command.slice(1), 1, commund)
  break
  case prefix+'delete': case prefix+'del': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.quoted) return
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
  sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'listpc': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
  let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
  for (let i of anu) {
   teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
  }
  sock.sendTextWithMentions(m.chat, teks, m)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'listgc': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
  for (let i of anu) {
   let metadata = await sock.groupMetadata(i)
   if (metadata.owner === "undefined") {
   loldd = false
   } else {
   loldd = metadata.owner
   }
   teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
  }
  sock.sendTextWithMentions(m.chat, teks, m)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'afk': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  let user = global.db.users[m.sender]
  user.afkTime = + new Date
  user.afkReason = args.join(" ")
  ads(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'fliptext': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (args.length < 1) return ads(`Example:\n${prefix}fliptext AKABOTZ ~ Aka`)
  quere = args.join(" ")
  flipe = quere.split('').reverse().join('')
  ads(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'tohuruf': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!Number(args[0])) return ads(`Example:\n${prefix}tohuruf 456`)
  try {
  quere = args.join(" ")
  convertes = await toHur(quere)
  ads(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
  } catch {
  ads("Error")
  }
  }
  addCmd(command.slice(1), 1, commund)
  break
  
  case prefix+'request': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!args.join(" ")) return ads(`Example : ${command} min tambahin fitur downloader`)
  teks = `*| REQUEST FITUR |*`
  teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
  teks2 = `\n\nSucces send to owner`
  for (let i of owner) {
  sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
  }
  sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'report': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!args.join(" ")) return ads(`Example : \n- ${command} fitur ig error min\n- ${command} user ini nyepam min`)
  teks = `*| REPORT FITUR |*`
  teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
  teks2 = `\n\nSucces send to owner`
  for (let i of owner) {
  sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
  }
  sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'inspect': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (!args[0]) return ads("Linknya?")
  let linkRegex = args.join(" ")
  let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
  if (!coded) return ads("Link Invalid")
  sock.query({
  tag: "iq",
  attrs: {
  type: "get",
  xmlns: "w:g2",
  to: "@g.us"
  },
  content: [{ tag: "invite", attrs: { code: coded } }]
  }).then(async(res) => { 
  tekse = `     「 Group Link Inspector 」
  ▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
  ▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
  ▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
  ▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
  ▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
  ▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
  ▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
  ▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
  ▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
  ▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
  ▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
  `
  try {
  pp = await sock.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
  } catch {
  pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
  }
  sock.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await sock.parseMention(tekse) })
  })
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
  Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
  
  💻 Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  _NodeJS Memory Usaage_
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `_Total CPU Usage_
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  _CPU Core(s) Usage (${cpus.length} Core CPU)_
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  ads(respon)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'q': case prefix+'quoted': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!m.quoted) return ads('Reply Pesannya!!')
  let wokwol = await sock.serializeM(await m.getQuotedObj())
  if (!wokwol.quoted) return ads('Pesan Yang anda reply tidak mengandung reply')
  await wokwol.quoted.copyNForward(m.chat, true)
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'getname': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (qtod === "true") {
  namenye = await sock.getName(m.quoted.sender)
  ads(namenye)
  } else if (qtod === "false") {
  sock.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
  }
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'getpic': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (qtod === "true") {
  try {
  pporg = await sock.profilePictureUrl(m.quoted.sender, 'image')
  } catch {
  pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  sock.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
  } else if (qtod === "false") {
  try {
  pporgs = await sock.profilePictureUrl(from, 'image')
  } catch {
  pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  sock.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
  }
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'owner': case prefix+'creator': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
    for (let x of global.owner1) {
      sock.sendContact(from, x.split('@s.whatsapp.net')[0], global.author, m)
     }		   
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'translate': case prefix+'terjemahan': {
    if(!isRegistered) return sendButMessage(from, pic, daftar1, daftar2, daftar3, {quoted: m})
  if (isBan) return ads(mess.ban)
  if (!args.join(" ")) return ads("Textnya?")
  tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
  Infoo = tes.info
  Detek = tes.translate
  ads(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
  }
  addCmd(command.slice(1), 1, commund)
  break

//==================================