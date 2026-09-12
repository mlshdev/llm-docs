> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/insert(_:at:)](https://developer.apple.com/documentation/swift/string/insert(_:at:))

# insert(\_:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a new character at the specified position.

## Declaration

```swift
mutating func insert(_ newElement: Character, at i: String.Index)
```

## Parameters

- `newElement`: The new character to insert into the string.
- `i`: A valid index of the string. If `i` is equal to the string’s end index, this methods appends `newElement` to the string.

<a id="discussion"></a>

## Discussion

Calling this method invalidates any existing indices for use with this string.

> **Complexity**

> O(*n*), where *n* is the length of the string.

## See Also

### Inserting Characters

- [insert(\_:at:)](insert%28__at_%29-88yqh.md): Inserts a new element into the collection at the specified position.
- [insert(contentsOf:at:)](insert%28contentsof_at_%29-rdu9.md): Inserts the elements of a sequence into the collection at the specified position.
- [insert(contentsOf:at:)](insert%28contentsof_at_%29.md): Inserts a collection of characters at the specified position.
