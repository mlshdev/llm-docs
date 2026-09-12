> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/recognizeditem/text](https://developer.apple.com/documentation/visionkit/recognizeditem/text)

# RecognizedItem.Text

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

An object that represents a text item that the scanner recognizes.

## Declaration

```swift
struct Text
```

## Topics

### Getting text strings

- [transcript](text/transcript.md): The string that the text item represents.

### Locating text

- [bounds](text/bounds.md): The bounds of the recognized item in view coordinates.
- [observation](text/observation.md): An object that contains details about the location and content of text and glyphs in an image.

### Identifying text

- [id](text/id.md): A unique identifier for the recognized item.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Text items

- [RecognizedItem.text(\_:)](text%28__%29.md): Text or data the analyzer detects in text.
