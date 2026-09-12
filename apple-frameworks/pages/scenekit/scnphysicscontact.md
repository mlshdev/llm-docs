> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontact](https://developer.apple.com/documentation/scenekit/scnphysicscontact)

# SCNPhysicsContact (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Detailed information about a contact between two physics bodies in a scene’s physics simulation.

## Declaration

```swift
class SCNPhysicsContact
```

<a id="overview"></a>

## Overview

You don’t create  [SCNPhysicsContact](scnphysicscontact.md) instances directly; SceneKit automatically creates these objects whenever contacts occur.

To receive contact messages, assign your custom class implementing the [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md) protocol to the [contactDelegate](scnphysicsworld/contactdelegate.md) property of your scene’s [SCNPhysicsWorld](scnphysicsworld.md) obejct. Next, for each physics body in your scene, set the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties to define which interactions should generate contact messages.

## Topics

### Inspecting the Contact Properties

- [nodeA](scnphysicscontact/nodea.md): The node containing the first body in the contact.
- [nodeB](scnphysicscontact/nodeb.md): The node containing the second body in the contact.
- [contactPoint](scnphysicscontact/contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](scnphysicscontact/contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](scnphysicscontact/collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](scnphysicscontact/penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

### Instance Properties

- [sweepTestFraction](scnphysicscontact/sweeptestfraction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Collision and Contact Detection

- [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md): Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.

# SCNPhysicsContact (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Detailed information about a contact between two physics bodies in a scene’s physics simulation.

## Declaration

```objectivec
@interface SCNPhysicsContact : NSObject
```

<a id="overview"></a>

## Overview

You don’t create  [SCNPhysicsContact](scnphysicscontact.md) instances directly; SceneKit automatically creates these objects whenever contacts occur.

To receive contact messages, assign your custom class implementing the [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md) protocol to the [contactDelegate](scnphysicsworld/contactdelegate.md) property of your scene’s [SCNPhysicsWorld](scnphysicsworld.md) obejct. Next, for each physics body in your scene, set the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties to define which interactions should generate contact messages.

## Topics

### Inspecting the Contact Properties

- [nodeA](scnphysicscontact/nodea.md): The node containing the first body in the contact.
- [nodeB](scnphysicscontact/nodeb.md): The node containing the second body in the contact.
- [contactPoint](scnphysicscontact/contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](scnphysicscontact/contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](scnphysicscontact/collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](scnphysicscontact/penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

### Instance Properties

- [sweepTestFraction](scnphysicscontact/sweeptestfraction.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Collision and Contact Detection

- [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md): Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.
