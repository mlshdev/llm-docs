> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody](https://developer.apple.com/documentation/realitykit/hasphysicsbody)

# HasPhysicsBody

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables physics simulations based on the rules of Newtonian mechanics.

## Declaration

```swift
@MainActor @preconcurrency protocol HasPhysicsBody : HasCollision
```

## Topics

### Getting the component

- [physicsBody](hasphysicsbody/physicsbody.md): A component that is used for physics simulations of the model entity in accordance with the laws of Newtonian mechanics.

### Adding and clearing forces

- [addForce(\_:relativeTo:)](hasphysicsbody/addforce%28__relativeto_%29.md): Applies a force to the physics body at its center of mass.
- [addForce(\_:at:relativeTo:)](hasphysicsbody/addforce%28__at_relativeto_%29.md): Applies a force to the physics body at the specified position.
- [addTorque(\_:relativeTo:)](hasphysicsbody/addtorque%28__relativeto_%29.md): Applies a torque to the physics body at its center of mass.
- [clearForcesAndTorques()](hasphysicsbody/clearforcesandtorques%28%29.md): Clears all forces previously added to the physics body.

### Applying impulses

- [applyLinearImpulse(\_:relativeTo:)](hasphysicsbody/applylinearimpulse%28__relativeto_%29.md): Applies an impulse to the physics body at its center of mass.
- [applyAngularImpulse(\_:relativeTo:)](hasphysicsbody/applyangularimpulse%28__relativeto_%29.md): Applies an angular (torque) impulse to the physics body at its center of mass.
- [applyImpulse(\_:at:relativeTo:)](hasphysicsbody/applyimpulse%28__at_relativeto_%29.md): Applies an impulse to the physics body at the specified position.

### Resetting physics simulations

- [resetPhysicsTransform(recursive:)](hasphysicsbody/resetphysicstransform%28recursive_%29.md): Resets the position, orientation, and velocities of the simulated physics body.
- [resetPhysicsTransform(\_:recursive:)](hasphysicsbody/resetphysicstransform%28__recursive_%29.md): Deprecated. Resets the position and velocities of the simulated physics body.

## Relationships

### Inherits From

- [HasCollision](hascollision.md)
- [HasTransform](hastransform.md)

### Inherited By

- [HasPhysics](hasphysics.md)

### Conforming Types

- [ModelEntity](modelentity.md)

## See Also

### Entity compliance

- [HasPhysicsMotion](hasphysicsmotion.md): An interface that provides velocity properties for physics simulations.
- [HasPhysics](hasphysics.md): An interface that combines the physics body and physics motion interfaces.
