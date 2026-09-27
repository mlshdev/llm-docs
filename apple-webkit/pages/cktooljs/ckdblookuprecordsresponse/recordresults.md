> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdblookuprecordsresponse/recordresults

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
