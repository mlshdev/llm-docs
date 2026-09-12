> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertool-swift.struct/erasertype-swift.enum](https://developer.apple.com/documentation/pencilkit/pkerasertool-swift.struct/erasertype-swift.enum)

# PKEraserTool.EraserType

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

Constants that indicate the behavior of the eraser.

## Declaration

```swift
enum EraserType
```

## Topics

### Eraser types

- [PKEraserTool.EraserType.vector](erasertype-swift.enum/vector.md): An eraser that removes an entire drawn line.
- [PKEraserTool.EraserType.bitmap](erasertype-swift.enum/bitmap.md): An eraser that removes only those portions of the drawing it touches.
- [PKEraserTool.EraserType.fixedWidthBitmap](erasertype-swift.enum/fixedwidthbitmap.md)

### Getting the width information

- [defaultWidth](erasertype-swift.enum/defaultwidth.md): The default width for an eraser type.
- [validWidthRange](erasertype-swift.enum/validwidthrange.md): The valid width range for an eraser type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Getting the eraser type

- [eraserType](erasertype-swift.property.md): The behavior adopted by the eraser when deleting content.
