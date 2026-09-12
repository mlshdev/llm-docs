> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollisionfilter](https://developer.apple.com/documentation/realitykit/clothcollisionfilter)

# ClothCollisionFilter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Defines the collision groups for a body or collider and the mask for one-way collisions.

## Declaration

```swift
struct ClothCollisionFilter
```

<a id="overview"></a>

## Overview

Collisions in cloth are one-way: an entity’s mask determines which groups it will push away, independently of whether the other entity pushes back. For a body particle to be displaced by a collider, the particle’s groups must overlap with the collider’s mask. For two body particles in a self-collision, each particle is independently displaced based on whether its groups overlap with the other particle’s mask.

## Topics

### Creating a collision filter

- [init(groups:mask:)](clothcollisionfilter/init%28groups_mask_%29.md): Creates a collision filter with the given groups and mask.

### Configuring collision groups

- [groups](clothcollisionfilter/groups.md): The set of collision groups, stored as a bit mask, to which the entity belongs.
- [mask](clothcollisionfilter/mask.md): The set of collision groups, stored as a bit mask, towards which the entity introduces one-way collisions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision

- [ClothColliderComponent](clothcollidercomponent.md): A component that adds a cloth-compatible collider to an entity.
- [ClothColliderShape](clothcollidershape.md): Shape suitable for use as a collider.
- [ClothColliderMaterial](clothcollidermaterial.md): A struct that represents a collider’s material.
- [ClothCollisionGroupSet](clothcollisiongroupset.md): `ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.
