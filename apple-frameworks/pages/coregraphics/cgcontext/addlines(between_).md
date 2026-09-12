> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/addlines(between:)](https://developer.apple.com/documentation/coregraphics/cgcontext/addlines(between:))

# addLines(between:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a sequence of connected straight-line segments to the current path.

## Declaration

```swift
func addLines(between points: [CGPoint])
```

## Parameters

- `points`: An array of values that specify the start and end points of the line segments to draw. Each point in the array specifies a position in user space. The first point in the array specifies the initial starting point.

<a id="Discussion"></a>

## Discussion

Calling this convenience method is equivalent to calling the [move(to:)](move%28to_%29.md) method with the first value in the points array, then calling the [addLine(to:)](addline%28to_%29.md) method for each subsequent point until the array is exhausted. After calling this method, the path’s current point is the last point in the array.

## See Also

### Constructing a Current Graphics Path

- [beginPath()](beginpath%28%29.md): Creates a new empty path in a graphics context.
- [move(to:)](move%28to_%29.md): Begins a new subpath at the specified point.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
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
- [replacePathWithStrokedPath()](replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.
