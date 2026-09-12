> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/insert(contentsof:at:)](https://developer.apple.com/documentation/swift/array/insert(contentsof:at:))

# insert(contentsOf:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the elements of a sequence into the collection at the specified position.

## Declaration

```swift
mutating func insert<C>(contentsOf newElements: C, at i: Self.Index) where C : Collection, Self.Element == C.Element
```

## Parameters

- `newElements`: The new elements to insert into the collection.
- `i`: The position at which to insert the new elements. `index` must be a valid index of the collection.

<a id="discussion"></a>

## Discussion

The new elements are inserted before the element currently at the specified index. If you pass the collection’s `endIndex` property as the `index` parameter, the new elements are appended to the collection.

Here’s an example of inserting a range of integers into an array of the same type:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.insert(contentsOf: 100...103, at: 3)
print(numbers)
// Prints "[1, 2, 3, 100, 101, 102, 103, 4, 5]"
```

Calling this method may invalidate any existing indices for use with this collection.

> **Complexity**

> O(*n* \+ *m*), where *n* is length of this collection and *m* is the length of `newElements`. If `i == endIndex`, this method is equivalent to `append(contentsOf:)`.

## See Also

### Adding Elements

- [append(\_:)](append%28__%29.md): Adds a new element at the end of the array.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a new element at the specified position.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29.md): Replaces a range of elements with the elements in the specified collection.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-7293p.md): Replaces the specified subrange of elements with the given collection.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Reserves enough space to store the specified number of elements.
