> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusmovementhint/interactiontransform](https://developer.apple.com/documentation/uikit/uifocusmovementhint/interactiontransform)

# interactionTransform (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

A 3D transform that contains the combined transformations of perspective, rotation, and translation.

## Declaration

```swift
var interactionTransform: CATransform3D { get }
```

## See Also

### Transforming a hint

- [perspectiveTransform](perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [rotation](rotation.md): A vector to apply to a transform to match system interaction hinting.
- [translation](translation.md): A vector to apply to a transform to match system interaction hinting.

# interactionTransform (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

A 3D transform that contains the combined transformations of perspective, rotation, and translation.

## Declaration

```objectivec
@property (nonatomic, readonly) CATransform3D interactionTransform;
```

## See Also

### Transforming a hint

- [perspectiveTransform](perspectivetransform.md): A 3D transform that represents a perspective matrix to be applied to match UIKit interaction hinting.
- [rotation](rotation.md): A vector to apply to a transform to match system interaction hinting.
- [translation](translation.md): A vector to apply to a transform to match system interaction hinting.
