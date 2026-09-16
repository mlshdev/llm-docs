> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbqueryrecordsrequestbody/requestedfields

# requestedFields

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

An array of record field names that limit the amount of data the server returns in this operation.

## Declaration

```
attribute string[]? requestedFields;
```

<a id="Discussion"></a>

## Discussion

The server only returns the fields specified in the array. If omitted, the server returns all record fields. If set to an empty array, the server returns record metadata without the fields.
