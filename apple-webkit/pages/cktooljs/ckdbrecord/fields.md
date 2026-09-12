> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecord/fields](https://developer.apple.com/documentation/cktooljs/ckdbrecord/fields)

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

Values in this dictionary conform to `CKDBRecordFieldValue`. `CKDBRecordFieldValue` is the root of the hierarchy of valid record field value types, such as `CKDBRecordFieldStringValue`.
