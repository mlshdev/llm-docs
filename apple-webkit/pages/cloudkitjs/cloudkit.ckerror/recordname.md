> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.ckerror/recordname](https://developer.apple.com/documentation/cloudkitjs/cloudkit.ckerror/recordname)

# recordName

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The name of the record that the operation failed on.

## Declaration

```
readonly attribute String recordName;
```

<a id="Discussion"></a>

## Discussion

This property value is `Undefined` if the error is unrelated to a record operation.

## See Also

### Identifying the Operation

- [subscriptionID](subscriptionid.md): A string that is a unique identifier for the subscription where the error occurred.
- [zoneID](zoneid.md): The record zone in the database where the error occurred.
