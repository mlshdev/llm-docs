> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/addcurve(to:control1:control2:)](https://developer.apple.com/documentation/coregraphics/cgcontext/addcurve(to:control1:control2:))

# addCurve(to:control1:control2:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a cubic Bézier curve to the current path, with the specified end point and control points.

## Declaration

```swift
func addCurve(to end: CGPoint, control1: CGPoint, control2: CGPoint)
```

## Parameters

- `end`: The point, in user space coordinates, at which to end the curve.
- `control1`: The first control point of the curve, in user space coordinates.
- `control2`: The second control point of the curve, in user space coordinates.

<a id="Discussion"></a>

## Discussion

This method constructs a curve starting from the path’s current point and ending at the specified end point, with curvature defined by the two control points. After this method appends that curve to the current path, the end point of the curve becomes the path’s current point.

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
- [addQuadCurve(to:control:)](addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the current path, with the specified end point and control point.
- [addPath(\_:)](addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [closePath()](closepath%28%29.md): Closes and terminates the current path’s subpath.
- [path](path.md): Returns a path object built from the current path information in a graphics context.
- [replacePathWithStrokedPath()](replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.
