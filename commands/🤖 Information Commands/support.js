const Discord = require("discord.js");
const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
    name: "support",
	aliases: ["sup"],
    category: "🤖 Information Commands",
    description: "Shows you the Support Server",
    usage: "support",
    run: async (client, message, args) => {
        message.reply(
            new Discord.MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter(client.user.username, config.AVATARURL) 
                .setAuthor(""+client.user.username + " | Support", client.user.displayAvatarURL())
                .setDescription("[\`Server\`](https://discord.gg/dPywf29rUq)")

            )}
}
