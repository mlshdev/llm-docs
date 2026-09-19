> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/childcollection/replaceall(_:preservingworldtransforms:)-1vwk4

# replaceAll(\_:preservingWorldTransforms:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes all children from this entity and adds the specified list of entities as the new children.

## Declaration

```swift
@MainActor @preconcurrency func replaceAll<S>(_ children: S, preservingWorldTransforms: Bool = false) where S : Sequence, S.Element : Entity
```

## Parameters

- `children`: The list of the new children.
- `preservingWorldTransforms`: `true` to preserve the world transform. `false` to preserve the relative transform. (Use `true` if the entities should keep its effective location and size in the scene!)

## See Also

### Replacing entities

- [replaceAll(\_:preservingWorldTransforms:)](replaceall%28__preservingworldtransforms_%29-4mgff.md): Removes all children from this entity and adds the specified list of entities as the new children.
