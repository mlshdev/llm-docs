> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/removeall(where:)](https://developer.apple.com/documentation/realitykit/entitycollection/removeall(where:))

# removeAll(where:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Removes all entities from this collection that satisfy the given predicate.

## Declaration

```swift
mutating func removeAll(where: (Entity) throws -> Bool) rethrows
```

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any remaining entities.

## Default Implementations

### EntityCollection Implementations

- [removeAll(where:)](removeall%28where_%29-6pdng.md): Removes all entities from this collection that satisfy the given predicate.
