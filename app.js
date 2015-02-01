parser = require('./index.js')

parser = new parser;

parser.addListener('success', function(result) {
  process.stdout.write(JSON.stringify(result));
});

parser.parse(process.argv[2]);
