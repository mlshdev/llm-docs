> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/append(_:)](https://developer.apple.com/documentation/swift/array/append(_:))

# append(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a new element at the end of the array.

## Declaration

```swift
mutating func append(_ newElement: Element)
```

## Parameters

- `newElement`: The element to append to the array.

<a id="discussion"></a>

## Discussion

Use this method to append a single element to the end of a mutable array.

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.append(100)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 100]"
```

Because arrays increase their allocated capacity using an exponential strategy, appending a single element to an array is an O(1) operation when averaged over many calls to the `append(_:)` method. When an array has additional capacity and is not sharing its storage with another instance, appending an element is O(1). When an array needs to reallocate storage before appending or its storage is shared with another copy, appending is O(*n*), where *n* is the length of the array.

> **Complexity**

> O(1) on average, over many calls to `append(_:)` on the same array.

## See Also

### Adding Elements

- [insert(\_:at:)](insert%28__at_%29.md): Inserts a new element at the specified position.
- [insert(contentsOf:at:)](insert%28contentsof_at_%29.md): Inserts the elements of a sequence into the collection at the specified position.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29.md): Replaces a range of elements with the elements in the specified collection.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-7293p.md): Replaces the specified subrange of elements with the given collection.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Reserves enough space to store the specified number of elements.
