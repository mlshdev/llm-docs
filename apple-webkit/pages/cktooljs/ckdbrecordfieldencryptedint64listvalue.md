> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedint64listvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedint64listvalue)

# CKDBRecordFieldEncryptedInt64ListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type int64 list.

## Declaration

```
dictionary CKDBRecordFieldEncryptedInt64ListValue {
	string type;
	Int64[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedInt64ListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedint64listvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedint64listvalue/value.md): An array of int64 values.

## See Also

### Int64

- [CKDBRecordFieldInt64Value](ckdbrecordfieldint64value.md): The value of the field of type int64.
- [CKDBRecordFieldInt64ListValue](ckdbrecordfieldint64listvalue.md): The value of the field of type int64 list.
- [CKDBRecordFieldEncryptedInt64Value](ckdbrecordfieldencryptedint64value.md): The value of the encrypted field of type int64.
