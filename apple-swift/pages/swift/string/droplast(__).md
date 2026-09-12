> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/droplast(_:)](https://developer.apple.com/documentation/swift/string/droplast(_:))

# dropLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence containing all but the specified number of final elements.

## Declaration

```swift
func dropLast(_ k: Int) -> Self.SubSequence
```

## Parameters

- `k`: The number of elements to drop off the end of the collection. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A subsequence that leaves off `k` elements from the end.

<a id="discussion"></a>

## Discussion

If the number of elements to drop exceeds the number of elements in the collection, the result is an empty subsequence.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.dropLast(2))
// Prints "[1, 2, 3]"
print(numbers.dropLast(10))
// Prints "[]"
```

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the number of elements to drop.

## See Also

### Removing Substrings

- [remove(at:)](remove%28at_%29.md): Removes and returns the character at the specified position.
- [remove(at:)](remove%28at_%29-5g0wm.md): Removes and returns the element at the specified position.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Replaces this string with the empty string.
- [removeAll(where:)](removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeFirst()](removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](removesubrange%28__%29.md): Removes the characters in the given range.
- [removeSubrange(\_:)](removesubrange%28__%29-8maxn.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-9twng.md): Removes the elements in the specified subrange from the collection.
- [drop(while:)](drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [popLast()](poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
