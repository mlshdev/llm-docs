> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath/addarc(tangent1end:tangent2end:radius:transform:)](https://developer.apple.com/documentation/coregraphics/cgmutablepath/addarc(tangent1end:tangent2end:radius:transform:))

# addArc(tangent1End:tangent2End:radius:transform:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an arc of a circle to the path, specified with a radius and two tangent lines.

## Declaration

```swift
func addArc(tangent1End: CGPoint, tangent2End: CGPoint, radius: CGFloat, transform: CGAffineTransform = .identity)
```

## Parameters

- `tangent1End`: The end point, in user space coordinates, for the first tangent line to be used in constructing the arc. (The start point for this tangent line is the path’s current point.)
- `tangent2End`: The end point, in user space coordinates, for the second tangent line to be used in constructing the arc. (The start point for this tangent line is the `tangent1End` point.)
- `radius`: The radius of the arc, in user space coordinates.
- `transform`: An affine transform to apply to the arc before adding to the path. Defaults to the identity transform if not specified.

<a id="Discussion"></a>

## Discussion

This method calculates two tangent lines—the first from the current point to the `tangent1End` point, and the second from the `tangent1End` point to the `tangent2End` point—then calculates the start and end points for a circular arc of the specified radius such that the arc is tangent to both lines. Finally, this method approximates that arc with a sequence of cubic Bézier curves and appends those curves to the path.

If the starting point of the arc (that is, the point where a circle of the specified radius must meet the first tangent line in order to also be tangent to the second line) is not the current point, this method appends a straight line segment from the current point to the starting point of the arc.

The ending point of the arc (that is, the point where a circle of the specified radius must meet the second tangent line in order to also be tangent to the first line) becomes the new current point of the path.

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
- [addRelativeArc(center:radius:startAngle:delta:transform:)](addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addCurve(to:control1:control2:transform:)](addcurve%28to_control1_control2_transform_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addQuadCurve(to:control:transform:)](addquadcurve%28to_control_transform_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path object to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.
