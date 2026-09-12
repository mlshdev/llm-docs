> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/collisionbitmask](https://developer.apple.com/documentation/scenekit/scnphysicsbody/collisionbitmask)

# collisionBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A mask that defines which categories of physics bodies can collide with this physics body.

## Declaration

```swift
var collisionBitMask: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When two physics bodies contact each other, a collision may occur. SceneKit compares the body’s collision mask to the other body’s category mask by performing a bitwise AND operation. If the result is a nonzero value, then the body is affected by the collision. Each body independently chooses whether it wants to be affected by the other body. For example, you might choose to avoid collision calculations that would make negligible changes to a body’s velocity.

The default value is [all](../scnphysicscollisioncategory/all.md) (a bit mask whose every bit is enabled), specifying that the body will collide with bodies of all other categories.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

# collisionBitMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A mask that defines which categories of physics bodies can collide with this physics body.

## Declaration

```objectivec
@property (nonatomic) NSUInteger collisionBitMask;
```

<a id="Discussion"></a>

## Discussion

When two physics bodies contact each other, a collision may occur. SceneKit compares the body’s collision mask to the other body’s category mask by performing a bitwise AND operation. If the result is a nonzero value, then the body is affected by the collision. Each body independently chooses whether it wants to be affected by the other body. For example, you might choose to avoid collision calculations that would make negligible changes to a body’s velocity.

The default value is [SCNPhysicsCollisionCategoryAll](../scnphysicscollisioncategory/all.md) (a bit mask whose every bit is enabled), specifying that the body will collide with bodies of all other categories.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [SCNPhysicsCollisionCategory](../scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](categorybitmask.md) and [collisionBitMask](collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.
