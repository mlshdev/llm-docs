> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/selectedattributedtext](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/selectedattributedtext)

# selectedAttributedText

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The current selected attributed text.

## Declaration

```swift
@MainActor final var selectedAttributedText: AttributedString { get }
```

## See Also

### Accessing text information

- [text](text.md): The text contents of the current image analysis.
- [selectedText](selectedtext.md): The current selected text.
- [hasText(at:)](hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasActiveTextSelection](hasactivetextselection.md): A Boolean value that indicates whether a person or the app has text selected within the image.
- [analysisHasText(at:)](analysishastext%28at_%29.md): Returns a Boolean value that indicates whether the analysis finds text at the specified point.
- [hasDataDetector(at:)](hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.
