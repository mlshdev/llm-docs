> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path](https://developer.apple.com/documentation/swiftui/path)

# Path

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The outline of a 2D shape.

## Declaration

```swift
@frozen struct Path
```

## Topics

### Creating a path

- [init()](path/init%28%29.md): Creates an empty path.
- [init(\_:)](path/init%28__%29.md): Creates an empty path, then executes a closure to add its initial elements.
- [init(ellipseIn:)](path/init%28ellipsein_%29.md): Creates a path as an ellipse within the given rectangle.
- [init(roundedRect:cornerRadius:style:)](path/init%28roundedrect_cornerradius_style_%29.md): Creates a path containing a rounded rectangle.
- [init(roundedRect:cornerSize:style:)](path/init%28roundedrect_cornersize_style_%29.md): Creates a path containing a rounded rectangle.
- [init(roundedRect:cornerRadii:style:)](path/init%28roundedrect_cornerradii_style_%29.md): Creates a path as the given rounded rectangle, which may have uneven corner radii.

### Getting the path’s characteristics

- [boundingRect](path/boundingrect.md): A rectangle containing all path segments.
- [cgPath](path/cgpath.md): An immutable path representing the elements in the path.
- [contains(\_:eoFill:)](path/contains%28__eofill_%29.md): Returns true if the path contains a specified point.
- [currentPoint](path/currentpoint.md): Returns the last point in the path, or nil if the path contains no points.
- [description](path/description.md): A description of the path that may be used to recreate the path via `init?(_:)`.
- [isEmpty](path/isempty.md): A Boolean value indicating whether the path contains zero elements.

### Drawing a path

- [move(to:)](path/move%28to_%29.md): Begins a new subpath at the specified point.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](path/addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](path/addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addCurve(to:control1:control2:)](path/addcurve%28to_control1_control2_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addEllipse(in:transform:)](path/addellipse%28in_transform_%29.md): Adds an ellipse that fits inside the specified rectangle to the path.
- [addLine(to:)](path/addline%28to_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(\_:)](path/addlines%28__%29.md): Adds a sequence of connected straight-line segments to the path.
- [addPath(\_:transform:)](path/addpath%28__transform_%29.md): Appends another path value to this path.
- [addQuadCurve(to:control:)](path/addquadcurve%28to_control_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addRect(\_:transform:)](path/addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRects(\_:transform:)](path/addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](path/addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addRoundedRect(in:cornerSize:style:transform:)](path/addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [closeSubpath()](path/closesubpath%28%29.md): Closes and completes the current subpath.

### Transforming the path

- [applying(\_:)](path/applying%28__%29.md): Returns a path constructed by applying the transform to all points of the path.
- [offsetBy(dx:dy:)](path/offsetby%28dx_dy_%29.md): Returns a path constructed by translating all its points.
- [trimmedPath(from:to:)](path/trimmedpath%28from_to_%29.md): Returns a partial copy of the path.

### Performing operations on the path

- [addRoundedRect(in:cornerSize:style:transform:)](path/addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [intersection(\_:eoFill:)](path/intersection%28__eofill_%29.md): Returns a new path with filled regions common to both paths.
- [lineIntersection(\_:eoFill:)](path/lineintersection%28__eofill_%29.md): Returns a new path with a line from this path that overlaps the filled regions of the given path.
- [lineSubtraction(\_:eoFill:)](path/linesubtraction%28__eofill_%29.md): Returns a new path with a line from this path that does not overlap the filled region of the given path.
- [normalized(eoFill:)](path/normalized%28eofill_%29.md): Returns a new weakly-simple copy of this path.
- [subtracting(\_:eoFill:)](path/subtracting%28__eofill_%29.md): Returns a new path with filled regions from this path that are not in the given path.
- [symmetricDifference(\_:eoFill:)](path/symmetricdifference%28__eofill_%29.md): Returns a new path with filled regions either from this path or the given path, but not in both.
- [union(\_:eoFill:)](path/union%28__eofill_%29.md): Returns a new path with filled regions in either this path or the given path.

### Operating over path elements

- [forEach(\_:)](path/foreach%28__%29.md): Calls `body` with each element in the path.
- [Path.Element](path/element.md): An element of a path.

### Applying a style

- [strokedPath(\_:)](path/strokedpath%28__%29.md): Returns a stroked copy of the path using `style` to define how the stroked outline is created.

### Instance Methods

- [addRoundedRect(in:cornerRadii:style:transform:)](path/addroundedrect%28in_cornerradii_style_transform_%29.md): Adds a rounded rectangle with uneven corners to the path.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LosslessStringConvertible](https://developer.apple.com/documentation/swift/losslessstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)
