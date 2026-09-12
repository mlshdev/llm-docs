> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct](https://developer.apple.com/documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct)

# ClothBodyComponent.ColliderBinding

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Binds the cloth body to an entity’s mesh collider.

## Declaration

```swift
struct ColliderBinding
```

<a id="overview"></a>

## Overview

If the binding is successful, the body particles will be constrained to stay within a configurable distance of their automatically assigned mesh collider triangles, following the collider as it deforms or moves. The per-particle [distanceLimits](colliderbinding-swift.struct/distancelimits.md) controls how strictly each particle is bound.

This can be especially useful to “reset” particles back to their original positions with respect to the collider. For example, when an animated character is teleported and we want some garment the character was wearing to teleport with it in a correct manner.

The triangle on the source collider that each particle will be bound to is computed when the simulation starts, and it is chosen to be the closest triangle to the particle position at that moment.

For the best results, when using this component to attach a garment to an animated character, you should make sure that the position and shape of the collider matches the garment closely at the moment the animation starts.

## Topics

### Binding the collider

- [sourceCollider](colliderbinding-swift.struct/sourcecollider.md): The entity containing the mesh-shaped collider that the body will bind to.
- [isEnabled](colliderbinding-swift.struct/isenabled.md): Indicates whether the cloth body should actively bind to the mesh collider.

### Tuning collision response

- [distanceLimits](colliderbinding-swift.struct/distancelimits.md): Distance limits (in meters) for how much each particle is allowed to deviate from its perfectly-bound position.
- [teleportThresholdSpeed](colliderbinding-swift.struct/teleportthresholdspeed.md): The instantaneous collider speed (in m/s) over which the source collider will be considered to have teleported.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing collisions

- [colliderBinding](colliderbinding-swift.property.md): Configuration for binding the body to a mesh collider specified by [sourceCollider](colliderbinding-swift.struct/sourcecollider.md).
- [collisionFilters](collisionfilters.md): Defines the collision groups that each particle belongs to, and the mask used to determine which collision groups each particle is affected by.
- [enableCollisions(towards:)](enablecollisions%28towards_%29.md): Enables one-way collisions towards the selected groups for all particles in the body.
- [disableCollisions(towards:)](disablecollisions%28towards_%29.md): Disables one-way collisions towards the selected groups for all particles in the body.
