> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/utf16view/prefix(while:)](https://developer.apple.com/documentation/swift/string/utf16view/prefix(while:))

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
