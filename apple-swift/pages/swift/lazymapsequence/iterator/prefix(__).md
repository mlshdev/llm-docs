> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/iterator/prefix(_:)](https://developer.apple.com/documentation/swift/lazymapsequence/iterator/prefix(_:))

# prefix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a sequence, up to the specified maximum length, containing the initial elements of the sequence.

## Declaration

```swift
func prefix(_ maxLength: Int) -> PrefixSequence<Self>
```

## Parameters

- `maxLength`: The maximum number of elements to return. The value of `maxLength` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A sequence starting at the beginning of this sequence with at most `maxLength` elements.

<a id="discussion"></a>

## Discussion

If the maximum length exceeds the number of elements in the sequence, the result contains all the elements in the sequence.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.prefix(2))
// Prints "[1, 2]"
print(numbers.prefix(10))
// Prints "[1, 2, 3, 4, 5]"
```

> **Complexity**

> O(1)
