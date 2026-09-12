> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextmovetopoint](https://developer.apple.com/documentation/coregraphics/cgcontextmovetopoint)

# CGContextMoveToPoint

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Begins a new subpath at the point you specify.

## Declaration

```objectivec
extern void CGContextMoveToPoint(CGContextRef c, CGFloat x, CGFloat y);
```

## Parameters

- `c`: A graphics context.
- `x`: The x-value, in user space coordinates, for the point.
- `y`: The y-value, in user space coordinates, for the point.

<a id="Discussion"></a>

## Discussion

This point you specify becomes the start point of a new subpath. The current point is set to this start point.

## See Also

### Constructing a Current Graphics Path

- [CGContextBeginPath](cgcontext/beginpath%28%29.md): Creates a new empty path in a graphics context.
- [CGContextAddLineToPoint](cgcontextaddlinetopoint.md): Appends a straight line segment from the current point to the provided point .
- [CGContextAddLines](cgcontextaddlines.md): Adds a sequence of connected straight-line segments to the current path.
- [CGContextAddRect](cgcontext/addrect%28__%29.md): Adds a rectangular path to the current path.
- [CGContextAddRects](cgcontextaddrects.md): Adds a set of rectangular paths to the current path.
- [CGContextAddEllipseInRect](cgcontext/addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [CGContextAddArc](cgcontextaddarc.md): Adds an arc of a circle to the current path, possibly preceded by a straight line segment
- [CGContextAddArcToPoint](cgcontextaddarctopoint.md): Adds an arc of a circle to the current path, using a radius and tangent points.
- [CGContextAddCurveToPoint](cgcontextaddcurvetopoint.md): Appends a cubic Bézier curve from the current point, using the provided control points and end point .
- [CGContextAddQuadCurveToPoint](cgcontextaddquadcurvetopoint.md): Appends a quadratic Bézier curve from the current point, using a control point and an end point you specify.
- [CGContextAddPath](cgcontext/addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [CGContextClosePath](cgcontext/closepath%28%29.md): Closes and terminates the current path’s subpath.
- [CGContextCopyPath](cgcontext/path.md): Returns a path object built from the current path information in a graphics context.
- [CGContextReplacePathWithStrokedPath](cgcontext/replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.
