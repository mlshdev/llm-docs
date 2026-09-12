> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/draw(at:from:operation:fraction:)](https://developer.apple.com/documentation/coreimage/ciimage/draw(at:from:operation:fraction:))

# draw(at:from:operation:fraction:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS

Draws all or part of the image at the specified point in the current coordinate system.

## Declaration

```swift
func draw(at point: NSPoint, from fromRect: NSRect, operation op: NSCompositingOperation, fraction delta: CGFloat)
```

## Parameters

- `point`: The location in the current coordinate system at which to draw the image.
- `fromRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system.
- `op`: The compositing operation to use when drawing the image. For details, see [NSCompositingOperation](https://developer.apple.com/documentation/appkit/nscompositingoperation).
- `delta`: The opacity of the image, specified as a value from `0.0` to `1.0`. Specifying a value of `0.0` draws the image as fully transparent while a value of `1.0` draws the image as fully opaque. Values greater than `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

The image content is drawn at its current resolution and is not scaled unless the CTM of the current coordinate system itself contains a scaling factor. The image is otherwise positioned and oriented using the current coordinate system.

## See Also

### Drawing Images

- [draw(in:from:operation:fraction:)](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system

# drawAtPoint:fromRect:operation:fraction: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS

Draws all or part of the image at the specified point in the current coordinate system.

## Declaration

```objectivec
- (void) drawAtPoint:(NSPoint) point fromRect:(NSRect) fromRect operation:(NSCompositingOperation) op fraction:(CGFloat) delta;
```

## Parameters

- `point`: The location in the current coordinate system at which to draw the image.
- `fromRect`: The source rectangle specifying the portion of the image you want to draw. The coordinates of this rectangle must be specified using the image’s own coordinate system.
- `op`: The compositing operation to use when drawing the image. For details, see [NSCompositingOperation](https://developer.apple.com/documentation/appkit/nscompositingoperation).
- `delta`: The opacity of the image, specified as a value from `0.0` to `1.0`. Specifying a value of `0.0` draws the image as fully transparent while a value of `1.0` draws the image as fully opaque. Values greater than `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

The image content is drawn at its current resolution and is not scaled unless the CTM of the current coordinate system itself contains a scaling factor. The image is otherwise positioned and oriented using the current coordinate system.

## See Also

### Drawing Images

- [drawInRect:fromRect:operation:fraction:](draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system
