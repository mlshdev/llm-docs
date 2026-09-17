> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.record/recordchangetag

# recordChangeTag

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

A string containing the server change token for the record. Use this tag to indicate which version of the record you last fetched. This key is required if you are saving an existing record.

## Declaration

```
attribute String recordChangeTag;
```
