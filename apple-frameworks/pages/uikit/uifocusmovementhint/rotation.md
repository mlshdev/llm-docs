> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusmovementhint/rotation](https://developer.apple.com/documentation/uikit/uifocusmovementhint/rotation)

# rotation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

A vector to apply to a transform to match system interaction hinting.

## Declaration

```swift
var rotation: CGVector { get }
```

<a id="Discussion"></a>

## Discussion

This property represents an X,Y-axis translation expressed in radians.

## See Also

### Transforming a hint

- [interactionTransform](interactiontransform.md): A 3D transform that contains the combined transformations of perspective, rotation, and translation.
- [perspectiveTransform](perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [translation](translation.md): A vector to apply to a transform to match system interaction hinting.

# rotation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

A vector to apply to a transform to match system interaction hinting.

## Declaration

```objectivec
@property (nonatomic, readonly) CGVector rotation;
```

<a id="Discussion"></a>

## Discussion

This property represents an X,Y-axis translation expressed in radians.

## See Also

### Transforming a hint

- [interactionTransform](interactiontransform.md): A 3D transform that contains the combined transformations of perspective, rotation, and translation.
- [perspectiveTransform](perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [translation](translation.md): A vector to apply to a transform to match system interaction hinting.
