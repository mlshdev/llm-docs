> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy/setparent(_:preservingworldtransform:)](https://developer.apple.com/documentation/realitykit/hashierarchy/setparent(_:preservingworldtransform:))

# setParent(\_:preservingWorldTransform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Attaches the entity as a child to the specified entity.

## Declaration

```swift
@MainActor @preconcurrency func setParent(_ parent: Entity?, preservingWorldTransform: Bool = false)
```

## Parameters

- `parent`: The new parent entity. Use `nil` to detach the entity from its current parent.
- `preservingWorldTransform`: A Boolean that you set to `true` to preserve the entity’s world transform, or `false` to preserve its relative transform. Use `true` when you want a model to keep its effective location and size within a scene.

<a id="discussion"></a>

## Discussion

Attaching an entity to a new parent automatically detaches it from its old parent.

The [children](children.md) collections of both the old and new parent are automatically updated as well.

> **Important**

> On visionOS, only use `preservingWorldTransform` when moving an entity within the same `AnchorEntity`, `ImmersiveSpace` or SwiftUI `WindowGroup` hierarchy. Moving entities across these hierarchy boundaries while `preservingWorldTransform` is set to `true`, is not supported.

## See Also

### Managing the parent

- [parent](parent.md): The parent entity.
- [removeFromParent(preservingWorldTransform:)](removefromparent%28preservingworldtransform_%29.md): Removes the entity from its current parent or from the scene if it is a root entity.
