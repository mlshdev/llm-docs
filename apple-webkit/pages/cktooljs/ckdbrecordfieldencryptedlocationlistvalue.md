> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedlocationlistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedlocationlistvalue)

# CKDBRecordFieldEncryptedLocationListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type location list.

## Declaration

```
dictionary CKDBRecordFieldEncryptedLocationListValue {
	string type;
	CKDBLocation[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedLocationListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedlocationlistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedlocationlistvalue/value.md): An array of location objects.

## See Also

### Locations

- [CKDBRecordFieldLocationValue](ckdbrecordfieldlocationvalue.md): The value of the field of type location.
- [CKDBRecordFieldLocationListValue](ckdbrecordfieldlocationlistvalue.md): The value of the field of type location list.
- [CKDBRecordFieldEncryptedLocationValue](ckdbrecordfieldencryptedlocationvalue.md): The value of the encrypted field of type location.
