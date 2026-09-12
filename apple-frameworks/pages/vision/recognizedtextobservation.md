> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtextobservation](https://developer.apple.com/documentation/vision/recognizedtextobservation)

# RecognizedTextObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An object that contains information about both the location and content of text and glyphs that the framework recognizes in an image.

## Declaration

```swift
struct RecognizedTextObservation
```

## Topics

### Creating an observation

- [init(\_:)](recognizedtextobservation/init%28__%29.md): Creates a recognized text observation.

### Inspecting an observation

- [boundingRegion](recognizedtextobservation/boundingregion.md): The bounding region of the text.
- [isTitle](recognizedtextobservation/istitle.md): Whether this text is the title of the document.
- [recognitionLanguages](recognizedtextobservation/recognitionlanguages.md): The languages in which the recognized text was written.
- [shouldWrapToNextLine](recognizedtextobservation/shouldwraptonextline.md): Whether the text continues on the next line.
- [textDirection](recognizedtextobservation/textdirection.md)
- [RecognizedTextObservation.Direction](recognizedtextobservation/direction.md): An enum representing which direction the text is read.
- [transcript](recognizedtextobservation/transcript.md): The top text candidate as a string.

### Getting the recognized text

- [topCandidates(\_:)](recognizedtextobservation/topcandidates%28__%29.md): Requests the top candidates for a recognized text string.
- [RecognizedText](recognizedtext.md): Text recognized in an image through a text recognition request.

## Relationships

### Conforms To

- [BoundingBoxProviding](boundingboxproviding.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [QuadrilateralProviding](quadrilateralproviding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
