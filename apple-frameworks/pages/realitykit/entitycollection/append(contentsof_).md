> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/append(contentsof:)](https://developer.apple.com/documentation/realitykit/entitycollection/append(contentsof:))

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

## Default Implementations

### EntityCollection Implementations

- [append(contentsOf:)](append%28contentsof_%29-9g9w5.md): Adds the specified sequence of entities to the end of this collection, in order.
