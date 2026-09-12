> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidershape](https://developer.apple.com/documentation/realitykit/clothcollidershape)

# ClothColliderShape

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Shape suitable for use as a collider.

## Declaration

```swift
enum ClothColliderShape
```

## Topics

### Specifying the collider shape

- [ClothColliderShape.box(\_:)](clothcollidershape/box%28__%29.md): A box collider shape.
- [ClothColliderShape.roundedBox(\_:)](clothcollidershape/roundedbox%28__%29.md): A rounded box collider shape.
- [ClothColliderShape.sphere(\_:)](clothcollidershape/sphere%28__%29.md): A sphere collider shape.
- [ClothColliderShape.capsule(\_:)](clothcollidershape/capsule%28__%29.md): A capsule collider shape.
- [ClothColliderShape.plane(\_:)](clothcollidershape/plane%28__%29.md): A plane collider shape.
- [ClothColliderShape.mesh(\_:)](clothcollidershape/mesh%28__%29.md): A mesh collider shape.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision

- [ClothColliderComponent](clothcollidercomponent.md): A component that adds a cloth-compatible collider to an entity.
- [ClothColliderMaterial](clothcollidermaterial.md): A struct that represents a collider’s material.
- [ClothCollisionFilter](clothcollisionfilter.md): Defines the collision groups for a body or collider and the mask for one-way collisions.
- [ClothCollisionGroupSet](clothcollisiongroupset.md): `ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.
