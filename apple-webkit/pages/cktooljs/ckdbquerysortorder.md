> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbquerysortorder](https://developer.apple.com/documentation/cktooljs/ckdbquerysortorder)

# CKDBQuerySortOrder

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Enumeration  
**Availability:** CKTool JS 1.2.15+

An enumeration that represents the order to use when sorting records.

## Declaration

```
interface CKDBQuerySortOrder {
	const string ASC;
	const string DESC;
};
```

<a id="overview"></a>

## Overview

Possible values are `ASC` and `DESC`.

```javascript
import { CKDBQuerySortOrder } from "@apple/cktool.database";
```

## Topics

### Enumeration Cases

- [ASC](ckdbquerysortorder/asc.md)
- [DESC](ckdbquerysortorder/desc.md)

## See Also

### Enumerations

- [CKDBPermissionType](ckdbpermissiontype.md): The participant’s read and write permissions.
- [CKDBQueryFilterType](ckdbqueryfiltertype.md): An object that represents the type of a filter that indicates the comparison operator when applying the filter.
- [CKDBRecordReferenceAction](ckdbrecordreferenceaction.md): An object that represents the action to be performed for the referenced record.
- [CKDBShareAcceptanceStatus](ckdbshareacceptancestatus.md): An enumeration that indicates the status of accepting the shared record.
- [CKDBShareParticipantType](ckdbshareparticipanttype.md): An enumeration that represents the type of a share participant.
