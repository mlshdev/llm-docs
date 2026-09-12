> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidermaterial](https://developer.apple.com/documentation/realitykit/clothcollidermaterial)

# ClothColliderMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A struct that represents a collider’s material.

## Declaration

```swift
struct ClothColliderMaterial
```

## Topics

### Configuring friction

- [kineticFriction](clothcollidermaterial/kineticfriction.md): The friction the collider applies to contacting cloth body particles with relative motion.
- [staticFriction](clothcollidermaterial/staticfriction.md): The friction the collider applies to contacting cloth body particles with no relative motion.

### Initializers

- [init()](clothcollidermaterial/init%28%29.md): Creates a new material for cloth colliders.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision

- [ClothColliderComponent](clothcollidercomponent.md): A component that adds a cloth-compatible collider to an entity.
- [ClothColliderShape](clothcollidershape.md): Shape suitable for use as a collider.
- [ClothCollisionFilter](clothcollisionfilter.md): Defines the collision groups for a body or collider and the mask for one-way collisions.
- [ClothCollisionGroupSet](clothcollisiongroupset.md): `ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.
