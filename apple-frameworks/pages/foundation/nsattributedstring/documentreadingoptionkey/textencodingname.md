> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/textencodingname](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/textencodingname)

# textEncodingName

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The text encoding to use.

## Declaration

```swift
static let textEncodingName: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

[NSString](../../nsstring.md) containing the name, IANA or otherwise, of a text encoding to override any encoding specified in an HTML document. Mutually exclusive with [characterEncoding](characterencoding.md). The previous string constant was `@"TextEncodingName"`.

## See Also

### Getting the document options

- [baseURL](baseurl.md): The base URL for HTML documents.
- [characterEncoding](characterencoding.md): The string encoding.
- [defaultAttributes](defaultattributes.md): The default attributes to apply to plain files.
- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The file type.
- [readAccessURL](readaccessurl.md): The local files WebKit can access when loading content.
- [textSizeMultiplier](textsizemultiplier.md): The scale factor for font sizes.
- [timeout](timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](webpreferences.md): A WebPreferences object.
- [webResourceLoadDelegate](webresourceloaddelegate.md): An object to serve as the web resource loading delegate.
