const fs = require('fs');

fs.writreFileSync('./.env', 'API=${process.env.API}\n')