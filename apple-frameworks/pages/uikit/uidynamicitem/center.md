> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitem/center](https://developer.apple.com/documentation/uikit/uidynamicitem/center)

# center (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The center point of the dynamic item.

## Declaration

```swift
var center: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The dynamic animator (that the item is associated with) calls this method when it has computed a new center point for the item.

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [transform](transform.md): The rotation of the dynamic item.
- [collisionBoundsType](collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.

# center (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The center point of the dynamic item.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGPoint center;
```

<a id="Discussion"></a>

## Discussion

The dynamic animator (that the item is associated with) calls this method when it has computed a new center point for the item.

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [transform](transform.md): The rotation of the dynamic item.
- [collisionBoundsType](collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.
