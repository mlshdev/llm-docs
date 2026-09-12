> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/baseurl](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/baseurl)

# baseURL

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The base URL for HTML documents.

## Declaration

```swift
static let baseURL: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

For HTML documents; [NSURL](../../nsurl.md) containing base URL. The previous string constant was `@"BaseURL".`

## See Also

### Getting the document options

- [characterEncoding](characterencoding.md): The string encoding.
- [defaultAttributes](defaultattributes.md): The default attributes to apply to plain files.
- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The file type.
- [readAccessURL](readaccessurl.md): The local files WebKit can access when loading content.
- [textEncodingName](textencodingname.md): The text encoding to use.
- [textSizeMultiplier](textsizemultiplier.md): The scale factor for font sizes.
- [timeout](timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](webpreferences.md): A WebPreferences object.
- [webResourceLoadDelegate](webresourceloaddelegate.md): An object to serve as the web resource loading delegate.
