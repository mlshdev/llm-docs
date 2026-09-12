> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedbytesvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedbytesvalue)

# CKDBRecordFieldEncryptedBytesValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type bytes.

## Declaration

```
dictionary CKDBRecordFieldEncryptedBytesValue {
	string type;
	ByteArray? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedBytesValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedbytesvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedbytesvalue/value.md): A string containing a sequence of bytes.

## See Also

### Bytes

- [CKDBRecordFieldBytesValue](ckdbrecordfieldbytesvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldBytesListValue](ckdbrecordfieldbyteslistvalue.md): A field value that contains an array of bytes.
- [CKDBRecordFieldEncryptedBytesListValue](ckdbrecordfieldencryptedbyteslistvalue.md): The value of the encrypted field of type bytes list.
