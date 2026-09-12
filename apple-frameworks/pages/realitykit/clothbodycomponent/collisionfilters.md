> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/collisionfilters](https://developer.apple.com/documentation/realitykit/clothbodycomponent/collisionfilters)

# collisionFilters

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Defines the collision groups that each particle belongs to, and the mask used to determine which collision groups each particle is affected by.

## Declaration

```swift
var collisionFilters: PerClothVertexData<ClothCollisionFilter> { get set }
```

<a id="discussion"></a>

## Discussion

By default, the collision groups are set to `.defaultBodies`, and the mask is set to `.all`.

## See Also

### Managing collisions

- [colliderBinding](colliderbinding-swift.property.md): Configuration for binding the body to a mesh collider specified by [sourceCollider](colliderbinding-swift.struct/sourcecollider.md).
- [ClothBodyComponent.ColliderBinding](colliderbinding-swift.struct.md): Binds the cloth body to an entity’s mesh collider.
- [enableCollisions(towards:)](enablecollisions%28towards_%29.md): Enables one-way collisions towards the selected groups for all particles in the body.
- [disableCollisions(towards:)](disablecollisions%28towards_%29.md): Disables one-way collisions towards the selected groups for all particles in the body.
