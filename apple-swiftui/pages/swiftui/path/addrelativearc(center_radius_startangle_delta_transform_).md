> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/addrelativearc(center:radius:startangle:delta:transform:)](https://developer.apple.com/documentation/swiftui/path/addrelativearc(center:radius:startangle:delta:transform:))

# addRelativeArc(center:radius:startAngle:delta:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an arc of a circle to the path, specified with a radius and a difference in angle.

## Declaration

```swift
mutating func addRelativeArc(center: CGPoint, radius: CGFloat, startAngle: Angle, delta: Angle, transform: CGAffineTransform = .identity)
```

## Parameters

- `center`: The center of the arc, in user space coordinates.
- `radius`: The radius of the arc, in user space coordinates.
- `startAngle`: The angle to the starting point of the arc, measured from the positive x-axis.
- `delta`: The difference between the starting angle and ending angle of the arc. A positive value creates a counter- clockwise arc (in user space coordinates), and vice versa.
- `transform`: An affine transform to apply to the arc before adding to the path. Defaults to the identity transform if not specified. /

<a id="discussion"></a>

## Discussion

This method calculates starting and ending points using the radius and angles you specify, uses a sequence of cubic Bézier curves to approximate a segment of a circle between those points, and then appends those curves to the path.

The `delta` parameter determines both the length of the arc the direction in which the arc is created; the actual direction of the final path is dependent on the `transform` parameter and the current transform of a context where the path is drawn. However, because SwiftUI by default uses a vertically-flipped coordinate system (with the origin in the top-left of the view), specifying a clockwise arc results in a counterclockwise arc after the transformation is applied.

If the path ends with an unclosed subpath, this method adds a line connecting the current point to the starting point of the arc. If there is no unclosed subpath, this method creates a new subpath whose starting point is the starting point of the arc. The ending point of the arc becomes the new current point of the path.

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
- [addRects(\_:transform:)](addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addRoundedRect(in:cornerSize:style:transform:)](addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [closeSubpath()](closesubpath%28%29.md): Closes and completes the current subpath.
