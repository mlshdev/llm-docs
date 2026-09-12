> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath/addquadcurve(to:control:transform:)](https://developer.apple.com/documentation/coregraphics/cgmutablepath/addquadcurve(to:control:transform:))

# addQuadCurve(to:control:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a quadratic Bézier curve to the path, with the specified end point and control point.

## Declaration

```swift
func addQuadCurve(to end: CGPoint, control: CGPoint, transform: CGAffineTransform = .identity)
```

## Parameters

- `end`: The point, in user space coordinates, at which to end the curve.
- `control`: The control point of the curve, in user space coordinates.
- `transform`: An affine transform to apply to the curve before adding to the path. Defaults to the identity transform if not specified.

<a id="Discussion"></a>

## Discussion

This method constructs a curve starting from the path’s current point and ending at the specified end point, with curvature defined by the control point. After this method appends that curve to the current path, the end point of the curve becomes the path’s current point.

## See Also

### Constructing a Graphics Path

- [move(to:transform:)](move%28to_transform_%29.md): Begins a new subpath at the specified point.
- [addLine(to:transform:)](addline%28to_transform_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:transform:)](addlines%28between_transform_%29.md): Adds a sequence of connected straight-line segments to the path.
- [addRect(\_:transform:)](addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRects(\_:transform:)](addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addEllipse(in:transform:)](addellipse%28in_transform_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [addRoundedRect(in:cornerWidth:cornerHeight:transform:)](addroundedrect%28in_cornerwidth_cornerheight_transform_%29.md): Adds a subpath to the path, in the shape of a rectangle with rounded corners.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addCurve(to:control1:control2:transform:)](addcurve%28to_control1_control2_transform_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path object to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.
