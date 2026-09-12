> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/create](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/create)

# create

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Creates one or more records.

## Declaration

```
CloudKit.RecordsBatchBuilder create(
	CloudKit.Record|CloudKit.Record[] records,
	optional Object options
);
```

## Parameters

- `records`: A [CloudKit.Record](../cloudkit.record.md) dictionary representing the record to create, if you are creating a single record. If you are creating multiple records, this parameter is an array of [CloudKit.Record](../cloudkit.record.md) dictionaries representing the records to create. Only the values of the fields in the dictionaries are set.
- `options`: A dictionary containing options for this operation. This parameter contains a single `desiredKeys` key that is an array of field names (`String` values). Only the fields specified in the array are set.

<a id="return-value"></a>

## Return Value

The object that received this method call.

## See Also

### Creating and Updating Records

- [createOrUpdate](createorupdate.md): Creates or updates one or more records depending on the information provided.
- [update](update.md): Updates one or more existing records.
- [forceUpdate](forceupdate.md): Updates one or more existing records regardless of conflicts.
