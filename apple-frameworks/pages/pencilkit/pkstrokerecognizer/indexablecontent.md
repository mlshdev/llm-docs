> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/indexablecontent](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/indexablecontent)

# indexableContent

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A string suitable for indexing the drawing’s recognized text in search systems such as Spotlight.

## Declaration

```swift
final var indexableContent: String? { get async }
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

<a id="discussion"></a>

## Discussion

The string may contain multiple concatenated candidate matches for recognized text in the drawing.

> **Important**

> This query runs low-priority background recognition. Interactive queries can cancel it, in which case it returns nil. Use the indexing query when the person isn’t interacting with the device.

## See Also

### Recognizing handwriting

- [recognizedText(strokeIDs:)](recognizedtext%28strokeids_%29.md): Returns the recognized text from the specified strokes in the drawing.
