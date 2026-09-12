> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfielddoublevalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfielddoublevalue)

# CKDBRecordFieldDoubleValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type double.

## Declaration

```
dictionary CKDBRecordFieldDoubleValue {
	string type;
	Double? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldDoubleValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfielddoublevalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfielddoublevalue/value.md): A double value.

## See Also

### Doubles

- [CKDBRecordFieldDoubleListValue](ckdbrecordfielddoublelistvalue.md): The value of the field of type double list.
- [CKDBRecordFieldEncryptedDoubleValue](ckdbrecordfieldencrypteddoublevalue.md): The value of the encrypted field of type double.
- [CKDBRecordFieldEncryptedDoubleListValue](ckdbrecordfieldencrypteddoublelistvalue.md): The value of the encrypted field of type double list.
