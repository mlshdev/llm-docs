> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordzonechangesoptions/desiredkeys

# desiredKeys

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

An array of record field names that limit the amount of data returned. Only the fields specified in the array are returned. The default is `null`, which fetches all record fields.

## Declaration

```
attribute String[] desiredKeys;
```
