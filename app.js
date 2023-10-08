const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Ваш токен для доступа к API Telegram
const token = process.env.TELEGRAM_TOKEN;

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

const adminChatId = process.env.ADMIN_CHAT_ID; // Замените на ID вашего административного чата

// ...

// Обработчик всех входящих сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const username = msg.from.username;

  // Отправка сообщения в административный чат
  bot.sendMessage(adminChatId, `Сообщение от пользователя @${username}:\n\n${messageText}`);
});
  // ...  

// Обработчик команды "/start"
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const commands = [
      '/flower - Отправить виртуальный цветок',
      '/heart - Отправить виртуальное сердце',
      '/card - Послать виртуальную открытку',
      '/wishes - Пожелать любви и счастья',
      '/goodmorning - Пожелать доброго утра',
      '/smile - Послать виртуальную улыбку',
      '/hug - Отправить виртуальное объятие',
      // Добавьте остальные команды здесь
    ];
  
    let response = 'Доступные команды:\n\n';
    response += commands.join('\n');

    bot.sendMessage(chatId, response);
  });
  
// Обработчик команды "Отправить виртуальный поцелуй"
bot.onText(/\/kiss/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '💋 Пускай этот виртуальный поцелуй достигнет тебя!');
});

// Обработчик команды "Послать виртуальное обнимашки"
bot.onText(/\/hug/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🤗 Обнимаю тебя виртуально!');
});

// Добавьте обработчики для остальных команд по аналогии

// Обработчик неизвестной команды



// Обработчик команды "Отправить виртуальный цветок"
bot.onText(/\/flower/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🌹 Прекрасный виртуальный цветок для тебя!');
  });
  
  // Обработчик команды "Отправить виртуальное сердце"
  bot.onText(/\/heart/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '❤️ Виртуальное сердечко для тебя!');
  });
  
  // Обработчик команды "Послать виртуальную открытку"
  bot.onText(/\/card/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '💌 Виртуальная открытка только для тебя!');
  });
  
  // Обработчик команды "Пожелать любви и счастья"
  bot.onText(/\/wishes/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '✨ Желаю тебе много любви и счастья!');
  });
  
  // Добавьте обработчики для остальных команд по аналогии
  
  // ...
  
  // Обработчик команды "Пожелать доброго утра"
  bot.onText(/\/goodmorning/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '☀️ Доброе утро! Пусть твой день будет прекрасным!');
  });
  
  // Обработчик команды "Послать виртуальную улыбку"
  bot.onText(/\/smile/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '😊 Виртуальная улыбка для тебя!');
  });
  

  // Добавьте обработчики для остальных команд по аналогии
  
  // ...
  
// ...

// Обработчик команды "Отправить воздушный поцелуй"
bot.onText(/\/airkiss/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '💋💨 Воздушный поцелуй идет к тебе!');
  });
  
  // Обработчик команды "Пожелать счастливой ночи"
  bot.onText(/\/goodnight/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🌙 Спокойной ночи! Пусть твои сны будут сказочными!');
  });
  
  // Обработчик команды "Отправить виртуальное письмо"
  bot.onText(/\/letter/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '💌 Виртуальное письмо только для тебя!');
  });
  
  // Обработчик команды "Пожелать удачи"
  bot.onText(/\/goodluck/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🍀 Желаю тебе удачи и успехов!');
  });
  
  // Добавьте обработчики для остальных команд по аналогии
  
  // ...
  
  // Обработчик команды "Отправить виртуальный ангела"
  bot.onText(/\/angel/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '👼 Виртуальный ангел хранитель для тебя!');
  });
  
  // Обработчик команды "Послать виртуальное смайлик"
  bot.onText(/\/emoji/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '😄 Виртуальный смайлик для поднятия настроения!');
  });
  
  // Обработчик команды "Отправить виртуальное тортик"
  bot.onText(/\/cake/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🎂 Виртуальный тортик для особенного случая!');
  });
  
  // Обработчик команды "Пожелать процветания"
  bot.onText(/\/prosperity/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🌟 Желаю тебе процветания во всех начинаниях!');
  });
  
  
  // Запуск бота
  bot.on('polling_error', (error) => {
    console.log(error);
  });