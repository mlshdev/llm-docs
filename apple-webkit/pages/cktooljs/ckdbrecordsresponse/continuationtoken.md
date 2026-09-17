> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbrecordsresponse/continuationtoken

# continuationToken

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A string that indicates there are more records to fetch.

## Declaration

```
attribute string? continuationToken;
```

<a id="Discussion"></a>

## Discussion

To fetch the other records, pass the value of the `continuationToken` key as the value of the `continuationToken` key in the next request.
