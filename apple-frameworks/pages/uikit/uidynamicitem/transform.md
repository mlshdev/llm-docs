> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitem/transform](https://developer.apple.com/documentation/uikit/uidynamicitem/transform)

# transform (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The rotation of the dynamic item.

## Declaration

```swift
var transform: CGAffineTransform { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit Dynamics makes use only of the rotation value in this property.

The dynamic animator (that the item is associated with) calls this method when it has computed a new rotation value for the item.

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](center.md): The center point of the dynamic item.
- [collisionBoundsType](collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.

# transform (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The rotation of the dynamic item.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGAffineTransform transform;
```

<a id="Discussion"></a>

## Discussion

UIKit Dynamics makes use only of the rotation value in this property.

The dynamic animator (that the item is associated with) calls this method when it has computed a new rotation value for the item.

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](center.md): The center point of the dynamic item.
- [collisionBoundsType](collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.
