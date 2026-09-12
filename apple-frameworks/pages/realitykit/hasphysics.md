> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysics](https://developer.apple.com/documentation/realitykit/hasphysics)

# HasPhysics

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that combines the physics body and physics motion interfaces.

## Declaration

```swift
@MainActor @preconcurrency protocol HasPhysics : HasPhysicsBody, HasPhysicsMotion
```

## Relationships

### Inherits From

- [HasCollision](hascollision.md)
- [HasPhysicsBody](hasphysicsbody.md)
- [HasPhysicsMotion](hasphysicsmotion.md)
- [HasTransform](hastransform.md)

### Conforming Types

- [ModelEntity](modelentity.md)

## See Also

### Entity compliance

- [HasPhysicsBody](hasphysicsbody.md): An interface that enables physics simulations based on the rules of Newtonian mechanics.
- [HasPhysicsMotion](hasphysicsmotion.md): An interface that provides velocity properties for physics simulations.
