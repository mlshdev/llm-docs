> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/deleterecords](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/deleterecords)

# deleteRecords

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Deletes one or more records.

## Declaration

```
Promise<CloudKit.RecordsResponse, CloudKit.CKError> deleteRecords(
	CloudKit.Record|CloudKit.Record[]|String|String[] records,
	optional Object options
);
```

## Parameters

- `records`: Possible values are:

  | Type | Description |
  | --- | --- |
  | [CloudKit.Record](../cloudkit.record.md) | A dictionary or the record name of the record to delete. |
  | `CloudKit.Record[]` | An array of records to delete. |
  | `String` | The name of a record to delete. |
  | `String[]` | An array of names of records to delete. |
- `options`: A dictionary containing a single `zoneID` key that identifies the zone ([CloudKit.ZoneID](../cloudkit.zoneid.md)) in the database where the record resides. If the `options` parameter is omitted, the default zone is used.

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordsResponse](../cloudkit.recordsresponse.md) object if the operation succeeds; otherwise, a [CKError](../cloudkit/ckerror.md) object.

## See Also

### Accessing Records

- [saveRecords](saverecords.md): Saves records to the database.
- [fetchRecords](fetchrecords.md): Fetches one or more records.
- [performQuery](performquery.md): Fetches records by using a query.
- [newRecordsBatch](newrecordsbatch.md): Creates records batch builder object for modifying multiple records.
