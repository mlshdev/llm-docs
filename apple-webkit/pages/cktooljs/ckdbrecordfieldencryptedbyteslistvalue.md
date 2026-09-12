> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedbyteslistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedbyteslistvalue)

# CKDBRecordFieldEncryptedBytesListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type bytes list.

## Declaration

```
dictionary CKDBRecordFieldEncryptedBytesListValue {
	string type;
	ByteArray[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedBytesListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedbyteslistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedbyteslistvalue/value.md): An array of strings, each containing a sequence of bytes.

## See Also

### Bytes

- [CKDBRecordFieldBytesValue](ckdbrecordfieldbytesvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldBytesListValue](ckdbrecordfieldbyteslistvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldEncryptedBytesValue](ckdbrecordfieldencryptedbytesvalue.md): The value of the encrypted field of type bytes.
