> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldreferencevalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldreferencevalue)

# CKDBRecordFieldReferenceValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type reference.

## Declaration

```
dictionary CKDBRecordFieldReferenceValue {
	string type;
	CKDBRecordReference? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldReferenceValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldreferencevalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldreferencevalue/value.md)

## See Also

### References

- [CKDBRecordFieldReferenceListValue](ckdbrecordfieldreferencelistvalue.md): The value of the field of type reference list.
