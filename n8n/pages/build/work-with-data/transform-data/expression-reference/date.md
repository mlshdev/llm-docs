> Pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/date.md](https://github.com/n8n-io/n8n-docs/blob/d6f969044f09a928e5d1459a080f6289b68d7be5/docs/build/work-with-data/transform-data/expression-reference/date.md)

# Date <a id="date"></a>

## *`Date`*.**`toDateTime()`** <a id="datetodatetime"></a>

**Description:** Converts a JavaScript Date to a Luxon DateTime. The DateTime contains the same information, but is easier to manipulate.

**Syntax:** *`Date`*.toDateTime()

**Returns:** DateTime

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// date = new Date("2024-03-30T18:49")
date.toDateTime().plus(5, 'days') //=> 2024-04-04T18:49
```
