> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/analysishastext(at:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/analysishastext(at:))

# analysisHasText(at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the analysis finds text at the specified point.

## Declaration

```swift
@MainActor final func analysisHasText(at point: CGPoint) -> Bool
```

## Parameters

- `point`: A point in the image, in view coordinates.

<a id="return-value"></a>

## Return Value

`true` if text exists at `point`; otherwise, `false`.

## See Also

### Accessing text information

- [text](text.md): The text contents of the current image analysis.
- [selectedText](selectedtext.md): The current selected text.
- [selectedAttributedText](selectedattributedtext.md): The current selected attributed text.
- [hasText(at:)](hastext%28at_%29.md): Returns a Boolean value that indicates whether active text exists at the specified point.
- [hasActiveTextSelection](hasactivetextselection.md): A Boolean value that indicates whether a person or the app has text selected within the image.
- [hasDataDetector(at:)](hasdatadetector%28at_%29.md): Returns a Boolean value that indicates whether the analysis detects data at the specified point.
