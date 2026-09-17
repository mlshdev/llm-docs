> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldlocationlistvalue

# CKDBRecordFieldLocationListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type location list.

## Declaration

```
dictionary CKDBRecordFieldLocationListValue {
	string type;
	CKDBLocation[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldLocationListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldlocationlistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldlocationlistvalue/value.md): An array of values, each containing a location coordinates.

## See Also

### Locations

- [CKDBRecordFieldLocationValue](ckdbrecordfieldlocationvalue.md): The value of the field of type location.
- [CKDBRecordFieldEncryptedLocationValue](ckdbrecordfieldencryptedlocationvalue.md): The value of the encrypted field of type location.
- [CKDBRecordFieldEncryptedLocationListValue](ckdbrecordfieldencryptedlocationlistvalue.md): The value of the encrypted field of type location list.
