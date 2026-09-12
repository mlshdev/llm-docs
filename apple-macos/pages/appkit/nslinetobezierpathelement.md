> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslinetobezierpathelement](https://developer.apple.com/documentation/appkit/nslinetobezierpathelement)

# NSLineToBezierPathElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Creates a straight line from the current drawing point to the specified point.

> Use [NSBezierPathElementLineTo](nsbezierpath/elementtype/lineto.md) instead.

## Declaration

```objectivec
static const NSBezierPathElement NSLineToBezierPathElement;
```

<a id="Discussion"></a>

## Discussion

Lines and rectangles are specified using this path element.

Contains 1 point.

## See Also

### Deprecated Constants

- [NSMoveToBezierPathElement](nsmovetobezierpathelement.md): Deprecated. Moves the path object’s current drawing point to the specified point.
- [NSCurveToBezierPathElement](nscurvetobezierpathelement.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
- [NSClosePathBezierPathElement](nsclosepathbezierpathelement.md): Deprecated. Marks the end of the current subpath at the specified point.
