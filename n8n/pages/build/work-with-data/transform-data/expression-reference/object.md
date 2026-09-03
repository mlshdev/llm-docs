> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/object.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/work-with-data/transform-data/expression-reference/object.md)

# Object <a id="object"></a>

## *`Object`*.**`compact()`** <a id="objectcompact"></a>

**Description:** Removes all fields that have empty values, i.e. are <code>null</code> or <code>""</code>

**Syntax:** *`Object`*.compact()

**Returns:** Object

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'x':null, 'y':2, 'z':''}
obj.compact() //=> {'y':2}
```

## *`Object`*.**`hasField()`** <a id="objecthasfield"></a>

**Description:** Returns <code>true</code> if there is a field called <code>name</code>. Only checks top-level keys. Comparison is case-sensitive.

**Syntax:** *`Object`*.hasField(name)

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Parameters:**

- `name` (String) - The name of the key to search for

**Examples:**

```javascript
// obj = {'name':'Nathan', 'age':42}
obj.hasField('name') //=> true
```

```javascript
// obj = {'name':'Nathan', 'age':42}
obj.hasField('Name') //=> false
obj.hasField('inventedField') //=> false
```

## *`Object`*.**`isEmpty()`** <a id="objectisempty"></a>

**Description:** Returns <code>true</code> if the Object has no keys (fields) set or is <code>null</code>

**Syntax:** *`Object`*.isEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name': 'Nathan'}
obj.isEmpty() //=> false
```

```javascript
// obj = {}
obj.isEmpty() //=> true
```

## *`Object`*.**`isNotEmpty()`** <a id="objectisnotempty"></a>

**Description:** Returns <code>true</code> if the Object has at least one key (field) set

**Syntax:** *`Object`*.isNotEmpty()

**Returns:** Boolean

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name': 'Nathan'}
obj.isNotEmpty() //=> true
```

```javascript
// obj = {}
obj.isNotEmpty() //=> false
```

## *`Object`*.**`keepFieldsContaining()`** <a id="objectkeepfieldscontaining"></a>

**Description:** Removes any fields whose values don’t at least partly match the given <code>value</code>. Comparison is case-sensitive. Fields that aren’t strings will always be removed.

**Syntax:** *`Object`*.keepFieldsContaining(value)

**Returns:** Object

**Source:**  Custom n8n functionality

**Parameters:**

- `value` (String) - The text that a value must contain in order to be kept

**Examples:**

```javascript
// obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42 }
obj.keepFieldsContaining('Nathan') //=> {'name': 'Mr Nathan'}
```

```javascript
// obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42 }
obj.keepFieldsContaining('nathan') //=> {}
obj.keepFieldsContaining('han') //=> {'name': 'Mr Nathan', 'city':'hanoi'}
```

## *`Object`*.**`keys()`** <a id="objectkeys"></a>

**Description:** Returns an array with all the field names (keys) the object contains. The same as JavaScript’s <code>Object.keys(obj)</code>.

**Syntax:** *`Object`*.keys()

**Returns:** Array<String>

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name': 'Mr Nathan', age: 42 }
obj.keys() //=> ['name', 'age']
```

## *`Object`*.**`merge()`** <a id="objectmerge"></a>

**Description:** Merges the two Objects into a single one. If a key (field name) exists in both Objects, the value from the first (base) Object is used.

**Syntax:** *`Object`*.merge(otherObject)

**Returns:** Object

**Source:**  Custom n8n functionality

**Parameters:**

- `otherObject` (Object) - The Object to merge with the base Object.

**Examples:**

```javascript
// obj1 = {'name':'Nathan', 'age': 42}
// obj2 = {'name':'Jan', 'city': 'hanoi'}
obj1.merge(obj2) //=> {'name':'Jan', 'city': 'hanoi', 'age':42}
```

## *`Object`*.**`removeField()`** <a id="objectremovefield"></a>

**Description:** Removes a field from the Object. The same as JavaScript’s <code>delete</code>.

**Syntax:** *`Object`*.removeField(key)

**Returns:** Object

**Source:**  Custom n8n functionality

**Parameters:**

- `key` (String) - The name of the field to remove

**Examples:**

```javascript
// obj = {'name':'Nathan', 'city':'hanoi'}
obj.removeField('name') //=> {'city':'hanoi'}
```

## *`Object`*.**`removeFieldsContaining()`** <a id="objectremovefieldscontaining"></a>

**Description:** Removes keys (fields) whose values at least partly match the given <code>value</code>. Comparison is case-sensitive. Fields that aren’t strings are always kept.

**Syntax:** *`Object`*.removeFieldsContaining(value)

**Returns:** Object

**Source:**  Custom n8n functionality

**Parameters:**

- `value` (String) - The text that a value must contain in order to be removed

**Examples:**

```javascript
// obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
obj.removeFieldsContaining('Nathan') //=> {'city':'hanoi', age: 42}
```

```javascript
// obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
obj.removeFieldsContaining('han') //=> {age: 42}
obj.removeFieldsContaining('nathan') //=> {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
```

## *`Object`*.**`toJsonString()`** <a id="objecttojsonstring"></a>

**Description:** Converts the Object to a JSON string. Similar to JavaScript’s <code>JSON.stringify()</code>.

**Syntax:** *`Object`*.toJsonString()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name':'Nathan', age:42}
obj.toJsonString() //=> '{"name":"Nathan","age":42}'

```

## *`Object`*.**`urlEncode()`** <a id="objecturlencode"></a>

**Description:** Generates a URL parameter string from the Object’s keys and values. Only top-level keys are supported.

**Syntax:** *`Object`*.urlEncode()

**Returns:** String

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name':'Mr Nathan', 'city':'hanoi'}
obj.urlEncode() //=> 'name=Mr+Nathan&city=hanoi'
```

## *`Object`*.**`values()`** <a id="objectvalues"></a>

**Description:** Returns an array with all the values of the fields the Object contains. The same as JavaScript’s <code>Object.values(obj)</code>.

**Syntax:** *`Object`*.values()

**Returns:** Array<String>

**Source:**  Custom n8n functionality

**Examples:**

```javascript
// obj = {'name': 'Mr Nathan', age: 42 }
obj.values() //=> ['Mr Nathan', 42]
```
