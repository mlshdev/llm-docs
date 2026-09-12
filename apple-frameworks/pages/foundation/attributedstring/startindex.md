> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/startindex](https://developer.apple.com/documentation/foundation/attributedstring/startindex)

# startIndex

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The position of the first character in a nonempty attributed string.

## Declaration

```swift
var startIndex: AttributedString.Index { get }
```

<a id="Discussion"></a>

## Discussion

In an empty string, `startIndex` is equal to `endIndex`.
