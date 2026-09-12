> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedtimestampvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedtimestampvalue)

# CKDBRecordFieldEncryptedTimestampValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type timestamp.

## Declaration

```
dictionary CKDBRecordFieldEncryptedTimestampValue {
	string type;
	date? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedTimestampValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedtimestampvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedtimestampvalue/value.md): A string in date-time format.

## See Also

### Timestamps

- [CKDBRecordFieldTimestampValue](ckdbrecordfieldtimestampvalue.md): The value of the field of type timestamp.
- [CKDBRecordFieldTimestampListValue](ckdbrecordfieldtimestamplistvalue.md): The value of the field of type timestamp list.
- [CKDBRecordFieldEncryptedTimestampListValue](ckdbrecordfieldencryptedtimestamplistvalue.md): The value of the encrypted field of type timestamp.
