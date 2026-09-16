> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordzonechangesoptions/synctoken

# syncToken

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Identifies a point in the zone’s change history. The first time you get record changes, omit this key and if `moreComing` is `true` in the response, use the `syncToken` in the response in the next request until `moreComing` is `false`. Otherwise, get the current sync token by fetching a zone.

## Declaration

```
attribute String syncToken;
```
