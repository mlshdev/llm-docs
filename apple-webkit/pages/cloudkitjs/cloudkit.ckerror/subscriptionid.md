> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.ckerror/subscriptionid](https://developer.apple.com/documentation/cloudkitjs/cloudkit.ckerror/subscriptionid)

# subscriptionID

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A string that is a unique identifier for the subscription where the error occurred.

## Declaration

```
readonly attribute String subscriptionID;
```

<a id="Discussion"></a>

## Discussion

This property value is `Undefined` if the error is unrelated to a subscription operation.

## See Also

### Identifying the Operation

- [recordName](recordname.md): The name of the record that the operation failed on.
- [zoneID](zoneid.md): The record zone in the database where the error occurred.
