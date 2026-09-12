> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/removeall(keepcapacity:preservingworldtransforms:)](https://developer.apple.com/documentation/realitykit/entity/childcollection/removeall(keepcapacity:preservingworldtransforms:))

# removeAll(keepCapacity:preservingWorldTransforms:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes all children from this entity.

## Declaration

```swift
@MainActor @preconcurrency func removeAll(keepCapacity: Bool = false, preservingWorldTransforms: Bool = false)
```

## Parameters

- `keepCapacity`: `true` to keep the memory reserved for storing the children. `false` to free the reserved memory.
- `preservingWorldTransforms`: `true` to preserve the world transform. `false` to preserve the relative transform. (Use `true` if the entities should keep its effective location and size in the scene!)

## See Also

### Removing entities

- [remove(\_:preservingWorldTransform:)](remove%28__preservingworldtransform_%29.md): Removes the specified child from this entity.
- [remove(at:preservingWorldTransform:)](remove%28at_preservingworldtransform_%29.md): Removes the specified child from this entity.
- [removeAll(preservingWorldTransforms:)](removeall%28preservingworldtransforms_%29.md)
