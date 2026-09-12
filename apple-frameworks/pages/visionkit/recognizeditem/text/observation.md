> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/recognizeditem/text/observation](https://developer.apple.com/documentation/visionkit/recognizeditem/text/observation)

# observation

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

An object that contains details about the location and content of text and glyphs in an image.

## Declaration

```swift
var observation: VNRecognizedTextObservation { get }
```

<a id="discussion"></a>

## Discussion

Use this property only if you need vision details that aren’t included in the recognized item properties.

## See Also

### Locating text

- [bounds](bounds.md): The bounds of the recognized item in view coordinates.
