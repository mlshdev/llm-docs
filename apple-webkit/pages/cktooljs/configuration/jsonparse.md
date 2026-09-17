> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/configuration/jsonparse

# jsonParse

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A function that a response parser uses to interpret JSON from the API server.

## Declaration

```
attribute Function jsonParse;
```

<a id="Discussion"></a>

## Discussion

The API server can send numbers larger than the default JavaScript JSON parse function can handle, so this function is expected to handle large numbers.

This value is only set when `Configuration` is constructed.
