> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfielddoublelistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfielddoublelistvalue)

# CKDBRecordFieldDoubleListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type double list.

## Declaration

```
dictionary CKDBRecordFieldDoubleListValue {
	string type;
	Double[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldDoubleListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfielddoublelistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfielddoublelistvalue/value.md): An array of double values.

## See Also

### Doubles

- [CKDBRecordFieldDoubleValue](ckdbrecordfielddoublevalue.md): The value of the field of type double.
- [CKDBRecordFieldEncryptedDoubleValue](ckdbrecordfieldencrypteddoublevalue.md): The value of the encrypted field of type double.
- [CKDBRecordFieldEncryptedDoubleListValue](ckdbrecordfieldencrypteddoublelistvalue.md): The value of the encrypted field of type double list.
