> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicscontact](https://developer.apple.com/documentation/spritekit/skphysicscontact)

# SKPhysicsContact (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the contact between two physics bodies.

## Declaration

```swift
class SKPhysicsContact
```

<a id="overview"></a>

## Overview

An [SKPhysicsContact](skphysicscontact.md) object is created automatically by SpriteKit to describe a contact between two physical bodies in a physics world.To receive contact messages, read the [physicsWorld](skscene/physicsworld.md) property of an [SKScene](skscene.md) object you are interested in, and assign its [contactDelegate](skphysicsworld/contactdelegate.md) property to point to an object that implements the [SKPhysicsContactDelegate](skphysicscontactdelegate.md) protocol. Then, for each physics body in your scene, set the [categoryBitMask](skphysicsbody/categorybitmask.md) and [contactTestBitMask](skphysicsbody/contacttestbitmask.md) properties to define which interactions should generate contact messages.

## Topics

### Inspecting the Contact Properties

- [bodyA](skphysicscontact/bodya.md): The first body in the contact.
- [bodyB](skphysicscontact/bodyb.md): The second body in the contact.
- [contactPoint](skphysicscontact/contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](skphysicscontact/collisionimpulse.md): The impulse that specifies how hard these two bodies struck each other in Newton-seconds.
- [contactNormal](skphysicscontact/contactnormal.md): The normal vector specifying the direction of the collision.

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

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

# SKPhysicsContact (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the contact between two physics bodies.

## Declaration

```objectivec
@interface SKPhysicsContact : NSObject
```

<a id="overview"></a>

## Overview

An [SKPhysicsContact](skphysicscontact.md) object is created automatically by SpriteKit to describe a contact between two physical bodies in a physics world.To receive contact messages, read the [physicsWorld](skscene/physicsworld.md) property of an [SKScene](skscene.md) object you are interested in, and assign its [contactDelegate](skphysicsworld/contactdelegate.md) property to point to an object that implements the [SKPhysicsContactDelegate](skphysicscontactdelegate.md) protocol. Then, for each physics body in your scene, set the [categoryBitMask](skphysicsbody/categorybitmask.md) and [contactTestBitMask](skphysicsbody/contacttestbitmask.md) properties to define which interactions should generate contact messages.

## Topics

### Inspecting the Contact Properties

- [bodyA](skphysicscontact/bodya.md): The first body in the contact.
- [bodyB](skphysicscontact/bodyb.md): The second body in the contact.
- [contactPoint](skphysicscontact/contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](skphysicscontact/collisionimpulse.md): The impulse that specifies how hard these two bodies struck each other in Newton-seconds.
- [contactNormal](skphysicscontact/contactnormal.md): The normal vector specifying the direction of the collision.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.
