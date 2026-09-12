> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/bounds](https://developer.apple.com/documentation/uikit/uiview/bounds)

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The bounds rectangle, which describes the view’s location and size in its own coordinate system.

## Declaration

```swift
var bounds: CGRect { get set }
```

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)

<a id="Discussion"></a>

## Discussion

The default bounds origin is (0,0) and the size is the same as the size of the rectangle in the [frame](frame.md) property. Changing the size portion of this rectangle grows or shrinks the view relative to its center point. Changing the size also changes the size of the rectangle in the [frame](frame.md) property to match. The coordinates of the bounds rectangle are always specified in points.

Changing the bounds rectangle automatically redisplays the view without calling its [draw(\_:)](draw%28__%29.md) method. If you want UIKit to call the [draw(\_:)](draw%28__%29.md) method, set the [contentMode](contentmode-swift.property.md) property to [UIView.ContentMode.redraw](contentmode-swift.enum/redraw.md).

Changes to this property can be animated.

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [center](center.md): The center point of the view’s frame rectangle.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [transform3D](transform3d.md): The three-dimensional transform to apply to the view.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The bounds rectangle, which describes the view’s location and size in its own coordinate system.

## Declaration

```objectivec
@property (nonatomic) CGRect bounds;
```

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)

<a id="Discussion"></a>

## Discussion

The default bounds origin is (0,0) and the size is the same as the size of the rectangle in the [frame](frame.md) property. Changing the size portion of this rectangle grows or shrinks the view relative to its center point. Changing the size also changes the size of the rectangle in the [frame](frame.md) property to match. The coordinates of the bounds rectangle are always specified in points.

Changing the bounds rectangle automatically redisplays the view without calling its [drawRect:](draw%28__%29.md) method. If you want UIKit to call the [drawRect:](draw%28__%29.md) method, set the [contentMode](contentmode-swift.property.md) property to [UIViewContentModeRedraw](contentmode-swift.enum/redraw.md).

Changes to this property can be animated.

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [center](center.md): The center point of the view’s frame rectangle.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [transform3D](transform3d.md): The three-dimensional transform to apply to the view.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.
