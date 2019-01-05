const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs');
const jimp = require('jimp');
const Canvas = require('canvas');
var prefix = "$$"
client.on('ready', () => {
    console.log('----------------');
  console.log('By ! Swalf , .FireKing ');
console.log('----------------');
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$$help | $$inv | ${client.guilds.size} server `,"https://www.twitch.tv/")
client.user.setStatus("dnd")
});



client.on('message', message => {
  if (message.content.startsWith(prefix + 'help')) { //DiamondCodes - [ X_KillerYT ]
      let pages = [`
  ***__وصف عن البوت__***
  **
  :gem:  البوت فيه كثير ميزات حلوة و جميلة
   ا:rocket: البوت يعمل قرابة 24 ساعة
   مبرمج البوت
   ! Swalf , .FireKing#0001
  **
          ***__General orders__***
  **
   
  - \`${prefix}server\` : لعرض معلومات السيرفر
 
  - \`${prefix}skin\` : لعرض اسكنات ماين كرافت

  - \`${prefix}rank\` : لي معرف التفاعل حقق في السيرفر

  - \`${prefix}sug\` : لي ارسال اقتراح لي صاحب البوت

  - \`${prefix}رابط\` : لي اعطائك رابط السيرفر
  
  - \`${prefix}inv\` : لي اضافه البوت الي سيرفرك
  
  - \`${prefix}emojis\` : لي عرض الاموجي حق السيرفر
  
  - \`${prefix}guilds\` : لي عرض البوت في كم سيرفر

  - \`${prefix}id\` : لي عرض الادي حقق
  
  - \`${prefix}channels\` : لي معرفه كم روم
  
  - \`${prefix}avatar\` : لي عرض صورك
  
  - \`${prefix}users\` : لي عرض كم شخص في السيرفر

  - \`${prefix}bot\` : لي عرض معلومات البوت

  **
    `
  ,`
          ***__Admin orders__***
  **

  - \`${prefix}ban\` : لي اعطاء بان
   
  - \`${prefix}kick\` : لي اعطاء طرد العضو
  
  - \`${prefix}bc\` : لي عمل برودكاست
   
  - \`${prefix}mute\` : لي اعطاء ميوت
  
  - \`${prefix}unmute\` : لي فك الميوت
  
  - \`${prefix}role\` : لي اعطاء رتبه
  
  - \`${prefix}role all\` : لي اعطاء رتبه للجميع
  
  - \`${prefix}role humans\` : لي اعطاء رتبه للبشرين
  
  - \`${prefix}role bots\` : لي اعطاء رتبه للبوتات
   
  - \`${prefix}clear\` : لي مسح الشات

  - \`${prefix}move\` : لي تحرك عضو من مكانه بس لازم يكون في روم صوتي
 
  - \`${prefix}Voice\` : لي عمل روم صوتي يحسبلك كم واحد في القنوات الصوتيه

  - \`${prefix}Move all\` : لي تكريك الكل من مكنهم بس لازم يكونو في روم صوتي

  **
    `
  ,`
          ***__Games orders__***
  **

   - \`${prefix}xo\` : لعبه اكس اوو
 
   - \`${prefix}rps\` : لعبه حجره ورقه مقص

  **
  `
  ,`
         ***__Clan Commands__***
  **        

  - \`نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل \`
  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء
  - \`${prefix}clan room\`: لعمل روم شات او كتابي بأسم الكلان ( صاحب الكلان فقط ) ء

  **
  `
  ,`
          ***___MusicCommands___***
  **
   
  - \`${prefix}play\` : لتشغيل أغنية برآبط أو بأسم
  - \`${prefix}skip\` : لتجآوز الأغنية الحآلية
  - \`${prefix}pause\` : إيقآف الأغنية مؤقتا
  - \`${prefix}resume\` : لموآصلة الإغنية بعد إيقآفهآ مؤقتا
  - \`${prefix}vol\` : لتغيير درجة الصوت 100 - 0
  - \`${prefix}stop\` : لإخرآج البوت من الروم
  - \`${prefix}np\` : لمعرفة الأغنية المشغلة حآليا
  - \`${prefix}queue\` : لمعرفة قآئمة التشغيل

  **
  `]
      let page = 1;
   
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])
   
      message.author.sendEmbed(embed).then(msg => {
   
          msg.react('◀').then( r => {
              msg.react('▶')
   
   
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
   
   
          const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
          const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
   
   
   
          backwards.on('collect', r => {
              if (page === 1) return;
              page--;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          forwards.on('collect', r => {
              if (page === pages.length) return;
       
        page++;
              embed.setDescription(pages[page-1]);
              embed.setFooter(`Page ${page} of ${pages.length}`);
              msg.edit(embed)
          })
          })
      })
      }
  });
  client.on('message', message => {
      if(message.content === '$$help') {
          message.reply('تم ارساله بالخاص :white_check_mark: ');
      }
  });

client.on('message', message => {
    const prefix = "@"
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id !== '480184422386237451') return;
  
  if (message.content.startsWith(prefix + 'game')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
  } else 
  
  if (message.content.startsWith(prefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'listening')) {
  client.user.setActivity(argresult, {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
  } else 
  
  if (message.content.startsWith(prefix + 'sterming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
      message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
  }
  
  });


  client.on('message', message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "ban") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    /*let b5bzlog = client.channels.find("name", "5bz-log");
   
    if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
    if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
    if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
    if (!message.guild.member(user)
    .bannable) return message.reply(`This User Is Have High Role !`);
   
    message.guild.member(user).ban(7, user);
   
    const banembed = new Discord.RichEmbed()
    .setAuthor(`BANNED!`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
      embed : banembed
    })
  }
  });
  client.on('message', message => {
  if(message.content.startsWith(prefix +"server")){
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
  if(!message.channel.guild) return message.reply(' ');
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 Server ID:**", message.guild.id,true)
  .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
  .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
  .addField("👥 Members ",`[${message.guild.memberCount}]`,true)
  .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
  .addField("**🌍 Others **" , message.guild.region,true)
  .addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
  .setColor('#000000')
  message.channel.sendEmbed(embed)
  
  }
  });
  client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'move')) {
   if (message.member.hasPermission("MOVE_MEMBERS")) {
   if (message.mentions.users.size === 0) {
   return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
  }
  if (message.member.voiceChannel != null) {
   if (message.mentions.members.first().voiceChannel != null) {
   var authorchannel = message.member.voiceChannelID;
   var usermentioned = message.mentions.members.first().id;
  var embed = new Discord.RichEmbed()
   .setTitle("Succes!")
   .setColor("#000000")
   .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
  var embed = new Discord.RichEmbed()
  .setTitle(`You are Moved in ${message.guild.name}`)
   .setColor("RANDOM")
  .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
   message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
  message.guild.members.get(usermentioned).send(embed)
  } else {
  message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
  }
  } else {
   message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
  }
  } else {
  message.react("❌")
  }
   }
  });
  client.on("message", message => {
    var args = message.content.split(' ').slice(1); 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role') ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
      if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
      if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
      var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
      var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
      if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().removeRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
      }
      if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.removeRole( role1 ))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
      } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
      } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
      } 	
    } else {
      if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
      if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
      var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
      var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
      if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
      }
      if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
      } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
      } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
      } 
    } 
  });
  var AsciiTable = require('ascii-data-table').default
  client.on('message', message =>{
  
      if(message.content == "roles"){
          if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
          var 
          ros=message.guild.roles.size,
          data = [['Rank', 'RoleName']]
          for(let i =0;i<ros;i++){
              if(message.guild.roles.array()[i].id !== message.guild.id){
           data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
          }}
          let res = AsciiTable.table(data)
  
          message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
      }
  });

  client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = client.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });

 

  client.on('message', async message =>{
    if (message.author.boss) return;
  
  if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
      if (!message.channel.guild) return;
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
      let user = message.mentions.users.first();
      let muteRole = message.guild.roles.find("name", "Muted");
      if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
      if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
      let reason = message.content.split(" ").slice(2).join(" ");
      message.guild.member(user).addRole(muteRole);
      const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
      .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
      .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
      .addField("User", user, true)
      message.channel.send({embed : muteembed});
      var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor("RANDOM")
    user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });


  client.on('message', message => {
    if (message.content === "inv") {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
    .setTitle(`Click Here To Add Me `)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=bot id&permissions=8&scope=bot`)  // حط اي دي بوتك
    .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => { 
  if (message.content.startsWith(prefix + "id")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
   heg = men
} else {
   heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
   h = mentionned
} else {
   h = message.member
}
      moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL) 
.setColor("#707070")
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
.setFooter(`Last Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });


client.on('message', message => {
  if (message.content.toLowerCase() === prefix + "move all") {
      message.delete(4000)
  if(!message.channel.guild) return;
  if (!message.member.hasPermission("MOVE_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
 if (message.member.voiceChannel == null) return;
  var author = message.member.voiceChannelID;
  var m = message.guild.members.filter(m=>m.voiceChannel)
  message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
  m.setVoiceChannel(author)
  })
  message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
  }
    });



       const temp = {};
       client.on('message', async message => {
        if(message.channel.type === "dm") return;
         if(message.author.bot) return;
          if(!temp[message.guild.id]) temp[message.guild.id] = {
           time: "3000",
            category : 'click here',
             channel : 'click here'
              }
               if(message.content.startsWith('$$temp on')){
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 var ggg= message.guild.createChannel('click here', 'category').then(cg => {
                  var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
                   ch.setParent(cg)
                    message.channel.send('**Done || Temporary Rooms Has Been Activated . :ballot_box_with_check: **')
                     client.on('message' , message => {
                      if(message.content === '$$temp off') {
                       if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                        cg.delete()
                         ch.delete()
                          message.channel.send('**Done || Closed . :ballot_box_with_check:**  ')
                           }
                            });
                             const time = temp[message.guild.id].time
                              client.on('message' , message => {
                               if (message.content.startsWith(prefix + "fgfdkjfdhfgdjghdhghj")) {
                                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                                 let newTime= message.content.split(' ').slice(1).join(" ")
                                 if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
                          if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
                         if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                              temp[message.guild.id].time = newTime
                             message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                            }
                           });
                          client.on('voiceStateUpdate', (old, neww) => {
                         let newUserChannel = neww.voiceChannel
                        let oldUserChannel = old.voiceChannel
                       temp[message.guild.id].category = cg.id
                      temp[message.guild.id].channel = ch.id
                     let channel = temp[message.guild.id].channel
                    let category = temp[message.guild.id].category
                   if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
                  neww.guild.createChannel(neww.displayName , 'voice').then(c => {
                 c.setParent(category)
                let scan = setTimeout(()=>{
               if(!neww.voiceChannel) {
              c.delete();
             client.channels.get(channel).overwritePermissions(neww, {
            CONNECT:true,
           SPEAK:true
          })
         }
        }, temp[neww.guild.id].time);
         c.overwritePermissions(neww, {
          CONNECT:true,
           SPEAK:true,
            MANAGE_CHANNEL:true,
             MUTE_MEMBERS:true,
              DEAFEN_MEMBERS:true,
         MOVE_MEMBERS:true,
          VIEW_CHANNEL:true
           })
            neww.setVoiceChannel(c)
                   })
                    client.channels.get(channel).overwritePermissions(neww, {
               CONNECT:false,
                SPEAK:false
           })
                      }
                     })
                    })
                  })
                 }
             });

             const clans = {};
             const system = {};
             const level = {};
             
             
             client.on('message',async message => {
               if(message.author.bot) return;
               if(message.channel.type === 'dm') return;
             
               let args = message.content.split(' ');
               let random = Math.floor(Math.random() * 5) + 2;
               let author = message.author;
             
               let xpLeft;
               let nameClan;
               let membersClan = [];
               let levelClan = 0;
               if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
               if(!level[author.id]) level[author.id] = {level: 1, xp: 1};
             
             
               level[author.id].xp += (+random);
               if(level[author.id].xp >= 300) {
                 if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
                 level[author.id] = {
                   level: level[author.id].level + 1,
                   xp: xpLeft
                 };
             
               }


          

  
             
                 if(args[1] && args[1] === 'create') {
                   //if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
                   if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');
             
                   let m = await message.channel.send('**# أكتب أسم الكلان الان**');
                   let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
                     if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
                     if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
                     collected.first().delete().catch();
                     nameClan = collected.first().content;
                   });
             
                   m = await m.edit('**# جارى عمل الكلان**');
                   awaited = await setTimeout(async() => {
                     let membersArray = {
                       nameClan: {
                         array: []
                       }
                     };
                     let members = membersArray.nameClan.array;
                     members.push(message.author.id);
                     clans[nameClan] = {
                       name: nameClan,
                       createdAt: new Date().toLocaleString(),
                       level: levelClan,
                       creator: message.author.id,
                       members: members,
                       applylist: [],
                       admins: []
                     };
             
                     system[author.id] = {
                       clan: nameClan,
                       joinedAt: new Date().toLocaleString(),
                       clanLevel: 0,
                       creator: message.author.id
                     };
             
                     m = await m.edit('**# تم عمل الكلان بنجاح**');
                   }, 2300);
             
                 }
                 if(args[1] && args[1] === 'invite') {
                   if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");
                   let clan = system[author.id].clan;
                   if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');
                   if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
                   let mention = message.mentions.users.first();
                   if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');
                   if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");
                   if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");
             
                   let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
                   let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
                     collected.first().delete().catch();
                     if(collected.first().content === 'نعم') {
                       clans[clan].members.push(mention.id);
             
                       system[author.id].members += 1;
             
             
                       system[mention.id] = {
                         clan: clan,
                         joinedAt: new Date().toLocaleString(),
                         clanLevel: 0,
                         creator: clans[clan].creator
                       };
             
                       message.channel.send(`**${message.author} # تم قبول الدعوة**`);
                     }
                     if(collected.first().content === 'لا') {
                       message.channel.send(`**${message.author} # تم رفض الدعوة**`);
                     } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
                       return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
                     }
                   });
                 }
                 if(args[1] && args[1] === 'stats') {
                   if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');
                   let clan = system[author.id].clan;
                   let embed = new Discord.RichEmbed()
                     .setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)
                     .setDescription(`الكلان || \`${clan.toString()}\``)
                     embed.addField('» اسم الكلان', clan, true)
                     embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);
                     embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)
                     embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);
                     embed.addField('» لفل الكلان', clans[clan].level, true);
                     embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);
                     embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);
                     embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);
                     embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);
                   message.channel.send(embed);
             
                 }
                 if(args[1] && args[1] === 'join') {
                 let clanName = message.content.split(' ').slice(2).join(" ");
                 if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");
                 if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");
                 if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");
                 if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");
             
                 clans[clanName].applylist.push(message.author.id);
                 message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");
             
               }
                 if(args[1] && args[1] === 'accept') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
                   if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
                   if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
                   if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");
             
                   clans[system[author.id].clan].applylist.shift(mention.id);
                   clans[system[author.id].clan].members.push(mention.id);
                   let clan = system[author.id].clan;
             
             
                   system[mention.id] = {
                     clan: clan,
                     joinedAt: new Date().toLocaleString(),
                     clanLevel: 0,
                     creator: clans[clan].creator
                   };
             
             
                   mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();
                   message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);
                 }
                 if(args[1] && args[1] === 'decline') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
                   if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
                   if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
                   if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");
             
                   clans[system[author.id].clan].applylist.shift(mention.id);
             
                   system[mention.id] = {
                     clan: clans[system[author.id].clan],
                     joinedAt: new Date().toLocaleString(),
                     clanLevel: 0
                   };
             
             
                   mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();
                   message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);
             
                 }
                 if(args[1] && args[1] === 'promote') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
                   if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
                   if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
                   if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
                   if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");
                   if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");
             
                   clans[system[author.id].clan].admins.push(mention.id);
             
             
                   mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();
                   message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);
                 }
                 if(args[1] && args[1] === 'demote') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
                   if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
                   if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
                   if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
                   if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");
                   if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");
             
                   clans[system[author.id].clan].admins.shift(mention.id);
             
                   mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
                   message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
                 }
                 if(args[1] && args[1] === 'rename') {
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   let newName;
                   let oldName = clans[system[author.id].clan];
                   if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
                   if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");
             
                   let c = message.content.split(' ').slice(2).join(" ");
                   newName = c;
                   let clanInfo = clans[system[author.id].clan];
                   let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
                   let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
                     let collected = c.first();
                     collected.delete().catch();
                     m.delete().catch();
                     if(collected.content === 'نعم') {
                       clans[newName] = {
                         name: newName,
                         createdAt: clanInfo.createdAt,
                         level: clanInfo.level,
                         creator: clanInfo.creator,
                         members: clanInfo.members,
                         applylist: clanInfo.applylist,
                         admins: clanInfo.admins
                       };
                       clans[system[author.id].clan] = undefined;
             
                       system[author.id].clan = newName;
             
             
                         message.channel.send("**# جارى تغيير الاسم**");
                         message.channel.send("**# تم تغيير اسم الكلان بنجاح**");
             
                     } else if(collected.content === 'لا') {
                       message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);
             
                     } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
                       return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
                     }
                   });
                 }
                 if(args[1] && args[1] === 'list') {
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
                   let clan = clans[system[author.id].clan];
                   let members = Array.from(clan.members);
                   let admins = Array.from(clan.admins);
                   let applylist = Array.from(clan.applylist);
                   let i = 1;
                   let o = 1;
             
                   let embed = new Discord.RichEmbed();
                   embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
                   embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
                   embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
                   embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
                   embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
                   message.channel.send(embed);
                 }
                 if(args[1] && args[1] === 'leave') {
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
                   let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
                     let collected = c.first();
                     if(collected.content === 'نعم') {
                       clans[system[author.id].clan].members.shift(author.id);
             
                       system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
             
                       message.channel.send("**# لقد غادرت الكلان**");
                     } else if(collected.content === 'لا') {
                       message.channel.send("**# تم الغاء الخروج من الكلان**");
                     } else if(collected.content !== 'نعم' && collected.content === 'لا') {
                       message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
                     }
                   });
                 }
                 if(args[1] && args[1] === 'kick') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
                   if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
                   if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
                   if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
                   if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
                   if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");
             
                     let index = clans[system[author.id].clan].members.indexOf(mention.id);
                     let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
                     clans[system[author.id].clan].members.splice(index, 1);
                     if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
             
                     system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
             
                     message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
                     mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
                 }
                 if(args[1] && args[1] === 'ownership') {
                   let mention = message.mentions.users.first();
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
                   if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
                   if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
                   let o = Math.floor(Math.random() * 8) + 1;
                   let t = Math.floor(Math.random() * 8) + 1;
                   let th = Math.floor(Math.random() * 8) + 1;
                   let f = Math.floor(Math.random() * 8) + 1;
                   let number = `${o}${t}${th}${f}`;
             
                   message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
                     return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
                   });
             
                   let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
                   let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
                     let collected = c.first();
             
                     if(collected.content === number) {
                       clans[system[author.id].clan].creator = mention.id;
             
             
                       m.delete();
                       message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
                     } else
                     if(collected.content !== number) {
                       m.delete();
                     }
                   });
                 }
                 if(args[1] && args[1] === 'disband') {
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
                   let o = Math.floor(Math.random() * 8) + 1;
                   let t = Math.floor(Math.random() * 8) + 1;
                   let th = Math.floor(Math.random() * 8) + 1;
                   let f = Math.floor(Math.random() * 8) + 1;
                   let fi = Math.floor(Math.random() * 8) + 1;
                   let number = `${o}${t}${th}${f}${fi}`;
             
                   message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
                     return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
                   });
             
                   let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
                   let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
                     let collected = c.first();
             
                     if(collected.content === number) {
                       m.delete().catch();
                       collected.delete().catch();
                       let name = system[author.id].clan;
                       let members = clans[system[author.id].clan].members.length;
                       let cvlMembers = Array.from(clans[name].members);
                       for(let i = 0; i < cvlMembers.length; i++) {
                         let g = hero.users.get(cvlMembers[0]);
                           g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
                           system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
             
             
                         cvlMembers.shift();
                         if(cvlMembers.length <= 0) {
                           message.channel.send(`- \`${name}\`, تم اقفال الكلان`);
             
                           system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
                           clans[system[author.id].clan] = undefined;
             
                         }
                       }
                     } else
                     if(collected.content !== number) {
                       m.delete();
                       message.channel.send(`- \`${name}\`, تم الإلغاء`);
                     }
                   });
                 }
                 if(args && args[1] === 'room') {
                   if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
                   if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
                   if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
                   let id = '487721170687229977';
                   let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
                   let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
                     let collected = c.first();
                     if(collected.content === 'كتابي') {
                       message.guild.createChannel(system[author.id].clan, 'text').then(c => {
                         c.setParent(id);
                         c.overwritePermissions(message.guild.id, {
                           SEND_MESSAGES: false,
                           READ_MESSAGES: true,
                           CONNECT: false,
                           SPEAK: false
                         });
             
                         let newArray = Array.from(clans[system[author.id].clan].members);
                         for(let i = 0; i < newArray.length; i++) {
                           c.overwritePermissions(newArray[0], {
                             SEND_MESSAGES: true,
                             READ_MESSAGES: true,
                             CONNECT: true,
                             SPEAK: true
                           });
             
                           newArray.shift();
                         }
                       });
                       m.edit('**# تم عمل الروم**');
                     } else if(collected.content === 'صوتي') {
                       message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
                         c.setParent(id);
                         c.overwritePermissions(message.guild.id, {
                           CONNECT: false,
                           SPEAK: false
                         });
             
                         let newArray = Array.from(clans[system[author.id].clan].members);
                         for(let i = 0; i < newArray.length; i++) {
                           c.overwritePermissions(newArray[0], {
                             CONNECT: true,
                             SPEAK: true
                           });
             
                           newArray.shift();
                         }
                       });
                       m.edit('**# تم عمل الروم**');
                     }
                   });
                 }
               
             });


             client.on('message', message => {
              var  user = message.mentions.users.first() || message.author;
          if (message.content.startsWith("$$avatar")) {
      message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
      }
      });

      client.on('message', async message => {
        if(message.content.startsWith(prefix + "voice")) {
        if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
        if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
        var args = message.content.split(' ').slice(1).join(' ');
        if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
        if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
        message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
        message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
          c.overwritePermissions(message.guild.id, {
            CONNECT: false,
            SPEAK: false
          });
          setInterval(() => {
            c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
              if(err) return;
            });
          },3000);
        });
        }
      });
      
      
      var userData = {};
      client.on("message", function(message){
      if (message.content.startsWith(prefix + "rank")) {
        if (!userData[message.author.id]) {
          userData[message.author.id] = {Money:0,Xp:0,Level:0}
        }
           var mentionned = message.mentions.users.first();
      
            var x5bzm;
            if(mentionned){
                var x5bzm = mentionned;
            } else {
                var x5bzm = message.author;
      
            }
      
        
        var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
        if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
        let pEmbed = new Discord.RichEmbed()
        .setColor("Random")
        .addField("» UserName :", message.author.tag)
        .addField("» Level :", userData[message.author.id].Level)
        .addField("» XP :",Math.floor(userData[message.author.id].Xp))
        message.channel.send(pEmbed);
      }
      if (!userData[message.author.id]) {
        userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
        }
      
      userData[message.author.id].Xp+= 0.25;
      userData[message.author.id].Money+= 0.25;
      
      });




      client.on('message', message => { 
        if(message.content.startsWith(prefix + 'sug')) {
              if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
           let args = message.content.split(" ").slice(1);
           var ID = message.author.id 
           var emben = new Discord.RichEmbed()
           .setTimestamp()
           .setTitle(`:x: Error`)
           .setDescription(`الرجاء كتابت إقتراحك بعد الأمر `)
           if(!args.join(" ")) return message.channel.send(emben).then(message => {message.delete(50000)});
           var embet = new Discord.RichEmbed()
           .setTitle(`:white_check_mark: | Success!`)
           .setTimestamp()
           .setDescription(`شكراً على اقتراحك !`)
        .addField(`إقتراحك : `,args.join(" "))
           var embed = new Discord.RichEmbed()
           .setTimestamp()
           .setColor('RANDOM')
           .setThumbnail(message.author.avatarURL)
           .setFooter(`${message.author.username}#${message.author.discriminator}`)
           .setTitle(`${client.user.username}`)
           .setURL(`${client.user.avatarURL}`)
           .setDescription(`**
        **المقترح** :\n <@${ID}>\n
        **الإقتراح** :  \`\`\`${args.join(" ")}\`\`\`**`)
                   client.channels.get("481894528152764416").send(embed)
          message.channel.sendEmbed(embet).then(message => {message.delete(50000)})
                    message.react("📩")
        }
        });

        client.on('message', async msg => { // eslint-disable-line
          if (msg.author.bot) return undefined;
          
          if (!msg.content.startsWith(prefix)) return undefined;
          const args = msg.content.split(' ');
          const searchString = args.slice(1).join(' ');
          
          const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
          const serverQueue = queue.get(msg.guild.id);
        
          let command = msg.content.toLowerCase().split(" ")[0];
          command = command.slice(prefix.length)
        
          if (command === `play`) {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
            const permissions = voiceChannel.permissionsFor(msg.client.user);
            if (!permissions.has('CONNECT')) {
              
              return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
            }
            if (!permissions.has('SPEAK')) {
              return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
            }
        
            if (!permissions.has('EMBED_LINKS')) {
              return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
            }
        
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
              const playlist = await youtube.getPlaylist(url);
              const videos = await playlist.getVideos();
              
              for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
              }
              return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
            } else {
              try {
        
                var video = await youtube.getVideo(url);
              } catch (error) {
                try {
                  var videos = await youtube.searchVideos(searchString, 5);
                  let index = 0;
                  const embed1 = new Discord.RichEmbed()
                      .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
        ${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
        
                  .setFooter("Hyped. | v0.1")
                  msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                  
                  // eslint-disable-next-line max-depth
                  try {
                    var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                      maxMatches: 1,
                      time: 15000,
                      errors: ['time']
                    });//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
                  } catch (err) {
                    console.error(err);
                    return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                  }
                  const videoIndex = parseInt(response.first().content);
                  var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                  console.error(err);
                  return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
                }
              }//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        
              return handleVideo(video, msg, voiceChannel);
            }//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
          } else if (command === `skip`) {
            if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
            if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
            serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
            return undefined;
          } else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
            if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
            return undefined;
          } else if (command === `vol`) {
            if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
            if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
            if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
            serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
            return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
          } else if (command === `np`) {
            if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
            const embedNP = new Discord.RichEmbed()
          .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
            return msg.channel.sendEmbed(embedNP);
          } else if (command === `queue`) {
            //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
            let index = 0;
            //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            const embedqu = new Discord.RichEmbed()
        //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        .setDescription(`**Songs Queue**
        ${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
        **الان يتم تشغيل** ${serverQueue.songs[0].title}`)
            return msg.channel.sendEmbed(embedqu);
          } else if (command === `pause`) {
            if (serverQueue && serverQueue.playing) {
              serverQueue.playing = false;
              serverQueue.connection.dispatcher.pause();
              return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
            }//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            return msg.channel.send('لا يوجد شيء حالي ف العمل.');
          } else if (command === "resume") {
            if (serverQueue && !serverQueue.playing) {
              serverQueue.playing = true;
              serverQueue.connection.dispatcher.resume();
              return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
            }//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            return msg.channel.send('لا يوجد شيء حالي في العمل.');
          }
        
          return undefined;
        });
        //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        async function handleVideo(video, msg, voiceChannel, playlist = false) {
          const serverQueue = queue.get(msg.guild.id);
          console.log(video);
          //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
          const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
          };//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
          if (!serverQueue) {
            const queueConstruct = {
              textChannel: msg.channel,
              voiceChannel: voiceChannel,
              connection: null,
              songs: [],
              volume: 5,
              playing: true
            };//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            queue.set(msg.guild.id, queueConstruct);
        //by ,$ ReBeL ء , 🔕#4777 'RqlixMC v0.1'
            queueConstruct.songs.push(song);
        //by ,$ ReBeL ء , 🔕#4777 'RqlixMC v0.1'
            try {
              var connection = await voiceChannel.join();
              queueConstruct.connection = connection;
              play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
              console.error(`I could not join the voice channel: ${error}`);
              queue.delete(msg.guild.id);
              return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
            }
          } else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            if (playlist) return undefined;
            else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
          }
          return undefined;
        }//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        
        function play(guild, song) {
          const serverQueue = queue.get(guild.id);
        
          if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
          }
          console.log(serverQueue.songs);
        //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
          const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
              if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
              else console.log(reason);
              serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
              play(guild, serverQueue.songs[0]);
            })//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
            .on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
          dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
        
          serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
        }
        
        const adminprefix = "#vsdfsdfsdfp";
        const devs = ['zdfsdf'];
        client.on('message', message => {
          var argresult = message.content.split(` `).slice(1).join(' ');
            if (!devs.includes(message.author.id)) return;
            
        if (message.content.startsWith(adminprefix + 'setgame')) {
          client.user.setGame(argresult);
            message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
        } else 
          if (message.content.startsWith(adminprefix + 'setname')) {
        client.user.setUsername(argresult).then
            message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
        return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
        } else
          if (message.content.startsWith(adminprefix + 'setavatar')) {
        client.user.setAvatar(argresult);
          message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
              } else     
        if (message.content.startsWith(adminprefix + 'setT')) {
          client.user.setGame(argresult, "https://www.twitch.tv/idk");
            message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
        }
        
        });
        
        client.on("message", message => {
         if (message.content === `cvgdfgdgf`) {
          const embed = new Discord.RichEmbed() 
              .setColor("#000000")
              .setDescription(`

         `)
           message.channel.sendEmbed(embed)
            
           }
           }); 


        client.on('message', msg => {
          if(msg.author.bot) return; 
          
          if(msg.content === '$$alllink') {
            client.guilds.forEach(g => {
              
              let l = g.id 
              g.channels.get(g.channels.first().id).createInvite({
                maxUses: 5, 
                maxAge: 86400 
              }).then(i => msg.channel.send(`
              ** 
              Invite Link : <https://discord.gg/${i.code}> 
              Server : ${g.name} | Id : ${g.id} 
              Owner ID : ${g.owner.id} 
              **
              `))
        
        
            })
          } 
          
        })

        client.on('message', message => {
          if (message.content.startsWith("$$رابط")) {
      
        message.channel.createInvite({
              thing: true,
              maxUses: 25,
              maxAge: 86400
          }).then(invite =>
            message.author.sendMessage(invite.url)
          )
        message.channel.send("**تم ارسال الرابط برسالة خاصة**")
      
      message.author.send(`**مدة الرابط : يـوم
      دد استخدامات الرابط : 25**`)
      
          }
      });


      client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
            if(command === "$$skin") {
                    const args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.channel.send("** Type your skin name **");
            const image = new Discord.Attachment(`https://minecraft-skin-viewer.com/skin.php?u=${args}`, "skin.png");
        message.channel.send(image)
            }
        });

        client.on('message', message => { 
          if (message.content.startsWith(prefix + 'emojis')) {
      
              const List = message.guild.emojis.map(e => e.toString()).join(" ");
      
              const EmojiList = new Discord.RichEmbed()
                  .setTitle(':negative_squared_cross_mark: »  Emojis.') 
                  .setAuthor(message.guild.name, message.guild.iconURL) 
                  .setColor('RANDOM') 
                  .setDescription(List) 
                  .setFooter(message.guild.name) 
              message.channel.send(EmojiList) 
          }
      });

      client.on('message',function(message) {
        if(message.content.startsWith(prefix + "guilds")) {
            message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
        } 
     });
     //========================================================
     client.on('message',function(message) {
        if(message.content.startsWith(prefix + "users")) {
            message.channel.send(`Users: \`\`${client.users.size}\`\``);
        } 
     });
     //=========================================================
     client.on('message',function(message) {
        if(message.content.startsWith(prefix + "channels")) {
            message.channel.send(`channels: \`\`${client.channels.size}\`\``);
        } 
     });

     client.on('message', message => {
      if(message.content.startsWith(prefix + "ping")) {
    message.channel.send(`MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n DiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms. `)
    }
    });


    client.on('message',function(message) {
      let w = ['Rock','Paper','Scissors'];
     if(message.content.startsWith(prefix + "rps")) {
         message.channel.send(`\`\`\`css
  Choose one of the following.
  #1 ( Rock )
  #2 ( Paper )
  #3 ( Scissors )
  \`\`\`
  
  __امامك  5 توان للاختيار__`)
  .then(() => {
    message.channel.awaitMessages(response => response.content === '1', {
      max: 1,
      time: 5000,
      errors: ['time'],
    })
    .then((collected) => {
        if(message.author !== message.author)return;
       message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
      });
  });
    message.channel.awaitMessages(response => response.content === '2', {
      max: 1,
      time: 5000,
      errors: ['time'],
    })
    .then((collected) => {
       message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
      });
        message.channel.awaitMessages(response => response.content === '3', {
      max: 1,
      time: 5000,
      errors: ['time'],
    })
    .then((collected) => {
       message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
      });
     } 
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(prefix.length);
let copy = "CommandlyBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('سيرفر', message.guild.name)
.addField('المرسل', message.author.username)
.addField('الرسالة', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "bcall")) {
    let i = client.users.size;
    if(message.author.id !== '432231487916736542') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "bot")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`! Swalf  ,  .FireKing#0001 `)
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});




client.login("NTMwMDM5MDgzOTUxNDU2MjU3.Dw5k7A.R6QsxXyKhJ9Y-S7Hgu-R6Wxehg0");