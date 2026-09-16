> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbmodifyrecordrequestbody/recordchangetag

# recordChangeTag

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A string containing the server change token for the record.

## Declaration

```
attribute string? recordChangeTag;
```

<a id="Discussion"></a>

## Discussion

Use this tag to indicate which version of the record you last fetched. This tag is required unless force parameter for updateRecord operation is set to true.
