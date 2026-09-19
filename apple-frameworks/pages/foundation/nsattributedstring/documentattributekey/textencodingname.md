> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/textencodingname

# textEncodingName

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The name of the text encoding to use.

## Declaration

```swift
static let textEncodingName: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

An [NSString](../../nsstring.md) object containing the name, IANA or otherwise, of a text encoding to be used. This attribute is mutually exclusive with [characterEncoding](characterencoding.md).

## See Also

### Getting document type keys

- [documentType](documenttype.md): The document type.
- [fileType](filetype.md): The document type for interpreting the document.
