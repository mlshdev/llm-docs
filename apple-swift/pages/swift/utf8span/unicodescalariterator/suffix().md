> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/suffix()

# suffix()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the UTF8Span containing all the content after the iterator’s current position.

## Declaration

```swift
func suffix() -> UTF8Span
```

<a id="discussion"></a>

## Discussion

The resultant `UTF8Span` has the same lifetime constraints as `self`.

> **Complexity**

> O(1)
