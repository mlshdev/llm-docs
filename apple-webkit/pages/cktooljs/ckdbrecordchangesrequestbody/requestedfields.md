> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbrecordchangesrequestbody/requestedfields

# requestedFields

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The array of record field names that limit the amount of data the server returns in this operation.

## Declaration

```
attribute string[]? requestedFields;
```

<a id="Discussion"></a>

## Discussion

The server only returns the fields specified in the array.
