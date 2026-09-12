> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.ckerror/zoneid](https://developer.apple.com/documentation/cloudkitjs/cloudkit.ckerror/zoneid)

# zoneID

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The record zone in the database where the error occurred.

## Declaration

```
readonly attribute CloudKit.ZoneID zoneID;
```

<a id="Discussion"></a>

## Discussion

This property value is `Undefined` if the error is unrelated to a zone operation.

## See Also

### Identifying the Operation

- [recordName](recordname.md): The name of the record that the operation failed on.
- [subscriptionID](subscriptionid.md): A string that is a unique identifier for the subscription where the error occurred.
