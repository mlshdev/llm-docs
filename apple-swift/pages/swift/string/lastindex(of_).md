> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/lastindex(of:)](https://developer.apple.com/documentation/swift/string/lastindex(of:))

# lastIndex(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the last index where the specified value appears in the collection.

## Declaration

```swift
func lastIndex(of element: Self.Element) -> Self.Index?
```

## Parameters

- `element`: An element to search for in the collection.

<a id="return-value"></a>

## Return Value

The last index where `element` is found. If `element` is not found in the collection, this method returns `nil`.

<a id="discussion"></a>

## Discussion

After using `lastIndex(of:)` to find the position of the last instance of a particular element in a collection, you can use it to access the element by subscripting. This example shows how you can modify one of the names in an array of students.

```swift
var students = ["Ben", "Ivy", "Jordell", "Ben", "Maxime"]
if let i = students.lastIndex(of: "Ben") {
    students[i] = "Benjamin"
}
print(students)
// Prints "["Ben", "Ivy", "Jordell", "Benjamin", "Max"]"
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
- [last(where:)](last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(where:)](lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(\_:\_:)](max%28____%29.md)
- [max(by:)](max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(\_:\_:)](min%28____%29.md)
- [min(by:)](min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
