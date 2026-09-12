> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbrecordchangesresponse/morecoming](https://developer.apple.com/documentation/cktooljs/ckdbrecordchangesresponse/morecoming)

# moreComing

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A Boolean value that indicates whether there are more changes to request.

## Declaration

```
attribute boolean moreComing;
```

<a id="Discussion"></a>

## Discussion

If `moreComing` is `true`, request more changes using the value of the included `changeToken`. If `moreComing` is `false`, there are no more changes.
