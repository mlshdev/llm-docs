> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/textsizemultiplier](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/textsizemultiplier)

# textSizeMultiplier

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The scale factor for font sizes.

## Declaration

```swift
static let textSizeMultiplier: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

[NSNumber](../../nsnumber.md) containing float, default 1.0; for HTML only, corresponding to WebView’s `textSizeMultiplier`.

## See Also

### Getting the document options

- [baseURL](baseurl.md): The base URL for HTML documents.
- [characterEncoding](characterencoding.md): The string encoding.
- [defaultAttributes](defaultattributes.md): The default attributes to apply to plain files.
- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The file type.
- [readAccessURL](readaccessurl.md): The local files WebKit can access when loading content.
- [textEncodingName](textencodingname.md): The text encoding to use.
- [timeout](timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](webpreferences.md): A WebPreferences object.
- [webResourceLoadDelegate](webresourceloaddelegate.md): An object to serve as the web resource loading delegate.
