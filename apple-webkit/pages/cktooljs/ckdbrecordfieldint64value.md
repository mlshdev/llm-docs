> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldint64value](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldint64value)

# CKDBRecordFieldInt64Value

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type int64.

## Declaration

```
dictionary CKDBRecordFieldInt64Value {
	string type;
	Int64? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldInt64Value } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldint64value/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldint64value/value.md): An int64 value.

## See Also

### Int64

- [CKDBRecordFieldInt64ListValue](ckdbrecordfieldint64listvalue.md): The value of the field of type int64 list.
- [CKDBRecordFieldEncryptedInt64Value](ckdbrecordfieldencryptedint64value.md): The value of the encrypted field of type int64.
- [CKDBRecordFieldEncryptedInt64ListValue](ckdbrecordfieldencryptedint64listvalue.md): The value of the encrypted field of type int64 list.
