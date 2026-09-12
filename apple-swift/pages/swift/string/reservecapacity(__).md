> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/reservecapacity(_:)](https://developer.apple.com/documentation/swift/string/reservecapacity(_:))

# reserveCapacity(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reserves enough space in the string’s underlying storage to store the specified number of ASCII characters.

## Declaration

```swift
mutating func reserveCapacity(_ n: Int)
```

## Parameters

- `n`: The minimum number of ASCII character’s worth of storage to allocate.

<a id="discussion"></a>

## Discussion

Because each character in a string can require more than a single ASCII character’s worth of storage, additional allocation may be necessary when adding characters to a string after a call to `reserveCapacity(_:)`.

> **Complexity**

> O(*n*)

## See Also

### Appending Strings and Characters

- [append(\_:)](append%28__%29-4xa8f.md): Appends the given string to this string.
- [append(\_:)](append%28__%29-4xi3j.md): Appends the given character to the string.
- [append(contentsOf:)](append%28contentsof_%29-oxek.md)
- [append(contentsOf:)](append%28contentsof_%29-9vb4t.md)
- [append(contentsOf:)](append%28contentsof_%29-7est5.md): Appends the characters in the given sequence to the string.
- [append(contentsOf:)](append%28contentsof_%29-9foms.md): Adds the elements of a sequence or collection to the end of this collection.
- [+(\_:\_:)](+%28____%29.md)
- [+=(\_:\_:)](+=%28____%29.md)
- [+(\_:\_:)](+%28____%29-6h59y.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](+%28____%29-n329.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](+%28____%29-9fm57.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](+=%28____%29-676gx.md): Appends the elements of a sequence to a range-replaceable collection.
