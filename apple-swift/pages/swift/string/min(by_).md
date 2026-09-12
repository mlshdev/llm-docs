> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/min(by:)](https://developer.apple.com/documentation/swift/string/min(by:))

# min(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the minimum element in the sequence, using the given predicate as the comparison between elements.

## Declaration

```swift
@warn_unqualified_access func min(by areInIncreasingOrder: (Self.Element, Self.Element) throws -> Bool) rethrows -> Self.Element?
```

## Parameters

- `areInIncreasingOrder`: A predicate that returns `true` if its first argument should be ordered before its second argument; otherwise, `false`.

<a id="return-value"></a>

## Return Value

The sequence’s minimum element, according to `areInIncreasingOrder`. If the sequence has no elements, returns `nil`.

<a id="discussion"></a>

## Discussion

The predicate must be a *strict weak ordering* over the elements. That is, for any elements `a`, `b`, and `c`, the following conditions must hold:

- `areInIncreasingOrder(a, a)` is always `false`. (Irreflexivity)
- If `areInIncreasingOrder(a, b)` and `areInIncreasingOrder(b, c)` are both `true`, then `areInIncreasingOrder(a, c)` is also `true`. (Transitive comparability)
- Two elements are *incomparable* if neither is ordered before the other according to the predicate. If `a` and `b` are incomparable, and `b` and `c` are incomparable, then `a` and `c` are also incomparable. (Transitive incomparability)

This example shows how to use the `min(by:)` method on a dictionary to find the key-value pair with the lowest value.

```swift
let hues = ["Heliotrope": 296, "Coral": 16, "Aquamarine": 156]
let leastHue = hues.min { a, b in a.value < b.value }
print(leastHue)
// Prints "Optional((key: "Coral", value: 16))"
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.

## See Also

### Finding Characters

- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(\_:\_:)](max%28____%29.md)
- [max(by:)](max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(\_:\_:)](min%28____%29.md)
