> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/append(contentsof:)-9foli](https://developer.apple.com/documentation/swift/array/append(contentsof:)-9foli)

# append(contentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the elements of a sequence or collection to the end of this collection.

## Declaration

```swift
mutating func append<S>(contentsOf newElements: S) where S : Sequence, Self.Element == S.Element
```

## Parameters

- `newElements`: The elements to append to the collection.

<a id="discussion"></a>

## Discussion

The collection being appended to allocates any additional necessary storage to hold the new elements.

The following example appends the elements of a `Range<Int>` instance to an array of integers:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.append(contentsOf: 10...15)
print(numbers)
// Prints "[1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]"
```

> **Complexity**

> O(*m*), where *m* is the length of `newElements`.

## See Also

### Combining Arrays

- [append(contentsOf:)](append%28contentsof_%29.md): Adds the elements of a sequence to the end of the array.
- [+(\_:\_:)](+%28____%29-6h58k.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](+%28____%29-n33n.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](+%28____%29.md)
- [+(\_:\_:)](+%28____%29-9fm5l.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](+=%28____%29-676ib.md): Appends the elements of a sequence to a range-replaceable collection.
- [+=(\_:\_:)](+=%28____%29.md)
