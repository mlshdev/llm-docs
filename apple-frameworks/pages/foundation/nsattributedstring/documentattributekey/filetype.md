> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentattributekey/filetype](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/filetype)

# fileType

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The document type for interpreting the document.

## Declaration

```swift
static let fileType: NSAttributedString.DocumentAttributeKey
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSString](../../nsstring.md) object indicating which document type was used to interpret the document, specified as a UTI; for reading, this is available along with [documentType](documenttype.md), but for writing the two are mutually exclusive.

## See Also

### Getting document type keys

- [documentType](documenttype.md): The document type.
- [textEncodingName](textencodingname.md): The name of the text encoding to use.
