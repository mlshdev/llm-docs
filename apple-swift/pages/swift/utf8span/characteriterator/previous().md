> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/characteriterator/previous()](https://developer.apple.com/documentation/swift/utf8span/characteriterator/previous())

# previous()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Return the `Character` ending at `currentCodeUnitOffset`. After the function returns, `currentCodeUnitOffset` holds the position at the start of the returned `Character`, which is also the end of the previous `Character`.

## Declaration

```swift
mutating func previous() -> Character?
```

<a id="discussion"></a>

## Discussion

Returns `nil` if at the start of the `UTF8Span`.
