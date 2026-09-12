> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/reversedcollection/iterator/dropfirst(_:)](https://developer.apple.com/documentation/swift/reversedcollection/iterator/dropfirst(_:))

# dropFirst(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a sequence containing all but the given number of initial elements.

## Declaration

```swift
func dropFirst(_ k: Int = 1) -> DropFirstSequence<Self>
```

## Parameters

- `k`: The number of elements to drop from the beginning of the sequence. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A sequence starting after the specified number of elements.

<a id="discussion"></a>

## Discussion

If the number of elements to drop exceeds the number of elements in the sequence, the result is an empty sequence.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.dropFirst(2))
// Prints "[3, 4, 5]"
print(numbers.dropFirst(10))
// Prints "[]"
```

> **Complexity**

> O(1), with O(*k*) deferred to each iteration of the result, where *k* is the number of elements to drop from the beginning of the sequence.
