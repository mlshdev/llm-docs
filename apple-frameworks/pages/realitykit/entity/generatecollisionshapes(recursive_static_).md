> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/generatecollisionshapes(recursive:static:)](https://developer.apple.com/documentation/realitykit/entity/generatecollisionshapes(recursive:static:))

# generateCollisionShapes(recursive:static:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates the shape used to detect collisions between two entities that have collision components.

## Declaration

```swift
@MainActor @preconcurrency func generateCollisionShapes(recursive: Bool, static isStatic: Bool)
```

## Parameters

- `recursive`: A Boolean that you set to `true` to also generate the collision shapes for all descendants of the entity. If a descendant is in a `LevelOfDetailComponent`’s level and is not the base level it will be skipped.
- `isStatic`: A Boolean value that indicates whether the colliders move. Set this to `true` to indicate the colliders don’t move. Non-moving, static colliders are more efficient to use than non-static ones.

<a id="discussion"></a>

## Discussion

Call this method on entities that have a mesh to prepare a shape used for collision detection. The method stores the shape in the entity’s [CollisionComponent](../collisioncomponent.md) instance.

This method has no effect for entities without a mesh. Nevertheless, the method is defined for all entities so that you can call it on any entity, and have the calculation propagate recursively to all that entity’s descendants.

## See Also

### Creating a collision shape

- [generateCollisionShapes(recursive:)](generatecollisionshapes%28recursive_%29.md): Creates the shape used to detect collisions between two entities that have collision components.
