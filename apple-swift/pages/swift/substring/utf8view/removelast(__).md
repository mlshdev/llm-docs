> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/utf8view/removelast(_:)](https://developer.apple.com/documentation/swift/substring/utf8view/removelast(_:))

# removeLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the given number of elements from the end of the collection.

## Declaration

```swift
mutating func removeLast(_ k: Int)
```

## Parameters

- `k`: The number of elements to remove. `k` must be greater than or equal to zero, and must be less than or equal to the number of elements in the collection.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the number of elements to remove.
