> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/skipback(by:)

# skipBack(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Move `currentCodeUnitOffset` to the start of the previous `n` scalars, without decoding them.

## Declaration

```swift
mutating func skipBack(by n: Int) -> Int
```

<a id="discussion"></a>

## Discussion

Returns the number of `Unicode.Scalar`s skipped over, which can be fewer than `n` if at the start of the UTF8Span.

> **Complexity**

> O(n)
