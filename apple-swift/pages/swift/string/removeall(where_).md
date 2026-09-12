> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/removeall(where:)](https://developer.apple.com/documentation/swift/string/removeall(where:))

# removeAll(where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all the elements that satisfy the given predicate.

## Declaration

```swift
mutating func removeAll(where shouldBeRemoved: (Self.Element) throws -> Bool) rethrows
```

## Parameters

- `shouldBeRemoved`: A closure that takes an element of the sequence as its argument and returns a Boolean value indicating whether the element should be removed from the collection.

<a id="discussion"></a>

## Discussion

Use this method to remove every element in a collection that meets particular criteria. The order of the remaining elements is preserved. This example removes all the vowels from a string:

```swift
var phrase = "The rain in Spain stays mainly in the plain."

let vowels: Set<Character> = ["a", "e", "i", "o", "u"]
phrase.removeAll(where: { vowels.contains($0) })
// phrase == "Th rn n Spn stys mnly n th pln."
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.

## See Also

### Removing Substrings

- [remove(at:)](remove%28at_%29.md): Removes and returns the character at the specified position.
- [remove(at:)](remove%28at_%29-5g0wm.md): Removes and returns the element at the specified position.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Replaces this string with the empty string.
- [removeFirst()](removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](removesubrange%28__%29.md): Removes the characters in the given range.
- [removeSubrange(\_:)](removesubrange%28__%29-8maxn.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-9twng.md): Removes the elements in the specified subrange from the collection.
- [drop(while:)](drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [popLast()](poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
