> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbpermissiontype](https://developer.apple.com/documentation/cktooljs/ckdbpermissiontype)

# CKDBPermissionType

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

The participant’s read and write permissions.

## Declaration

```
interface CKDBPermissionType {
	const string NONE;
	const string READ_ONLY;
	const string READ_WRITE;
	const string UNKNOWN;
};
```

<a id="overview"></a>

## Overview

Possible values are `NONE`, `READ_ONLY`, `READ_WRITE`, and `UNKNOWN`.

```javascript
import { CKDBPermissionType } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [NONE](ckdbpermissiontype/none.md)
- [READ_ONLY](ckdbpermissiontype/read_only.md)
- [READ_WRITE](ckdbpermissiontype/read_write.md)
- [UNKNOWN](ckdbpermissiontype/unknown.md)

## See Also

### Enumerations

- [CKDBQueryFilterType](ckdbqueryfiltertype.md): An object that represents the type of a filter that indicates the comparison operator when applying the filter.
- [CKDBQuerySortOrder](ckdbquerysortorder.md): An enumeration that represents the order to use when sorting records.
- [CKDBRecordReferenceAction](ckdbrecordreferenceaction.md): An object that represents the action to be performed for the referenced record.
- [CKDBShareAcceptanceStatus](ckdbshareacceptancestatus.md): An enumeration that indicates the status of accepting the shared record.
- [CKDBShareParticipantType](ckdbshareparticipanttype.md): An enumeration that represents the type of a share participant.
