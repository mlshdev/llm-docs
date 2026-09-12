> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldemptylistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldemptylistvalue)

# CKDBRecordFieldEmptyListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type empty list.

## Declaration

```
dictionary CKDBRecordFieldEmptyListValue {
	string type;
	string[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEmptyListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldemptylistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldemptylistvalue/value.md): An empty array.
