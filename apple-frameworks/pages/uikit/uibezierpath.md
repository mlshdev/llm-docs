> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath](https://developer.apple.com/documentation/uikit/uibezierpath)

# UIBezierPath (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A path that consists of straight and curved line segments that you can render in your custom views.

## Declaration

```swift
class UIBezierPath
```

<a id="overview"></a>

## Overview

You use this class initially to specify just the geometry for your path. Paths can define simple shapes such as rectangles, ovals, and arcs or they can define complex polygons that incorporate a mixture of straight and curved line segments. After defining the shape, you can use additional methods of this class to render the path in the current drawing context.

A [UIBezierPath](uibezierpath.md) object combines the geometry of a path with attributes that describe the path during rendering. You set the geometry and attributes separately and can change them independent of one another. After you have the object configured the way you want it, you can tell it to draw itself in the current context. Because the creation, configuration, and rendering process are all distinct steps, Bézier path objects can be reused easily in your code. You can even use the same object to render the same shape multiple times, perhaps changing the rendering options between successive drawing calls.

You set the geometry of a path by manipulating the path’s current point. When you create a new empty path object, the current point is undefined and must be set explicitly. To move the current point without drawing a segment, you use the [move(to:)](uibezierpath/move%28to_%29.md) method. All other methods result in the addition of either a line or curve segments to the path. The methods for adding new segments always assume you are starting at the current point and ending at some new point that you specify. After adding the segment, the end point of the new segment automatically becomes the current point.

A single Bézier path object can contain any number of open or closed subpaths, where each subpath represents a connected series of path segments. Calling the [close()](uibezierpath/close%28%29.md) method closes a subpath by adding a straight line segment from the current point to the first point in the subpath. Calling the [move(to:)](uibezierpath/move%28to_%29.md) method ends the current subpath (without closing it) and sets the starting point of the next subpath. The subpaths of a Bézier path object share the same drawing attributes and must be manipulated as a group. To draw subpaths with different attributes, you must put each subpath in its own [UIBezierPath](uibezierpath.md) object.

After configuring the geometry and attributes of a Bézier path, you draw the path in the current graphics context using the [stroke()](uibezierpath/stroke%28%29.md) and [fill()](uibezierpath/fill%28%29.md) methods. The [stroke()](uibezierpath/stroke%28%29.md) method traces the outline of the path using the current stroke color and the attributes of the Bézier path object. Similarly, the [fill()](uibezierpath/fill%28%29.md) method fills in the area enclosed by the path using the current fill color. (You set the stroke and fill color using the [UIColor](uicolor.md) class.)

In addition to using a Bézier path object to draw shapes, you can also use it to define a new clipping region. The [addClip()](uibezierpath/addclip%28%29.md) method intersects the shape represented by the path object with the current clipping region of the graphics context. During subsequent drawing, only content that lies within the new intersection region is actually rendered to the graphics context.

## Topics

### Creating a Bézier path

- [init(rect:)](uibezierpath/init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](uibezierpath/init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:cornerRadius:)](uibezierpath/init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](uibezierpath/init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(arcCenter:radius:startAngle:endAngle:clockwise:)](uibezierpath/init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [init(cgPath:)](uibezierpath/init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [reversing()](uibezierpath/reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init()](uibezierpath/init%28%29.md): Creates and returns an empty path object.
- [init(coder:)](uibezierpath/init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

### Constructing a path

- [move(to:)](uibezierpath/move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLine(to:)](uibezierpath/addline%28to_%29.md): Appends a straight line to the path.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](uibezierpath/addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](uibezierpath/addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](uibezierpath/addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](uibezierpath/close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](uibezierpath/removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [append(\_:)](uibezierpath/append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](uibezierpath/cgpath.md): The Core Graphics representation of the path.
- [currentPoint](uibezierpath/currentpoint.md): The current point in the graphics path.

### Accessing drawing properties

- [lineWidth](uibezierpath/linewidth.md): The line width of the path.
- [lineCapStyle](uibezierpath/linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](uibezierpath/linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](uibezierpath/miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](uibezierpath/flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](uibezierpath/usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash(\_:count:phase:)](uibezierpath/setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash(\_:count:phase:)](uibezierpath/getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

### Drawing paths

- [fill()](uibezierpath/fill%28%29.md): Uses the current drawing properties to paint the region that the path encloses.
- [fill(with:alpha:)](uibezierpath/fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [stroke()](uibezierpath/stroke%28%29.md): Draws a line along the path using the current drawing properties.
- [stroke(with:alpha:)](uibezierpath/stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

### Specifying clipping paths

- [addClip()](uibezierpath/addclip%28%29.md): Uses the clipping path of the current graphics context to intersect the region that the path encloses, and makes the resulting shape the current clipping path.

### Performing hit-testing

- [contains(\_:)](uibezierpath/contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [isEmpty](uibezierpath/isempty.md): A Boolean value that indicates whether the path has any valid elements.
- [bounds](uibezierpath/bounds.md): The bounding rectangle of the path.

### Applying transformations

- [apply(\_:)](uibezierpath/apply%28__%29.md): Transforms all points in the path using the specified affine transform matrix.

### Constants

- [UIRectCorner](uirectcorner.md): The corners of a rectangle.

### Initializers

- [init(CGPath:)](uibezierpath/init%28cgpath_%29-7bop1.md)
- [init(ovalInRect:)](uibezierpath/init%28ovalinrect_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Paths

- [UIRectFill(\_:)](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode(\_:\_:)](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame(\_:)](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode(\_:\_:)](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

# UIBezierPath (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A path that consists of straight and curved line segments that you can render in your custom views.

## Declaration

```objectivec
@interface UIBezierPath : NSObject
```

<a id="overview"></a>

## Overview

You use this class initially to specify just the geometry for your path. Paths can define simple shapes such as rectangles, ovals, and arcs or they can define complex polygons that incorporate a mixture of straight and curved line segments. After defining the shape, you can use additional methods of this class to render the path in the current drawing context.

A [UIBezierPath](uibezierpath.md) object combines the geometry of a path with attributes that describe the path during rendering. You set the geometry and attributes separately and can change them independent of one another. After you have the object configured the way you want it, you can tell it to draw itself in the current context. Because the creation, configuration, and rendering process are all distinct steps, Bézier path objects can be reused easily in your code. You can even use the same object to render the same shape multiple times, perhaps changing the rendering options between successive drawing calls.

You set the geometry of a path by manipulating the path’s current point. When you create a new empty path object, the current point is undefined and must be set explicitly. To move the current point without drawing a segment, you use the [moveToPoint:](uibezierpath/move%28to_%29.md) method. All other methods result in the addition of either a line or curve segments to the path. The methods for adding new segments always assume you are starting at the current point and ending at some new point that you specify. After adding the segment, the end point of the new segment automatically becomes the current point.

A single Bézier path object can contain any number of open or closed subpaths, where each subpath represents a connected series of path segments. Calling the [closePath](uibezierpath/close%28%29.md) method closes a subpath by adding a straight line segment from the current point to the first point in the subpath. Calling the [moveToPoint:](uibezierpath/move%28to_%29.md) method ends the current subpath (without closing it) and sets the starting point of the next subpath. The subpaths of a Bézier path object share the same drawing attributes and must be manipulated as a group. To draw subpaths with different attributes, you must put each subpath in its own [UIBezierPath](uibezierpath.md) object.

After configuring the geometry and attributes of a Bézier path, you draw the path in the current graphics context using the [stroke](uibezierpath/stroke%28%29.md) and [fill](uibezierpath/fill%28%29.md) methods. The [stroke](uibezierpath/stroke%28%29.md) method traces the outline of the path using the current stroke color and the attributes of the Bézier path object. Similarly, the [fill](uibezierpath/fill%28%29.md) method fills in the area enclosed by the path using the current fill color. (You set the stroke and fill color using the [UIColor](uicolor.md) class.)

In addition to using a Bézier path object to draw shapes, you can also use it to define a new clipping region. The [addClip](uibezierpath/addclip%28%29.md) method intersects the shape represented by the path object with the current clipping region of the graphics context. During subsequent drawing, only content that lies within the new intersection region is actually rendered to the graphics context.

## Topics

### Creating a Bézier path

- [bezierPath](uibezierpath/bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](uibezierpath/init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](uibezierpath/init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:cornerRadius:](uibezierpath/init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](uibezierpath/init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](uibezierpath/init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [bezierPathWithCGPath:](uibezierpath/init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [bezierPathByReversingPath](uibezierpath/reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init](uibezierpath/init%28%29.md): Creates and returns an empty path object.
- [initWithCoder:](uibezierpath/init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

### Constructing a path

- [moveToPoint:](uibezierpath/move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLineToPoint:](uibezierpath/addline%28to_%29.md): Appends a straight line to the path.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](uibezierpath/addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](uibezierpath/addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](uibezierpath/addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](uibezierpath/close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](uibezierpath/removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [appendPath:](uibezierpath/append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](uibezierpath/cgpath.md): The Core Graphics representation of the path.
- [currentPoint](uibezierpath/currentpoint.md): The current point in the graphics path.

### Accessing drawing properties

- [lineWidth](uibezierpath/linewidth.md): The line width of the path.
- [lineCapStyle](uibezierpath/linecapstyle.md): The shape of the endpoints of a stroked path.
- [lineJoinStyle](uibezierpath/linejoinstyle.md): The shape of the joints between connected segments of a stroked path.
- [miterLimit](uibezierpath/miterlimit.md): The limiting value that helps avoid spikes at junctions between connected line segments.
- [flatness](uibezierpath/flatness.md): The factor that determines the rendering accuracy for curved path segments.
- [usesEvenOddFillRule](uibezierpath/usesevenoddfillrule.md): A Boolean value that indicates whether the even-odd winding rule is in use for drawing paths.
- [setLineDash:count:phase:](uibezierpath/setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
- [getLineDash:count:phase:](uibezierpath/getlinedash%28__count_phase_%29.md): Retrieves the line-stroking pattern for the path.

### Drawing paths

- [fill](uibezierpath/fill%28%29.md): Uses the current drawing properties to paint the region that the path encloses.
- [fillWithBlendMode:alpha:](uibezierpath/fill%28with_alpha_%29.md): Uses the specified blend mode and transparency values to paint the region that the path encloses.
- [stroke](uibezierpath/stroke%28%29.md): Draws a line along the path using the current drawing properties.
- [strokeWithBlendMode:alpha:](uibezierpath/stroke%28with_alpha_%29.md): Draws a line along the path using the specified blend mode and transparency values.

### Specifying clipping paths

- [addClip](uibezierpath/addclip%28%29.md): Uses the clipping path of the current graphics context to intersect the region that the path encloses, and makes the resulting shape the current clipping path.

### Performing hit-testing

- [containsPoint:](uibezierpath/contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [empty](uibezierpath/isempty.md): A Boolean value that indicates whether the path has any valid elements.
- [bounds](uibezierpath/bounds.md): The bounding rectangle of the path.

### Applying transformations

- [applyTransform:](uibezierpath/apply%28__%29.md): Transforms all points in the path using the specified affine transform matrix.

### Constants

- [UIRectCorner](uirectcorner.md): The corners of a rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Paths

- [UIRectFill](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.
