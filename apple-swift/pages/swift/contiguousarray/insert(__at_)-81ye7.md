> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray/insert(_:at:)-81ye7](https://developer.apple.com/documentation/swift/contiguousarray/insert(_:at:)-81ye7)

# insert(\_:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a new element into the collection at the specified position.

## Declaration

```swift
mutating func insert(_ newElement: Self.Element, at i: Self.Index)
```

## Parameters

- `newElement`: The new element to insert into the collection.
- `i`: The position at which to insert the new element. `index` must be a valid index into the collection.

<a id="discussion"></a>

## Discussion

The new element is inserted before the element currently at the specified index. If you pass the collection’s `endIndex` property as the `index` parameter, the new element is appended to the collection.

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.insert(100, at: 3)
numbers.insert(200, at: numbers.endIndex)

print(numbers)
// Prints "[1, 2, 3, 100, 4, 5, 200]"
```

Calling this method may invalidate any existing indices for use with this collection.

> **Complexity**

> O(*n*), where *n* is the length of the collection. If `i == endIndex`, this method is equivalent to `append(_:)`.
