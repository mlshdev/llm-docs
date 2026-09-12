> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/fetchrecordzonechanges](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/fetchrecordzonechanges)

# fetchRecordZoneChanges

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Fetch changes to the specified record zones in the database.

## Declaration

```
Promise<CloudKit.RecordZoneChangesResponse, CloudKit.CKError> fetchRecordZoneChanges(
	CloudKit.RecordZoneChangesOptions|CloudKit.RecordZoneChangesOptions[] options
);
```

## Parameters

- `options`: Specifies the zones and what data to fetch from each. If you want to fetch from multiple zones, pass an array containing a [CloudKit.RecordZoneChangesOptions](../cloudkit.recordzonechangesoptions.md) dictionary for each zone.

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordZoneChangesResponse](../cloudkit.recordzonechangesresponse.md) object, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

Use the [fetchDatabaseChanges](fetchdatabasechanges.md) method to get the zones that contain changed records.

## See Also

### Fetching Changes

- [databaseScope](databasescope.md): The type of database (public, private, or shared).
- [fetchDatabaseChanges](fetchdatabasechanges.md): Fetch changed record zones in the database.
