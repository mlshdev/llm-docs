> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/defaultattributes](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/defaultattributes)

# defaultAttributes

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default attributes to apply to plain files.

## Declaration

```swift
static let defaultAttributes: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

For plain text documents; [NSDictionary](../../nsdictionary.md) containing attributes to be applied to plain files. The previous string constant was `@"DefaultAttributes"`.

## See Also

### Getting the document options

- [baseURL](baseurl.md): The base URL for HTML documents.
- [characterEncoding](characterencoding.md): The string encoding.
- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The file type.
- [readAccessURL](readaccessurl.md): The local files WebKit can access when loading content.
- [textEncodingName](textencodingname.md): The text encoding to use.
- [textSizeMultiplier](textsizemultiplier.md): The scale factor for font sizes.
- [timeout](timeout.md): The time, in seconds, to wait for a document to finish loading.
- [webPreferences](webpreferences.md): A WebPreferences object.
- [webResourceLoadDelegate](webresourceloaddelegate.md): An object to serve as the web resource loading delegate.
