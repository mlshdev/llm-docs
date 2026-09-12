> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/settargetrect(_:in:)](https://developer.apple.com/documentation/uikit/uimenucontroller/settargetrect(_:in:))

# setTargetRect(\_:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 13.0) · iPadOS 3.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the area in a view above or below which the editing menu is positioned.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```swift
func setTargetRect(_ targetRect: CGRect, in targetView: UIView)
```

## Parameters

- `targetRect`: A rectangle that defines the area that is to be the target of the menu commands.
- `targetView`: The view in which `targetRect` appears.

<a id="Discussion"></a>

## Discussion

This target rectangle (`targetRect`) is usually the bounding rectangle of a selection. `UIMenuController` positions the editing menu above this rectangle; if there is not enough space for the menu there, it positions it below the rectangle. The menu’s pointer is placed at the center of the top or bottom of the target rectangle as appropriate. Note that if you make the width or height of the target rectangle zero, `UIMenuController` treats the target area as a line or point for positioning (for example, an insertion caret or a single point).

Once it is set, the target rectangle does not track the view; if the view moves (such as would happen in a scroll view), you must update the target rectangle accordingly.

## See Also

### Positioning the menu

- [menuFrame](menuframe.md): Deprecated. Returns the frame of the editing menu.
- [arrowDirection](arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuController.ArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.

# setTargetRect:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 13.0) · iPadOS 3.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the area in a view above or below which the editing menu is positioned.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```objectivec
- (void) setTargetRect:(CGRect) targetRect inView:(UIView *) targetView;
```

## Parameters

- `targetRect`: A rectangle that defines the area that is to be the target of the menu commands.
- `targetView`: The view in which `targetRect` appears.

<a id="Discussion"></a>

## Discussion

This target rectangle (`targetRect`) is usually the bounding rectangle of a selection. `UIMenuController` positions the editing menu above this rectangle; if there is not enough space for the menu there, it positions it below the rectangle. The menu’s pointer is placed at the center of the top or bottom of the target rectangle as appropriate. Note that if you make the width or height of the target rectangle zero, `UIMenuController` treats the target area as a line or point for positioning (for example, an insertion caret or a single point).

Once it is set, the target rectangle does not track the view; if the view moves (such as would happen in a scroll view), you must update the target rectangle accordingly.

## See Also

### Positioning the menu

- [menuFrame](menuframe.md): Deprecated. Returns the frame of the editing menu.
- [arrowDirection](arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuControllerArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
