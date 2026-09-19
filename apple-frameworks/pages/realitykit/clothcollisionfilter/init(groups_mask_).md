> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcollisionfilter/init(groups:mask:)

# init(groups:mask:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a collision filter with the given groups and mask.

## Declaration

```swift
init(groups: ClothCollisionGroupSet, mask: ClothCollisionGroupSet)
```

## Parameters

- `groups`: The set of collision groups that the entity belongs to.
- `mask`: The set of collision groups that the entity introduces one-way collisions towards.
