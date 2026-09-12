> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollisiongroupset](https://developer.apple.com/documentation/realitykit/clothcollisiongroupset)

# ClothCollisionGroupSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

`ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.

## Declaration

```swift
struct ClothCollisionGroupSet
```

## Topics

### Creating a group set

- [init(groups:)](clothcollisiongroupset/init%28groups_%29.md): Creates a collision group set from an array of numbered groups.

### Accessing default groups

- [defaultBodies](clothcollisiongroupset/defaultbodies.md): Default option reserved for cloth bodies.
- [defaultColliders](clothcollisiongroupset/defaultcolliders.md): Default option reserved for colliders.

### Initializers

- [init(rawValue:)](clothcollisiongroupset/init%28rawvalue_%29.md): Creates a collision group set from a raw bitmask value.

### Instance Properties

- [rawValue](clothcollisiongroupset/rawvalue.md): The raw bitmask value of the set, where each set bit represents a group between 1 and 32.

### Type Properties

- [all](clothcollisiongroupset/all.md): Option that includes all groups.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Collision

- [ClothColliderComponent](clothcollidercomponent.md): A component that adds a cloth-compatible collider to an entity.
- [ClothColliderShape](clothcollidershape.md): Shape suitable for use as a collider.
- [ClothColliderMaterial](clothcollidermaterial.md): A struct that represents a collider’s material.
- [ClothCollisionFilter](clothcollisionfilter.md): Defines the collision groups for a body or collider and the mask for one-way collisions.
