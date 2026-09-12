> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/addrects(_:transform:)](https://developer.apple.com/documentation/swiftui/path/addrects(_:transform:))

# addRects(\_:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a set of rectangular subpaths to the path.

## Declaration

```swift
mutating func addRects(_ rects: [CGRect], transform: CGAffineTransform = .identity)
```

<a id="discussion"></a>

## Discussion

Calling this convenience method is equivalent to repeatedly calling the `addRect(_:transform:)` method for each rectangle in the array.

- Parameter:

  - rects: An array of rectangles, specified in user space coordinates.
  - transform: An affine transform to apply to the ellipse before adding to the path. Defaults to the identity transform if not specified.

## See Also

### Drawing a path

- [move(to:)](move%28to_%29.md): Begins a new subpath at the specified point.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addEllipse(in:transform:)](addellipse%28in_transform_%29.md): Adds an ellipse that fits inside the specified rectangle to the path.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(\_:)](addlines%28__%29.md): Adds a sequence of connected straight-line segments to the path.
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path value to this path.
- [addQuadCurve(to:control:)](addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addRect(\_:transform:)](addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addRoundedRect(in:cornerSize:style:transform:)](addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes the current subpath.
