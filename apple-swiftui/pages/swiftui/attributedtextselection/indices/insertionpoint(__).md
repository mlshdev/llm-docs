> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/attributedtextselection/indices/insertionpoint(_:)

# AttributedTextSelection.Indices.insertionPoint(\_:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The index of a single insertion point.

## Declaration

```swift
case insertionPoint(AttributedString.Index)
```

<a id="discussion"></a>

## Discussion

The an insertion point at the `startIndex` of an attributed string is equivalent to a caret preceding the first character. An insertion point using `endIndex` is valid. It is equivalent to a caret located after the last character in the attributed string.
