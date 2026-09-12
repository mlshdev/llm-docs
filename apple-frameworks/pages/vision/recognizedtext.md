> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/recognizedtext](https://developer.apple.com/documentation/vision/recognizedtext)

# RecognizedText

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Text recognized in an image through a text recognition request.

## Declaration

```swift
struct RecognizedText
```

## Topics

### Getting the bounding box

- [boundingBox(for:)](recognizedtext/boundingbox%28for_%29.md): Calculates the bounding box around the characters in the range of a string.

### Inspecting the recognized text

- [string](recognizedtext/string.md): The top candidate for recognized text.
- [confidence](recognizedtext/confidence.md): A normalized confidence score for the text recognition result.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the recognized text

- [topCandidates(\_:)](recognizedtextobservation/topcandidates%28__%29.md): Requests the top candidates for a recognized text string.
