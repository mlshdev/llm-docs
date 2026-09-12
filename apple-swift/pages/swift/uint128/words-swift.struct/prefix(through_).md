> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/words-swift.struct/prefix(through:)](https://developer.apple.com/documentation/swift/uint128/words-swift.struct/prefix(through:))

# prefix(through:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence from the start of the collection through the specified position.

## Declaration

```swift
func prefix(through position: Self.Index) -> Self.SubSequence
```

## Parameters

- `position`: The index of the last element to include in the resulting subsequence. `position` must be a valid index of the collection that is not equal to the `endIndex` property.

<a id="return-value"></a>

## Return Value

A subsequence up to, and including, the given position.

<a id="discussion"></a>

## Discussion

The resulting subsequence *includes* the element at the position specified by the `through` parameter. The following example searches for the index of the number `40` in an array of integers, and then prints the prefix of the array up to, and including, that index:

```swift
let numbers = [10, 20, 30, 40, 50, 60]
if let i = numbers.firstIndex(of: 40) {
    print(numbers.prefix(through: i))
}
// Prints "[10, 20, 30, 40]"
```

Using the `prefix(through:)` method is equivalent to using a partial closed range as the collection’s subscript. The subscript notation is preferred over `prefix(through:)`.

```swift
if let i = numbers.firstIndex(of: 40) {
    print(numbers[...i])
}
// Prints "[10, 20, 30, 40]"
```

> **Complexity**

> O(1)
