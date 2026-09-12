> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldstringvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldstringvalue)

# CKDBRecordFieldStringValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type string.

## Declaration

```
dictionary CKDBRecordFieldStringValue {
	string type;
	string? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldStringValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldstringvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldstringvalue/value.md): A string value.

## See Also

### Strings

- [CKDBRecordFieldStringListValue](ckdbrecordfieldstringlistvalue.md): The value of the field of type string list.
- [CKDBRecordFieldEncryptedStringValue](ckdbrecordfieldencryptedstringvalue.md): The value of the encrypted field of type string.
- [CKDBRecordFieldEncryptedStringListValue](ckdbrecordfieldencryptedstringlistvalue.md): The value of the encrypted field of type string list.
