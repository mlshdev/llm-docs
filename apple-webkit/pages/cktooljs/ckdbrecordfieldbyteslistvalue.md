> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldbyteslistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldbyteslistvalue)

# CKDBRecordFieldBytesListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

A field value that contains an array of bytes.

## Declaration

```
dictionary CKDBRecordFieldBytesListValue {
	string type;
	ByteArray[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldBytesListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldbyteslistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldbyteslistvalue/value.md): A field value that contains an array of byte arrays.

## See Also

### Bytes

- [CKDBRecordFieldBytesValue](ckdbrecordfieldbytesvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldEncryptedBytesValue](ckdbrecordfieldencryptedbytesvalue.md): The value of the encrypted field of type bytes.
- [CKDBRecordFieldEncryptedBytesListValue](ckdbrecordfieldencryptedbyteslistvalue.md): The value of the encrypted field of type bytes list.
