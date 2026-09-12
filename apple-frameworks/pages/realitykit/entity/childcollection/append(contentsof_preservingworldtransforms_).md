> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/append(contentsof:preservingworldtransforms:)](https://developer.apple.com/documentation/realitykit/entity/childcollection/append(contentsof:preservingworldtransforms:))

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
