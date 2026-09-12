> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/characteriterator/skipback()](https://developer.apple.com/documentation/swift/utf8span/characteriterator/skipback())

# skipBack()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Move `currentCodeUnitOffset` to the start of the previous `Character`, without constructing it.

## Declaration

```swift
mutating func skipBack() -> Int
```

<a id="discussion"></a>

## Discussion

Returns the number of `Character`s skipped over, which can be 0 if at the start of the UTF8Span.
