> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath/addpath(_:transform:)](https://developer.apple.com/documentation/coregraphics/cgmutablepath/addpath(_:transform:))

# addPath(\_:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends another path object to the path.

## Declaration

```swift
func addPath(_ path: CGPath, transform: CGAffineTransform = .identity)
```

## Parameters

- `path`: The path to add.
- `transform`: An affine transform to apply to the `path` parameter before adding to this path. Defaults to the identity transform if not specified.

<a id="Discussion"></a>

## Discussion

If the `path` parameter is a non-empty empty path, its path elements are appended in order to this path. Afterward, the start point and current point of this path are those of the last subpath in the `path` parameter.

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
- [addQuadCurve(to:control:transform:)](addquadcurve%28to_control_transform_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.
