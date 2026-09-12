> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/replacepathwithstrokedpath()](https://developer.apple.com/documentation/coregraphics/cgcontext/replacepathwithstrokedpath())

# replacePathWithStrokedPath() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Replaces the path in the graphics context with the stroked version of the path.

## Declaration

```swift
func replacePathWithStrokedPath()
```

<a id="Discussion"></a>

## Discussion

A stroked path is created using the parameters of the current graphics context. The new path is created so that filling it draws the same pixels as stroking the original path.You can use this path in the same way you use the path of any context. For example, you can clip to the stroked version of a path by calling this function followed by a call to the function [CGContextClip](../cgcontextclip.md).

## See Also

### Constructing a Current Graphics Path

- [beginPath()](beginpath%28%29.md): Creates a new empty path in a graphics context.
- [move(to:)](move%28to_%29.md): Begins a new subpath at the specified point.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:)](addlines%28between_%29.md): Adds a sequence of connected straight-line segments to the current path.
- [addRect(\_:)](addrect%28__%29.md): Adds a rectangular path to the current path.
- [addRects(\_:)](addrects%28__%29.md): Adds a set of rectangular paths to the current path.
- [addEllipse(in:)](addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [addArc(center:radius:startAngle:endAngle:clockwise:)](addarc%28center_radius_startangle_endangle_clockwise_%29.md): Adds an arc of a circle to the current path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:)](addarc%28tangent1end_tangent2end_radius_%29.md): Adds an arc of a circle to the current path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the current path, with the specified end point and control points.
- [addQuadCurve(to:control:)](addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the current path, with the specified end point and control point.
- [addPath(\_:)](addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [closePath()](closepath%28%29.md): Closes and terminates the current path’s subpath.
- [path](path.md): Returns a path object built from the current path information in a graphics context.

# CGContextReplacePathWithStrokedPath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Replaces the path in the graphics context with the stroked version of the path.

## Declaration

```objectivec
extern void CGContextReplacePathWithStrokedPath(CGContextRef c);
```

## Parameters

- `c`: A graphics context.

<a id="Discussion"></a>

## Discussion

A stroked path is created using the parameters of the current graphics context. The new path is created so that filling it draws the same pixels as stroking the original path.You can use this path in the same way you use the path of any context. For example, you can clip to the stroked version of a path by calling this function followed by a call to the function [CGContextClip](../cgcontextclip.md).

## See Also

### Constructing a Current Graphics Path

- [CGContextBeginPath](beginpath%28%29.md): Creates a new empty path in a graphics context.
- [CGContextMoveToPoint](../cgcontextmovetopoint.md): Begins a new subpath at the point you specify.
- [CGContextAddLineToPoint](../cgcontextaddlinetopoint.md): Appends a straight line segment from the current point to the provided point .
- [CGContextAddLines](../cgcontextaddlines.md): Adds a sequence of connected straight-line segments to the current path.
- [CGContextAddRect](addrect%28__%29.md): Adds a rectangular path to the current path.
- [CGContextAddRects](../cgcontextaddrects.md): Adds a set of rectangular paths to the current path.
- [CGContextAddEllipseInRect](addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [CGContextAddArc](../cgcontextaddarc.md): Adds an arc of a circle to the current path, possibly preceded by a straight line segment
- [CGContextAddArcToPoint](../cgcontextaddarctopoint.md): Adds an arc of a circle to the current path, using a radius and tangent points.
- [CGContextAddCurveToPoint](../cgcontextaddcurvetopoint.md): Appends a cubic Bézier curve from the current point, using the provided control points and end point .
- [CGContextAddQuadCurveToPoint](../cgcontextaddquadcurvetopoint.md): Appends a quadratic Bézier curve from the current point, using a control point and an end point you specify.
- [CGContextAddPath](addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [CGContextClosePath](closepath%28%29.md): Closes and terminates the current path’s subpath.
- [CGContextCopyPath](path.md): Returns a path object built from the current path information in a graphics context.
