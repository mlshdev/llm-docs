> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopovertouchbaritem/popovertouchbar](https://developer.apple.com/documentation/appkit/nspopovertouchbaritem/popovertouchbar)

# popoverTouchBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The bar displayed when this item is “popped.”

## Declaration

```swift
var popoverTouchBar: NSTouchBar { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to a fully configured instance of [NSTouchBar](../nstouchbar.md) that is displayed when the user taps on the popover item. By default this is an empty bar.

## See Also

### Configuring the expanded popover

- [showsCloseButton](showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.
- [pressAndHoldTouchBar](pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.

# popoverTouchBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The bar displayed when this item is “popped.”

## Declaration

```objectivec
@property (strong) NSTouchBar * popoverTouchBar;
```

<a id="Discussion"></a>

## Discussion

Set this property to a fully configured instance of [NSTouchBar](../nstouchbar.md) that is displayed when the user taps on the popover item. By default this is an empty bar.

## See Also

### Configuring the expanded popover

- [showsCloseButton](showsclosebutton.md): A Boolean value that determines whether a close button should be shown on the popover bar.
- [pressAndHoldTouchBar](pressandholdtouchbar.md): The bar that is displayed when a user press-and-holds on the popover item.
