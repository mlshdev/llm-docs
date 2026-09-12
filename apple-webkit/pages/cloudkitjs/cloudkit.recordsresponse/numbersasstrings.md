> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsresponse/numbersasstrings](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsresponse/numbersasstrings)

# numbersAsStrings

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A Boolean value indicating whether the numbers in fields are represented as strings.

## Declaration

```
readonly attribute Boolean numbersAsStrings;
```

<a id="Discussion"></a>

## Discussion

Set the `numbersAsStrings` key in the `options` parameter when requesting records using the [fetchRecords](../cloudkit.database/fetchrecords.md) and similar methods.

## See Also

### Getting Records

- [records](records.md): The records for the successful operations.
