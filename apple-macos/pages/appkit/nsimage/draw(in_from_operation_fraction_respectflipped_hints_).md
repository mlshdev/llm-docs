> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/draw(in:from:operation:fraction:respectflipped:hints:)](https://developer.apple.com/documentation/appkit/nsimage/draw(in:from:operation:fraction:respectflipped:hints:))

# draw(in:from:operation:fraction:respectFlipped:hints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.

## Declaration

```swift
func draw(in dstSpacePortionRect: NSRect, from srcSpacePortionRect: NSRect, operation op: NSCompositingOperation, fraction requestedAlpha: CGFloat, respectFlipped respectContextIsFlipped: Bool, hints: [NSImageRep.HintKey : Any]?)
```

## Parameters

- `dstSpacePortionRect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `srcSpacePortionRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `requestedAlpha`: The alpha of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.
- `respectContextIsFlipped`: [true](https://developer.apple.com/documentation/swift/true) if the drawing should respect the context flipped state, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.

<a id="Discussion"></a>

## Discussion

If the `srcSpacePortionRect` and `dstSpacePortionRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle.

## See Also

### Drawing Images

- [draw(in:)](draw%28in_%29.md): Draws the image in the specified rectangle.
- [draw(at:from:operation:fraction:)](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:)](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [drawRepresentation(\_:in:)](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

# drawInRect:fromRect:operation:fraction:respectFlipped:hints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.

## Declaration

```objectivec
- (void) drawInRect:(NSRect) dstSpacePortionRect fromRect:(NSRect) srcSpacePortionRect operation:(NSCompositingOperation) op fraction:(CGFloat) requestedAlpha respectFlipped:(BOOL) respectContextIsFlipped hints:(NSDictionary<NSString *,id> *) hints;
```

## Parameters

- `dstSpacePortionRect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `srcSpacePortionRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `requestedAlpha`: The alpha of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.
- `respectContextIsFlipped`: [true](https://developer.apple.com/documentation/swift/true) if the drawing should respect the context flipped state, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.

<a id="Discussion"></a>

## Discussion

If the `srcSpacePortionRect` and `dstSpacePortionRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle.

## See Also

### Drawing Images

- [drawInRect:](draw%28in_%29.md): Draws the image in the specified rectangle.
- [drawAtPoint:fromRect:operation:fraction:](draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [drawRepresentation:inRect:](drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
