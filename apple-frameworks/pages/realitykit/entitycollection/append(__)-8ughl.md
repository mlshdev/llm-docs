> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/append(_:)-8ughl](https://developer.apple.com/documentation/realitykit/entitycollection/append(_:)-8ughl)

# append(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Adds the specified entity to the end of this collection.

## Declaration

```swift
mutating func append(_ entity: Entity)
```

## Parameters

- `entity`: The entity to add to the collection.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation can invalidate the index order of any extant entities.
