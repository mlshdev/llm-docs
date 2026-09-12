> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtextobservation/direction](https://developer.apple.com/documentation/vision/recognizedtextobservation/direction)

# RecognizedTextObservation.Direction

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An enum representing which direction the text is read.

## Declaration

```swift
enum Direction
```

## Topics

### Directions

- [RecognizedTextObservation.Direction.leftToRight](direction/lefttoright.md)
- [RecognizedTextObservation.Direction.rightToLeft](direction/righttoleft.md)
- [RecognizedTextObservation.Direction.topToBottom](direction/toptobottom.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an observation

- [boundingRegion](boundingregion.md): The bounding region of the text.
- [isTitle](istitle.md): Whether this text is the title of the document.
- [recognitionLanguages](recognitionlanguages.md): The languages in which the recognized text was written.
- [shouldWrapToNextLine](shouldwraptonextline.md): Whether the text continues on the next line.
- [textDirection](textdirection.md)
- [transcript](transcript.md): The top text candidate as a string.
