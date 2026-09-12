> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/fullscreenaccessoryviewminheight](https://developer.apple.com/documentation/appkit/nstoolbar/fullscreenaccessoryviewminheight)

# fullScreenAccessoryViewMinHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The minimum height of the toolbar’s full screen accessory view.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) and its [fullScreenMinHeight](../nstitlebaraccessoryviewcontroller/fullscreenminheight.md) property with an [NSWindow](../nswindow.md) instead.

## Declaration

```swift
var fullScreenAccessoryViewMinHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) is used when the menu bar is hidden. During the reveal, the toolbar’s accessory view’s frame is interpolated between its [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) and [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md).

If the minimum height is 0 the accessory view isn’t resized; instead a special transition is used to reveal it with the menu bar. This simplifies the accessory view’s task, because it doesn’t have to handle the case of the height being set to `0`.

To create a fixed-height accessory view, set the [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md) and [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) properties to be equal.

The default value is 0.

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbar.SizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.

# fullScreenAccessoryViewMinHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The minimum height of the toolbar’s full screen accessory view.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) and its [fullScreenMinHeight](../nstitlebaraccessoryviewcontroller/fullscreenminheight.md) property with an [NSWindow](../nswindow.md) instead.

## Declaration

```objectivec
@property CGFloat fullScreenAccessoryViewMinHeight;
```

<a id="Discussion"></a>

## Discussion

The [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) is used when the menu bar is hidden. During the reveal, the toolbar’s accessory view’s frame is interpolated between its [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) and [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md).

If the minimum height is 0 the accessory view isn’t resized; instead a special transition is used to reveal it with the menu bar. This simplifies the accessory view’s task, because it doesn’t have to handle the case of the height being set to `0`.

To create a fixed-height accessory view, set the [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md) and [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) properties to be equal.

The default value is 0.

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbarSizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.
