const { exec } = require('child_process');
const cron = require('node-cron');
const { Telegraf } = require('telegraf');

const bot = new Telegraf("6478944436:AAEOgdosJGUUADFxIWmk_SqcIrezq5FGiXE");//@verificadorelevxbot
var idtelegram = '-1001882777430';//verificacoesElevX

// Função para reiniciar o processo com o comando pm2 restart
function restartProcess(processId) {
  exec(`pm2 restart ${processId}`, (error, stdout, stderr) => {
    if (error) {
      bot.telegram.sendMessage(idtelegram, `Erro ao reiniciar o processo ${processId}: ${error.message}`);
      return;
    }
    bot.telegram.sendMessage(idtelegram, `Processo ESPORTIVA ${processId} reiniciado com sucesso`);
  });
}

// Agendamento para executar a cada duas horas
// cron.schedule('0 */2 * * *', () => {

// Agendamento para executar a cada 2 minutos
//cron.schedule('*/2 * * * *', () => {
cron.schedule('0 */5 * * *', () => {
  restartProcess('AviatorEsportiva'); // Aviator
  restartProcess('BacBoo_time'); // Roleta Da Galera
  restartProcess('DragonTigerEsportiva');
  restartProcess('FortuneEsportiva');
  restartProcess('MinesEsportiva');
  restartProcess('Roleta2Esportiva');
  restartProcess('SpaceManEsportiva2');
  restartProcess('VelasAltasEsportiva')
});
