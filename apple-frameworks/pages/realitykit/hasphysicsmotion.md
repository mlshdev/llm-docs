> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hasphysicsmotion

# HasPhysicsMotion

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that provides velocity properties for physics simulations.

## Declaration

```swift
@MainActor @preconcurrency protocol HasPhysicsMotion : Entity
```

## Topics

### Setting the motion component

- [physicsMotion](hasphysicsmotion/physicsmotion.md): The physics motion component used by physics simulations of the model entity.

## Relationships

### Inherits From

- [Entity](entity.md)

### Inherited By

- [HasPhysics](hasphysics.md)

### Conforming Types

- [ModelEntity](modelentity.md)

## See Also

### Entity compliance

- [HasPhysicsBody](hasphysicsbody.md): An interface that enables physics simulations based on the rules of Newtonian mechanics.
- [HasPhysics](hasphysics.md): An interface that combines the physics body and physics motion interfaces.
