> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitem/collisionboundstype](https://developer.apple.com/documentation/uikit/uidynamicitem/collisionboundstype)

# collisionBoundsType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of collision bounds associated with the item.

## Declaration

```swift
optional var collisionBoundsType: UIDynamicItemCollisionBoundsType { get }
```

<a id="Discussion"></a>

## Discussion

The dynamics system uses this property to determine how to evaluate collisions with the dynamic item. Rectangular and elliptical bounds are defined by the [bounds](bounds.md) property of the item. For custom collision bounds, the shape of the bounds are in the [collisionBoundingPath](collisionboundingpath.md) property.

If you implement this property in your dynamic item and set its value to [UIDynamicItemCollisionBoundsType.path](../uidynamicitemcollisionboundstype/path.md), you must also implement the [collisionBoundingPath](collisionboundingpath.md) property and provide a valid path. Failure to do so is a programmer error.

The default value of this property is [UIDynamicItemCollisionBoundsType.rectangle](../uidynamicitemcollisionboundstype/rectangle.md).

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](center.md): The center point of the dynamic item.
- [transform](transform.md): The rotation of the dynamic item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.

# collisionBoundsType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of collision bounds associated with the item.

## Declaration

```objectivec
@property (nonatomic, readonly) UIDynamicItemCollisionBoundsType collisionBoundsType;
```

<a id="Discussion"></a>

## Discussion

The dynamics system uses this property to determine how to evaluate collisions with the dynamic item. Rectangular and elliptical bounds are defined by the [bounds](bounds.md) property of the item. For custom collision bounds, the shape of the bounds are in the [collisionBoundingPath](collisionboundingpath.md) property.

If you implement this property in your dynamic item and set its value to [UIDynamicItemCollisionBoundsTypePath](../uidynamicitemcollisionboundstype/path.md), you must also implement the [collisionBoundingPath](collisionboundingpath.md) property and provide a valid path. Failure to do so is a programmer error.

The default value of this property is [UIDynamicItemCollisionBoundsTypeRectangle](../uidynamicitemcollisionboundstype/rectangle.md).

## See Also

### Participating in dynamic animation

- [bounds](bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](center.md): The center point of the dynamic item.
- [transform](transform.md): The rotation of the dynamic item.
- [collisionBoundingPath](collisionboundingpath.md): The path-based shape to use for the collision bounds.
