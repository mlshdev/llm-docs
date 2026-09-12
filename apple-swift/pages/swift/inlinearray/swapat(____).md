> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/inlinearray/swapat(_:_:)](https://developer.apple.com/documentation/swift/inlinearray/swapat(_:_:))

# swapAt(\_:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Exchanges the values at the specified indices of the array.

## Declaration

```swift
mutating func swapAt(_ i: InlineArray<count, Element>.Index, _ j: InlineArray<count, Element>.Index)
```

## Parameters

- `i`: The index of the first value to swap.
- `j`: The index of the second value to swap.

<a id="discussion"></a>

## Discussion

Both parameters must be valid indices of the array and not equal to `endIndex`. Passing the same index as both `i` and `j` has no effect.

> **Complexity**

> O(1)
