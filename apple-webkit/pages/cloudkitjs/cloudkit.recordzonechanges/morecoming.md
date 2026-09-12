> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordzonechanges/morecoming](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordzonechanges/morecoming)

# moreComing

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Boolean value that indicates whether there are more changes to request. If `moreComing` is `true`, request more changes using the value of the included `syncToken` key. If `moreComing` is `false`, there are no more changes.

## Declaration

```
attribute Boolean moreComing;
```
