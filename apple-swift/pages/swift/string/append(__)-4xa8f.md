> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/append(_:)-4xa8f](https://developer.apple.com/documentation/swift/string/append(_:)-4xa8f)

# append(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the given string to this string.

## Declaration

```swift
mutating func append(_ other: String)
```

## Parameters

- `other`: Another string.

<a id="discussion"></a>

## Discussion

The following example builds a customized greeting by using the `append(_:)` method:

```swift
var greeting = "Hello, "
if let name = getUserName() {
    greeting.append(name)
} else {
    greeting.append("friend")
}
print(greeting)
// Prints "Hello, friend"
```

## See Also

### Appending Strings and Characters

- [append(\_:)](append%28__%29-4xi3j.md): Appends the given character to the string.
- [append(contentsOf:)](append%28contentsof_%29-oxek.md)
- [append(contentsOf:)](append%28contentsof_%29-9vb4t.md)
- [append(contentsOf:)](append%28contentsof_%29-7est5.md): Appends the characters in the given sequence to the string.
- [append(contentsOf:)](append%28contentsof_%29-9foms.md): Adds the elements of a sequence or collection to the end of this collection.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Reserves enough space in the string’s underlying storage to store the specified number of ASCII characters.
- [+(\_:\_:)](+%28____%29.md)
- [+=(\_:\_:)](+=%28____%29.md)
- [+(\_:\_:)](+%28____%29-6h59y.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](+%28____%29-n329.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](+%28____%29-9fm57.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](+=%28____%29-676gx.md): Appends the elements of a sequence to a range-replaceable collection.
