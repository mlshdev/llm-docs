> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/words-swift.struct/lastindex(of:)](https://developer.apple.com/documentation/swift/int/words-swift.struct/lastindex(of:))

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
