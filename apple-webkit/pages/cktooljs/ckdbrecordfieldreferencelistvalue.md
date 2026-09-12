> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldreferencelistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldreferencelistvalue)

# CKDBRecordFieldReferenceListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type reference list.

## Declaration

```
dictionary CKDBRecordFieldReferenceListValue {
	string type;
	CKDBRecordReference[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldReferenceListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldreferencelistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldreferencelistvalue/value.md): The array of values, each containing a reference to a CloudKit record

## See Also

### References

- [CKDBRecordFieldReferenceValue](ckdbrecordfieldreferencevalue.md): The value of the field of type reference.
