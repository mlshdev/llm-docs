> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/selectedtext](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/selectedtext)

# selectedText

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The current selected text.

## Declaration

```swift
@MainActor final var selectedText: String { get }
```

## See Also

### Accessing text information

- [text](text.md): The text contents of the current image analysis.
- [selectedAttributedText](selectedattributedtext.md): The current selected attributed text.
- [hasText(at:)](hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasActiveTextSelection](hasactivetextselection.md): A Boolean value that indicates whether a person or the app has text selected within the image.
- [analysisHasText(at:)](analysishastext%28at_%29.md): Returns a Boolean value that indicates whether the analysis finds text at the specified point.
- [hasDataDetector(at:)](hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.
