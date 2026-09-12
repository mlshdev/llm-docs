> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/updatedrawing(_:)](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/updatedrawing(_:))

# updateDrawing(\_:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Updates the drawing the recognizer analyzes.

## Declaration

```swift
final func updateDrawing(_ drawing: PKDrawing) async
```

## Parameters

- `drawing`: The new drawing.

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

<a id="discussion"></a>

## Discussion

Recognition expects handwriting and strokes scaled as if written on standard paper sizes in points, such as US-letter or A4.

## See Also

### Providing drawing content

- [drawing](drawing.md): The drawing the recognizer analyzes.
