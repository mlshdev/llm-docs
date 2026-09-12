> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcolliderevents/newbodycollisions/collision](https://developer.apple.com/documentation/realitykit/clothcolliderevents/newbodycollisions/collision)

# ClothColliderEvents.NewBodyCollisions.Collision

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A collision with a cloth body.

## Declaration

```swift
struct Collision
```

## Topics

### Identifying the collider

- [bodyEntity](collision/bodyentity.md): The entity of the body that collided with the collider.
- [bodyComponent](collision/bodycomponent.md): The [ClothBodyComponent](../../clothbodycomponent.md) of the colliding body, if still present on the entity.

### Accessing affected particles

- [withParticleIndices(\_:)](collision/withparticleindices%28__%29.md): Provides access to the indices of particles that collided with the collider.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing collision data

- [withCollisions(\_:)](withcollisions%28__%29.md): Provides access to the collisions with cloth bodies that took place.
