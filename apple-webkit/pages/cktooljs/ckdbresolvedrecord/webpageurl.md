> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbresolvedrecord/webpageurl](https://developer.apple.com/documentation/cktooljs/ckdbresolvedrecord/webpageurl)

# webpageUrl

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The fallback URL that you can redirect users to if the operation fails.

## Declaration

```
attribute string? webpageUrl;
```

<a id="Discussion"></a>

## Discussion

An operation might fail, if a resolve/accept endpoint doesn’t succeed. If that happens, this value would be the URL that you could redirect users to. You can set the fallback URL using CloudKit Dashboard.
