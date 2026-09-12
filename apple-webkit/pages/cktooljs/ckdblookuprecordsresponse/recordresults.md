> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdblookuprecordsresponse/recordresults](https://developer.apple.com/documentation/cktooljs/ckdblookuprecordsresponse/recordresults)

# recordResults

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The array of `CKDBRecordResult` objects that represent a record.

## Declaration

```
attribute CKDBRecordResult[] recordResults;
```

<a id="Discussion"></a>

## Discussion

`CKDBRecordResult` objects are used for representing a record when the lookup operation can potentially return deleted records or fail partially when looking up some of the record.
