> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/prefix(while:)](https://developer.apple.com/documentation/swift/string/prefix(while:))

# prefix(while:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.

## Declaration

```swift
func prefix(while predicate: (Self.Element) throws -> Bool) rethrows -> Self.SubSequence
```

## Parameters

- `predicate`: A closure that takes an element of the sequence as its argument and returns `true` if the element should be included or `false` if it should be excluded. Once the predicate returns `false` it will not be called again.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the length of the collection.

## See Also

### Getting Substrings

- [subscript(\_:)](subscript%28__%29-2so14.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-4h7s3.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-4al9c.md)
- [prefix(\_:)](prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.
