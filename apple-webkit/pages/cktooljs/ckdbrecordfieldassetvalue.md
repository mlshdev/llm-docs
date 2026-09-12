> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldassetvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldassetvalue)

# CKDBRecordFieldAssetValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of the type asset.

## Declaration

```
dictionary CKDBRecordFieldAssetValue {
	string type;
	CKDBAsset? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldAssetValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldassetvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldassetvalue/value.md)

## See Also

### Assets

- [CKDBRecordFieldAssetListValue](ckdbrecordfieldassetlistvalue.md): A field value that contains an array of assets.
