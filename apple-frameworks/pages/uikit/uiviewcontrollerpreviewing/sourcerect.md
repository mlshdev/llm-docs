> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewing/sourcerect](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewing/sourcerect)

# sourceRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```swift
var sourceRect: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property if you want to specify a preview indication area that is different than the bounds of the view in the [sourceView](sourceview.md) property. Set this property’s value in your object’s [previewingContext(\_:viewControllerForLocation:)](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method.

The default value of this property corresponds to the bounds of the view in the [sourceView](sourceview.md) property.

For example, if your source view is a table view, you can set the `sourceRect` property to the frame of the row under the user’s touch. The row then remains visually sharp when a user presses it, while surrounding content blurs, thereby indicating to the user that it is the row being touched that has a preview available.

You can change the value of this property at runtime.

## See Also

### Related Documentation

- [sourceView](sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

### Configuring a source view for a 3D Touch previewing view controller

- [previewingGestureRecognizerForFailureRelationship](previewinggesturerecognizerforfailurerelationship.md): Deprecated. A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.

# sourceRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```objectivec
@property (nonatomic) CGRect sourceRect;
```

<a id="Discussion"></a>

## Discussion

Use this property if you want to specify a preview indication area that is different than the bounds of the view in the [sourceView](sourceview.md) property. Set this property’s value in your object’s [previewingContext:viewControllerForLocation:](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method.

The default value of this property corresponds to the bounds of the view in the [sourceView](sourceview.md) property.

For example, if your source view is a table view, you can set the `sourceRect` property to the frame of the row under the user’s touch. The row then remains visually sharp when a user presses it, while surrounding content blurs, thereby indicating to the user that it is the row being touched that has a preview available.

You can change the value of this property at runtime.

## See Also

### Related Documentation

- [sourceView](sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

### Configuring a source view for a 3D Touch previewing view controller

- [previewingGestureRecognizerForFailureRelationship](previewinggesturerecognizerforfailurerelationship.md): Deprecated. A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.
