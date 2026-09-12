> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy/removefromparent(preservingworldtransform:)](https://developer.apple.com/documentation/realitykit/hashierarchy/removefromparent(preservingworldtransform:))

# removeFromParent(preservingWorldTransform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes the entity from its current parent or from the scene if it is a root entity.

## Declaration

```swift
@MainActor @preconcurrency func removeFromParent(preservingWorldTransform: Bool = false)
```

## Parameters

- `preservingWorldTransform`: A Boolean that you set to `true` to preserve the entity’s world transform, or `false` to preserve its relative transform. Use `true` when you want a model to keep its effective location and size within a scene.

<a id="discussion"></a>

## Discussion

This method behaves like the [setParent(\_:preservingWorldTransform:)](setparent%28__preservingworldtransform_%29.md) method with a value of `nil` for the `parent` parameter, except that method has no effect on root entities. A root entity is one that is stored in a scene’s [anchors](../scene/anchors.md) collection.

The [children](children.md) collections of any modified parent entities are automatically updated as well.

## See Also

### Managing the parent

- [parent](parent.md): The parent entity.
- [setParent(\_:preservingWorldTransform:)](setparent%28__preservingworldtransform_%29.md): Attaches the entity as a child to the specified entity.
