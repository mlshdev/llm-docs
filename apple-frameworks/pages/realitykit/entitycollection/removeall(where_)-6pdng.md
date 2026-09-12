> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/removeall(where:)-6pdng](https://developer.apple.com/documentation/realitykit/entitycollection/removeall(where:)-6pdng)

# removeAll(where:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Removes all entities from this collection that satisfy the given predicate.

## Declaration

```swift
mutating func removeAll(where shouldBeRemoved: (Entity) throws -> Bool) rethrows
```

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any remaining entities.
