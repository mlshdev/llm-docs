> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/forcedelete](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/forcedelete)

# forceDelete

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Deletes one or more records regardless of conflicts.

## Declaration

```
RecordsBatchBuilder forceDelete(
	CloudKit.Record|CloudKit.Record[] records
);
```

## Parameters

- `records`: A [CloudKit.Record](../cloudkit.record.md) dictionary representing the record to delete, if you are deleting a single record. If you are deleting multiple records, this parameter is an array of [CloudKit.Record](../cloudkit.record.md) dictionaries. The `recordChangeTag` key is not required in the [CloudKit.Record](../cloudkit.record.md) dictionaries.

<a id="return-value"></a>

## Return Value

The object that received this method call.

## See Also

### Deleting Records

- [delete](delete.md): Deletes one or more records.
