> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath](https://developer.apple.com/documentation/appkit/nsbezierpath)

# NSBezierPath (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can create paths using PostScript-style commands.

## Declaration

```swift
class NSBezierPath
```

<a id="overview"></a>

## Overview

Paths consist of straight and curved line segments joined together. Paths can form recognizable shapes such as rectangles, ovals, arcs, and glyphs; they can also form complex polygons using either straight or curved line segments. A single path can be closed by connecting its two endpoints, or it can be left open.

An [NSBezierPath](nsbezierpath.md) object can contain multiple disconnected paths, whether they are closed or open. Each of these paths is referred to as a subpath. The subpaths of a Bézier path object must be manipulated as a group. The only way to manipulate subpaths individually is to create separate [NSBezierPath](nsbezierpath.md) objects for each.

For a given [NSBezierPath](nsbezierpath.md) object, you can stroke the path’s outline or fill the region occupied by the path. You can also use the path as a clipping region for views or other regions. Using methods of [NSBezierPath](nsbezierpath.md), you can also perform hit detection on the filled or stroked path. Hit detection is needed to implement interactive graphics, as in rubber banding and dragging operations.

The current graphics context is automatically saved and restored for all drawing operations involving Bézier path objects, so your application does not need to worry about the graphics settings changing across invocations.

## Topics

### Creating a Bézier Path

- [init(ovalIn:)](nsbezierpath/init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(rect:)](nsbezierpath/init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(roundedRect:xRadius:yRadius:)](nsbezierpath/init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [init(cgPath:)](nsbezierpath/init%28cgpath_%29-96cxk.md)
- [flattened](nsbezierpath/flattened.md): A flattened version of the path object.
- [reversed](nsbezierpath/reversed.md): A path containing the reversed contents of the current path object.

### Constructing a Path

- [move(to:)](nsbezierpath/move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](nsbezierpath/line%28to_%29.md): Appends a straight line to the path.
- [curve(to:controlPoint1:controlPoint2:)](nsbezierpath/curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curve(to:controlPoint:)](nsbezierpath/curve%28to_controlpoint_%29.md)
- [close()](nsbezierpath/close%28%29.md): Closes the most recently added subpath.
- [relativeMove(to:)](nsbezierpath/relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLine(to:)](nsbezierpath/relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurve(to:controlPoint1:controlPoint2:)](nsbezierpath/relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurve(to:controlPoint:)](nsbezierpath/relativecurve%28to_controlpoint_%29.md)

### Appending Common Shapes to a Path

- [append(\_:)](nsbezierpath/append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendPoints(\_:count:)](nsbezierpath/appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendOval(in:)](nsbezierpath/appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendArc(from:to:radius:)](nsbezierpath/appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:)](nsbezierpath/appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendArc(withCenter:radius:startAngle:endAngle:clockwise:)](nsbezierpath/appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendRect(\_:)](nsbezierpath/appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendRoundedRect(\_:xRadius:yRadius:)](nsbezierpath/appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [append(withCGGlyph:in:)](nsbezierpath/append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [append(withCGGlyphs:count:in:)](nsbezierpath/append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendGlyph(\_:in:)](nsbezierpath/appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendGlyphs(\_:count:in:)](nsbezierpath/appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendPackedGlyphs(\_:)](nsbezierpath/appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

### Accessing a Path’s Attributes

- [windingRule](nsbezierpath/windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](nsbezierpath/linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](nsbezierpath/linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](nsbezierpath/linewidth.md): The width of stroked path lines.
- [miterLimit](nsbezierpath/miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](nsbezierpath/flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](nsbezierpath/getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](nsbezierpath/setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](nsbezierpath/defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineCapStyle](nsbezierpath/defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineJoinStyle](nsbezierpath/defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](nsbezierpath/defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](nsbezierpath/defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](nsbezierpath/defaultflatness.md): The default flatness value for all paths.

### Drawing a Path

- [stroke()](nsbezierpath/stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill()](nsbezierpath/fill%28%29.md): Paints the region enclosed by the path.
- [fill(\_:)](nsbezierpath/fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](nsbezierpath/stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLine(from:to:)](nsbezierpath/strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs(\_:at:)](nsbezierpath/drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

### Specifying a Clipping Path

- [addClip()](nsbezierpath/addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [setClip()](nsbezierpath/setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.
- [clip(\_:)](nsbezierpath/clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

### Performing Hit-Testing

- [contains(\_:)](nsbezierpath/contains%28__%29.md): Returns a Boolean value that indicates whether the path contains the specified point.

### Querying a Path

- [bounds](nsbezierpath/bounds.md): The bounding box of the path.
- [controlPointBounds](nsbezierpath/controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](nsbezierpath/currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [isEmpty](nsbezierpath/isempty.md): A Boolean value that indicates whether the path is empty.

### Applying Transformations

- [transform(using:)](nsbezierpath/transform%28using_%29.md): Transforms all points in the path using the specified transform.

### Accessing Elements of a Path

- [cgPath](nsbezierpath/cgpath.md)
- [elementCount](nsbezierpath/elementcount.md): The total number of path elements in the path.
- [element(at:)](nsbezierpath/element%28at_%29.md): Returns the type of path element at the specified index.
- [element(at:associatedPoints:)](nsbezierpath/element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints()](nsbezierpath/removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints(\_:at:)](nsbezierpath/setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

### Constants

- [NSBezierPath.ElementType](nsbezierpath/elementtype.md): Constants that specify basic path element commands.
- [NSBezierPath.LineJoinStyle](nsbezierpath/linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSBezierPath.LineCapStyle](nsbezierpath/linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSBezierPath.WindingRule](nsbezierpath/windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.

### Initializers

- [init(CGPath:)](nsbezierpath/init%28cgpath_%29-4nao7.md)
- [init(coder:)](nsbezierpath/init%28coder_%29.md)
- [init(ovalInRect:)](nsbezierpath/init%28ovalinrect_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Shapes and Paths

- [Convenience Functions](convenience-functions.md): Draw rectangles and other primitive shapes using these convenience functions.

# NSBezierPath (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can create paths using PostScript-style commands.

## Declaration

```objectivec
@interface NSBezierPath : NSObject
```

<a id="overview"></a>

## Overview

Paths consist of straight and curved line segments joined together. Paths can form recognizable shapes such as rectangles, ovals, arcs, and glyphs; they can also form complex polygons using either straight or curved line segments. A single path can be closed by connecting its two endpoints, or it can be left open.

An [NSBezierPath](nsbezierpath.md) object can contain multiple disconnected paths, whether they are closed or open. Each of these paths is referred to as a subpath. The subpaths of a Bézier path object must be manipulated as a group. The only way to manipulate subpaths individually is to create separate [NSBezierPath](nsbezierpath.md) objects for each.

For a given [NSBezierPath](nsbezierpath.md) object, you can stroke the path’s outline or fill the region occupied by the path. You can also use the path as a clipping region for views or other regions. Using methods of [NSBezierPath](nsbezierpath.md), you can also perform hit detection on the filled or stroked path. Hit detection is needed to implement interactive graphics, as in rubber banding and dragging operations.

The current graphics context is automatically saved and restored for all drawing operations involving Bézier path objects, so your application does not need to worry about the graphics settings changing across invocations.

## Topics

### Creating a Bézier Path

- [bezierPath](nsbezierpath/bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](nsbezierpath/init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](nsbezierpath/init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](nsbezierpath/init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](nsbezierpath/init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](nsbezierpath/flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](nsbezierpath/reversed.md): A path containing the reversed contents of the current path object.

### Constructing a Path

- [moveToPoint:](nsbezierpath/move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](nsbezierpath/line%28to_%29.md): Appends a straight line to the path.
- [curveToPoint:controlPoint1:controlPoint2:](nsbezierpath/curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curveToPoint:controlPoint:](nsbezierpath/curve%28to_controlpoint_%29.md)
- [closePath](nsbezierpath/close%28%29.md): Closes the most recently added subpath.
- [relativeMoveToPoint:](nsbezierpath/relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLineToPoint:](nsbezierpath/relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurveToPoint:controlPoint1:controlPoint2:](nsbezierpath/relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurveToPoint:controlPoint:](nsbezierpath/relativecurve%28to_controlpoint_%29.md)

### Appending Common Shapes to a Path

- [appendBezierPath:](nsbezierpath/append%28__%29.md): Appends the contents of the specified path object to the path.
- [appendBezierPathWithPoints:count:](nsbezierpath/appendpoints%28__count_%29.md): Appends a series of line segments to the path.
- [appendBezierPathWithOvalInRect:](nsbezierpath/appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.
- [appendBezierPathWithArcFromPoint:toPoint:radius:](nsbezierpath/appendarc%28from_to_radius_%29.md): Appends an arc to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:](nsbezierpath/appendarc%28withcenter_radius_startangle_endangle_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:](nsbezierpath/appendarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc of a circle to the path.
- [appendBezierPathWithRect:](nsbezierpath/appendrect%28__%29.md): Appends a rectangular path to the path.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](nsbezierpath/appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.
- [appendBezierPathWithCGGlyph:inFont:](nsbezierpath/append%28withcgglyph_in_%29.md): Appends an outline of the specified glyph to the path.
- [appendBezierPathWithCGGlyphs:count:inFont:](nsbezierpath/append%28withcgglyphs_count_in_%29.md): Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithGlyph:inFont:](nsbezierpath/appendglyph%28__in_%29.md): Deprecated. Appends an outline of the specified glyph to the path.
- [appendBezierPathWithGlyphs:count:inFont:](nsbezierpath/appendglyphs%28__count_in_%29.md): Deprecated. Appends the outlines of the specified glyphs to the path.
- [appendBezierPathWithPackedGlyphs:](nsbezierpath/appendpackedglyphs%28__%29.md): Deprecated. Appends an array of packed glyphs to the path.

### Accessing a Path’s Attributes

- [windingRule](nsbezierpath/windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](nsbezierpath/linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](nsbezierpath/linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](nsbezierpath/linewidth.md): The width of stroked path lines.
- [miterLimit](nsbezierpath/miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](nsbezierpath/flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](nsbezierpath/getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](nsbezierpath/setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](nsbezierpath/defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineCapStyle](nsbezierpath/defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineJoinStyle](nsbezierpath/defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](nsbezierpath/defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](nsbezierpath/defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](nsbezierpath/defaultflatness.md): The default flatness value for all paths.

### Drawing a Path

- [stroke](nsbezierpath/stroke%28%29.md): Draws a line along the path using the current stroke color and drawing attributes.
- [fill](nsbezierpath/fill%28%29.md): Paints the region enclosed by the path.
- [fillRect:](nsbezierpath/fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [strokeRect:](nsbezierpath/stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [strokeLineFromPoint:toPoint:](nsbezierpath/strokeline%28from_to_%29.md): Strokes a line between two points using the current stroke color and the default drawing attributes.
- [drawPackedGlyphs:atPoint:](nsbezierpath/drawpackedglyphs%28__at_%29.md): Draws a set of packed glyphs at the specified point in the current coordinate system.

### Specifying a Clipping Path

- [addClip](nsbezierpath/addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [setClip](nsbezierpath/setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.
- [clipRect:](nsbezierpath/clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

### Performing Hit-Testing

- [containsPoint:](nsbezierpath/contains%28__%29.md): Returns a Boolean value that indicates whether the path contains the specified point.

### Querying a Path

- [bounds](nsbezierpath/bounds.md): The bounding box of the path.
- [controlPointBounds](nsbezierpath/controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](nsbezierpath/currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [empty](nsbezierpath/isempty.md): A Boolean value that indicates whether the path is empty.

### Applying Transformations

- [transformUsingAffineTransform:](nsbezierpath/transform%28using_%29.md): Transforms all points in the path using the specified transform.

### Accessing Elements of a Path

- [CGPath](nsbezierpath/cgpath.md)
- [elementCount](nsbezierpath/elementcount.md): The total number of path elements in the path.
- [elementAtIndex:](nsbezierpath/element%28at_%29.md): Returns the type of path element at the specified index.
- [elementAtIndex:associatedPoints:](nsbezierpath/element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints](nsbezierpath/removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints:atIndex:](nsbezierpath/setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

### Caching a Path

- [cachesBezierPath](nsbezierpath/cachesbezierpath.md): Deprecated. Returns a Boolean value that indicates whether this object maintains a cached image of its path.
- [setCachesBezierPath:](nsbezierpath/setcachesbezierpath_.md): Deprecated. Sets whether the path should cache its path information.

### Constants

- [NSBezierPathElement](nsbezierpath/elementtype.md): Constants that specify basic path element commands.
- [NSLineJoinStyle](nsbezierpath/linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSLineCapStyle](nsbezierpath/linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSWindingRule](nsbezierpath/windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Shapes and Paths

- [Convenience Functions](convenience-functions.md): Draw rectangles and other primitive shapes using these convenience functions.
