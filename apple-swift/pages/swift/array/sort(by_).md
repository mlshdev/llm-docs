> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/sort(by:)](https://developer.apple.com/documentation/swift/array/sort(by:))

# sort(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the collection in place, using the given predicate as the comparison between elements.

## Declaration

```swift
mutating func sort(by areInIncreasingOrder: (Self.Element, Self.Element) throws -> Bool) rethrows
```

## Parameters

- `areInIncreasingOrder`: A predicate that returns `true` if its first argument should be ordered before its second argument; otherwise, `false`. If `areInIncreasingOrder` throws an error during the sort, the elements may be in a different order, but none will be lost.

<a id="discussion"></a>

## Discussion

When you want to sort a collection of elements that don’t conform to the `Comparable` protocol, pass a closure to this method that returns `true` when the first element should be ordered before the second.

In the following example, the closure provides an ordering for an array of a custom enumeration that describes an HTTP response. The predicate orders errors before successes and sorts the error responses by their error code.

```swift
enum HTTPResponse {
    case ok
    case error(Int)
}

var responses: [HTTPResponse] = [.error(500), .ok, .ok, .error(404), .error(403)]
responses.sort {
    switch ($0, $1) {
    // Order errors by code
    case let (.error(aCode), .error(bCode)):
        return aCode < bCode

    // All successes are equivalent, so none is before any other
    case (.ok, .ok): return false

    // Order errors before successes
    case (.error, .ok): return true
    case (.ok, .error): return false
    }
}
print(responses)
// Prints "[.error(403), .error(404), .error(500), .ok, .ok]"
```

Alternatively, use this method to sort a collection of elements that do conform to `Comparable` when you want the sort to be descending instead of ascending. Pass the greater-than operator (`>`) operator as the predicate.

```swift
var students = ["Kofi", "Abena", "Peter", "Kweku", "Akosua"]
students.sort(by: >)
print(students)
// Prints "["Peter", "Kweku", "Kofi", "Akosua", "Abena"]"
```

`areInIncreasingOrder` must be a *strict weak ordering* over the elements. That is, for any elements `a`, `b`, and `c`, the following conditions must hold:

- `areInIncreasingOrder(a, a)` is always `false`. (Irreflexivity)
- If `areInIncreasingOrder(a, b)` and `areInIncreasingOrder(b, c)` are both `true`, then `areInIncreasingOrder(a, c)` is also `true`. (Transitive comparability)
- Two elements are *incomparable* if neither is ordered before the other according to the predicate. If `a` and `b` are incomparable, and `b` and `c` are incomparable, then `a` and `c` are also incomparable. (Transitive incomparability)

The sorting algorithm is guaranteed to be stable. A stable sort preserves the relative order of elements for which `areInIncreasingOrder` does not establish an order.

> **Complexity**

> O(*n* log *n*), where *n* is the length of the collection.

## See Also

### Reordering an Array’s Elements

- [sort()](sort%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection` and `Element` conforms to `Comparable`. Sorts the collection in place.
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
