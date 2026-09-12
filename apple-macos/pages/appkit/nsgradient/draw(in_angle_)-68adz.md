> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/draw(in:angle:)-68adz](https://developer.apple.com/documentation/appkit/nsgradient/draw(in:angle:)-68adz)

# draw(in:angle:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Fills the specified path with a linear gradient.

## Declaration

```swift
func draw(in path: NSBezierPath, angle: CGFloat)
```

## Parameters

- `path`: The path object to fill.
- `angle`: The angle of the linear gradient, specified in degrees. Positive values indicate rotation in the counter-clockwise direction relative to the horizontal axis.

<a id="Discussion"></a>

## Discussion

This convenience method behaves in a similar way to the [draw(in:angle:)](draw%28in_angle_%29-7sdyh.md) method, with the path object replacing the rectangle as the clipping region. Like the other method, the start and end colors are guaranteed to be visible at the farthest ends of the path.

The gradient formed by this method is clipped to `path`.

## See Also

### Drawing a Linear Gradient

- [draw(from:to:options:)](draw%28from_to_options_%29.md): Draws a linear gradient between the specified start and end points.
- [draw(in:angle:)](draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.

# drawInBezierPath:angle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Fills the specified path with a linear gradient.

## Declaration

```objectivec
- (void) drawInBezierPath:(NSBezierPath *) path angle:(CGFloat) angle;
```

## Parameters

- `path`: The path object to fill.
- `angle`: The angle of the linear gradient, specified in degrees. Positive values indicate rotation in the counter-clockwise direction relative to the horizontal axis.

<a id="Discussion"></a>

## Discussion

This convenience method behaves in a similar way to the [drawInRect:angle:](draw%28in_angle_%29-7sdyh.md) method, with the path object replacing the rectangle as the clipping region. Like the other method, the start and end colors are guaranteed to be visible at the farthest ends of the path.

The gradient formed by this method is clipped to `path`.

## See Also

### Drawing a Linear Gradient

- [drawFromPoint:toPoint:options:](draw%28from_to_options_%29.md): Draws a linear gradient between the specified start and end points.
- [drawInRect:angle:](draw%28in_angle_%29-7sdyh.md): Fills the specified rectangle with a linear gradient.
