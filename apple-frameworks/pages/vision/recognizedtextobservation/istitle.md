> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtextobservation/istitle](https://developer.apple.com/documentation/vision/recognizedtextobservation/istitle)

# isTitle

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Whether this text is the title of the document.

## Declaration

```swift
let isTitle: Bool
```

## See Also

### Inspecting an observation

- [boundingRegion](boundingregion.md): The bounding region of the text.
- [recognitionLanguages](recognitionlanguages.md): The languages in which the recognized text was written.
- [shouldWrapToNextLine](shouldwraptonextline.md): Whether the text continues on the next line.
- [textDirection](textdirection.md)
- [RecognizedTextObservation.Direction](direction.md): An enum representing which direction the text is read.
- [transcript](transcript.md): The top text candidate as a string.
