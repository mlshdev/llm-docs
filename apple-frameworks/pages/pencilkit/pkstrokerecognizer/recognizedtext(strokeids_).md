> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/recognizedtext(strokeids:)](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/recognizedtext(strokeids:))

# recognizedText(strokeIDs:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns the recognized text from the specified strokes in the drawing.

## Declaration

```swift
final func recognizedText(strokeIDs: Set<UUID>? = nil) async -> String?
```

## Parameters

- `strokeIDs`: The `id`s of the `PKStrokes` in `drawing` to analyze. Pass `nil` to return the recognized text from the whole drawing.

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

## See Also

### Recognizing handwriting

- [indexableContent](indexablecontent.md): A string suitable for indexing the drawing’s recognized text in search systems such as Spotlight.
