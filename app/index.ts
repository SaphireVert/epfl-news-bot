import "./imports.ts";

import { Telegraf } from 'telegraf';
import { Fetch } from "./lib/Fetch";

const fetch = new Fetch();

// fetch.getUrl();
// fetch.getUrl();


import secrets from './secrets.json';

const bot = new Telegraf(secrets.BOT_TOKEN);
bot.hears('/getTheLastNews', async (ctx) => ctx.reply(await fetch.getUrlList()));
bot.start((ctx) => ctx.reply('Welcome to Epfl-News-Bot ! \nType /getTheLastNews to get the last news !\n'));
bot.help((ctx) => ctx.reply('Welcome to Epfl-News-Bot ! \nType /getTheLastNews to get the last news !'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();


// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
