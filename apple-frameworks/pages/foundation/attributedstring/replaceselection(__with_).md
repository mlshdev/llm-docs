> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/replaceselection(_:with:)](https://developer.apple.com/documentation/foundation/attributedstring/replaceselection(_:with:))

# replaceSelection(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Replace the selection with new attributed content.

## Declaration

```swift
mutating func replaceSelection(_ selection: inout AttributedTextSelection, with newContent: some AttributedStringProtocol)
```

<a id="discussion"></a>

## Discussion

In the case the selection is an insertion point, the `newContent` gets inserted at the caret location and the caret is moved to after the new content.

In the case where the selection spans one or multiple characters, those characters are removed and the new content is inserted at location of the first selected character.
