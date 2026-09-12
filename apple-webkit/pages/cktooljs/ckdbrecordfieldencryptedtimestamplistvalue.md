> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordfieldencryptedtimestamplistvalue](https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldencryptedtimestamplistvalue)

# CKDBRecordFieldEncryptedTimestampListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the encrypted field of type timestamp.

## Declaration

```
dictionary CKDBRecordFieldEncryptedTimestampListValue {
	string type;
	Date[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldEncryptedTimestampListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldencryptedtimestamplistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldencryptedtimestamplistvalue/value.md): An array of strings in date-time format.

## See Also

### Timestamps

- [CKDBRecordFieldTimestampValue](ckdbrecordfieldtimestampvalue.md): The value of the field of type timestamp.
- [CKDBRecordFieldTimestampListValue](ckdbrecordfieldtimestamplistvalue.md): The value of the field of type timestamp list.
- [CKDBRecordFieldEncryptedTimestampValue](ckdbrecordfieldencryptedtimestampvalue.md): The value of the encrypted field of type timestamp.
