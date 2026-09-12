> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/update](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/update)

# update

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Updates one or more existing records.

## Declaration

```
CloudKit.RecordsBatchBuilder update(
	CloudKit.Record|CloudKit.Record[] records,
	optional Object options
);
```

## Parameters

- `records`: A [CloudKit.Record](../cloudkit.record.md) dictionary representing the fields of the record you want to update, if you are updating a single record. If you are updating multiple records, this parameter is an array of [CloudKit.Record](../cloudkit.record.md) dictionaries. The [CloudKit.Record](../cloudkit.record.md) dictionaries need to contain the `recordChangeTag` key. Only the values of the fields in these dictionaries are updated.
- `options`: A dictionary containing options for this operation. This parameter contains a single `desiredKeys` key that is an array of field names (`String` values). Only the fields specified in the array are set.

<a id="return-value"></a>

## Return Value

The object that received this method call.

## See Also

### Creating and Updating Records

- [create](create.md): Creates one or more records.
- [createOrUpdate](createorupdate.md): Creates or updates one or more records depending on the information provided.
- [forceUpdate](forceupdate.md): Updates one or more existing records regardless of conflicts.
