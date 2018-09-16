const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Bilgi Mesajımı Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", " @! ค੮ ♆ ! 《ƛ𝔥𝔪𝔢𝔱》! ค੮ ♆ ! -  @! ค੮ ♆《OyunHizi》#8339", )
  .addField("**❯ Sürüm**", " BETA v0.1.0 ", )
  .addField("**❯ Yapıldığı Tarih**", " 16 Eylül 2018 ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=489816747474681896&scope=bot&permissions=2146958847)", )
  .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/5Whcy6N) ", )
	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
