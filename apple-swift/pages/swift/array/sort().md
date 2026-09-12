> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/sort()](https://developer.apple.com/documentation/swift/array/sort())

# sort()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the collection in place.

## Declaration

```swift
mutating func sort()
```

<a id="discussion"></a>

## Discussion

You can sort any mutable collection of elements that conform to the `Comparable` protocol by calling this method. Elements are sorted in ascending order.

Here’s an example of sorting a list of students’ names. Strings in Swift conform to the `Comparable` protocol, so the names are sorted in ascending order according to the less-than operator (`<`).

```swift
var students = ["Kofi", "Abena", "Peter", "Kweku", "Akosua"]
students.sort()
print(students)
// Prints "["Abena", "Akosua", "Kofi", "Kweku", "Peter"]"
```

To sort the elements of your collection in descending order, pass the greater-than operator (`>`) to the `sort(by:)` method.

```swift
students.sort(by: >)
print(students)
// Prints "["Peter", "Kweku", "Kofi", "Akosua", "Abena"]"
```

The sorting algorithm is guaranteed to be stable. A stable sort preserves the relative order of elements that compare as equal.

> **Complexity**

> O(*n* log *n*), where *n* is the length of the collection.

## See Also

### Reordering an Array’s Elements

- [sort(by:)](sort%28by_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Sorts the collection in place, using the given predicate as the comparison between elements.
- [sorted()](sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reverse()](reverse%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reverses the elements of the collection in place.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [shuffle()](shuffle%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place.
- [shuffle(using:)](shuffle%28using_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place, using the given generator as a source for randomness.
- [shuffled()](shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
- [partition(by:)](partition%28by_%29-90po8.md): Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [swapAt(\_:\_:)](swapat%28____%29.md): Exchanges the values at the specified indices of the collection.
