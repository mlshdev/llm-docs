> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isdocumentedited](https://developer.apple.com/documentation/appkit/nswindow/isdocumentedited)

# isDocumentEdited (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s document has been edited.

## Declaration

```swift
var isDocumentEdited: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s document has been edited; otherwise, [false](https://developer.apple.com/documentation/swift/false). Initially, by default, `NSWindow` objects are in the “not edited” state.

You should set [isDocumentEdited](isdocumentedited.md) to [true](https://developer.apple.com/documentation/swift/true) every time the window’s document changes in such a way that it needs to be saved. Conversely, when the document is saved, you should set the property to [true](https://developer.apple.com/documentation/swift/true) when the window’s document has been edited; otherwise, [false](https://developer.apple.com/documentation/swift/false). Then, before closing the window you can examine the value of the property to determine whether to allow the user a chance to save the document.

# documentEdited (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s document has been edited.

## Declaration

```objectivec
@property (getter=isDocumentEdited) BOOL documentEdited;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s document has been edited; otherwise, [false](https://developer.apple.com/documentation/swift/false). Initially, by default, `NSWindow` objects are in the “not edited” state.

You should set [documentEdited](isdocumentedited.md) to [true](https://developer.apple.com/documentation/swift/true) every time the window’s document changes in such a way that it needs to be saved. Conversely, when the document is saved, you should set the property to [true](https://developer.apple.com/documentation/swift/true) when the window’s document has been edited; otherwise, [false](https://developer.apple.com/documentation/swift/false). Then, before closing the window you can examine the value of the property to determine whether to allow the user a chance to save the document.
