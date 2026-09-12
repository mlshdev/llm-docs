> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/append(contentsof:preservingworldtransforms:)-7p4hd](https://developer.apple.com/documentation/realitykit/entity/childcollection/append(contentsof:preservingworldtransforms:)-7p4hd)

# append(contentsOf:preservingWorldTransforms:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds the specified list of entity as children to this entity.

## Declaration

```swift
@MainActor @preconcurrency func append(contentsOf array: [Entity], preservingWorldTransforms: Bool = false)
```

## Parameters

- `array`: The child entities to add to the collection.
- `preservingWorldTransforms`: `true` to preserve the world transform. `false` to preserve the relative transform. (Use `true` if the entities should keep its effective location and size in the scene!)

## See Also

### Adding entities

- [append(contentsOf:preservingWorldTransforms:)](append%28contentsof_preservingworldtransforms_%29-7g61.md): Adds the specified list of entity as children to this entity.
- [append(\_:preservingWorldTransform:)](append%28__preservingworldtransform_%29.md): Adds the specified entity as a child to this entity.
