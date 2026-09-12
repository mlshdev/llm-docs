> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/createorupdate](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/createorupdate)

# createOrUpdate

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Creates or updates one or more records depending on the information provided.

## Declaration

```
CloudKit.RecordsBatchBuilder createOrUpdate(
	CloudKit.Record|CloudKit.Record[] records,
	optional Object options
);
```

## Parameters

- `records`: A [CloudKit.Record](../cloudkit.record.md) dictionary representing the record to create or update, if you are updating a single record. If you are updating multiple records, this parameter is an array of [CloudKit.Record](../cloudkit.record.md) dictionaries representing the records to create or update. Only the values of the fields in the dictionaries are set.
- `options`: A dictionary containing options for this operation. This parameter contains a single `desiredKeys` key that is an array of field names (`String` values). Only the fields specified in the array are set.

<a id="return-value"></a>

## Return Value

The object that received this method call.

<a id="Discussion"></a>

## Discussion

This is a convenience method for adding create and update operations rather than adding them separately using the [create](create.md) and [update](update.md) methods. Depending on the information in the record, this method determines whether the record should be created or updated.

The type of operation depends on the values of the `recordName` and `recordChangeTag` keys in the [CloudKit.Record](../cloudkit.record.md) dictionaries.

- To create a record with a server-generated record name, set the `recordName` and `recordChangeTag` keys to `null`.
- To create a record with a specified record name, set the `recordName` key to the record name and set `recordChangeTag` to `null`.
- To update an existing record, set the `recordName` and `recordChangeTag` keys to non-`null` values.

An error occurs if the `recordName` key is `null` and the `recordChangeTag` key is non-`null`. Retain the record name of records you previously fetched, and include it when updating a record.

## See Also

### Creating and Updating Records

- [create](create.md): Creates one or more records.
- [update](update.md): Updates one or more existing records.
- [forceUpdate](forceupdate.md): Updates one or more existing records regardless of conflicts.
