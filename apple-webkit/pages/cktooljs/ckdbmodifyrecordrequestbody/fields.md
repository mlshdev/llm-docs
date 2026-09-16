> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbmodifyrecordrequestbody/fields

# fields

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The dictionary of key-value pairs whose keys are the record field names and values are field-value dictionaries.

## Declaration

```
attribute dictionary fields;
```

<a id="Discussion"></a>

## Discussion

The values in this fields dictionary can be any kind of `CKDBRecordFieldValue` object. For example, `CKDBRecordFieldInt64Value`.
