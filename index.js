const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('설빙봇 온라인!')
})