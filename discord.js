const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('message', message => {
  if (message.content === '!site') {
    const embed = new Discord.MessageEmbed()
      .setColor('#7289DA')
      .setTitle('Site en cours de développement')
      .setDescription('Merci de votre visite !')
      .addField('Nous travaillons actuellement sur ce site et il sera bientôt disponible.')
      .addField('N\'hésitez pas à rejoindre notre serveur Discord pour être informé de la sortie du site :', '[Discord](https://discord.gg/uygZmX8uWM)')
      .setFooter('Project Hestia');

    message.channel.send(embed);
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');
