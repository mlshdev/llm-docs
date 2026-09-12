> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/setmenuvisible(_:animated:)](https://developer.apple.com/documentation/uikit/uimenucontroller/setmenuvisible(_:animated:))

# setMenuVisible(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 13.0) · iPadOS 3.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Shows or hides the editing menu, optionally animating the action.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```swift
func setMenuVisible(_ menuVisible: Bool, animated: Bool)
```

## Parameters

- `menuVisible`: [true](https://developer.apple.com/documentation/swift/true) if the menu should be shown, [false](https://developer.apple.com/documentation/swift/false) if it should be hidden.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the showing or hiding of the menu should be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Before showing the menu, be sure to position it relative to the selection. See [setTargetRect(\_:in:)](settargetrect%28__in_%29.md) for details. If you do not set the target rect before displaying the menu, it appears at screen coordinates (0.0, 0.0).

## See Also

### Showing and hiding the menu

- [showMenu(from:rect:)](showmenu%28from_rect_%29.md): Deprecated.
- [hideMenu(from:)](hidemenu%28from_%29.md): Deprecated.
- [hideMenu()](hidemenu%28%29.md): Deprecated.
- [isMenuVisible](ismenuvisible.md): Deprecated. The visibility of the editing menu.

# setMenuVisible:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 13.0) · iPadOS 3.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Shows or hides the editing menu, optionally animating the action.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```objectivec
- (void) setMenuVisible:(BOOL) menuVisible animated:(BOOL) animated;
```

## Parameters

- `menuVisible`: [true](https://developer.apple.com/documentation/swift/true) if the menu should be shown, [false](https://developer.apple.com/documentation/swift/false) if it should be hidden.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the showing or hiding of the menu should be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Before showing the menu, be sure to position it relative to the selection. See [setTargetRect:inView:](settargetrect%28__in_%29.md) for details. If you do not set the target rect before displaying the menu, it appears at screen coordinates (0.0, 0.0).

## See Also

### Showing and hiding the menu

- [showMenuFromView:rect:](showmenu%28from_rect_%29.md): Deprecated.
- [hideMenuFromView:](hidemenu%28from_%29.md): Deprecated.
- [hideMenu](hidemenu%28%29.md): Deprecated.
- [menuVisible](ismenuvisible.md): Deprecated. The visibility of the editing menu.
