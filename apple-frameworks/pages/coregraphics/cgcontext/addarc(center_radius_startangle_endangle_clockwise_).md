> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/addarc(center:radius:startangle:endangle:clockwise:)](https://developer.apple.com/documentation/coregraphics/cgcontext/addarc(center:radius:startangle:endangle:clockwise:))

# addArc(center:radius:startAngle:endAngle:clockwise:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an arc of a circle to the current path, specified with a radius and angles.

## Declaration

```swift
func addArc(center: CGPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
```

## Parameters

- `center`: The center of the arc, in user space coordinates.
- `radius`: The radius of the arc, in user space coordinates.
- `startAngle`: The angle to the starting point of the arc, measured in radians from the positive x-axis.
- `endAngle`: The angle to the end point of the arc, measured in radians from the positive x-axis.
- `clockwise`: [true](https://developer.apple.com/documentation/swift/true) to make a clockwise arc; [false](https://developer.apple.com/documentation/swift/false) to make a counterclockwise arc.

<a id="Discussion"></a>

## Discussion

This method calculates starting and ending points using the radius and angles you specify, uses a sequence of cubic Bézier curves to approximate a segment of a circle between those points, and then appends those curves to the current path.

The `clockwise` parameter determines the direction in which the arc is created; the actual direction of the final path is dependent on the current transformation matrix of the graphics context. In a flipped coordinate system (the default for [UIView](../../uikit/uiview.md) drawing methods in iOS), specifying a clockwise arc results in a counterclockwise arc after the transformation is applied.

If the current path already contains a subpath, this method adds a line connecting the current point to the starting point of the arc. If the current path is empty, his method creates a new subpath whose starting point is the starting point of the arc. The ending point of the arc becomes the new current point of the path.

## See Also

### Constructing a Current Graphics Path

- [beginPath()](beginpath%28%29.md): Creates a new empty path in a graphics context.
- [move(to:)](move%28to_%29.md): Begins a new subpath at the specified point.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:)](addlines%28between_%29.md): Adds a sequence of connected straight-line segments to the current path.
- [addRect(\_:)](addrect%28__%29.md): Adds a rectangular path to the current path.
- [addRects(\_:)](addrects%28__%29.md): Adds a set of rectangular paths to the current path.
- [addEllipse(in:)](addellipse%28in_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [addArc(tangent1End:tangent2End:radius:)](addarc%28tangent1end_tangent2end_radius_%29.md): Adds an arc of a circle to the current path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the current path, with the specified end point and control points.
- [addQuadCurve(to:control:)](addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the current path, with the specified end point and control point.
- [addPath(\_:)](addpath%28__%29.md): Adds a previously created path object to the current path in a graphics context.
- [closePath()](closepath%28%29.md): Closes and terminates the current path’s subpath.
- [path](path.md): Returns a path object built from the current path information in a graphics context.
- [replacePathWithStrokedPath()](replacepathwithstrokedpath%28%29.md): Replaces the path in the graphics context with the stroked version of the path.
