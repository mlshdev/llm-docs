> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath/closesubpath()](https://developer.apple.com/documentation/coregraphics/cgmutablepath/closesubpath())

# closeSubpath() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes and completes a subpath in a mutable graphics path.

## Declaration

```swift
func closeSubpath()
```

<a id="Discussion"></a>

## Discussion

Appends a line from the current point to the starting point of the current subpath and ends the subpath.

After closing the subpath, your application can begin a new subpath without first calling [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint). In this case, a new subpath is implicitly created with a starting and current point equal to the previous subpath’s starting point.

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
- [addPath(\_:transform:)](addpath%28__transform_%29.md): Appends another path object to the path.

# CGPathCloseSubpath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Closes and completes a subpath in a mutable graphics path.

## Declaration

```objectivec
extern void CGPathCloseSubpath(CGMutablePathRef path);
```

## Parameters

- `path`: The path to change.

<a id="Discussion"></a>

## Discussion

Appends a line from the current point to the starting point of the current subpath and ends the subpath.

After closing the subpath, your application can begin a new subpath without first calling [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint). In this case, a new subpath is implicitly created with a starting and current point equal to the previous subpath’s starting point.

## See Also

### Constructing a Graphics Path

- [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint): Starts a new subpath at a specified location in a mutable graphics path.
- [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint): Appends a line segment to a mutable graphics path.
- [CGPathAddLines](https://developer.apple.com/documentation/coregraphics/cgpathaddlines): Appends an array of new line segments to a mutable graphics path.
- [CGPathAddRect](https://developer.apple.com/documentation/coregraphics/cgpathaddrect): Appends a rectangle to a mutable graphics path.
- [CGPathAddRects](https://developer.apple.com/documentation/coregraphics/cgpathaddrects): Appends an array of rectangles to a mutable graphics path.
- [CGPathAddEllipseInRect](https://developer.apple.com/documentation/coregraphics/cgpathaddellipseinrect): Adds to a path an ellipse that fits inside a rectangle.
- [CGPathAddRoundedRect](https://developer.apple.com/documentation/coregraphics/cgpathaddroundedrect): Appends a rounded rectangle to a mutable graphics path.
- [CGPathAddArc](https://developer.apple.com/documentation/coregraphics/cgpathaddarc): Appends an arc to a mutable graphics path, possibly preceded by a straight line segment.
- [CGPathAddArcToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddarctopoint): Appends an arc to a mutable graphics path, possibly preceded by a straight line segment.
- [CGPathAddRelativeArc](https://developer.apple.com/documentation/coregraphics/cgpathaddrelativearc): Appends an arc to a mutable graphics path, possibly preceded by a straight line segment.
- [CGPathAddCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddcurvetopoint): Appends a cubic Bézier curve to a mutable graphics path.
- [CGPathAddQuadCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddquadcurvetopoint): Appends a quadratic Bézier curve to a mutable graphics path.
- [CGPathAddPath](https://developer.apple.com/documentation/coregraphics/cgpathaddpath): Appends a path to onto a mutable graphics path.
