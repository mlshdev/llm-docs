> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/generatecollisionshapes(recursive:)](https://developer.apple.com/documentation/realitykit/entity/generatecollisionshapes(recursive:))

# generateCollisionShapes(recursive:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates the shape used to detect collisions between two entities that have collision components.

## Declaration

```swift
@MainActor @preconcurrency func generateCollisionShapes(recursive: Bool)
```

## Parameters

- `recursive`: A Boolean that you set to `true` to also generate the collision shapes for all descendants of the entity.

## Mentioned In

- [Reducing CPU Utilization in Your RealityKit App](../reducing-cpu-utilization-in-your-realitykit-app.md)

<a id="discussion"></a>

## Discussion

Call this method on entities that have a mesh to prepare a shape used for collision detection. The method stores the shape in the entity’s [CollisionComponent](../collisioncomponent.md) instance.

This method has no effect for entities without a mesh. Nevertheless, the method is defined for all entities so that you can call it on any entity, and have the calculation propagate recursively to all that entity’s descendants.

## See Also

### Creating a collision shape

- [generateCollisionShapes(recursive:static:)](generatecollisionshapes%28recursive_static_%29.md): Creates the shape used to detect collisions between two entities that have collision components.
