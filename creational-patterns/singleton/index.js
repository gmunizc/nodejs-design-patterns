const Shopper = require('./Shopper');
const Store = require('./Store');
// const Logger = require('./Logger');
// const logger = new Logger().getInstance();
const logger = require('./Logger');

logger.log('starting app...');

const alex = new Shopper('Alex', 500);
const ski_shop = new Store('Steep and Deep Supplies', [
  {
    item: 'Downhill Skis',
    qty: 5,
    price: 750
  },
  {
    item: 'Knit Hat',
    qty: 20,
    price: 5
  }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`  ${log.message}`));
