> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy/parent](https://developer.apple.com/documentation/realitykit/hashierarchy/parent)

# parent

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The parent entity.

## Declaration

```swift
@MainActor @preconcurrency var parent: Entity? { get }
```

<a id="discussion"></a>

## Discussion

An entity has at most one parent entity. If an entity isn’t part of a hierarchy, or if it is a root entity, the [parent](parent.md) property is `nil`.

Use the [setParent(\_:preservingWorldTransform:)](setparent%28__preservingworldtransform_%29.md) method to change an entity’s parent. Use the [removeFromParent(preservingWorldTransform:)](removefromparent%28preservingworldtransform_%29.md) method to remove the parent. These methods automatically update the corresponding [children](children.md) collections of the new and old parent.

## See Also

### Managing the parent

- [setParent(\_:preservingWorldTransform:)](setparent%28__preservingworldtransform_%29.md): Attaches the entity as a child to the specified entity.
- [removeFromParent(preservingWorldTransform:)](removefromparent%28preservingworldtransform_%29.md): Removes the entity from its current parent or from the scene if it is a root entity.
