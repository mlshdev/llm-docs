> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/allowsdocumentsharing](https://developer.apple.com/documentation/appkit/nsdocument/allowsdocumentsharing)

# allowsDocumentSharing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that indicates whether the document is shareable from the standard Share menu.

## Declaration

```swift
var allowsDocumentSharing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the owning document controller enables share options for this document. When the value is [false](https://developer.apple.com/documentation/swift/false), the document controller disables the Share menu when this document is selected.

## See Also

### Sharing the Document

- [prepare(\_:)](prepare%28__%29.md): Perform any custom setup associated with a sharing service picker.
- [share(with:completionHandler:)](share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.

# allowsDocumentSharing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that indicates whether the document is shareable from the standard Share menu.

## Declaration

```objectivec
@property (readonly) BOOL allowsDocumentSharing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the owning document controller enables share options for this document. When the value is [false](https://developer.apple.com/documentation/swift/false), the document controller disables the Share menu when this document is selected.

## See Also

### Sharing the Document

- [prepareSharingServicePicker:](prepare%28__%29.md): Perform any custom setup associated with a sharing service picker.
- [shareDocumentWithSharingService:completionHandler:](share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.
