> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/menuframe](https://developer.apple.com/documentation/uikit/uimenucontroller/menuframe)

# menuFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the frame of the editing menu.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```swift
var menuFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The property value is the bounding rectangle of the menu in screen coordinates. The property has a value of [CGRectZero](../../coregraphics/cgrectzero.md) if the menu is not visible. You can use this property to adjust any user-interface objects away from the menu after displaying the menu.

## See Also

### Positioning the menu

- [arrowDirection](arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuController.ArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect(\_:in:)](settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.

# menuFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the frame of the editing menu.

> For more information, see [UIMenuController](../uimenucontroller.md).

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect menuFrame;
```

<a id="Discussion"></a>

## Discussion

The property value is the bounding rectangle of the menu in screen coordinates. The property has a value of [CGRectZero](../../coregraphics/cgrectzero.md) if the menu is not visible. You can use this property to adjust any user-interface objects away from the menu after displaying the menu.

## See Also

### Positioning the menu

- [arrowDirection](arrowdirection-swift.property.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [UIMenuControllerArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect:inView:](settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.
