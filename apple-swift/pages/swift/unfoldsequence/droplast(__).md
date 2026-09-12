> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unfoldsequence/droplast(_:)](https://developer.apple.com/documentation/swift/unfoldsequence/droplast(_:))

# dropLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a sequence containing all but the given number of final elements.

## Declaration

```swift
func dropLast(_ k: Int = 1) -> [Self.Element]
```

## Parameters

- `k`: The number of elements to drop off the end of the sequence. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A sequence leaving off the specified number of elements.

<a id="discussion"></a>

## Discussion

The sequence must be finite. If the number of elements to drop exceeds the number of elements in the sequence, the result is an empty sequence.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.dropLast(2))
// Prints "[1, 2, 3]"
print(numbers.dropLast(10))
// Prints "[]"
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.
