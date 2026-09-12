> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/fullscreenminheight](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/fullscreenminheight)

# fullScreenMinHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.

## Declaration

```swift
var fullScreenMinHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [fullScreenMinHeight](fullscreenminheight.md) property applies only to an `NSTitlebarAccessoryViewController` object in which [layoutAttribute](layoutattribute.md) is set to [NSLayoutConstraint.Attribute.bottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom). The minimum height you set determines how much of your accessory view is visible when the menu bar is hidden during full screen mode. By default, the minimum height is `0`, which means that the accessory view is hidden when the menu bar is hidden. When a user reveals the menu bar in this scenario, the accessory view is also revealed.

To persistently show a portion of the accessory view, set this property to a value greater than `0`. For example, if you have a fixed height accessory view, you can set [fullScreenMinHeight](fullscreenminheight.md) to `view.frame.size.height` to show the view regardless of whether the menu bar is hidden. Note that the view’s height is never actually changed when it is hidden or revealed; instead, it is automatically clipped by an internal clip view.

## See Also

### Configuring a title bar accessory view controller

- [layoutAttribute](layoutattribute.md): The location of the accessory view, in relation to the window’s title bar.

# fullScreenMinHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.

## Declaration

```objectivec
@property CGFloat fullScreenMinHeight;
```

<a id="Discussion"></a>

## Discussion

The [fullScreenMinHeight](fullscreenminheight.md) property applies only to an `NSTitlebarAccessoryViewController` object in which [layoutAttribute](layoutattribute.md) is set to [NSLayoutAttributeBottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom). The minimum height you set determines how much of your accessory view is visible when the menu bar is hidden during full screen mode. By default, the minimum height is `0`, which means that the accessory view is hidden when the menu bar is hidden. When a user reveals the menu bar in this scenario, the accessory view is also revealed.

To persistently show a portion of the accessory view, set this property to a value greater than `0`. For example, if you have a fixed height accessory view, you can set [fullScreenMinHeight](fullscreenminheight.md) to `view.frame.size.height` to show the view regardless of whether the menu bar is hidden. Note that the view’s height is never actually changed when it is hidden or revealed; instead, it is automatically clipped by an internal clip view.

## See Also

### Configuring a title bar accessory view controller

- [layoutAttribute](layoutattribute.md): The location of the accessory view, in relation to the window’s title bar.
