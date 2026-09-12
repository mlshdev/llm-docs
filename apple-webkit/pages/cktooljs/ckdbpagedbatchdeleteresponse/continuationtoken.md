> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbpagedbatchdeleteresponse/continuationtoken](https://developer.apple.com/documentation/cktooljs/ckdbpagedbatchdeleteresponse/continuationtoken)

# continuationToken

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A string value that indicates there are more results to fetch.

## Declaration

```
attribute string? continuationToken;
```

<a id="Discussion"></a>

## Discussion

To fetch the other results, pass the value of the continuationToken key as the value of the continuationToken key in the next request.
