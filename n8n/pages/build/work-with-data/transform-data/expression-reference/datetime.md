> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/datetime.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/work-with-data/transform-data/expression-reference/datetime.md)

# DateTime <a id="datetime"></a>

## *`DateTime`*.**`day`** <a id="datetimeday"></a>

**Description:** The day of the month (1-31)

**Syntax:** *`DateTime`*.day

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.day //=> 30
```

## *`DateTime`*.**`diffTo()`** <a id="datetimediffto"></a>

**Description:** Returns the difference between two DateTimes, in the given unit(s)

**Syntax:** *`DateTime`*.diffTo(otherDateTime, unit)

**Returns:** Number

**Source:**  Custom n8n functionality

**Parameters:**

- `otherDateTime ` (String|DateTime) - The moment to subtract the base DateTime from. Can be an ISO date string or a Luxon DateTime.
- `unit ` (String|Array<String>) - optional - The unit, or array of units, to return the result in. Possible values: <code>years</code>, <code>months</code>, <code>weeks</code>, <code>days</code>, <code>hours</code>, <code>minutes</code>, <code>seconds</code>, <code>milliseconds</code>.

**Examples:**

```javascript
// dt1 = "2024-03-30T18:49:07.234".toDateTime()
dt1.diffTo('2025-01-01', 'days') //=> 276.21
```

```javascript
// dt1 = "2024-03-30T18:49:07.234".toDateTime()
// dt2 = "2025-01-01T00:00:00.000".toDateTime()
dt1.diffTo(dt2, ['months', 'days']) //=> {'months':, 'days':}
```

```javascript
Note: should support both day and days, etc.
```

## *`DateTime`*.**`diffToNow()`** <a id="datetimedifftonow"></a>

**Description:** Returns the difference between the current moment and the DateTime, in the given unit(s). For a textual representation, use <code>toRelative()</code> instead.

**Syntax:** *`DateTime`*.diffToNow(unit)

**Returns:** Number

**Source:**  Custom n8n functionality

**Parameters:**

- `unit ` (String|Array<String>) - optional - The unit, or array of units, to return the result in. Possible values: <code>years</code>, <code>months</code>, <code>weeks</code>, <code>days</code>, <code>hours</code>, <code>minutes</code>, <code>seconds</code>, <code>milliseconds</code>.

**Examples:**

```javascript
// dt = "2023-03-30T18:49:07.234".toDateTime()
dt.diffToNow('days') //=> 371.9
```

```javascript
// dt = "2023-03-30T18:49:07.234".toDateTime()
dt.diffToNow(['months', 'days']) //=> {"months":12, "days":5.9}
```

```javascript
Note: should support both day and days, etc.
```

## *`DateTime`*.**`endOf()`** <a id="datetimeendof"></a>

**Description:** Rounds the DateTime up to the end of one of its units, e.g. the end of the month

**Syntax:** *`DateTime`*.endOf(unit, opts)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `unit ` (String) - The unit to round to the end of. Can be <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.
- `opts ` (Object) - optional - Object with options that affect the output. Possible properties: <code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.

**Examples:**

```javascript
// dt = "2024-03-20T18:49".toDateTime()
dt.endOf('month') //=> 2024-03-31T23:59
```

## *`DateTime`*.**`equals()`** <a id="datetimeequals"></a>

**Description:** Returns <code>true</code> if the two DateTimes represent exactly the same moment and are in the same time zone. For a less strict comparison, use <code>hasSame()</code>.

**Syntax:** *`DateTime`*.equals(other)

**Returns:** Boolean

**Type:** Luxon

**Parameters:**

- `other ` (DateTime) - The other DateTime to compare

**Examples:**

```javascript
// dt1 = "2024-03-20T18:49+01:00".toDateTime()
// dt2 = "2024-03-20T19:49+02:00".toDateTime()
dt1.equals(dt2) //=> false
```

## *`DateTime`*.**`extract()`** <a id="datetimeextract"></a>

**Description:** Extracts a part of the date or time, e.g. the month, as a number. To extract textual names instead, see <code>format()</code>.

**Syntax:** *`DateTime`*.extract(unit?)

**Returns:** Number

**Source:**  Custom n8n functionality

**Parameters:**

- `unit` (String) - optional - The part of the date or time to return. One of: <code>year</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.extract('month') //=> 3
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.extract('hour') //=> 18
```

## *`DateTime`*.**`format()`** <a id="datetimeformat"></a>

**Description:** Converts the DateTime to a string, using the format specified. <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">Formatting guide</a>. For common formats, <code>toLocaleString()</code> may be easier.

**Syntax:** *`DateTime`*.format(fmt)

**Returns:** String

**Source:**  Custom n8n functionality

**Parameters:**

- `fmt` (String) - The <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">format</a> of the string to return

**Examples:**

```javascript
// dt = "2024-04-30T18:49".toDateTime()
dt.format('dd/LL/yyyy') //=> '30/04/2024'
```

```javascript
// dt = "2024-04-30T18:49".toDateTime()
dt.format('dd LLL yy') //=> '30 Apr 24'
dt.setLocale('fr').format('dd LLL yyyy') //=> '30 avr. 2024'
dt.format("HH 'hours and' mm 'minutes'") //=> '18 hours and 49 minutes'
```

> **Warning**
> **Not available in the Code node**
>
> `format()` is a custom n8n extension added to Luxon `DateTime` objects in the expressions editor. It doesn't exist in the Code node, because Code node scripts run against plain, unmodified Luxon. Calling it there throws `... .format is not a function`.
>
> Use Luxon's native [`toFormat()`](https://moment.github.io/luxon/api-docs/index.html#datetimetoformat) instead:
>
> ```javascript
> // In the Code node
> DateTime.now().toFormat('dd/LL/yyyy'); //=> '30/04/2024'
> ```
>
> This applies to any method on this page marked **Source: Custom n8n functionality**: it's available in expressions (e.g. the Set node) but may not be available in the Code node. See [Built-in methods and variables](https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts) for more on this distinction.

## *`DateTime`*.**`hasSame()`** <a id="datetimehassame"></a>

**Description:** Returns <code>true</code> if the two DateTimes are the same, down to the unit specified. Time zones are ignored (only local times are compared), so use <code>toUTC()</code> first if needed.

**Syntax:** *`DateTime`*.hasSame(otherDateTime, unit)

**Returns:** Boolean

**Type:** Luxon

**Parameters:**

- `otherDateTime ` (DateTime) - The other DateTime to compare
- `unit ` (String) - The unit of time to check sameness down to. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.

**Examples:**

```javascript
// dt1 = "2024-03-20".toDateTime()
// dt2 = "2024-03-18".toDateTime()
dt1.hasSame(dt2, 'month') //=> true
```

```javascript
// dt1 = "1982-03-20".toDateTime()
// dt2 = "2024-03-18".toDateTime()
dt1.hasSame(dt2, 'month') //=> false
```

## *`DateTime`*.**`hour`** <a id="datetimehour"></a>

**Description:** The hour of the day (0-23)

**Syntax:** *`DateTime`*.hour

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.hour //=> 18
```

## *`DateTime`*.**`isBetween()`** <a id="datetimeisbetween"></a>

**Description:** Returns <code>true</code> if the DateTime lies between the two moments specified

**Syntax:** *`DateTime`*.isBetween(date1, date2)

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Parameters:**

- `date1` (String|DateTime) - The moment that the base DateTime must be after. Can be an ISO date string or a Luxon DateTime.
- `date2` (String|DateTime) - The moment that the base DateTime must be before. Can be an ISO date string or a Luxon DateTime.

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.isBetween('2020-06-01', '2025-06-01') //=> true
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.isBetween('2020', $now) //=> true
```

## *`DateTime`*.**`isInDST`** <a id="datetimeisindst"></a>

**Description:** Whether the DateTime is in daylight saving time

**Syntax:** *`DateTime`*.isInDST

**Returns:** Boolean

**Type:** Luxon

## *`DateTime`*.**`locale`** <a id="datetimelocale"></a>

**Description:** The locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime.

**Syntax:** *`DateTime`*.locale

**Returns:** String

**Type:** Luxon

**Examples:**

```javascript
$now.locale //=> 'en-US'
```

## *`DateTime`*.**`millisecond`** <a id="datetimemillisecond"></a>

**Description:** The millisecond of the second (0-999)

**Syntax:** *`DateTime`*.millisecond

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49:07.234".toDateTime()
dt.millisecond //=> 234
```

## *`DateTime`*.**`minus()`** <a id="datetimeminus"></a>

**Description:** Subtracts a given period of time from the DateTime

**Syntax:** *`DateTime`*.minus(n, unit?)

**Returns:** DateTime

**Source:**  Custom n8n functionality

**Parameters:**

- `n` (Number|Object) - The number of units to subtract. Or use a Luxon \<a href=”[https://moment.github.io/luxon/api-docs/index.html#duration”>Duration](https://moment.github.io/luxon/api-docs/index.html#duration”>Duration)</a> object to subtract multiple units at once.
- `unit` (String) - optional - The units of the number. One of: <code>years</code>, <code>months</code>, <code>weeks</code>, <code>days</code>, <code>hours</code>, <code>minutes</code>, <code>seconds</code>, <code>milliseconds</code>

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.minus(7, 'days') //=> 2024-04-23T18:49
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.minus(4, 'years') //=> 2020-04-30T18:49
```

> **Info**
> **Code node:** Luxon's native `DateTime.prototype.minus()` also exists in the Code node, but only accepts a single [Duration-like object](https://moment.github.io/luxon/api-docs/index.html#datetimeminus) (e.g. `dt.minus({ days: 7 })`), not this page's n8n-only `(n, unit)` shorthand. Passing `dt.minus(7, 'days')` in the Code node will not raise an error but will not subtract 7 days either — double-check the result if you use this signature there.

## *`DateTime`*.**`minute`** <a id="datetimeminute"></a>

**Description:** The minute of the hour (0-59)

**Syntax:** *`DateTime`*.minute

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.minute //=> 49
```

## *`DateTime`*.**`month`** <a id="datetimemonth"></a>

**Description:** The month (1-12)

**Syntax:** *`DateTime`*.month

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.month //=> 3
```

## *`DateTime`*.**`monthLong`** <a id="datetimemonthlong"></a>

**Description:** The textual long month name, e.g. 'October'. Defaults to the system's locale if no locale has been specified.

**Syntax:** *`DateTime`*.monthLong

**Returns:** String

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.monthLong //=> 'March'
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.setLocale('de-DE').monthLong //=> 'März'
```

## *`DateTime`*.**`monthShort`** <a id="datetimemonthshort"></a>

**Description:** The textual abbreviated month name, e.g. 'Oct'. Defaults to the system's locale if no locale has been specified.

**Syntax:** *`DateTime`*.monthShort

**Returns:** String

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.monthShort //=> 'Mar'
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.setLocale('de-DE').monthShort //=> 'Mär'
```

## *`DateTime`*.**`plus()`** <a id="datetimeplus"></a>

**Description:** Adds a given period of time to the DateTime

**Syntax:** *`DateTime`*.plus(n, unit?)

**Returns:** DateTime

**Source:**  Custom n8n functionality

**Parameters:**

- `n` (Number|Object) - The number of units to add. Or use a Luxon \<a href=”[https://moment.github.io/luxon/api-docs/index.html#duration”>Duration](https://moment.github.io/luxon/api-docs/index.html#duration”>Duration)</a> object to add multiple units at once.
- `unit` (String) - optional - The units of the number. One of: <code>years</code>, <code>months</code>, <code>weeks</code>, <code>days</code>, <code>hours</code>, <code>minutes</code>, <code>seconds</code>, <code>milliseconds</code>

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.plus(7, 'days') //=> 2024-04-06T18:49
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.plus(4, 'years') //=> 2028-04-30T18:49
```

> **Info**
> **Code node:** Luxon's native `DateTime.prototype.plus()` also exists in the Code node, but only accepts a single [Duration-like object](https://moment.github.io/luxon/api-docs/index.html#datetimeplus) (e.g., `dt.plus({ days: 7 })`), not this page's n8n-only `(n, unit)` shorthand. Passing `dt.plus(7, 'days')` in the Code node will not raise an error but will not add 7 days either. Double-check the result if you use this signature there.

## *`DateTime`*.**`quarter`** <a id="datetimequarter"></a>

**Description:** The quarter of the year (1-4)

**Syntax:** *`DateTime`*.quarter

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.quarter //=> 1
```

## *`DateTime`*.**`second`** <a id="datetimesecond"></a>

**Description:** The second of the minute (0-59)

**Syntax:** *`DateTime`*.second

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49:07.234".toDateTime()
dt.second //=> 7
```

## *`DateTime`*.**`set()`** <a id="datetimeset"></a>

**Description:** Assigns new values to specified units of the DateTime. To round a DateTime, see also <code>startOf()</code> and <code>endOf()</code>.

**Syntax:** *`DateTime`*.set(values)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `values ` (Object) - An object containing the units to set and corresponding values to assign. Possible keys are <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code> and <code>millsecond</code>.

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.set({year:1982, month:10}) //=> 1982-10-20T18:49
```

## *`DateTime`*.**`setLocale()`** <a id="datetimesetlocale"></a>

**Description:** Sets the locale, which determines the language and formatting for the DateTime. Useful when generating a textual representation of the DateTime, e.g. with <code>format()</code> or <code>toLocaleString()</code>.

**Syntax:** *`DateTime`*.setLocale(locale)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `locale ` (String) - The locale to assign, e.g. ‘en-GB’ for British English or ‘pt-BR’ for Brazilian Portuguese. \<a href=”[https://www.localeplanet.com/icu/”>List](https://www.localeplanet.com/icu/”>List)</a> (unofficial)

**Examples:**

```javascript
$now.setLocale('de-DE').toLocaleString({'dateStyle':'long'}) //=> 5. Oktober 2024
```

```javascript
$now.setLocale('fr-FR').toLocaleString({'dateStyle':'long'}) //=> 5 octobre 2024
```

## *`DateTime`*.**`setZone()`** <a id="datetimesetzone"></a>

**Description:** Converts the DateTime to the given time zone. The DateTime still represents the same moment unless specified in the options. See also <code>toLocal()</code> and <code>toUTC()</code>.

**Syntax:** *`DateTime`*.setZone(zone, opts)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `zone ` (String) - optional - A zone identifier, either in the format ‘America/New\_York’, 'UTC+3', or the strings 'local' or 'utc'
- `opts ` (Object) - optional - Options that affect the output. Possible properties: <code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.

**Examples:**

```javascript
// dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
dt.setZone('America/Buenos_aires') //=> 2023-12-31T19:00:00.000-03:00
```

```javascript
// dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
dt.setZone('UTC+7') //=> 2024-01-01T05:00:00.000+07:00
```

## *`DateTime`*.**`startOf()`** <a id="datetimestartof"></a>

**Description:** Rounds the DateTime down to the beginning of one of its units, e.g. the start of the month

**Syntax:** *`DateTime`*.startOf(unit, opts)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `unit ` (String) - The unit to round to the beginning of. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.
- `opts ` (Object) - optional - Object with options that affect the output. Possible properties: <code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.

**Examples:**

```javascript
// dt = "2024-03-20T18:49".toDateTime()
dt.startOf('month') //=> 2024-03-01T00:00
```

## *`DateTime`*.**`toISO()`** <a id="datetimetoiso"></a>

**Description:** Returns an ISO 8601-compliant string representation of the DateTime

**Syntax:** *`DateTime`*.toISO(opts)

**Returns:** String

**Type:** Luxon

**Parameters:**

- `opts ` (Object) - optional - Configuration options. See \<a href=”[https://moment.github.io/luxon/api-docs/index.html#datetimetoiso”>Luxon](https://moment.github.io/luxon/api-docs/index.html#datetimetoiso”>Luxon) docs</a> for more info.

**Examples:**

```javascript
$now.toISO() //=> 2024-04-05T18:44:55.525+02:00
```

## *`DateTime`*.**`toLocal()`** <a id="datetimetolocal"></a>

**Description:** Converts a DateTime to the workflow’s local time zone. The DateTime still represents the same moment unless specified in the parameters. The workflow’s time zone can be set in the workflow settings.

**Syntax:** *`DateTime`*.toLocal()

**Returns:** DateTime

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-01-01T00:00:00.000Z".toDateTime()
dt.toLocal() //=> 2024-01-01T01:00:00.000+01:00, if time zone is Europe/Berlin
```

## *`DateTime`*.**`toLocaleString()`** <a id="datetimetolocalestring"></a>

**Description:** Returns a localised string representing the DateTime, i.e. in the language and format corresponding to its locale. Defaults to the system's locale if none specified.

**Syntax:** *`DateTime`*.toLocaleString(formatOpts)

**Returns:** String

**Type:** Luxon

**Parameters:**

- `formatOpts ` (Object) - optional - Configuration options for the rendering. See \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat)</a> for a full list. Defaults to rendering a short date.

**Examples:**

```javascript
$now.toLocaleString() //=> '4/30/2024'
$now.toLocaleString({'dateStyle':'medium', 'timeStyle':'short'}) //=> 'Apr 30, 2024, 10:00 PM'
// (if in US English locale)
```

```javascript
$now.setLocale('de-DE').toLocaleString() //=> '30.4.2024'
```

```javascript
$now.toLocaleString({'dateStyle':'short'}) //=> '4/30/2024'
$now.toLocaleString({'dateStyle':'medium'}) //=> 'Apr 30, 2024'
$now.toLocaleString({'dateStyle':'long'}) //=> 'April 30, 2024'
$now.toLocaleString({'dateStyle':'full'}) //=> 'Tuesday, April 30, 2024'
// (if in US English locale)
```

```javascript
$now.toLocaleString({'year':'numeric', 'month':'numeric', 'day':'numeric'}) //=> '4/30/2024'
$now.toLocaleString({'year':'2-digit', 'month':'2-digit', 'day':'2-digit'}) //=> '04/30/24'
$now.toLocaleString({'month':'short', 'weekday':'short', 'day':'numeric'}) //=> 'Tue, Apr 30'
$now.toLocaleString({'month':'long', 'weekday':'long', 'day':'numeric'}) //=> 'Tuesday, April 30'
// (if in US English locale)
```

```javascript
$now.toLocaleString({'timeStyle':'short'}) //=> '10:00 PM'
$now.toLocaleString({'timeStyle':'medium'}) //=> '10:00:58 PM'
$now.toLocaleString({'timeStyle':'long'}) //=> '10:00:58 PM GMT+2'
$now.toLocaleString({'timeStyle':'full'}) //=> '10:00:58 PM Central European Summer Time'
// (if in US English locale)
```

```javascript
$now.toLocaleString({'hour':'numeric', 'minute':'numeric', hourCycle:'h24'}) //=> '22:00'
$now.toLocaleString({'hour':'2-digit', 'minute':'2-digit', hourCycle:'h12'}) //=> '10:00 PM'
// (if in US English locale)
```

## *`DateTime`*.**`toMillis()`** <a id="datetimetomillis"></a>

**Description:** Returns a Unix timestamp in milliseconds (the number elapsed since 1st Jan 1970)

**Syntax:** *`DateTime`*.toMillis()

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
$now.toMillis() //=> 1712334324677
```

## *`DateTime`*.**`toRelative()`** <a id="datetimetorelative"></a>

**Description:** Returns a textual representation of the time relative to now, e.g. ‘in two days’. Rounds down by default.

**Syntax:** *`DateTime`*.toRelative(options)

**Returns:** String

**Type:** Luxon

**Parameters:**

- `options ` (Object) - optional - Options that affect the output. Possible properties: <code>unit</code> = the unit to default to (<code>years</code>, <code>months</code>, <code>days</code>, etc.). <code>locale</code> = the language and formatting to use (e.g. <code>de</code>, <code>fr</code>)

**Examples:**

```javascript
$now.plus(1, 'day').toRelative() //=> "in 1 day"
```

```javascript
$now.plus(1, 'day').toRelative({unit:'hours'}) //=> "in 24 hours"
```

```javascript
$now.plus(1, 'day').toRelative({locale:'es'}) //=> "dentro de 1 día"
```

## *`DateTime`*.**`toSeconds()`** <a id="datetimetoseconds"></a>

**Description:** Returns a Unix timestamp in seconds (the number elapsed since 1st Jan 1970)

**Syntax:** *`DateTime`*.toSeconds()

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
$now.toSeconds() //=> 1712334442.372
```

## *`DateTime`*.**`toString()`** <a id="datetimetostring"></a>

**Description:** Returns a string representation of the DateTime. Similar to <code>toISO()</code>. For more formatting options, see <code>format()</code> or <code>toLocaleString()</code>.

**Syntax:** *`DateTime`*.toString()

**Returns:** string

**Type:** Luxon

**Examples:**

```javascript
$now.toString() //=> 2024-04-05T18:44:55.525+02:00
```

## *`DateTime`*.**`toUTC()`** <a id="datetimetoutc"></a>

**Description:** Converts a DateTime to the UTC time zone. The DateTime still represents the same moment unless specified in the parameters. Use <code>setZone()</code> to convert to other zones.

**Syntax:** *`DateTime`*.toUTC(offset, opts)

**Returns:** DateTime

**Type:** Luxon

**Parameters:**

- `offset ` (Number) - optional - An offset from UTC in minutes
- `opts ` (Object) - optional - Object with options that affect the output. Possible properties: <code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.

**Examples:**

```javascript
// dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
dt.toUTC() //=> 2023-12-31T22:00:00.000Z
```

## *`DateTime`*.**`weekday`** <a id="datetimeweekday"></a>

**Description:** The day of the week. 1 is Monday and 7 is Sunday.

**Syntax:** *`DateTime`*.weekday

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.weekday //=> 6
```

## *`DateTime`*.**`weekdayLong`** <a id="datetimeweekdaylong"></a>

**Description:** The textual long weekday name, e.g. 'Wednesday'. Defaults to the system's locale if no locale has been specified.

**Syntax:** *`DateTime`*.weekdayLong

**Returns:** String

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.weekdayLong //=> 'Saturday'
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.setLocale('de-DE').weekdayLong //=> 'Samstag'
```

## *`DateTime`*.**`weekdayShort`** <a id="datetimeweekdayshort"></a>

**Description:** The textual abbreviated weekday name, e.g. 'Wed'. Defaults to the system's locale if no locale has been specified.

**Syntax:** *`DateTime`*.weekdayShort

**Returns:** String

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.weekdayShort //=> 'Sat'
```

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.setLocale('fr-FR').weekdayShort //=> 'sam.'
```

## *`DateTime`*.**`weekNumber`** <a id="datetimeweeknumber"></a>

**Description:** The week number of the year (1-52ish)

**Syntax:** *`DateTime`*.weekNumber

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.weekNumber //=> 13
```

## *`DateTime`*.**`year`** <a id="datetimeyear"></a>

**Description:** The year

**Syntax:** *`DateTime`*.year

**Returns:** Number

**Type:** Luxon

**Examples:**

```javascript
// dt = "2024-03-30T18:49".toDateTime()
dt.year //=> 2024
```

## *`DateTime`*.**`zone`** <a id="datetimezone"></a>

**Description:** The time zone associated with the DateTime

**Syntax:** *`DateTime`*.zone

**Returns:** Object

**Type:** Luxon

**Examples:**

```javascript
$now.zone //=> {"zoneName": "Europe/Berlin", "valid": true}
```
