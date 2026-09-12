> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbshareacceptancestatus](https://developer.apple.com/documentation/cktooljs/ckdbshareacceptancestatus)

# CKDBShareAcceptanceStatus

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

An enumeration that indicates the status of accepting the shared record.

## Declaration

```
interface CKDBShareAcceptanceStatus {
	const string INVITED;
	const string ACCEPTED;
	const string REMOVED;
	const string UNSUBSCRIBED;
	const string UNKNOWN;
};
```

<a id="overview"></a>

## Overview

Possible values are `INVITED`, `ACCEPTED`, `REMOVED`, and `UNKNOWN`.

```javascript
import { CKDBShareAcceptanceStatus } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [ACCEPTED](ckdbshareacceptancestatus/accepted.md)
- [INVITED](ckdbshareacceptancestatus/invited.md)
- [REMOVED](ckdbshareacceptancestatus/removed.md)
- [UNKNOWN](ckdbshareacceptancestatus/unknown.md)
- [UNSUBSCRIBED](ckdbshareacceptancestatus/unsubscribed.md)

## See Also

### Enumerations

- [CKDBPermissionType](ckdbpermissiontype.md): The participant’s read and write permissions.
- [CKDBQueryFilterType](ckdbqueryfiltertype.md): An object that represents the type of a filter that indicates the comparison operator when applying the filter.
- [CKDBQuerySortOrder](ckdbquerysortorder.md): An enumeration that represents the order to use when sorting records.
- [CKDBRecordReferenceAction](ckdbrecordreferenceaction.md): An object that represents the action to be performed for the referenced record.
- [CKDBShareParticipantType](ckdbshareparticipanttype.md): An enumeration that represents the type of a share participant.
