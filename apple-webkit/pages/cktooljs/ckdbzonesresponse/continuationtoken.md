> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbzonesresponse/continuationtoken](https://developer.apple.com/documentation/cktooljs/ckdbzonesresponse/continuationtoken)

# continuationToken

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A string value that indicates that there are more zones to fetch.

## Declaration

```
attribute string? continuationToken;
```

<a id="Discussion"></a>

## Discussion

To fetch the other zones, pass the value of `continuationToken` as the `continuationToken` value in the next request
