> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/categorybitmask](https://developer.apple.com/documentation/spritekit/skphysicsbody/categorybitmask)

# categoryBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories this physics body belongs to.

## Declaration

```swift
var categoryBitMask: UInt32 { get set }
```

## Mentioned In

- [About Collisions and Contacts](../about-collisions-and-contacts.md)

<a id="Discussion"></a>

## Discussion

Every physics body in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. You define the mask values used in your game. In conjunction with the [collisionBitMask](collisionbitmask.md) and [contactTestBitMask](contacttestbitmask.md) properties, you define which physics bodies interact with each other and when your game is notified of these interactions.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies()](allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.

# categoryBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories this physics body belongs to.

## Declaration

```objectivec
@property (nonatomic, assign) uint32_t categoryBitMask;
```

## Mentioned In

- [About Collisions and Contacts](../about-collisions-and-contacts.md)

<a id="Discussion"></a>

## Discussion

Every physics body in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. You define the mask values used in your game. In conjunction with the [collisionBitMask](collisionbitmask.md) and [contactTestBitMask](contacttestbitmask.md) properties, you define which physics bodies interact with each other and when your game is notified of these interactions.

The default value is `0xFFFFFFFF` (all bits set).

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies](allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.
