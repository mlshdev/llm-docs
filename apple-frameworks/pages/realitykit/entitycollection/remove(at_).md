> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/remove(at:)](https://developer.apple.com/documentation/realitykit/entitycollection/remove(at:))

# remove(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Removes the entity at the given index from this collection.

## Declaration

```swift
mutating func remove(at index: Int)
```

## Parameters

- `index`: The index of the entity to remove from the collection.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any remaining entities.
