> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/index(of:)](https://developer.apple.com/documentation/swift/array/index(of:))

# index(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 5.0)

Returns the first index where the specified value appears in the collection.

## Declaration

```swift
func index(of element: Self.Element) -> Self.Index?
```

## See Also

### Finding Elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
