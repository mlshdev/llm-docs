> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/arrowdirection-swift.property](https://developer.apple.com/documentation/uikit/uimenucontroller/arrowdirection-swift.property)

# arrowDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The direction the arrow of the editing menu is pointing.

## Declaration

```swift
var arrowDirection: UIMenuController.ArrowDirection { get set }
```

<a id="Discussion"></a>

## Discussion

You can set the direction editing-menu arrow points by assigning a [UIMenuController.ArrowDirection](arrowdirection-swift.enum.md) enum constant to this property. The default behavior ([UIMenuController.ArrowDirection.default](arrowdirection-swift.enum/default.md)) is to point up or down at the object of focus based on its location on the screen.

## See Also

### Positioning the menu

- [menuFrame](menuframe.md): Deprecated. Returns the frame of the editing menu.
- [UIMenuController.ArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect(\_:in:)](settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.

# arrowDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The direction the arrow of the editing menu is pointing.

## Declaration

```objectivec
@property (nonatomic) UIMenuControllerArrowDirection arrowDirection;
```

<a id="Discussion"></a>

## Discussion

You can set the direction editing-menu arrow points by assigning a [UIMenuControllerArrowDirection](arrowdirection-swift.enum.md) enum constant to this property. The default behavior ([UIMenuControllerArrowDefault](arrowdirection-swift.enum/default.md)) is to point up or down at the object of focus based on its location on the screen.

## See Also

### Positioning the menu

- [menuFrame](menuframe.md): Deprecated. Returns the frame of the editing menu.
- [UIMenuControllerArrowDirection](arrowdirection-swift.enum.md): Deprecated. The direction the arrow of the editing menu is pointing.
- [setTargetRect:inView:](settargetrect%28__in_%29.md): Deprecated. Sets the area in a view above or below which the editing menu is positioned.
