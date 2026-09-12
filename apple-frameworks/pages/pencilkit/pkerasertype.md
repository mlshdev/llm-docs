> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertype](https://developer.apple.com/documentation/pencilkit/pkerasertype)

# PKEraserType

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Constants that indicate the behavior of the eraser.

## Declaration

```objectivec
enum PKEraserType : NSInteger;
```

## Topics

### Eraser types

- [PKEraserTypeVector](pkerasertype/pkerasertypevector.md): An eraser that removes an entire drawn line.
- [PKEraserTypeBitmap](pkerasertype/pkerasertypebitmap.md): An eraser that removes only those portions of the drawing it touches.
- [PKEraserTypeFixedWidthBitmap](pkerasertype/pkerasertypefixedwidthbitmap.md)

## See Also

### Getting the eraser type

- [eraserType](pkerasertoolreference/erasertype.md): The behavior adopted by the eraser when deleting content.
