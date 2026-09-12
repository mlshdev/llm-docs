> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscollisioncategory](https://developer.apple.com/documentation/scenekit/scnphysicscollisioncategory)

# SCNPhysicsCollisionCategory (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Default values for a physics body’s [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties.

## Declaration

```swift
struct SCNPhysicsCollisionCategory
```

<a id="overview"></a>

## Overview

You specify contact and collision behaviors by defining your own categories for the kinds of bodies your app simulates and setting the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties for each body to determine which kinds of bodies it collides with. Additionally, you can use the [contactDelegate](scnphysicsworld/contactdelegate.md) property of the physics world to be notified of collisions between bodies.

For more details and example usage, see [Defining a Body’s Category and Collisions](scnphysicsbody.md#Defining-a-Bodys-Category-and-Collisions) in the class overview.

## Topics

### Constants

- [default](scnphysicscollisioncategory/default.md): The default [categoryBitMask](scnphysicsbody/categorybitmask.md) value for dynamic and kinematic bodies.
- [static](scnphysicscollisioncategory/static.md): The default [categoryBitMask](scnphysicsbody/categorybitmask.md) value for static bodies.
- [all](scnphysicscollisioncategory/all.md): This is the default value for a physics body’s [collisionBitMask](scnphysicsbody/collisionbitmask.md) property.

### Initializers

- [init(rawValue:)](scnphysicscollisioncategory/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](scnphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](scnphysicsbody/contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](scnphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [continuousCollisionDetectionThreshold](scnphysicsbody/continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

# SCNPhysicsCollisionCategory (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Default values for a physics body’s [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties.

## Declaration

```objectivec
enum SCNPhysicsCollisionCategory : NSUInteger;
```

<a id="overview"></a>

## Overview

You specify contact and collision behaviors by defining your own categories for the kinds of bodies your app simulates and setting the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties for each body to determine which kinds of bodies it collides with. Additionally, you can use the [contactDelegate](scnphysicsworld/contactdelegate.md) property of the physics world to be notified of collisions between bodies.

For more details and example usage, see [Defining a Body’s Category and Collisions](scnphysicsbody.md#Defining-a-Bodys-Category-and-Collisions) in the class overview.

## Topics

### Constants

- [SCNPhysicsCollisionCategoryDefault](scnphysicscollisioncategory/default.md): The default [categoryBitMask](scnphysicsbody/categorybitmask.md) value for dynamic and kinematic bodies.
- [SCNPhysicsCollisionCategoryStatic](scnphysicscollisioncategory/static.md): The default [categoryBitMask](scnphysicsbody/categorybitmask.md) value for static bodies.
- [SCNPhysicsCollisionCategoryAll](scnphysicscollisioncategory/all.md): This is the default value for a physics body’s [collisionBitMask](scnphysicsbody/collisionbitmask.md) property.

## See Also

### Working with Contacts and Collisions

- [categoryBitMask](scnphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](scnphysicsbody/contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](scnphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [continuousCollisionDetectionThreshold](scnphysicsbody/continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.
