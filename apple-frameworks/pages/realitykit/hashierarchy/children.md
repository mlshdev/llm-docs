> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy/children](https://developer.apple.com/documentation/realitykit/hashierarchy/children)

# children

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The child entities that the entity manages.

## Declaration

```swift
@MainActor @preconcurrency var children: Entity.ChildCollection { get set }
```

<a id="discussion"></a>

## Discussion

An entity can have any number of child entities.

Use the [addChild(\_:preservingWorldTransform:)](addchild%28__preservingworldtransform_%29.md) method to add a child to an entity. Use the [removeChild(\_:preservingWorldTransform:)](removechild%28__preservingworldtransform_%29.md) method to remove one from an entity. These methods automatically update the [parent](parent.md) properties of the child entities.

## See Also

### Managing children

- [addChild(\_:preservingWorldTransform:)](addchild%28__preservingworldtransform_%29.md): Adds the given entity to the collection of child entities.
- [removeChild(\_:preservingWorldTransform:)](removechild%28__preservingworldtransform_%29.md): Removes the given child from the entity.
