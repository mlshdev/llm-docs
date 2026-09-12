> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/contacttestbitmask](https://developer.apple.com/documentation/scenekit/scnphysicsbody/contacttestbitmask)

# contactTestBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A mask that defines which categories of bodies cause intersection notifications with this physics body.

## Declaration

```swift
var contactTestBitMask: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When two physics bodies overlap, a contact may occur. SceneKit compares the body’s contact mask to the other body’s category mask by performing a bitwise AND operation. If the result is a nonzero value, SceneKit creates an [SCNPhysicsContact](../scnphysicscontact.md) object describing the contact and sends messages to the  [contactDelegate](../scnphysicsworld/contactdelegate.md) object of the scene’s physics world. For best performance, only set bits in the contact mask for interactions you are interested in.

For applications running in OS X v10.10 or iOS 8, this property’s value matches that of the [collisionBitMask](collisionbitmask.md) property—that is, SceneKit sends contact messages if and only if a collision occurs. For applications running in OS X v10.11 or iOS 9 or later, this property’s value defaults to zero and need not match the collision mask—that is, a pair of bodies generates contact messages whenever the bodies intersect, regardless of whether they collide or pass through one another.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

# contactTestBitMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mask that defines which categories of bodies cause intersection notifications with this physics body.

## Declaration

```objectivec
@property (nonatomic) NSUInteger contactTestBitMask;
```

<a id="Discussion"></a>

## Discussion

When two physics bodies overlap, a contact may occur. SceneKit compares the body’s contact mask to the other body’s category mask by performing a bitwise AND operation. If the result is a nonzero value, SceneKit creates an [SCNPhysicsContact](../scnphysicscontact.md) object describing the contact and sends messages to the  [contactDelegate](../scnphysicsworld/contactdelegate.md) object of the scene’s physics world. For best performance, only set bits in the contact mask for interactions you are interested in.

For applications running in OS X v10.10 or iOS 8, this property’s value matches that of the [collisionBitMask](collisionbitmask.md) property—that is, SceneKit sends contact messages if and only if a collision occurs. For applications running in OS X v10.11 or iOS 9 or later, this property’s value defaults to zero and need not match the collision mask—that is, a pair of bodies generates contact messages whenever the bodies intersect, regardless of whether they collide or pass through one another.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.
