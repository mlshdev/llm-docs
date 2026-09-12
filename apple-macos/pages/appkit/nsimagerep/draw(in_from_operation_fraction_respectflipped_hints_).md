> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/draw(in:from:operation:fraction:respectflipped:hints:)](https://developer.apple.com/documentation/appkit/nsimagerep/draw(in:from:operation:fraction:respectflipped:hints:))

# draw(in:from:operation:fraction:respectFlipped:hints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Draws all or part of the image in the specified rectangle in the current coordinate system.

## Declaration

```swift
func draw(in dstSpacePortionRect: NSRect, from srcSpacePortionRect: NSRect, operation op: NSCompositingOperation, fraction requestedAlpha: CGFloat, respectFlipped respectContextIsFlipped: Bool, hints: [NSImageRep.HintKey : Any]?) -> Bool
```

## Parameters

- `dstSpacePortionRect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `srcSpacePortionRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `requestedAlpha`: The opacity of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.
- `respectContextIsFlipped`: [true](https://developer.apple.com/documentation/swift/true) if the flipped context of the receiver should be respected, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See `Image Hint Dictionary Keys` for possible values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `srcSpacePortionRect` and `dstSpacePortionRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle.

## See Also

### Drawing Images

- [draw()](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [draw(at:)](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [draw(in:)](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [NSImageRep.HintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

# drawInRect:fromRect:operation:fraction:respectFlipped:hints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Draws all or part of the image in the specified rectangle in the current coordinate system.

## Declaration

```objectivec
- (BOOL) drawInRect:(NSRect) dstSpacePortionRect fromRect:(NSRect) srcSpacePortionRect operation:(NSCompositingOperation) op fraction:(CGFloat) requestedAlpha respectFlipped:(BOOL) respectContextIsFlipped hints:(NSDictionary<NSString *,id> *) hints;
```

## Parameters

- `dstSpacePortionRect`: The rectangle in which to draw the image, specified in the current coordinate system.
- `srcSpacePortionRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system. If you pass in `NSZeroRect`, the entire image is drawn.
- `op`: The compositing operation to use when drawing the image. See the [NSCompositingOperation](../nscompositingoperation.md) constants.
- `requestedAlpha`: The opacity of the image, specified as a value from 0.0 to 1.0. Specifying a value of 0.0 draws the image as fully transparent while a value of 1.0 draws the image as fully opaque. Values greater than 1.0 are interpreted as 1.0.
- `respectContextIsFlipped`: [true](https://developer.apple.com/documentation/swift/true) if the flipped context of the receiver should be respected, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `hints`: An optional dictionary of hints that provide more context for selecting or generating the image. See `Image Hint Dictionary Keys` for possible values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the image was successfully drawn; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `srcSpacePortionRect` and `dstSpacePortionRect` rectangles have different sizes, the source portion of the image is scaled to fit the specified destination rectangle.

## See Also

### Drawing Images

- [draw](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [drawAtPoint:](draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [drawInRect:](draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [NSImageHintKey](hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
