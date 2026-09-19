> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entitycollection/append(contentsof:)-9g9w5

# append(contentsOf:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the specified sequence of entities to the end of this collection, in order.

## Declaration

```swift
mutating func append<S>(contentsOf sequence: S) where S : Sequence, S.Element : Entity
```

## Parameters

- `sequence`: The entities to add to the collection.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any extant entities.
