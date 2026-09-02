> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/string.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/build/work-with-data/transform-data/expression-reference/string.md)

# String <a id="string"></a>

## *`String`*.**`base64Decode()`** <a id="stringbase64decode"></a>

**Description:** Converts plain text to a base64-encoded string

**Syntax:** *`String`*.base64Encode()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"aGVsbG8=".base64Decode() //=> "hello"
```

## *`String`*.**`base64Encode()`** <a id="stringbase64encode"></a>

**Description:** Converts a base64-encoded string to plain text

**Syntax:** *`String`*.base64Encode()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"hello".base64Encode() //=> "aGVsbG8="
```

## *`String`*.**`concat()`** <a id="stringconcat"></a>

**Description:** Joins one or more strings onto the end of the base string. Alternatively, use the <code>+</code> operator (see examples).

**Syntax:** *`String`*.concat(string1, string2?, ..., stringN?)

**Returns:** String

**Source:** JavaScript function

**Parameters:**

- `string1` (String) - The first string to append
- `string2` (String) - optional - The second string to append
- `stringN` (String) - optional - The Nth string to append

**Examples:**

```javascript
'sea'.concat('food') //=> 'seafood'
'sea' + 'food' //=> 'seafood'
```

```javascript
'work'.concat('a', 'holic') //=> 'workaholic'
```

## *`String`*.**`extractDomain()`** <a id="stringextractdomain"></a>

**Description:** If the string is an email address or URL, returns its domain (or <code>undefined</code> if nothing found).

If the string also contains other content, try using <code>extractEmail()</code> or <code>extractUrl()</code> first.

**Syntax:** *`String`*.extractDomain()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"me@example.com".extractDomain() //=> 'example.com'
```

```javascript
"http://n8n.io/workflows".extractDomain() //=> 'n8n.io'
```

```javascript
"It's me@example.com".extractEmail().extractDomain() //=> 'example.com'
```

## *`String`*.**`extractEmail()`** <a id="stringextractemail"></a>

**Description:** Extracts the first email found in the string. Returns <code>undefined</code> if none is found.

**Syntax:** *`String`*.extractEmail()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"My email is me@example.com".extractEmail() //=> 'me@example.com'
```

## *`String`*.**`extractUrl()`** <a id="stringextracturl"></a>

**Description:** Extracts the first URL found in the string. Returns <code>undefined</code> if none is found. Only recognizes full URLs, e.g. those starting with <code>http</code>.

**Syntax:** *`String`*.extractUrl()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"Check out http://n8n.io".extractUrl() //=> 'http://n8n.io'
```

## *`String`*.**`extractUrlPath()`** <a id="stringextracturlpath"></a>

**Description:** Returns the part of a URL after the domain, or <code>undefined</code> if no URL found.

If the string also contains other content, try using <code>extractUrl()</code> first.

**Syntax:** *`String`*.extractUrlPath()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"http://n8n.io/workflows".extractUrlPath() //=> '/workflows'
```

```javascript
"Check out http://n8n.io/workflows".extractUrl().extractUrlPath() //=> '/workflows'
```

## *`String`*.**`hash()`** <a id="stringhash"></a>

**Description:** Returns the string hashed with the given algorithm. Defaults to md5 if not specified.

**Syntax:** *`String`*.hash(algo?)

**Returns:** String

**Source:**  Custom n8n functionality

**Parameters:**

- `algo` (String) - optional - The hashing algorithm to use. One of <code>md5</code>, <code>base64</code>, <code>sha1</code>, <code>sha224</code>, <code>sha256</code>, <code>sha384</code>, <code>sha512</code>, <code>sha3</code>, <code>ripemd160</code>

**Examples:**

```javascript
"hello".hash() //=> '5d41402abc4b2a76b9719d911017c592'
```

## *`String`*.**`includes()`** <a id="stringincludes"></a>

**Description:** Returns <code>true</code> if the string contains the <code>searchString</code>. Case-sensitive.

**Syntax:** *`String`*.includes(searchString, start?)

**Returns:** Boolean

**Source:** JavaScript function

**Parameters:**

- `searchString` (String) - The text to search for
- `start` (Number) - optional - The position (index) to start searching from

**Examples:**

```javascript
'team'.includes('tea') //=> true
'team'.includes('i') //=> false
```

```javascript
// Returns false if the case doesn't match, so consider using .toLowerCase() first
'team'.includes('Tea') //=> false
'Team'.toLowerCase().includes('tea') //=> true
```

## *`String`*.**`indexOf()`** <a id="stringindexof"></a>

**Description:** Returns the index (position) of the first occurrence of <code>searchString</code> within the base string, or -1 if not found. Case-sensitive.

**Syntax:** *`String`*.indexOf(searchString, start?)

**Returns:** Number

**Source:** JavaScript function

**Parameters:**

- `searchString` (String) - The text to search for
- `start` (Number) - optional - The position (index) to start searching from

**Examples:**

```javascript
'steam'.indexOf('tea') //=> 1
'steam'.indexOf('i') //=> -1
```

```javascript
// Returns -1 if the case doesn't match, so consider using .toLowerCase() first
'STEAM'.indexOf('tea') //=> -1
'STEAM'.toLowerCase().indexOf('tea') //=> 1
```

## *`String`*.**`isDomain()`** <a id="stringisdomain"></a>

**Description:** Returns <code>true</code> if the string is a domain

**Syntax:** *`String`*.isDomain()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"n8n.io".isDomain() //=> true
```

```javascript
"http://n8n.io".isDomain() //=> false
```

```javascript
"hello".isDomain() //=> false
```

## *`String`*.**`isEmail()`** <a id="stringisemail"></a>

**Description:** Returns <code>true</code> if the string is an email

**Syntax:** *`String`*.isEmail()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"me@example.com".isEmail() //=> true
```

```javascript
"It's me@example.com".isEmail() //=> false
```

```javascript
"hello".isEmail() //=> false
```

## *`String`*.**`isEmpty()`** <a id="stringisempty"></a>

**Description:** Returns <code>true</code> if the string has no characters or is <code>null</code>

**Syntax:** *`String`*.isEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"".isEmpty() // => true
```

```javascript
"hello".isEmpty() // => false
```

## *`String`*.**`isNotEmpty()`** <a id="stringisnotempty"></a>

**Description:** Returns <code>true</code> if the string has at least one character

**Syntax:** *`String`*.isNotEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"hello".isNotEmpty() // => true
```

```javascript
"".isNotEmpty() // => false
```

## *`String`*.**`isNumeric()`** <a id="stringisnumeric"></a>

**Description:** Returns <code>true</code> if the string represents a number

**Syntax:** *`String`*.isNumeric()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"1.2234".isNumeric() // true
```

```javascript
"hello".isNumeric() // false
```

```javascript
"123E23".isNumeric() // true
```

## *`String`*.**`isUrl()`** <a id="stringisurl"></a>

**Description:** Returns <code>true</code> if the string is a valid URL

**Syntax:** *`String`*.isUrl()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"https://n8n.io".isUrl() //=> true
```

```javascript
"n8n.io".isUrl() //=> false
```

```javascript
"hello".isUrl() //=> false
```

## *`String`*.**`length`** <a id="stringlength"></a>

**Description:** The number of characters in the string

**Syntax:** *`String`*.length

**Returns:** Number

**Source:** JavaScript function

**Examples:**

```javascript
"hello".length //=> 5
```

## *`String`*.**`match()`** <a id="stringmatch"></a>

**Description:** Matches the string against a \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a>. Returns an array containing the first match, or all matches if the <code>g</code> flag is set in the regular expression. Returns <code>null</code> if no matches are found.

For checking whether text is present, consider <code>includes()</code> instead.

**Syntax:** *`String`*.match(regexp)

**Returns:** Array

**Source:** JavaScript function

**Parameters:**

- `regexp` (RegExp) - A \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a> with the pattern to look for. Will look for multiple matches if the <code>g</code> flag is present (see examples).

**Examples:**

```javascript
// Match all words starting with 'r'
"rock and roll".match(/r[^ ]*/g) //=> ['rock', 'roll']
```

```javascript
// Match first word starting with 'r' (no 'g' flag)
"rock and roll".match(/r[^ ]*/) //=> ['rock']
```

```javascript
// For case-insensitive, add 'i' flag
"ROCK and roll".match(/r[^ ]*/ig) //=> ['ROCK', 'roll']
```

## *`String`*.**`parseJson()`** <a id="stringparsejson"></a>

**Description:** Returns the JavaScript Object or value represented by the string, or <code>undefined</code> if the string isn’t valid JSON. Single-quoted JSON is not supported.

**Syntax:** *`String`*.parseJson()

**Returns:** any

**Source:**  Custom n8n functionality

**Examples:**

```javascript
'{"name":"Nathan"}'.parseJson() //=> {"name":"Nathan"}
```

```javascript
"{'name':'Nathan'}".parseJson() //=> undefined
```

```javascript
'hello'.parseJson() //=> undefined
```

## *`String`*.**`quote()`** <a id="stringquote"></a>

**Description:** Wraps a string in quotation marks, and escapes any quotation marks already in the string. Useful when constructing JSON, SQL, etc.

**Syntax:** *`String`*.quote(mark?)

**Returns:** String

**Source:**  Custom n8n functionality

**Parameters:**

- `mark` (String) - optional - The type of quotation mark to use

**Examples:**

```javascript
'Nathan says "hi"'.quote() //=> '"Nathan says \"hi\""'
```

## *`String`*.**`removeMarkdown()`** <a id="stringremovemarkdown"></a>

**Description:** Removes any Markdown formatting from the string. Also removes HTML tags.

**Syntax:** *`String`*.removeMarkdown()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"*bold*, [link]()".removeMarkdown() //=> "bold, link"
```

## *`String`*.**`removeTags()`** <a id="stringremovetags"></a>

**Description:** Removes tags, such as HTML or XML, from the string

**Syntax:** *`String`*.removeTags()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"<b>bold</b>, <a>link</a>".removeTags() //=> "bold, link"
```

## *`String`*.**`replace()`** <a id="stringreplace"></a>

**Description:** Returns a string with the first occurrence of <code>pattern</code> replaced by <code>replacement</code>.

To replace all occurrences, use <code>replaceAll()</code> instead.

**Syntax:** *`String`*.replace(pattern, replacement)

**Returns:** String

**Source:** JavaScript function

**Parameters:**

- `pattern` (String|RegExp) - The pattern in the string to replace. Can be a string to match or a \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a>.
- `replacement` (String) - The new text to replace with

**Examples:**

```javascript
'Red or blue or green'.replace('or', 'and') //=> 'Red and blue or green'
```

```javascript
// A global, case-insensitive replacement:
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red");
```

```javascript
// A function to return the replacement text:
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue|house|car/i, function (x) {
  return x.toUpperCase();
});
```

## *`String`*.**`replaceAll()`** <a id="stringreplaceall"></a>

**Description:** Returns a string with all occurrences of <code>pattern</code> replaced by <code>replacement</code>

**Syntax:** *`String`*.replaceAll(pattern, replacement)

**Returns:** String

**Source:** JavaScript function

**Parameters:**

- `pattern` (String|RegExp) - The pattern in the string to replace. Can be a string to match or a \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a>.
- `replacement` (String|function) - The new text to replace with. Can be a string or a function that returns a string (see examples).

**Examples:**

```javascript
'Red or blue or green'.replace('or', 'and') //=> 'Red and blue and green'
```

```javascript
// Uppercase any occurrences of 'blue' or 'car'
// (You must include the 'g' flag when using a regex)

// text = 'Mr Blue has a blue car'
text.replaceAll(/blue|car/gi, x => x.toUpperCase()) //=> 'Mr BLUE has a BLUE CAR'

// Or with traditional function notation:
text.replaceAll(/blue|car/gi, function(x){return x.toUpperCase()}) //=> 'Mr BLUE has a BLUE CAR'
```

## *`String`*.**`replaceSpecialChars()`** <a id="stringreplacespecialchars"></a>

**Description:** Replaces special characters in the string with the closest ASCII character

**Syntax:** *`String`*.replaceSpecialChars()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"déjà".replaceSpecialChars() //=> "deja"
```

## *`String`*.**`search()`** <a id="stringsearch"></a>

**Description:** Returns the index (position) of the first occurrence of a pattern within the string, or -1 if not found. The pattern is specified using a \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a>. To use text instead, see <code>indexOf()</code>.

**Syntax:** *`String`*.search(regexp)

**Returns:** Number

**Source:** JavaScript function

**Parameters:**

- `regexp` (RegExp) - A \<a href=”[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_expressions”>regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>regular) expression</a> with the pattern to look for

**Examples:**

```javascript
// Pos of first word starting with 'n'
"Neat n8n node".search(/n[^ ]*/) //=> 5
```

```javascript
// Case-insensitive match with 'i'
// Pos of first word starting with 'n' or 'N'
"Neat n8n node".search(/n[^ ]*/i) //=> 0
```

## *`String`*.**`slice()`** <a id="stringslice"></a>

**Description:** Extracts a fragment of the string at the given position. For more advanced extraction, see <code>match()</code>.

**Syntax:** *`String`*.slice(start, end?)

**Returns:** String

**Source:** JavaScript function

**Parameters:**

- `start` (Number) - The position to start from. Positions start at 0. Negative numbers count back from the end of the string.
- `end` (String) - optional - The position to select up to. The character at the end position is not included. Negative numbers select from the end of the string. If omitted, will extract to the end of the string.

**Examples:**

```javascript
'Hello from n8n'.slice(0, 5) //=> 'Hello'
```

```javascript
'Hello from n8n'.slice(6) //=> 'from n8n'
```

```javascript
'Hello from n8n'.slice(-3) //=> 'n8n'
```

## *`String`*.**`split()`** <a id="stringsplit"></a>

**Description:** Splits the string into an array of substrings. Each split is made at the <code>separator</code>, and the separator isn’t included in the output.

The opposite of using <code>join()</code> on an array.

**Syntax:** *`String`*.split(separator?, limit?)

**Returns:** Array

**Source:** JavaScript function

**Parameters:**

- `separator` (String) - optional - The string (or regular expression) to use for splitting. If omitted, an array with the original string is returned.
- `limit` (Number) - optional - The max number of array elements to return. Returns all elements if omitted.

**Examples:**

```javascript
"wind,fire,water".split(",") //=> ['wind', 'fire', 'water']
```

```javascript
"me and you and her".split("and") //=> ['me ', ' you ', ' her']
```

```javascript
// Split one or more of space, comma and '?' using a regular expression
"me? you, and her".split(/[ ,?]+/) //=> ['me', 'you', 'and', 'her']
```

## *`String`*.**`startsWith()`** <a id="stringstartswith"></a>

**Description:** Returns <code>true</code> if the string starts with <code>searchString</code>. Case-sensitive.

**Syntax:** *`String`*.startsWith(searchString, start?)

**Returns:** Boolean

**Source:** JavaScript function

**Parameters:**

- `searchString` (String) - The text to check against the start of the base string
- `start` (Number) - optional - The position (index) to start searching from

**Examples:**

```javascript
'team'.startsWith('tea') //=> true
'team'.startsWith('Tea') //=> false
```

```javascript
// Returns false if the case doesn't match, so consider using .toLowerCase() first
'Team'.toLowerCase().startsWith('tea') //=> true
```

## *`String`*.**`substring()`** <a id="stringsubstring"></a>

**Description:** Extracts a fragment of the string at the given position. For more advanced extraction, see <code>match()</code>.

**Syntax:** *`String`*.substring(start, end?)

**Returns:** String

**Source:** JavaScript function

**Parameters:**

- `start` (Number) - The position to start from. Positions start at 0.
- `end` (String) - optional - The position to select up to. The character at the end position is not included. If omitted, will extract to the end of the string.

**Examples:**

```javascript
'Hello from n8n'.substring(0, 5) //=> 'Hello'
```

```javascript
'Hello from n8n'.substring(6) //=> 'from n8n'
```

## *`String`*.**`toBoolean()`** <a id="stringtoboolean"></a>

**Description:** Converts the string to a boolean value. <code>0</code>, <code>false</code> and <code>no</code> resolve to <code>false</code>, everything else to <code>true</code>. Case-insensitive.

**Syntax:** *`String`*.toBoolean()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"true".toBoolean() //=> true
```

```javascript
"false".toBoolean() //=> false
```

```javascript
"0".toBoolean() //=> false
```

```javascript
"hello".toBoolean() //=> true
```

## *`String`*.**`toDateTime()`** <a id="stringtodatetime"></a>

**Description:** Converts the string to a DateTime. Useful for further transformation. Supported formats for the string are ISO 8601, HTTP, RFC2822, SQL and Unix timestamp in milliseconds.

To parse other formats, use \<a href=”[https://moment.github.io/luxon/api-docs/index.html#datetimefromformat”>](https://moment.github.io/luxon/api-docs/index.html#datetimefromformat”>) <code>DateTime.fromFormat()</code></a>.

**Syntax:** *`String`*.toDateTime()

**Returns:** DateTime

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"2024-03-29T18:06:31.798+01:00".toDateTime()
```

```javascript
"Fri, 29 Mar 2024 18:08:01 +0100".toDateTime()
```

```javascript
"20240329".toDateTime()
```

```javascript
"1711732132990".toDateTime()
```

## *`String`*.**`toJsonString()`** <a id="stringtojsonstring"></a>

**Description:** Prepares the string to be inserted into a JSON object. Escapes any quotes and special characters (e.g. new lines), and wraps the string in quotes.

The same as JavaScript’s <code>JSON.stringify()</code>.

**Syntax:** *`String`*.toJsonString()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// str = 'The "best" colours: red\nbrown'
str.toJsonString() //=> '"The \\"best\\" colours: red\\nbrown"'
```

## *`String`*.**`toLowerCase()`** <a id="stringtolowercase"></a>

**Description:** Converts all letters in the string to lower case

**Syntax:** *`String`*.toLowerCase()

**Returns:** String

**Source:** JavaScript function

**Examples:**

```javascript
"I'm SHOUTing".toLowerCase() //=> "i'm shouting"
```

## *`String`*.**`toNumber()`** <a id="stringtonumber"></a>

**Description:** Converts a string representing a number to a number. Throws an error if the string doesn’t start with a valid number.

**Syntax:** *`String`*.toNumber()

**Returns:** Number

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"123".toNumber() //=> 123
```

```javascript
"1.23E10".toNumber() //=> 12300000000
```

## *`String`*.**`toSentenceCase()`** <a id="stringtosentencecase"></a>

**Description:** Changes the capitalization of the string to sentence case. The first letter of each sentence is capitalized and all others are lowercased.

**Syntax:** *`String`*.toSentenceCase()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"quick! brown FOX".toSentenceCase() //=> "Quick! Brown fox"
```

## *`String`*.**`toSnakeCase()`** <a id="stringtosnakecase"></a>

**Description:** Changes the format of the string to snake case. Spaces and dashes are replaced by <code>\_</code>, symbols are removed and all letters are lowercased.

**Syntax:** *`String`*.toSnakeCase()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"quick brown $FOX".toSnakeCase() //=> "quick_brown_fox"
```

## *`String`*.**`toTitleCase()`** <a id="stringtotitlecase"></a>

**Description:** Changes the capitalization of the string to title case. The first letter of each word is capitalized and the others left unchanged. Short prepositions and conjunctions aren’t capitalized (e.g. ‘a’, ‘the’).

**Syntax:** *`String`*.toTitleCase()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
"quick a brown FOX".toTitleCase() //=> "Quick a Brown Fox"
```

## *`String`*.**`toUpperCase()`** <a id="stringtouppercase"></a>

**Description:** Converts all letters in the string to upper case (capitals)

**Syntax:** *`String`*.toUpperCase()

**Source:** JavaScript function

**Examples:**

```javascript
"I'm not angry".toUpperCase() //=> "I'M NOT ANGRY"
```

## *`String`*.**`trim()`** <a id="stringtrim"></a>

**Description:** Removes whitespace from both ends of the string. Whitespace includes new lines, tabs, spaces, etc.

**Syntax:** *`String`*.trim()

**Returns:** String

**Source:** JavaScript function

**Examples:**

```javascript
'   lonely   '.trim() //=> 'lonely'
```

## *`String`*.**`urlDecode()`** <a id="stringurldecode"></a>

**Description:** Decodes a URL-encoded string. Replaces any character codes in the form of <code>%XX</code> with their corresponding characters.

**Syntax:** *`String`*.urlDecode(allChars?)

**Returns:** String

**Source:**  Custom n8n functionality

**Parameters:**

- `allChars` (Boolean) - optional - Whether to decode characters that are part of the URI syntax (e.g. <code>=</code>, <code>?</code>)

**Examples:**

```javascript
"name%3DNathan%20Automat".urlDecode() //=> "name=Nathan Automat"
```

```javascript
"name%3DNathan%20Automat".urlDecode(true) //=> "name%3DNathan Automat"
```

## *`String`*.**`urlEncode()`** <a id="stringurlencode"></a>

**Description:** Encodes the string so that it can be used in a URL. Spaces and special characters are replaced with codes of the form <code>%XX</code>.

**Syntax:** *`String`*.urlEncode(allChars?)

**Returns:** String

**Source:**  Custom n8n functionality

**Parameters:**

- `allChars` (Boolean) - optional - Whether to encode characters that are part of the URI syntax (e.g. <code>=</code>, <code>?</code>)

**Examples:**

```javascript
"name=Nathan Automat".urlEncode() //=> "name%3DNathan%20Automat"
```

```javascript
"name=Nathan Automat".urlEncode(true) //=> "name=Nathan%20Automat"
```
