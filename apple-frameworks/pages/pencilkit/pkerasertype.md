> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkerasertype

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
