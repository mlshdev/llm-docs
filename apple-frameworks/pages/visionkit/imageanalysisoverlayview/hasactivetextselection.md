> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/hasactivetextselection](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/hasactivetextselection)

# hasActiveTextSelection

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether a person or the app has text selected within the image.

## Declaration

```swift
@MainActor final var hasActiveTextSelection: Bool { get }
```

<a id="discussion"></a>

## Discussion

If [textSelection](interactiontypes/textselection.md) is an active interaction type, a person can select text using a standard input method and the app can select text through the [selectedRanges](selectedranges.md) property. If neither a person nor the app select any text, then this property returns `false`.

## See Also

### Accessing text information

- [text](text.md): The text contents of the current image analysis.
- [selectedText](selectedtext.md): The current selected text.
- [selectedAttributedText](selectedattributedtext.md): The current selected attributed text.
- [analysisHasText(at:)](analysishastext%28at_%29.md): Returns a Boolean value that indicates whether the analysis finds text at the specified point.
- [hasText(at:)](hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasDataDetector(at:)](hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.
