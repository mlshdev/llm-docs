> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/ismenuvisible](https://developer.apple.com/documentation/uikit/uimenucontroller/ismenuvisible)

# isMenuVisible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The visibility of the editing menu.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```swift
var isMenuVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property displays or hides the menu immediately, without animation. For animating the showing or hiding of the menu, use the [setMenuVisible(\_:animated:)](setmenuvisible%28__animated_%29.md) method. Before showing the menu, be sure to position it relative to the selection.

## See Also

### Showing and hiding the menu

- [showMenu(from:rect:)](showmenu%28from_rect_%29.md): Deprecated.
- [hideMenu(from:)](hidemenu%28from_%29.md): Deprecated.
- [hideMenu()](hidemenu%28%29.md): Deprecated.
- [setMenuVisible(\_:animated:)](setmenuvisible%28__animated_%29.md): Deprecated. Shows or hides the editing menu, optionally animating the action.

# menuVisible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The visibility of the editing menu.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```objectivec
@property (nonatomic, getter=isMenuVisible) BOOL menuVisible;
```

<a id="Discussion"></a>

## Discussion

Setting this property displays or hides the menu immediately, without animation. For animating the showing or hiding of the menu, use the [setMenuVisible:animated:](setmenuvisible%28__animated_%29.md) method. Before showing the menu, be sure to position it relative to the selection.

## See Also

### Showing and hiding the menu

- [showMenuFromView:rect:](showmenu%28from_rect_%29.md): Deprecated.
- [hideMenuFromView:](hidemenu%28from_%29.md): Deprecated.
- [hideMenu](hidemenu%28%29.md): Deprecated.
- [setMenuVisible:animated:](setmenuvisible%28__animated_%29.md): Deprecated. Shows or hides the editing menu, optionally animating the action.
