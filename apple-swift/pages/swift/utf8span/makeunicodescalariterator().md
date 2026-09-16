> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/utf8span/makeunicodescalariterator()

# makeUnicodeScalarIterator()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an iterator that will decode the code units into `Unicode.Scalar`s.

## Declaration

```swift
func makeUnicodeScalarIterator() -> UTF8Span.UnicodeScalarIterator
```

<a id="discussion"></a>

## Discussion

The resulting iterator has the same lifetime constraints as `self`.
