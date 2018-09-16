const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `a!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \na!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \na!banned = Dene ve Gör! \na!kahkaha = Kahkaha Atarsınız \na!herkesebendençay = Herkese Çay Alırsınız. \na!koş = Koşarsınız.\na!çayiç = Çay İçersiniz. \na!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \na!çayaşekerat = Çaya Şeker Atarsınız. \na!yumruk-at = Yumruk Atarsınız. \na!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `a!report = İstediğiniz Kullanıcıyı Reportlarsınız. \na!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \na!yaz = Bota İsediğinizi Yazdırırsınız. \na!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \na!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \na!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \na!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `a!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `a!ban = İstediğiniz Kişiyi Sunucudan Banlar. \na!kick  = İstediğiniz Kişiyi Sunucudan Atar. \na!unban = İstediğiniz Kişinin Yasağını Açar. \na!sustur = İstediğiniz Kişiyi Susturur. \na!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \na!oylama = Oylama Açar. \na!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "a!yardım = BOT Komutlarını Atar. \na!bilgi = BOT Kendisi Hakkında Bilgi Verir. \na!ping = BOT Gecikme Süresini Söyler. \na!davet = BOT Davet Linkini Atar. \na!istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('AnatoliaBot Güncel Sürüm [ BETA v0.1.0 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
