> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldbytesvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldbytesvalue)

# CKDBRecordFieldBytesValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

A field value that contains an array of bytes.

## Declaration

```
dictionary CKDBRecordFieldBytesValue {
	string type;
	ByteArray? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldBytesValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldbytesvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldbytesvalue/value.md): The array of bytes this field contains.

## See Also

### Bytes

- [CKDBRecordFieldBytesListValue](ckdbrecordfieldbyteslistvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldEncryptedBytesValue](ckdbrecordfieldencryptedbytesvalue.md): The value of the encrypted field of type bytes.
- [CKDBRecordFieldEncryptedBytesListValue](ckdbrecordfieldencryptedbyteslistvalue.md): The value of the encrypted field of type bytes list.
