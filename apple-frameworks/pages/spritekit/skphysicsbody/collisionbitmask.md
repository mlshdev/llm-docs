> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/collisionbitmask](https://developer.apple.com/documentation/spritekit/skphysicsbody/collisionbitmask)

# collisionBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories of physics bodies can collide with this physics body.

## Declaration

```swift
var collisionBitMask: UInt32 { get set }
```

## Mentioned In

- [About Collisions and Contacts](../about-collisions-and-contacts.md)

<a id="Discussion"></a>

## Discussion

When two physics bodies contact each other, a collision may occur. This body’s collision mask is compared to the other body’s category mask by performing a logical AND operation. If the result is a nonzero value, this body is affected by the collision. Each body independently chooses whether it wants to be affected by the other body. For example, you might use this to avoid collision calculations that would make negligible changes to a body’s velocity.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies()](allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.

# collisionBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories of physics bodies can collide with this physics body.

## Declaration

```objectivec
@property (nonatomic, assign) uint32_t collisionBitMask;
```

## Mentioned In

- [About Collisions and Contacts](../about-collisions-and-contacts.md)

<a id="Discussion"></a>

## Discussion

When two physics bodies contact each other, a collision may occur. This body’s collision mask is compared to the other body’s category mask by performing a logical AND operation. If the result is a nonzero value, this body is affected by the collision. Each body independently chooses whether it wants to be affected by the other body. For example, you might use this to avoid collision calculations that would make negligible changes to a body’s velocity.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies](allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.
