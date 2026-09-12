> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection/replaceall(_:)-91uho](https://developer.apple.com/documentation/realitykit/entitycollection/replaceall(_:)-91uho)

# replaceAll(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Replaces all entities in this collection with those from the given sequence.

## Declaration

```swift
mutating func replaceAll<S>(_ entities: S) where S : Sequence, S.Element : Entity
```

## Parameters

- `entities`: The sequence of entities that will replace the collection’s current contents.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation might not maintain the new entities’ index order.
