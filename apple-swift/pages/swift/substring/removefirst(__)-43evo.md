> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/removefirst(_:)-43evo](https://developer.apple.com/documentation/swift/substring/removefirst(_:)-43evo)

# removeFirst(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified number of elements from the beginning of the collection.

## Declaration

```swift
mutating func removeFirst(_ k: Int)
```

## Parameters

- `k`: The number of elements to remove from the collection. `k` must be greater than or equal to zero and must not exceed the number of elements in the collection.

<a id="discussion"></a>

## Discussion

Attempting to remove more elements than exist in the collection triggers a runtime error.

Calling this method may invalidate all saved indices of this collection. Do not rely on a previously stored index value after altering a collection with any operation that can change its length.

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the specified number of elements.
