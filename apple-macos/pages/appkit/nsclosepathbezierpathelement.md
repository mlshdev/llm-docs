> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclosepathbezierpathelement](https://developer.apple.com/documentation/appkit/nsclosepathbezierpathelement)

# NSClosePathBezierPathElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Marks the end of the current subpath at the specified point.

> Use [NSBezierPathElementClosePath](nsbezierpath/elementtype/closepath.md) instead.

## Declaration

```objectivec
static const NSBezierPathElement NSClosePathBezierPathElement;
```

<a id="Discussion"></a>

## Discussion

Note that the point specified for the Close Path element is essentially the same as the current point.

## See Also

### Deprecated Constants

- [NSMoveToBezierPathElement](nsmovetobezierpathelement.md): Deprecated. Moves the path object’s current drawing point to the specified point.
- [NSLineToBezierPathElement](nslinetobezierpathelement.md): Deprecated. Creates a straight line from the current drawing point to the specified point.
- [NSCurveToBezierPathElement](nscurvetobezierpathelement.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
