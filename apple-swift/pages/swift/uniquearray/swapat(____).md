> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/swapat(_:_:)](https://developer.apple.com/documentation/swift/uniquearray/swapat(_:_:))

# swapAt(\_:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Exchanges the values at the specified indices of the array.

## Declaration

```swift
mutating func swapAt(_ i: Int, _ j: Int)
```

## Parameters

- `i`: The index of the first value to swap.
- `j`: The index of the second valud to swap.

<a id="discussion"></a>

## Discussion

Both parameters must be valid indices of the array and not equal to endIndex. Passing the same index as both `i` and `j` has no effect.

> **Complexity**

> O(1)
