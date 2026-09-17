> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedlocationvalue

# CKDBRecordFieldEncryptedLocationValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type location.

## Declaration

```
dictionary CKDBRecordFieldEncryptedLocationValue {
	string type;
	CKDBLocation? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedLocationValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedlocationvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedlocationvalue/value.md)

## See Also

### Locations

- [CKDBRecordFieldLocationValue](ckdbrecordfieldlocationvalue.md): The value of the field of type location.
- [CKDBRecordFieldLocationListValue](ckdbrecordfieldlocationlistvalue.md): The value of the field of type location list.
- [CKDBRecordFieldEncryptedLocationListValue](ckdbrecordfieldencryptedlocationlistvalue.md): The value of the encrypted field of type location list.
