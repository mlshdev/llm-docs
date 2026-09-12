> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/unicodescalariterator/prefix()](https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/prefix())

# prefix()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the UTF8Span containing all the content up to the iterator’s current position.

## Declaration

```swift
func prefix() -> UTF8Span
```

<a id="discussion"></a>

## Discussion

The resultant `UTF8Span` has the same lifetime constraints as `self`.

> **Complexity**

> O(1)
