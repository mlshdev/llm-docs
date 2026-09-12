> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/draw(in:relativecenterposition:)-3a83](https://developer.apple.com/documentation/appkit/nsgradient/draw(in:relativecenterposition:)-3a83)

# draw(in:relativeCenterPosition:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a radial gradient starting at the center of the specified rectangle.

## Declaration

```swift
func draw(in rect: NSRect, relativeCenterPosition: NSPoint)
```

## Parameters

- `rect`: The rectangle to fill.
- `relativeCenterPosition`: The relative location within the rectangle to use as the center point of the gradient’s end circle. Each coordinate must contain a value between -1.0 and 1.0. A coordinate value of 0 represents the center of `rect` along the given axis. In the default coordinate system, a value of -1.0 corresponds to the bottom or left edge of the rectangle and a value of 1.0 corresponds to the top or right edge.

<a id="Discussion"></a>

## Discussion

The center point of the starting circle is the same as the center point of `rect`. The radius of the starting circle is 0, resulting in the starting circle being just a point.

The center point of the end circle starts at the center point of `rect` and is modified by the value in the `relativeCenterPosition` parameter. For example, if `relativeCenterPosition` contains the point (1.0, 1.0), the center of the end circle is located in the top-right corner of `rect`. The radius of the end circle is set to the smallest value that ensures `rect` is covered by the end circle.

The gradient formed by this method is clipped to `rect`.

## See Also

### Drawing a Radial Gradient

- [draw(fromCenter:radius:toCenter:radius:options:)](draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [draw(in:relativeCenterPosition:)](draw%28in_relativecenterposition_%29-502cc.md): Draws a radial gradient starting at the center point of the specified path.

# drawInRect:relativeCenterPosition: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Draws a radial gradient starting at the center of the specified rectangle.

## Declaration

```objectivec
- (void) drawInRect:(NSRect) rect relativeCenterPosition:(NSPoint) relativeCenterPosition;
```

## Parameters

- `rect`: The rectangle to fill.
- `relativeCenterPosition`: The relative location within the rectangle to use as the center point of the gradient’s end circle. Each coordinate must contain a value between -1.0 and 1.0. A coordinate value of 0 represents the center of `rect` along the given axis. In the default coordinate system, a value of -1.0 corresponds to the bottom or left edge of the rectangle and a value of 1.0 corresponds to the top or right edge.

<a id="Discussion"></a>

## Discussion

The center point of the starting circle is the same as the center point of `rect`. The radius of the starting circle is 0, resulting in the starting circle being just a point.

The center point of the end circle starts at the center point of `rect` and is modified by the value in the `relativeCenterPosition` parameter. For example, if `relativeCenterPosition` contains the point (1.0, 1.0), the center of the end circle is located in the top-right corner of `rect`. The radius of the end circle is set to the smallest value that ensures `rect` is covered by the end circle.

The gradient formed by this method is clipped to `rect`.

## See Also

### Drawing a Radial Gradient

- [drawFromCenter:radius:toCenter:radius:options:](draw%28fromcenter_radius_tocenter_radius_options_%29.md): Draws a radial gradient between the specified circles.
- [drawInBezierPath:relativeCenterPosition:](draw%28in_relativecenterposition_%29-502cc.md): Draws a radial gradient starting at the center point of the specified path.
