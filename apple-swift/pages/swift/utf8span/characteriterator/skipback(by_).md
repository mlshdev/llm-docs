> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/characteriterator/skipback(by:)](https://developer.apple.com/documentation/swift/utf8span/characteriterator/skipback(by:))

# skipBack(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Move `currentCodeUnitOffset` to the start of the previous `n` `Character`s, without constructing them.

## Declaration

```swift
mutating func skipBack(by n: Int) -> Int
```

<a id="discussion"></a>

## Discussion

Returns the number of `Character`s skipped over, which can be fewer than `n` if at the start of the UTF8Span.
