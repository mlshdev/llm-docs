> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/childcollection/append(contentsof:)

# append(contentsOf:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the specified list of entity as children to this entity.

## Declaration

```swift
@MainActor @preconcurrency func append<S>(contentsOf sequence: S) where S : Sequence, S.Element : Entity
```

## Parameters

- `sequence`: The child entities to add to the collection.
