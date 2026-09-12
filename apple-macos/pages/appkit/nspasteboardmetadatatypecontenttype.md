> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardmetadatatypecontenttype](https://developer.apple.com/documentation/appkit/nspasteboardmetadatatypecontenttype)

# NSPasteboardMetadataTypeContentType

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 15.4+

A metadata type that returns the content type if the pasteboard detects a reference to a file.

## Declaration

```objectivec
extern NSPasteboardMetadataType const NSPasteboardMetadataTypeContentType;
```

<a id="return-value"></a>

## Return Value

UTType value for the detected content type of the file URL, if a file URL type is present.

## See Also

### Accessing metadata

- [NSPasteboardMetadataType](nspasteboardmetadatatype.md): A metadata type to detect on the pasteboard.
