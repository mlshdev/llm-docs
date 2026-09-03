> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/boolean.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/work-with-data/transform-data/expression-reference/boolean.md)

# Boolean <a id="boolean"></a>

## *`Boolean`*.**`isEmpty()`** <a id="booleanisempty"></a>

**Description:** Returns <code>false</code> for all booleans. Returns <code>true</code> for <code>null</code>.

**Syntax:** *`Boolean`*.isEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// bool = true
bool.isEmpty() // => false
```

```javascript
// bool = false
bool.isEmpty() // => false
```

```javascript
// bool = null
bool.isEmpty() // => true
```

## *`Boolean`*.**`toNumber()`** <a id="booleantonumber"></a>

**Description:** Converts <code>true</code> to 1 and <code>false</code> to 0

**Syntax:** *`Boolean`*.toNumber()

**Returns:** Number

**Source:**  Custom n8n functionality

**Examples:**

```javascript
true.toNumber() //=> 1
```

```javascript
false.toNumber() //=> 0
```

## *`Boolean`*.**`toString()`** <a id="booleantostring"></a>

**Description:** Converts <code>true</code> to the string ‘true’ and <code>false</code> to the string ‘false’

**Syntax:** *`Boolean`*.toString()

**Returns:** String

**Source:** JavaScript function

**Examples:**

```javascript
// bool = true
bool.toString() //=> 'true'
```

```javascript
// bool = false
bool.toString() //=> 'false'
```
