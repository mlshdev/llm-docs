> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/insert(_:beforeindex:)-1cpdw](https://developer.apple.com/documentation/realitykit/entitycollection/insert(_:beforeindex:)-1cpdw)

# insert(\_:beforeIndex:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the specified entity to this collection directly before the entity at the given index. If the entity is already located before the index, the collection will not change.

## Declaration

```swift
mutating func insert(_ entity: Entity, beforeIndex index: Int)
```

## Parameters

- `entity`: The entity to add to the collection.
- `index`: The index of an entity to insert in front of. If `endIndex` is provided, the entity will be appended.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any extant entities.
