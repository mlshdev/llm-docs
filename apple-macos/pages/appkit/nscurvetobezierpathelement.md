> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscurvetobezierpathelement](https://developer.apple.com/documentation/appkit/nscurvetobezierpathelement)

# NSCurveToBezierPathElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.

> Use [NSBezierPathElementCurveTo](nsbezierpath/elementtype/curveto.md) instead.

## Declaration

```objectivec
static const NSBezierPathElement NSCurveToBezierPathElement;
```

<a id="Discussion"></a>

## Discussion

The points are stored in the following order: controlPoint1, controlPoint2, endPoint. Ovals, arcs, and Bezier curves all use curve elements to specify their geometry.

Contains 3 points.

## See Also

### Deprecated Constants

- [NSMoveToBezierPathElement](nsmovetobezierpathelement.md): Deprecated. Moves the path object’s current drawing point to the specified point.
- [NSLineToBezierPathElement](nslinetobezierpathelement.md): Deprecated. Creates a straight line from the current drawing point to the specified point.
- [NSClosePathBezierPathElement](nsclosepathbezierpathelement.md): Deprecated. Marks the end of the current subpath at the specified point.
