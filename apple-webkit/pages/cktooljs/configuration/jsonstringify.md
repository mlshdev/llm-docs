> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/configuration/jsonstringify](https://developer.apple.com/documentation/cktooljs/configuration/jsonstringify)

# jsonStringify

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A function that a request function uses to prepare JSON to send to the API server.

## Declaration

```
attribute Function jsonStringify;
```

<a id="Discussion"></a>

## Discussion

The API server can receive numbers larger than the default JavaScript JSON stringify function can handle, so this function is expected to handle large numbers.

This value is only set when `Configuration` is constructed.
