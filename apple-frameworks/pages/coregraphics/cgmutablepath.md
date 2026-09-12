> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgmutablepath](https://developer.apple.com/documentation/coregraphics/cgmutablepath)

# CGMutablePath (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.

## Declaration

```swift
class CGMutablePath
```

<a id="overview"></a>

## Overview

Neither `CGPath` nor [CGMutablePath](cgmutablepath.md) define functions to draw a path. To draw a Core Graphics path to a graphics context, you add the path to the graphics context by calling [addPath(\_:)](cgcontext/addpath%28__%29.md) and then call one of the context’s drawing functions—see [CGContext](cgcontext.md).

Each figure in the graphics path is constructed with a connected set of lines and Bézier curves, called a *subpath*. A subpath has an ordered set of *path elements* that represent single steps in the construction of the subpath. (For example, a line segment from one corner of a rectangle to another corner is a path element. Every subpath includes a *starting point*, which is the first point in the subpath. The path also maintains a *current point*, which is the last point in the last subpath.

To append a new subpath onto a mutable path, your application typically calls [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint) to set the subpath’s starting point and initial current point, followed by a series of “add” calls (such as [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint)) to add line segments and curves to the subpath. As segments or curves are added to the subpath, the subpath’s current point is updated to point to the end of the last segment or curve to be added. The lines and curves of a subpath are always connected, but they are not required to form a closed set of lines. Your application explicitly closes a subpath by calling [closeSubpath()](cgmutablepath/closesubpath%28%29.md). Closing the subpath adds a line segment that terminates at the subpath’s starting point, and also changes how those lines are rendered—for more information see [Paths](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_paths/dq_paths.html#//apple_ref/doc/uid/TP30001066-CH211) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating Graphics Paths

- [init()](cgmutablepath/init%28%29.md): Creates a mutable graphics path.

### Copying a Graphics Path

- [mutableCopy()](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [mutableCopy(using:)](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

### Constructing a Graphics Path

- [move(to:transform:)](cgmutablepath/move%28to_transform_%29.md): Begins a new subpath at the specified point.
- [addLine(to:transform:)](cgmutablepath/addline%28to_transform_%29.md): Appends a straight line segment from the current point to the specified point.
- [addLines(between:transform:)](cgmutablepath/addlines%28between_transform_%29.md): Adds a sequence of connected straight-line segments to the path.
- [addRect(\_:transform:)](cgmutablepath/addrect%28__transform_%29.md): Adds a rectangular subpath to the path.
- [addRects(\_:transform:)](cgmutablepath/addrects%28__transform_%29.md): Adds a set of rectangular subpaths to the path.
- [addEllipse(in:transform:)](cgmutablepath/addellipse%28in_transform_%29.md): Adds an ellipse that fits inside the specified rectangle.
- [addRoundedRect(in:cornerWidth:cornerHeight:transform:)](cgmutablepath/addroundedrect%28in_cornerwidth_cornerheight_transform_%29.md): Adds a subpath to the path, in the shape of a rectangle with rounded corners.
- [addArc(center:radius:startAngle:endAngle:clockwise:transform:)](cgmutablepath/addarc%28center_radius_startangle_endangle_clockwise_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and angles.
- [addArc(tangent1End:tangent2End:radius:transform:)](cgmutablepath/addarc%28tangent1end_tangent2end_radius_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and two tangent lines.
- [addRelativeArc(center:radius:startAngle:delta:transform:)](cgmutablepath/addrelativearc%28center_radius_startangle_delta_transform_%29.md): Adds an arc of a circle to the path, specified with a radius and a difference in angle.
- [addCurve(to:control1:control2:transform:)](cgmutablepath/addcurve%28to_control1_control2_transform_%29.md): Adds a cubic Bézier curve to the path, with the specified end point and control points.
- [addQuadCurve(to:control:transform:)](cgmutablepath/addquadcurve%28to_control_transform_%29.md): Adds a quadratic Bézier curve to the path, with the specified end point and control point.
- [addPath(\_:transform:)](cgmutablepath/addpath%28__transform_%29.md): Appends another path object to the path.
- [closeSubpath()](cgmutablepath/closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.

## Relationships

### Inherits From

- [CGPath](cgpath.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### 2D Drawing

- [CGContext](cgcontext.md): A Quartz 2D drawing environment.
- [CGImage](cgimage.md): A bitmap image or image mask.
- [CGPath](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGLayer](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.

# CGMutablePathRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.

## Declaration

```objectivec
typedef struct CGPath * CGMutablePathRef;
```

<a id="overview"></a>

## Overview

Neither `CGPath` nor [CGMutablePathRef](cgmutablepath.md) define functions to draw a path. To draw a Core Graphics path to a graphics context, you add the path to the graphics context by calling [CGContextAddPath](cgcontext/addpath%28__%29.md) and then call one of the context’s drawing functions—see [CGContextRef](cgcontext.md).

Each figure in the graphics path is constructed with a connected set of lines and Bézier curves, called a *subpath*. A subpath has an ordered set of *path elements* that represent single steps in the construction of the subpath. (For example, a line segment from one corner of a rectangle to another corner is a path element. Every subpath includes a *starting point*, which is the first point in the subpath. The path also maintains a *current point*, which is the last point in the last subpath.

To append a new subpath onto a mutable path, your application typically calls [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint) to set the subpath’s starting point and initial current point, followed by a series of “add” calls (such as [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint)) to add line segments and curves to the subpath. As segments or curves are added to the subpath, the subpath’s current point is updated to point to the end of the last segment or curve to be added. The lines and curves of a subpath are always connected, but they are not required to form a closed set of lines. Your application explicitly closes a subpath by calling [CGPathCloseSubpath](cgmutablepath/closesubpath%28%29.md). Closing the subpath adds a line segment that terminates at the subpath’s starting point, and also changes how those lines are rendered—for more information see [Paths](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_paths/dq_paths.html#//apple_ref/doc/uid/TP30001066-CH211) in [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).

## Topics

### Creating Graphics Paths

- [CGPathCreateMutable](cgmutablepath/init%28%29.md): Creates a mutable graphics path.

### Retaining and Releasing a Path

- [CGPathRelease](cgpathrelease.md): Decrements the retain count of a graphics path.
- [CGPathRetain](cgpathretain.md): Increments the retain count of a graphics path.

### Copying a Graphics Path

- [CGPathCreateMutableCopy](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

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
- [CGPathCloseSubpath](cgmutablepath/closesubpath%28%29.md): Closes and completes a subpath in a mutable graphics path.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)
