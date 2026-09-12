> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/replace](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/replace)

# replace

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Replaces one or more records with the specified records.

## Declaration

```
CloudKit.RecordsBatchBuilder replace(
	CloudKit.Record|CloudKit.Record[] records,
	optional Object options
);
```

## Parameters

- `records`: A [CloudKit.Record](../cloudkit.record.md) dictionary representing the replacement record, if you are replacing a single record. If you are replacing multiple records, this parameter is an array of replacement [CloudKit.Record](../cloudkit.record.md) dictionaries. The [CloudKit.Record](../cloudkit.record.md) dictionaries must contain the `recordChangeTag` key. Only the values of the fields in these dictionaries are replaced. The other field values are set to `null`.
- `options`: A dictionary containing options for this operation. This parameter contains a single `desiredKeys` key that is an array of field names (`String` values). Only the fields specified in the array are set.

<a id="return-value"></a>

## Return Value

The object that received this method call.

<a id="Discussion"></a>

## Discussion

The fields whose values you do not specify are set to `null`.

## See Also

### Replacing Records

- [forceReplace](forcereplace.md): Replaces one or more records with the specified records regardless of conflicts.
