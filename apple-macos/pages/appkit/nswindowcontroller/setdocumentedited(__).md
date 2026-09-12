> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/setdocumentedited(_:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/setdocumentedited(_:))

# setDocumentEdited(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the document edited flag for the window controller.

## Declaration

```swift
func setDocumentEdited(_ dirtyFlag: Bool)
```

## Parameters

- `dirtyFlag`: [true](https://developer.apple.com/documentation/swift/true) if the document has been edited since its last save, [false](https://developer.apple.com/documentation/swift/false) if it hasn’t.

<a id="Discussion"></a>

## Discussion

The window controller uses this flag to control whether its associated window shows up as dirty. You should not call this method directly for window controllers with an associated document; the document calls this method on its window controllers as needed.

## See Also

### Accessing the Document

- [document](document.md): The document associated with the window controller.

# setDocumentEdited: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the document edited flag for the window controller.

## Declaration

```objectivec
- (void) setDocumentEdited:(BOOL) dirtyFlag;
```

## Parameters

- `dirtyFlag`: [true](https://developer.apple.com/documentation/swift/true) if the document has been edited since its last save, [false](https://developer.apple.com/documentation/swift/false) if it hasn’t.

<a id="Discussion"></a>

## Discussion

The window controller uses this flag to control whether its associated window shows up as dirty. You should not call this method directly for window controllers with an associated document; the document calls this method on its window controllers as needed.

## See Also

### Accessing the Document

- [document](document.md): The document associated with the window controller.
