> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/addline(to:)](https://developer.apple.com/documentation/swiftui/path/addline(to:))

# addLine(to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends a straight line segment from the current point to the specified point.

## Declaration

```swift
mutating func addLine(to end: CGPoint)
```

## Parameters

- `end`: The location, in user space coordinates, for the end of the new line segment.

<a id="discussion"></a>

## Discussion

After adding the line segment, the current point is set to the endpoint of the line segment.

## See Also

### Drawing a path

- [move(to:)](move%28to_%29.md): Begins a new subpath at the specified point.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addEllipse(in:transform:)](addellipse%28in_transform_%29.md): Adds an ellipse that fits inside the specified rectangle to the path.
- [addLines(\_:)](addlines%28__%29.md): Adds a sequence of connected straight-line segments to the path.
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path value to this path.
- [addQuadCurve(to:control:)](addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addRect(\_:transform:)](addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRects(\_:transform:)](addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addRoundedRect(in:cornerSize:style:transform:)](addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes the current subpath.
