> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/showsclosebutton](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/showsclosebutton)

# showsCloseButton (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that determines whether a close button should be shown on the popover bar.

## Declaration

```swift
var showsCloseButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), a close button is automatically displayed when the popover bar is displayed. When [false](https://developer.apple.com/documentation/swift/false), it is your responsibility to dismiss the popover bar.

## See Also

### Configuring the expanded popover

- [popoverTouchBar](popovertouchbar.md): The bar displayed when this item is “popped.”
- [pressAndHoldTouchBar](pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.

# showsCloseButton (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that determines whether a close button should be shown on the popover bar.

## Declaration

```objectivec
@property BOOL showsCloseButton;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), a close button is automatically displayed when the popover bar is displayed. When [false](https://developer.apple.com/documentation/swift/false), it is your responsibility to dismiss the popover bar.

## See Also

### Configuring the expanded popover

- [popoverTouchBar](popovertouchbar.md): The bar displayed when this item is “popped.”
- [pressAndHoldTouchBar](pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.
