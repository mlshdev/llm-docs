> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/draw(from:to:options:)](https://developer.apple.com/documentation/appkit/nsgradient/draw(from:to:options:))

# draw(from:to:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a linear gradient between the specified start and end points.

## Declaration

```swift
func draw(from startingPoint: NSPoint, to endingPoint: NSPoint, options: NSGradient.DrawingOptions = [])
```

## Parameters

- `startingPoint`: The starting point for the gradient, in the local coordinate system. The gradient’s first color is drawn at this point.
- `endingPoint`: The end point for the gradient, in the local coordinate system. The gradient’s last color is drawn at this point.
- `options`: The gradient options, if any. You can use these options to extend the gradient size beyond the start and end points. For more information, see `Gradient Drawing Options`.

<a id="Discussion"></a>

## Discussion

This method draws the gradient color changes along the line formed by the two points. The gradient fill extends perpendicularly outward from line until it reaches the edges of the current clipping region.

This is a primitive method used by the `NSGradient` class to draw linear gradients. Because this method does not perform any clipping of the gradient fill pattern, you must ensure that the clipping region is configured properly if you intend to invoke this method directly. By default, the clipping region is set to the current view or window in which drawing occurs.

## See Also

### Drawing a Linear Gradient

- [draw(in:angle:)](draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.
- [draw(in:angle:)](draw%28in_angle_%29-68adz.md): Fills the specified path with a linear gradient.

# drawFromPoint:toPoint:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a linear gradient between the specified start and end points.

## Declaration

```objectivec
- (void) drawFromPoint:(NSPoint) startingPoint toPoint:(NSPoint) endingPoint options:(NSGradientDrawingOptions) options;
```

## Parameters

- `startingPoint`: The starting point for the gradient, in the local coordinate system. The gradient’s first color is drawn at this point.
- `endingPoint`: The end point for the gradient, in the local coordinate system. The gradient’s last color is drawn at this point.
- `options`: The gradient options, if any. You can use these options to extend the gradient size beyond the start and end points. For more information, see `Gradient Drawing Options`.

<a id="Discussion"></a>

## Discussion

This method draws the gradient color changes along the line formed by the two points. The gradient fill extends perpendicularly outward from line until it reaches the edges of the current clipping region.

This is a primitive method used by the `NSGradient` class to draw linear gradients. Because this method does not perform any clipping of the gradient fill pattern, you must ensure that the clipping region is configured properly if you intend to invoke this method directly. By default, the clipping region is set to the current view or window in which drawing occurs.

## See Also

### Drawing a Linear Gradient

- [drawInRect:angle:](draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.
- [drawInBezierPath:angle:](draw%28in_angle_%29-68adz.md): Fills the specified path with a linear gradient.
