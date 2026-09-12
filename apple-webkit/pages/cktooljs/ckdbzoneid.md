> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbzoneid](https://developer.apple.com/documentation/cktooljs/ckdbzoneid)

# CKDBZoneId

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

An object that represents a CloudKit database zone identifier.

## Declaration

```
dictionary CKDBZoneId {
	string zoneName;
	string canonicalName;
	string? zoneType;
	string? ownerRecordName;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBZoneId } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [canonicalName](ckdbzoneid/canonicalname.md): The unique identifier for a zone within a database.
- [ownerRecordName](ckdbzoneid/ownerrecordname.md): The owner of the zone.
- [zoneName](ckdbzoneid/zonename.md): The name that identifies the record zone.
- [zoneType](ckdbzoneid/zonetype.md): The type for the zone.

## See Also

### Structures

- [CKDBAsset](ckdbasset.md): An object that represents an asset uploaded to CloudKit.
- [CKDBAssetUploadUrlResponse](ckdbassetuploadurlresponse.md): An object that represents the results of creating an asset upload URL.
- [CKDBChangeMetadata](ckdbchangemetadata.md): An object that represents metadata about a record change via creation or modification.
- [CKDBCreateAssetUploadUrlRequestBody](ckdbcreateassetuploadurlrequestbody.md): An object that represents the request for creating an asset upload URL.
- [CKDBCreateRecordRequestBody](ckdbcreaterecordrequestbody.md): An object that represents the request to create a new record.
- [CKDBCreateZoneRequestBody](ckdbcreatezonerequestbody.md): An object that represents the request to create a new zone.
- [CKDBDeleteRecordsByQueryRequestBody](ckdbdeleterecordsbyqueryrequestbody.md): An object that represents the request to delete multiple records that match a query.
- [CKDBDeletedRecordResult](ckdbdeletedrecordresult.md): An object that represents a deleted record result.
- [CKDBErrorRecordResult](ckdberrorrecordresult.md): An object that represents a record lookup failure.
- [CKDBExistingRecordResult](ckdbexistingrecordresult.md): An object that represents a successful record result.
- [CKDBForRecord](ckdbforrecord.md): An object that represents a record that is being shared.
- [CKDBLocation](ckdblocation.md): An object that represents a location field value.
- [CKDBLookupRecordsRequestBody](ckdblookuprecordsrequestbody.md): An object that represents the request for looking up multiple records by record name.
- [CKDBLookupRecordsResponse](ckdblookuprecordsresponse.md): An object that represents the results of a batch record lookup operation.
- [CKDBModifyRecordRequestBody](ckdbmodifyrecordrequestbody.md): An object that represents the request for updating an existing record.
