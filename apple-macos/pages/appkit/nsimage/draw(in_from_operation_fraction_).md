> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/draw(in:from:operation:fraction:)](https://developer.apple.com/documentation/appkit/nsimage/draw(in:from:operation:fraction:))

# draw(in:from:operation:fraction:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws all or part of the image in the specified rectangle in the current coordinate system.

## Declaration

```swift
func draw(in rect: NSRect, from fromRect: NSRect, operation op: NSCompositingOperation, fraction delta: CGFloat)
```

## Parameters

- `rect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `fromRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `delta`: The opacity of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

If the `srcRect` and `dstRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle. The image is otherwise positioned and oriented using the current coordinate system.

Unlike the [compositeToPoint:fromRect:operation:](compositetopoint_fromrect_operation_.md) and  [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md) methods, this method checks the rectangle you pass to the `srcRect` parameter and makes sure it does not lie outside the image bounds.

## See Also

### Drawing Images

- [draw(in:)](draw%28in_%29.md): Draws the image in the specified rectangle.
- [draw(at:from:operation:fraction:)](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation(\_:in:)](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

# drawInRect:fromRect:operation:fraction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws all or part of the image in the specified rectangle in the current coordinate system.

## Declaration

```objectivec
- (void) drawInRect:(NSRect) rect fromRect:(NSRect) fromRect operation:(NSCompositingOperation) op fraction:(CGFloat) delta;
```

## Parameters

- `rect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `fromRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `delta`: The opacity of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

If the `srcRect` and `dstRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle. The image is otherwise positioned and oriented using the current coordinate system.

Unlike the [compositeToPoint:fromRect:operation:](compositetopoint_fromrect_operation_.md) and  [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md) methods, this method checks the rectangle you pass to the `srcRect` parameter and makes sure it does not lie outside the image bounds.

## See Also

### Related Documentation

- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.

### Drawing Images

- [drawInRect:](draw%28in_%29.md): Draws the image in the specified rectangle.
- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation:inRect:](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
