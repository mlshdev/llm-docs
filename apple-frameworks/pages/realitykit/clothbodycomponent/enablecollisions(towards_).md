> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/enablecollisions(towards:)](https://developer.apple.com/documentation/realitykit/clothbodycomponent/enablecollisions(towards:))

# enableCollisions(towards:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Enables one-way collisions towards the selected groups for all particles in the body.

## Declaration

```swift
mutating func enableCollisions(towards groups: ClothCollisionGroupSet)
```

## Parameters

- `groups`: The collision groups to add to the mask of every particle.

<a id="discussion"></a>

## Discussion

This adds the selected groups to the mask of all particles, causing particles in those groups to be pushed away by this body in self-collisions. Colliders are never affected by particles, so this only influences body-to-body interactions.

## See Also

### Managing collisions

- [colliderBinding](colliderbinding-swift.property.md): Configuration for binding the body to a mesh collider specified by [sourceCollider](colliderbinding-swift.struct/sourcecollider.md).
- [ClothBodyComponent.ColliderBinding](colliderbinding-swift.struct.md): Binds the cloth body to an entity’s mesh collider.
- [collisionFilters](collisionfilters.md): Defines the collision groups that each particle belongs to, and the mask used to determine which collision groups each particle is affected by.
- [disableCollisions(towards:)](disablecollisions%28towards_%29.md): Disables one-way collisions towards the selected groups for all particles in the body.
