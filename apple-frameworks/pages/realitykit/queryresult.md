> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/queryresult](https://developer.apple.com/documentation/realitykit/queryresult)

# QueryResult

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that returns the results of an entity query.

## Declaration

```swift
struct QueryResult<Element>
```

<a id="overview"></a>

## Overview

You can’t create query result objects. Instead, call [performQuery(\_:)](scene/performquery%28__%29.md), which returns a [QueryResult](queryresult.md) containing the entities that meet your specified query criteria.

```swift
// Ask the scene to perform the query and iterate over the returned entities.
scene.performQuery(query).forEach { entity in
    print("Returned entity: \(entity)")
}
```

## Topics

### Creating an iterator

- [QueryResult.Iterator](queryresult/iterator.md): The type of iterator used for entity query results.
- [makeIterator()](queryresult/makeiterator%28%29.md): Returns an iterator for the contained entities.

### Default Implementations

- [Sequence Implementations](queryresult/sequence-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Entity queries

- [EntityQuery](entityquery.md): An object that retrieves entities from a scene.
- [QueryPredicate](querypredicate.md): An object that defines the criteria for an entity query.
