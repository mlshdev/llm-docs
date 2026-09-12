> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/endindex](https://developer.apple.com/documentation/foundation/attributedstring/endindex)

# endIndex

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The string’s past-the-end position — the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: AttributedString.Index { get }
```

<a id="Discussion"></a>

## Discussion

In an empty string, `endIndex` is equal to `startIndex`.
