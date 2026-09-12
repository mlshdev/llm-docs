> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/remove(_:preservingworldtransform:)](https://developer.apple.com/documentation/realitykit/entity/childcollection/remove(_:preservingworldtransform:))

# remove(\_:preservingWorldTransform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes the specified child from this entity.

## Declaration

```swift
@MainActor @preconcurrency func remove(_ child: Entity, preservingWorldTransform: Bool = false)
```

## Parameters

- `child`: The child entity to remove from the collection.
- `preservingWorldTransform`: `true` to preserve the world transform. `false` to preserve the relative transform. (Use `true` if the entities should keep its effective location and size in the scene!)

<a id="discussion"></a>

## Discussion

> **Note**

> This may modify the order of the `ChildCollection`.

## See Also

### Removing entities

- [remove(at:preservingWorldTransform:)](remove%28at_preservingworldtransform_%29.md): Removes the specified child from this entity.
- [removeAll(preservingWorldTransforms:)](removeall%28preservingworldtransforms_%29.md)
- [removeAll(keepCapacity:preservingWorldTransforms:)](removeall%28keepcapacity_preservingworldtransforms_%29.md): Removes all children from this entity.
