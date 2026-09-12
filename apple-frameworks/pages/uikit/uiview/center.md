> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/center](https://developer.apple.com/documentation/uikit/uiview/center)

# center (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The center point of the view’s frame rectangle.

## Declaration

```swift
var center: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The center point is specified in points in the coordinate system of its superview. Setting this property updates the origin of the rectangle in the [frame](frame.md) property appropriately.

Use this property, instead of the [frame](frame.md) property, when you want to change the position of a view. The center point is always valid, even when scaling or rotation factors are applied to the view’s transform.   Changes to this property can be animated.

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [transform3D](transform3d.md): The three-dimensional transform to apply to the view.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.

# center (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The center point of the view’s frame rectangle.

## Declaration

```objectivec
@property (nonatomic) CGPoint center;
```

<a id="Discussion"></a>

## Discussion

The center point is specified in points in the coordinate system of its superview. Setting this property updates the origin of the rectangle in the [frame](frame.md) property appropriately.

Use this property, instead of the [frame](frame.md) property, when you want to change the position of a view. The center point is always valid, even when scaling or rotation factors are applied to the view’s transform.   Changes to this property can be animated.

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [transform3D](transform3d.md): The three-dimensional transform to apply to the view.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.
