> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/allcontactedbodies()](https://developer.apple.com/documentation/spritekit/skphysicsbody/allcontactedbodies())

# allContactedBodies() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics bodies that this physics body is in contact with.

## Declaration

```swift
func allContactedBodies() -> [SKPhysicsBody]
```

<a id="return-value"></a>

## Return Value

An array of [SKPhysicsBody](../skphysicsbody.md) objects that this body is in contact with.

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.

# allContactedBodies (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics bodies that this physics body is in contact with.

## Declaration

```objectivec
- (NSArray<SKPhysicsBody *> *) allContactedBodies;
```

<a id="return-value"></a>

## Return Value

An array of [SKPhysicsBody](../skphysicsbody.md) objects that this body is in contact with.

## See Also

### Working with Collisions and Contacts

- [About Collisions and Contacts](../about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
