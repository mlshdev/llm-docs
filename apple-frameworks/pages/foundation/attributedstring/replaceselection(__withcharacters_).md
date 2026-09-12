> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/replaceselection(_:withcharacters:)](https://developer.apple.com/documentation/foundation/attributedstring/replaceselection(_:withcharacters:))

# replaceSelection(\_:withCharacters:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Replace the selection with new content, attributed with the typing attributes.

## Declaration

```swift
mutating func replaceSelection(_ selection: inout AttributedTextSelection, withCharacters newContent: some Collection<Character>)
```

<a id="discussion"></a>

## Discussion

Operates just like [replaceSelection(\_:with:)](replaceselection%28__with_%29.md), but applies the typing attributes to the new content before inserting it.
