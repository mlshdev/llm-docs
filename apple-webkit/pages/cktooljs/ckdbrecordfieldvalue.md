> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldvalue)

# CKDBRecordFieldValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

An object with the value of the field in a record.

## Declaration

```
dictionary CKDBRecordFieldValue {
	string type;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldvalue/type.md): A string used to identify the field type.
