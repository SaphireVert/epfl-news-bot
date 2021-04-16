import { Telegraf } from 'telegraf';
import { Fetch } from "./lib/Fetch";
import { Layout } from "./lib/Layout";
import { BotCommand } from "./lib/BotCommand";

const fetch = new Fetch();
const layout = new Layout();
const botCommand = new BotCommand();
import secrets from './secrets.json';
const bot = new Telegraf(secrets.BOT_TOKEN);

async function main () {
    const botInfos = await bot.telegram.getMe();
    bot.hears(new RegExp(`(^\/latest)(@${botInfos.username})?\s?(.+)?$`), async (ctx) => {
        let props = ctx.update.message.text.split(" ");
        let count = parseInt(props[1]);
        ctx.reply(await botCommand.latest("auto", count));
    });
    bot.start((ctx) => ctx.reply('Welcome to EPFL-News-Bot ! \nType /getTheLastNews to get the last news !\n'));
    bot.launch();
}

main();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));