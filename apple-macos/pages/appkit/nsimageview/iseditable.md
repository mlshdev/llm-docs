> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/iseditable](https://developer.apple.com/documentation/appkit/nsimageview/iseditable)

# isEditable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the user can drag a new image into the image view.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can set the displayed image by dragging an image onto the image view. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the image view to display only the programmatically set image.

## See Also

### Responding to user events

- [allowsCutCopyPaste](allowscutcopypaste.md): A Boolean value indicating whether the image view lets the user cut, copy, and paste the image contents.

# editable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the user can drag a new image into the image view.

## Declaration

```objectivec
@property (getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user can set the displayed image by dragging an image onto the image view. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the image view to display only the programmatically set image.

## See Also

### Responding to user events

- [allowsCutCopyPaste](allowscutcopypaste.md): A Boolean value indicating whether the image view lets the user cut, copy, and paste the image contents.
