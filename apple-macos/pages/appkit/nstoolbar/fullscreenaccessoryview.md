> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/fullscreenaccessoryview](https://developer.apple.com/documentation/appkit/nstoolbar/fullscreenaccessoryview)

# fullScreenAccessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The toolbar’s full screen accessory view.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) with an [NSWindow](../nswindow.md) instead.

## Declaration

```swift
var fullScreenAccessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

When entering full screen mode, the accessory view is removed from the window if necessary, and attaches underneath the toolbar.

When leaving full screen mode, the accessory view is returned to the window, if it was in the window previously.

To customize this behavior, you can implement the [NSWindow](../nswindow.md) delegate method [windowWillExitFullScreen(\_:)](../nswindowdelegate/windowwillexitfullscreen%28__%29.md).

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbar.SizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.

# fullScreenAccessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The toolbar’s full screen accessory view.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) with an [NSWindow](../nswindow.md) instead.

## Declaration

```objectivec
@property (strong, nullable) NSView * fullScreenAccessoryView;
```

<a id="Discussion"></a>

## Discussion

When entering full screen mode, the accessory view is removed from the window if necessary, and attaches underneath the toolbar.

When leaving full screen mode, the accessory view is returned to the window, if it was in the window previously.

To customize this behavior, you can implement the [NSWindow](../nswindow.md) delegate method [windowWillExitFullScreen:](../nswindowdelegate/windowwillexitfullscreen%28__%29.md).

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbarSizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.
