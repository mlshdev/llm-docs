> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/draw(in:relativecenterposition:)-502cc](https://developer.apple.com/documentation/appkit/nsgradient/draw(in:relativecenterposition:)-502cc)

# draw(in:relativeCenterPosition:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a radial gradient starting at the center point of the specified path.

## Declaration

```swift
func draw(in path: NSBezierPath, relativeCenterPosition: NSPoint)
```

## Parameters

- `path`: The path to fill.
- `relativeCenterPosition`: The relative location within the bounding rectangle of `path` to use as the center point of the gradient’s end circle. Each coordinate must contain a value between -1.0 and 1.0. A coordinate value of 0 represents the center of the path’s bounding rectangle along the given axis. In the default coordinate system, a value of -1.0 corresponds to the bottom or left edge of the bounding rectangle and a value of 1.0 corresponds to the top or right edge.

<a id="Discussion"></a>

## Discussion

The center point of the starting circle is the same as the center point of `path`. The radius of the starting circle is 0, resulting in the starting circle being just a point.

The center point of the end circle starts at the center point of `path` and is modified by the value in the `relativeCenterPosition` parameter. For example, if `relativeCenterPosition` contains the point (1.0, 1.0), the center of the end circle is located in the top-right corner of the path’s bounding rectangle. The radius of the end circle is set to the smallest value that ensures `rect` is covered by the end circle.

The gradient formed by this method is clipped to `path`.

## See Also

### Drawing a Radial Gradient

- [draw(fromCenter:radius:toCenter:radius:options:)](draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [draw(in:relativeCenterPosition:)](draw%28in_relativecenterposition_%29-3a83.md): Draws a radial gradient starting at the center of the specified rectangle.

# drawInBezierPath:relativeCenterPosition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a radial gradient starting at the center point of the specified path.

## Declaration

```objectivec
- (void) drawInBezierPath:(NSBezierPath *) path relativeCenterPosition:(NSPoint) relativeCenterPosition;
```

## Parameters

- `path`: The path to fill.
- `relativeCenterPosition`: The relative location within the bounding rectangle of `path` to use as the center point of the gradient’s end circle. Each coordinate must contain a value between -1.0 and 1.0. A coordinate value of 0 represents the center of the path’s bounding rectangle along the given axis. In the default coordinate system, a value of -1.0 corresponds to the bottom or left edge of the bounding rectangle and a value of 1.0 corresponds to the top or right edge.

<a id="Discussion"></a>

## Discussion

The center point of the starting circle is the same as the center point of `path`. The radius of the starting circle is 0, resulting in the starting circle being just a point.

The center point of the end circle starts at the center point of `path` and is modified by the value in the `relativeCenterPosition` parameter. For example, if `relativeCenterPosition` contains the point (1.0, 1.0), the center of the end circle is located in the top-right corner of the path’s bounding rectangle. The radius of the end circle is set to the smallest value that ensures `rect` is covered by the end circle.

The gradient formed by this method is clipped to `path`.

## See Also

### Drawing a Radial Gradient

- [drawFromCenter:radius:toCenter:radius:options:](draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [drawInRect:relativeCenterPosition:](draw%28in_relativecenterposition_%29-3a83.md): Draws a radial gradient starting at the center of the specified rectangle.
