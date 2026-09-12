> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/unicodescalariterator/skipforward()](https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/skipforward())

# skipForward()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Advance `currentCodeUnitOffset` to the end of the current scalar, without decoding it.

## Declaration

```swift
mutating func skipForward() -> Int
```

<a id="discussion"></a>

## Discussion

Returns the number of `Unicode.Scalar`s skipped over, which can be 0 if at the end of the UTF8Span.

> **Complexity**

> O(1)
