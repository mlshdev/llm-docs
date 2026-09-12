> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtextobservation/transcript](https://developer.apple.com/documentation/vision/recognizedtextobservation/transcript)

# transcript

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The top text candidate as a string.

## Declaration

```swift
var transcript: String { get }
```

<a id="discussion"></a>

## Discussion

Please call `topCandidates` to see alternate text candidates.

## See Also

### Inspecting an observation

- [boundingRegion](boundingregion.md): The bounding region of the text.
- [isTitle](istitle.md): Whether this text is the title of the document.
- [recognitionLanguages](recognitionlanguages.md): The languages in which the recognized text was written.
- [shouldWrapToNextLine](shouldwraptonextline.md): Whether the text continues on the next line.
- [textDirection](textdirection.md)
- [RecognizedTextObservation.Direction](direction.md): An enum representing which direction the text is read.
