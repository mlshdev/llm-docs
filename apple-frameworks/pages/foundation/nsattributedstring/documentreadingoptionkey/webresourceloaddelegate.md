> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/webresourceloaddelegate](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/webresourceloaddelegate)

# webResourceLoadDelegate

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

An object to serve as the web resource loading delegate.

## Declaration

```swift
static let webResourceLoadDelegate: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

For HTML only. The value is an [NSObject](../../../objectivec/nsobject-swift.class.md).

If not present, a default delegate is used that permits the loading of subsidiary resources but does not respond to authentication challenges. The previous string constant was `@"WebResourceLoadDelegate"`.

## See Also

### Getting the document options

- [baseURL](baseurl.md): The base URL for HTML documents.
- [characterEncoding](characterencoding.md): The string encoding.
- [defaultAttributes](defaultattributes.md): The default attributes to apply to plain files.
- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The file type.
- [readAccessURL](readaccessurl.md): The local files WebKit can access when loading content.
- [textEncodingName](textencodingname.md): The text encoding to use.
- [textSizeMultiplier](textsizemultiplier.md): The scale factor for font sizes.
- [timeout](timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](webpreferences.md): A WebPreferences object.
