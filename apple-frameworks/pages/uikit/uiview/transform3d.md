> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/transform3d](https://developer.apple.com/documentation/uikit/uiview/transform3d)

# transform3D (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The three-dimensional transform to apply to the view.

## Declaration

```swift
var transform3D: CATransform3D { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CATransform3DIdentity](../../quartzcore/catransform3didentity.md).

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.
- [center](center.md): The center point of the view’s frame rectangle.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.

# transform3D (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The three-dimensional transform to apply to the view.

## Declaration

```objectivec
@property (nonatomic) CATransform3D transform3D;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CATransform3DIdentity](../../quartzcore/catransform3didentity.md).

## See Also

### Configuring the bounds and frame rectangles

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.
- [center](center.md): The center point of the view’s frame rectangle.
- [transform](transform.md): Specifies the transform applied to the view, relative to the center of its bounds.
- [anchorPoint](anchorpoint.md): The anchor point of the view’s bounds rectangle.
