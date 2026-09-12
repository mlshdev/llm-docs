> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/last(where:)](https://developer.apple.com/documentation/swift/string/last(where:))

# last(where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the last element of the sequence that satisfies the given predicate.

## Declaration

```swift
func last(where predicate: (Self.Element) throws -> Bool) rethrows -> Self.Element?
```

## Parameters

- `predicate`: A closure that takes an element of the sequence as its argument and returns a Boolean value indicating whether the element is a match.

<a id="return-value"></a>

## Return Value

The last element of the sequence that satisfies `predicate`, or `nil` if there is no element that satisfies `predicate`.

<a id="discussion"></a>

## Discussion

This example uses the `last(where:)` method to find the last negative number in an array of integers:

```swift
let numbers = [3, 7, 4, -2, 9, -6, 10, 1]
if let lastNegative = numbers.last(where: { $0 < 0 }) {
    print("The last negative number is \(lastNegative).")
}
// Prints "The last negative number is -6."
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.

## See Also

### Finding Characters

- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(\_:\_:)](max%28____%29.md)
- [max(by:)](max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(\_:\_:)](min%28____%29.md)
- [min(by:)](min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
