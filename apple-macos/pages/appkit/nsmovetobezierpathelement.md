> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmovetobezierpathelement](https://developer.apple.com/documentation/appkit/nsmovetobezierpathelement)

# NSMoveToBezierPathElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Moves the path object’s current drawing point to the specified point.

> Use [NSBezierPathElementMoveTo](nsbezierpath/elementtype/moveto.md) instead.

## Declaration

```objectivec
static const NSBezierPathElement NSMoveToBezierPathElement;
```

<a id="Discussion"></a>

## Discussion

This path element does not result in any drawing. Using this command in the middle of a path results in a disconnected line segment.

Contains 1 point.

## See Also

### Deprecated Constants

- [NSLineToBezierPathElement](nslinetobezierpathelement.md): Deprecated. Creates a straight line from the current drawing point to the specified point.
- [NSCurveToBezierPathElement](nscurvetobezierpathelement.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
- [NSClosePathBezierPathElement](nsclosepathbezierpathelement.md): Deprecated. Marks the end of the current subpath at the specified point.
