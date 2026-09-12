> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/remove(_:)](https://developer.apple.com/documentation/realitykit/entitycollection/remove(_:))

# remove(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Removes the entity from the collection.

## Declaration

```swift
mutating func remove(_ entity: Entity)
```

## Parameters

- `entity`: The entity to remove from the collection.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any remaining entities.

## Default Implementations

### EntityCollection Implementations

- [remove(\_:)](remove%28__%29-8nj5y.md): Removes the entity from the collection.
