> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/fullscreenaccessoryviewmaxheight](https://developer.apple.com/documentation/appkit/nstoolbar/fullscreenaccessoryviewmaxheight)

# fullScreenAccessoryViewMaxHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The maximum height of the toolbar’s full screen accessory view, in points.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) with an [NSWindow](../nswindow.md) instead.

## Declaration

```swift
var fullScreenAccessoryViewMaxHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md) is used when displaying a fully revealed menu bar. During the reveal, the toolbar’s accessory view’s frame is interpolated between its [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) and `fullScreenAccessoryViewMaxHeight` properties.

By default the maximum height gets set to the height of the accessory view’s frame when it’s set.

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbar.SizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.

# fullScreenAccessoryViewMaxHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.13)

The maximum height of the toolbar’s full screen accessory view, in points.

> Use an [NSTitlebarAccessoryViewController](../nstitlebaraccessoryviewcontroller.md) with an [NSWindow](../nswindow.md) instead.

## Declaration

```objectivec
@property CGFloat fullScreenAccessoryViewMaxHeight;
```

<a id="Discussion"></a>

## Discussion

The [fullScreenAccessoryViewMaxHeight](fullscreenaccessoryviewmaxheight.md) is used when displaying a fully revealed menu bar. During the reveal, the toolbar’s accessory view’s frame is interpolated between its [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md) and `fullScreenAccessoryViewMaxHeight` properties.

By default the maximum height gets set to the height of the accessory view’s frame when it’s set.

## See Also

### Deprecated

- [centeredItemIdentifier](centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMinHeight](fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [sizeMode](sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbarSizeMode](sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.
