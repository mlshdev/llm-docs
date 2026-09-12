> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextaddarc](https://developer.apple.com/documentation/coregraphics/cgcontextaddarc)

# CGContextAddArc

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds an arc of a circle to the current path, possibly preceded by a straight line segment

## Declaration

```objectivec
extern void CGContextAddArc(CGContextRef c, CGFloat x, CGFloat y, CGFloat radius, CGFloat startAngle, CGFloat endAngle, int clockwise);
```

## Parameters

- `c`: A graphics context.
- `x`: The x-value, in user space coordinates, for the center of the arc.
- `y`: The y-value, in user space coordinates, for the center of the arc.
- `radius`: The radius of the arc, in user space coordinates.
- `startAngle`: The angle to the starting point of the arc, measured in radians from the positive x-axis.
- `endAngle`: The angle to the end point of the arc, measured in radians from the positive x-axis.
- `clockwise`: Specify `1` to create a clockwise arc or `0` to create a counterclockwise arc.

<a id="Discussion"></a>

## Discussion

This method calculates starting and ending points using the radius and angles you specify, uses a sequence of cubic Bézier curves to approximate a segment of a circle between those points, and then appends those curves to the current path.

The clockwise parameter determines the direction in which the arc is created; the actual direction of the final path is dependent on the current transformation matrix of the graphics context. In a flipped coordinate system (the default for UIView drawing methods in iOS), specifying a clockwise arc results in a counterclockwise arc after the transformation is applied.

If the current path already contains a subpath, this method adds a line connecting the current point to the starting point of the arc. If the current path is empty, his method creates a new subpath whose starting point is the starting point of the arc. The ending point of the arc becomes the new current point of the path.

## See Also

### Constructing a Current Graphics Path

- [CGContextBeginPath](cgcontext/beginpath%28%29.md): Creates a new empty path in a graphics context.
- [CGContextMoveToPoint](cgcontextmovetopoint.md): Begins a new subpath at the point you specify.
- [CGContextAddLineToPoint](cgcontextaddlinetopoint.md): Appends a straight line segment from the current point to the provided point .
- [CGContextAddLines](cgcontextaddlines.md): Adds a sequence of connected straight-line segments to the current path.
- [CGContextAddRect](cgcontext/addrect%28__%29.md): Adds a rectangular path to the current path.
- [CGContextAddRects](cgcontextaddrects.md): Adds a set of rectangular paths to the current path.
- [CGContextAddEllipseInRect](cgcontext/addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [CGContextAddArcToPoint](cgcontextaddarctopoint.md): Adds an arc of a circle to the current path, using a radius and tangent points.
- [CGContextAddCurveToPoint](cgcontextaddcurvetopoint.md): Appends a cubic Bézier curve from the current point, using the provided control points and end point .
- [CGContextAddQuadCurveToPoint](cgcontextaddquadcurvetopoint.md): Appends a quadratic Bézier curve from the current point, using a control point and an end point you specify.
- [CGContextAddPath](cgcontext/addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [CGContextClosePath](cgcontext/closepath%28%29.md): Closes and terminates the current path’s subpath.
- [CGContextCopyPath](cgcontext/path.md): Returns a path object built from the current path information in a graphics context.
- [CGContextReplacePathWithStrokedPath](cgcontext/replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.
