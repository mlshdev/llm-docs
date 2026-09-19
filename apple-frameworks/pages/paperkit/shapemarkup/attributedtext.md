> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/shapemarkup/attributedtext

# attributedText

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The attributed text displayed inside this shape.

## Declaration

```swift
var attributedText: AttributedString { get set }
```

<a id="discussion"></a>

## Discussion

The attributed string supports: `.font`, `.foregroundColor`, `.underlineStyle`, `.strikethroughStyle` and writing direction and alignment from `.paragraphStyle`.
