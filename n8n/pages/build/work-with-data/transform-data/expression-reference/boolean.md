> Pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/boolean.md](https://github.com/n8n-io/n8n-docs/blob/46cfbebae86e861ae0a5bb0ff78d1798361bc3e0/docs/build/work-with-data/transform-data/expression-reference/boolean.md)

# Boolean <a id="boolean"></a>

## *`Boolean`*.**`isEmpty()`** <a id="booleanisempty"></a>

**Description:** Returns <code>true</code> if the boolean is <code>false</code>, <code>null</code>, or <code>undefined</code>. Returns <code>false</code> if the boolean is <code>true</code>.

> **Warning**
> `isEmpty()` isn't a null check. On a boolean it treats `false` as empty, so `{{ $json.flag.isEmpty() }}` returns `true` for both a missing field and a field set to `false`. To test only for a missing value, compare directly, for example `{{ $json.flag === null }}`, or use the **exists** operator in the **If** node.

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
bool.isEmpty() // => true
```

```javascript
// bool = null
bool.isEmpty() // => true
```

## *`Boolean`*.**`isNotEmpty()`** <a id="booleanisnotempty"></a>

**Description:** Returns <code>true</code> if the boolean is <code>true</code>. Returns <code>false</code> if the boolean is <code>false</code>, <code>null</code>, or <code>undefined</code>. This is the inverse of <code>isEmpty()</code>.

**Syntax:** *`Boolean`*.isNotEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// bool = true
bool.isNotEmpty() // => true
```

```javascript
// bool = false
bool.isNotEmpty() // => false
```

```javascript
// bool = null
bool.isNotEmpty() // => false
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
