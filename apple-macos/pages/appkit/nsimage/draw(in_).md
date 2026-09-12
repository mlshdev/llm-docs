> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/draw(in:)](https://developer.apple.com/documentation/appkit/nsimage/draw(in:))

# draw(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Draws the image in the specified rectangle.

## Declaration

```swift
func draw(in rect: NSRect)
```

## Parameters

- `rect`: The rectangle in which to draw the image, specified in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the specified rectangle, scaling the image as needed. The method composites the image using the [NSCompositeSourceOver](../nscompositesourceover.md) operation

## See Also

### Drawing Images

- [draw(at:from:operation:fraction:)](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:)](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation(\_:in:)](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

# drawInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Draws the image in the specified rectangle.

## Declaration

```objectivec
- (void) drawInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in which to draw the image, specified in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the specified rectangle, scaling the image as needed. The method composites the image using the [NSCompositeSourceOver](../nscompositesourceover.md) operation

## See Also

### Drawing Images

- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation:inRect:](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
