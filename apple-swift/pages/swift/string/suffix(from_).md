> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/suffix(from:)](https://developer.apple.com/documentation/swift/string/suffix(from:))

# suffix(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence from the specified position to the end of the collection.

## Declaration

```swift
func suffix(from start: Self.Index) -> Self.SubSequence
```

## Parameters

- `start`: The index at which to start the resulting subsequence. `start` must be a valid index of the collection.

<a id="return-value"></a>

## Return Value

A subsequence starting at the `start` position.

<a id="discussion"></a>

## Discussion

The following example searches for the index of the number `40` in an array of integers, and then prints the suffix of the array starting at that index:

```swift
let numbers = [10, 20, 30, 40, 50, 60]
if let i = numbers.firstIndex(of: 40) {
    print(numbers.suffix(from: i))
}
// Prints "[40, 50, 60]"
```

Passing the collection’s `endIndex` as the `start` parameter results in an empty subsequence.

```swift
print(numbers.suffix(from: numbers.endIndex))
// Prints "[]"
```

Using the `suffix(from:)` method is equivalent to using a partial range from the index as the collection’s subscript. The subscript notation is preferred over `suffix(from:)`.

```swift
if let i = numbers.firstIndex(of: 40) {
    print(numbers[i...])
}
// Prints "[40, 50, 60]"
```

> **Complexity**

> O(1)

## See Also

### Getting Substrings

- [subscript(\_:)](subscript%28__%29-2so14.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-4h7s3.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-4al9c.md)
- [prefix(\_:)](prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
