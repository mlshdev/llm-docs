> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencrypteddoublevalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencrypteddoublevalue)

# CKDBRecordFieldEncryptedDoubleValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type double.

## Declaration

```
dictionary CKDBRecordFieldEncryptedDoubleValue {
	string type;
	Double? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedDoubleValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencrypteddoublevalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencrypteddoublevalue/value.md): A double value.

## See Also

### Doubles

- [CKDBRecordFieldDoubleValue](ckdbrecordfielddoublevalue.md): The value of the field of type double.
- [CKDBRecordFieldDoubleListValue](ckdbrecordfielddoublelistvalue.md): The value of the field of type double list.
- [CKDBRecordFieldEncryptedDoubleListValue](ckdbrecordfieldencrypteddoublelistvalue.md): The value of the encrypted field of type double list.
