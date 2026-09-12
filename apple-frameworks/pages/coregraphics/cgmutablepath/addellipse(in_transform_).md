> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath/addellipse(in:transform:)](https://developer.apple.com/documentation/coregraphics/cgmutablepath/addellipse(in:transform:))

# addEllipse(in:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an ellipse that fits inside the specified rectangle.

## Declaration

```swift
func addEllipse(in rect: CGRect, transform: CGAffineTransform = .identity)
```

## Parameters

- `rect`: A rectangle that defines the area for the ellipse to fit in.
- `transform`: An affine transform to apply to the ellipse before adding to the path. Defaults to the identity transform if not specified.

<a id="Discussion"></a>

## Discussion

The ellipse is approximated by a sequence of Bézier curves. Its center is the midpoint of the rectangle defined by the `rect` parameter. If the rectangle is square, then the ellipse is circular with a radius equal to one-half the width (or height) of the rectangle. If the `rect` parameter specifies a rectangular shape, then the major and minor axes of the ellipse are defined by the width and height of the rectangle.

The ellipse forms a complete subpath of the path—that is, the ellipse drawing starts with a move-to operation and ends with a close-subpath operation, with all moves oriented in the clockwise direction.

## See Also

### Constructing a Graphics Path

- [move(to:transform:)](move%28to_transform_%29.md): Begins a new subpath at the specified point.
- [addLine(to:transform:)](addline%28to_transform_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:transform:)](addlines%28between_transform_%29.md): Adds a sequence of connected straight-line segments to the path.
- [addRect(\_:transform:)](addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRects(\_:transform:)](addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addRoundedRect(in:cornerWidth:cornerHeight:transform:)](addroundedrect%28in_cornerwidth_cornerheight_transform_%29.md): Adds a subpath to the path, in the shape of a rectangle with rounded corners.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addCurve(to:control1:control2:transform:)](addcurve%28to_control1_control2_transform_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addQuadCurve(to:control:transform:)](addquadcurve%28to_control_transform_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path object to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.
