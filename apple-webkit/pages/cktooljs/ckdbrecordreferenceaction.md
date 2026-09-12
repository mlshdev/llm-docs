> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordreferenceaction](https://developer.apple.com/documentation/cktooljs/ckdbrecordreferenceaction)

# CKDBRecordReferenceAction

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

An object that represents the action to be performed for the referenced record.

## Declaration

```
interface CKDBRecordReferenceAction {
	const string NONE;
	const string DELETE_SELF;
	const string VALIDATE;
};
```

<a id="overview"></a>

## Overview

```javascript
import { CKDBRecordReferenceAction } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [DELETE_SELF](ckdbrecordreferenceaction/delete_self.md)
- [NONE](ckdbrecordreferenceaction/none.md)
- [VALIDATE](ckdbrecordreferenceaction/validate.md)

## See Also

### Enumerations

- [CKDBPermissionType](ckdbpermissiontype.md): The participant’s read and write permissions.
- [CKDBQueryFilterType](ckdbqueryfiltertype.md): An object that represents the type of a filter that indicates the comparison operator when applying the filter.
- [CKDBQuerySortOrder](ckdbquerysortorder.md): An enumeration that represents the order to use when sorting records.
- [CKDBShareAcceptanceStatus](ckdbshareacceptancestatus.md): An enumeration that indicates the status of accepting the shared record.
- [CKDBShareParticipantType](ckdbshareparticipanttype.md): An enumeration that represents the type of a share participant.
