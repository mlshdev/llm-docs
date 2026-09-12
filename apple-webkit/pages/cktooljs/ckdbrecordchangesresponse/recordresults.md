> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordchangesresponse/recordresults](https://developer.apple.com/documentation/cktooljs/ckdbrecordchangesresponse/recordresults)

# recordResults

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

An array of record result objects that provide details about the records.

## Declaration

```
attribute CKDBRecordResult[] recordResults;
```

<a id="Discussion"></a>

## Discussion

CKDBRecordResult objects are used for representing a record when the lookup operation can potentially return deleted records or fail partially when looking up some of the record.
