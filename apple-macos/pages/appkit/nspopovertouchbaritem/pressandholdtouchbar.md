> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/pressandholdtouchbar](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/pressandholdtouchbar)

# pressAndHoldTouchBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The bar that is displayed when a user press-and-holds on the popover item.

## Declaration

```swift
var pressAndHoldTouchBar: NSTouchBar? { get set }
```

<a id="Discussion"></a>

## Discussion

This [NSTouchBar](../nstouchbar.md) can be the same as the one used for the [popoverTouchBar](popovertouchbar.md) property, but does not have to be.

When non-`nil` this touch bar is displayed while the user holds their finger down on the collapsed representation of the popover item. When the user raises their finger, this bar disappears.

## See Also

### Configuring the expanded popover

- [popoverTouchBar](popovertouchbar.md): The bar displayed when this item is “popped.”
- [showsCloseButton](showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.

# pressAndHoldTouchBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The bar that is displayed when a user press-and-holds on the popover item.

## Declaration

```objectivec
@property (strong, nullable) NSTouchBar * pressAndHoldTouchBar;
```

<a id="Discussion"></a>

## Discussion

This [NSTouchBar](../nstouchbar.md) can be the same as the one used for the [popoverTouchBar](popovertouchbar.md) property, but does not have to be.

When non-`nil` this touch bar is displayed while the user holds their finger down on the collapsed representation of the popover item. When the user raises their finger, this bar disappears.

## See Also

### Configuring the expanded popover

- [popoverTouchBar](popovertouchbar.md): The bar displayed when this item is “popped.”
- [showsCloseButton](showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.
