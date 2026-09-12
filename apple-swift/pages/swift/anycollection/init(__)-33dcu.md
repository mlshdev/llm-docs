> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anycollection/init(_:)-33dcu](https://developer.apple.com/documentation/swift/anycollection/init(_:)-33dcu)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a type-erased collection that wraps the given collection.

## Declaration

```swift
init<C>(_ base: C) where Element == C.Element, C : BidirectionalCollection
```

## Parameters

- `base`: The collection to wrap.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1).
