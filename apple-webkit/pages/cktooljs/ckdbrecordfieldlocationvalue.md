> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldlocationvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldlocationvalue)

# CKDBRecordFieldLocationValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type location.

## Declaration

```
dictionary CKDBRecordFieldLocationValue {
	string type;
	CKDBLocation? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldLocationValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldlocationvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldlocationvalue/value.md)

## See Also

### Locations

- [CKDBRecordFieldLocationListValue](ckdbrecordfieldlocationlistvalue.md): The value of the field of type location list.
- [CKDBRecordFieldEncryptedLocationValue](ckdbrecordfieldencryptedlocationvalue.md): The value of the encrypted field of type location.
- [CKDBRecordFieldEncryptedLocationListValue](ckdbrecordfieldencryptedlocationlistvalue.md): The value of the encrypted field of type location list.
