http://uk.soccerway.com

Player Parser.

Parses demographics player information and return json object.

```bash
npm install swparser
```

```javascript
var parser = require('swparser');

parser = new parser;

parser.addListener('success', function(result) {
  console.log(result);
});

parser.parse(<id>);
```

Or command line tool

```bash
node app.js <player_id>
```

```bash
{"First name":"Morian","Last name":"Gevende","Nationality":"France","Date of
birth":"22 November 1989","Age":25,"Country of birth":"France","Place of
birth":"Hyeres","Position":"Defender","Height":"182 cm","Weight":"72 kg"}
```

