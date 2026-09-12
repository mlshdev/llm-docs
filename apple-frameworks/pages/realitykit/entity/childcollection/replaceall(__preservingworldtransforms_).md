> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/replaceall(_:preservingworldtransforms:)](https://developer.apple.com/documentation/realitykit/entity/childcollection/replaceall(_:preservingworldtransforms:))

# replaceAll(\_:preservingWorldTransforms:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes all children from this entity and adds the specified list of entities as the new children.

## Declaration

```swift
@MainActor @preconcurrency func replaceAll(_ children: [Entity], preservingWorldTransforms: Bool = false)
```

## Parameters

- `children`: The list of the new children.
- `preservingWorldTransforms`: `true` to preserve the world transform. `false` to preserve the relative transform. (Use `true` if the entities should keep its effective location and size in the scene!)
