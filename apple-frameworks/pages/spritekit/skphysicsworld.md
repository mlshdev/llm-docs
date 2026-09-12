> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld](https://developer.apple.com/documentation/spritekit/skphysicsworld)

# SKPhysicsWorld (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.

## Declaration

```swift
class SKPhysicsWorld
```

## Mentioned In

- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)
- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md)
- [Getting Started with Physics](getting-started-with-physics.md)

<a id="overview"></a>

## Overview

`SKPhysicsWorld` runs the physics engine of a scene and is the place that contact detection occurs. Do not create a `SKPhysicsWorld` directly; the system creates a physics world and adds it to the scene’s [physicsWorld](skscene/physicsworld.md) property.

The physics world allows you to:

- Set important properties like [gravity](skphysicsworld/gravity.md)
- Join two physics bodies using an [SKPhysicsJoint](skphysicsjoint.md)
- Respond to collision between two physics bodies using [contactDelegate](skphysicsworld/contactdelegate.md)
- Do custom collisions detection or hit testing

## Topics

### Configuring the Physics World

- [gravity](skphysicsworld/gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](skphysicsworld/speed.md): The rate at which the simulation executes.

### Joining Physics Bodies with Joints

- [add(\_:)](skphysicsworld/add%28__%29.md): Adds a joint to the physics world.
- [removeAllJoints()](skphysicsworld/removealljoints%28%29.md): Removes all joints from the physics world.
- [remove(\_:)](skphysicsworld/remove%28__%29.md): Removes a specific joint from the physics world.

### Detecting Collisions

- [contactDelegate](skphysicsworld/contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [body(alongRayStart:end:)](skphysicsworld/body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [body(at:)](skphysicsworld/body%28at_%29.md): Searches for the first physics body that contains a point.
- [body(in:)](skphysicsworld/body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodies(alongRayStart:end:using:)](skphysicsworld/enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodies(at:using:)](skphysicsworld/enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodies(in:using:)](skphysicsworld/enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

### Sampling Physics Fields

- [sampleFields(at:)](skphysicsworld/samplefields%28at_%29.md): Samples all of the field nodes in the scene and returns the summation of their forces at that point.

### Initializers

- [init(coder:)](skphysicsworld/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

# SKPhysicsWorld (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.

## Declaration

```objectivec
@interface SKPhysicsWorld : NSObject
```

## Mentioned In

- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)
- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md)
- [Getting Started with Physics](getting-started-with-physics.md)

<a id="overview"></a>

## Overview

`SKPhysicsWorld` runs the physics engine of a scene and is the place that contact detection occurs. Do not create a `SKPhysicsWorld` directly; the system creates a physics world and adds it to the scene’s [physicsWorld](skscene/physicsworld.md) property.

The physics world allows you to:

- Set important properties like [gravity](skphysicsworld/gravity.md)
- Join two physics bodies using an [SKPhysicsJoint](skphysicsjoint.md)
- Respond to collision between two physics bodies using [contactDelegate](skphysicsworld/contactdelegate.md)
- Do custom collisions detection or hit testing

## Topics

### Configuring the Physics World

- [gravity](skphysicsworld/gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](skphysicsworld/speed.md): The rate at which the simulation executes.

### Joining Physics Bodies with Joints

- [addJoint:](skphysicsworld/add%28__%29.md): Adds a joint to the physics world.
- [removeAllJoints](skphysicsworld/removealljoints%28%29.md): Removes all joints from the physics world.
- [removeJoint:](skphysicsworld/remove%28__%29.md): Removes a specific joint from the physics world.

### Detecting Collisions

- [contactDelegate](skphysicsworld/contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [bodyAlongRayStart:end:](skphysicsworld/body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [bodyAtPoint:](skphysicsworld/body%28at_%29.md): Searches for the first physics body that contains a point.
- [bodyInRect:](skphysicsworld/body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodiesAlongRayStart:end:usingBlock:](skphysicsworld/enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodiesAtPoint:usingBlock:](skphysicsworld/enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodiesInRect:usingBlock:](skphysicsworld/enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

### Sampling Physics Fields

- [sampleFieldsAt:](skphysicsworld/samplefields%28at_%29.md): Samples all of the field nodes in the scene and returns the summation of their forces at that point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.
