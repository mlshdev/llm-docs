> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy/removechild(_:preservingworldtransform:)](https://developer.apple.com/documentation/realitykit/hashierarchy/removechild(_:preservingworldtransform:))

# removeChild(\_:preservingWorldTransform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes the given child from the entity.

## Declaration

```swift
@MainActor @preconcurrency func removeChild(_ entity: Entity, preservingWorldTransform: Bool = false)
```

## Parameters

- `entity`:
- `preservingWorldTransform`: A Boolean that you set to `true` to preserve the entity’s world transform, or `false` to preserve its relative transform. Use `true` when you want a model to keep its effective location and size within a scene.

<a id="discussion"></a>

## Discussion

See the [HasHierarchy](../hashierarchy.md) protocol’s definition of [removeChild(\_:preservingWorldTransform:)](removechild%28__preservingworldtransform_%29.md) for more information.

## See Also

### Managing children

- [children](children.md): The child entities that the entity manages.
- [addChild(\_:preservingWorldTransform:)](addchild%28__preservingworldtransform_%29.md): Adds the given entity to the collection of child entities.
