> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/values-swift.struct/swapat(_:_:)-18i76](https://developer.apple.com/documentation/swift/dictionary/values-swift.struct/swapat(_:_:)-18i76)

# swapAt(\_:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Exchanges the values at the specified indices of the collection.

## Declaration

```swift
mutating func swapAt(_ i: Self.Index, _ j: Self.Index)
```

## Parameters

- `i`: The index of the first value to swap.
- `j`: The index of the second value to swap.

<a id="discussion"></a>

## Discussion

Both parameters must be valid indices of the collection that are not equal to `endIndex`. Calling `swapAt(_:_:)` with the same index as both `i` and `j` has no effect.

> **Complexity**

> O(1)
