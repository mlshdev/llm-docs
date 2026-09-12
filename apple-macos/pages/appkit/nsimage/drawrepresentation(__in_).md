> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/drawrepresentation(_:in:)](https://developer.apple.com/documentation/appkit/nsimage/drawrepresentation(_:in:))

# drawRepresentation(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image using the specified image representation object.

## Declaration

```swift
func drawRepresentation(_ imageRep: NSImageRep, in rect: NSRect) -> Bool
```

## Parameters

- `imageRep`: The image representation object to be drawn.
- `rect`: The rectangle in which to draw the image representation, specified in the current coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method fills the specified rectangle with the image’s current background color and then sends a message to the specified image representation asking if to draw itself. If the image supports the ability to scale itself when it is resized, this method sends a [draw(in:)](../nsimagerep/draw%28in_%29.md) message; otherwise, it sends a [draw(at:)](../nsimagerep/draw%28at_%29.md) message.

You should not call this method directly; an `NSImage` object uses it to cache and print its image representations. You can override this method to change the way images are rendered into their caches and onto the printed page. For example, you could scale or rotate the coordinate system before sending this message to `super` to continue rendering the image representation.

If the background color is fully transparent and the image data is not being cached, the specified rectangle is not to be filled before the representation draws.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The background color for the image.

### Drawing Images

- [draw(in:)](draw%28in_%29.md): Draws the image in the specified rectangle.
- [draw(at:from:operation:fraction:)](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:)](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

# drawRepresentation:inRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image using the specified image representation object.

## Declaration

```objectivec
- (BOOL) drawRepresentation:(NSImageRep *) imageRep inRect:(NSRect) rect;
```

## Parameters

- `imageRep`: The image representation object to be drawn.
- `rect`: The rectangle in which to draw the image representation, specified in the current coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method fills the specified rectangle with the image’s current background color and then sends a message to the specified image representation asking if to draw itself. If the image supports the ability to scale itself when it is resized, this method sends a [drawInRect:](../nsimagerep/draw%28in_%29.md) message; otherwise, it sends a [drawAtPoint:](../nsimagerep/draw%28at_%29.md) message.

You should not call this method directly; an `NSImage` object uses it to cache and print its image representations. You can override this method to change the way images are rendered into their caches and onto the printed page. For example, you could scale or rotate the coordinate system before sending this message to `super` to continue rendering the image representation.

If the background color is fully transparent and the image data is not being cached, the specified rectangle is not to be filled before the representation draws.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The background color for the image.

### Drawing Images

- [drawInRect:](draw%28in_%29.md): Draws the image in the specified rectangle.
- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
