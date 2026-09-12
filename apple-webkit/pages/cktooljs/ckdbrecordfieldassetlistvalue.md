> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldassetlistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldassetlistvalue)

# CKDBRecordFieldAssetListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

A field value that contains an array of assets.

## Declaration

```
dictionary CKDBRecordFieldAssetListValue {
	string type;
	CKDBAsset[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldAssetListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldassetlistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldassetlistvalue/value.md): The array of asset objects in this record field.

## See Also

### Assets

- [CKDBRecordFieldAssetValue](ckdbrecordfieldassetvalue.md): The value of the field of the type asset.
