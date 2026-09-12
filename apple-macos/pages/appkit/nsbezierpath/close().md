> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/close()](https://developer.apple.com/documentation/appkit/nsbezierpath/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes the most recently added subpath.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

This method closes the current subpath by creating a line segment between the first and last points in the subpath. This method subsequently updates the current point to the end of the newly created line segment, which is also the first point in the now closed subpath.

## See Also

### Related Documentation

- [fill()](fill%28%29.md): Paints the region enclosed by the path.

### Constructing a Path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.
- [curve(to:controlPoint1:controlPoint2:)](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curve(to:controlPoint:)](curve%28to_controlpoint_%29.md)
- [relativeMove(to:)](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLine(to:)](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurve(to:controlPoint1:controlPoint2:)](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurve(to:controlPoint:)](relativecurve%28to_controlpoint_%29.md)

# closePath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes the most recently added subpath.

## Declaration

```objectivec
- (void) closePath;
```

<a id="Discussion"></a>

## Discussion

This method closes the current subpath by creating a line segment between the first and last points in the subpath. This method subsequently updates the current point to the end of the newly created line segment, which is also the first point in the now closed subpath.

## See Also

### Related Documentation

- [fill](fill%28%29.md): Paints the region enclosed by the path.

### Constructing a Path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.
- [curveToPoint:controlPoint1:controlPoint2:](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curveToPoint:controlPoint:](curve%28to_controlpoint_%29.md)
- [relativeMoveToPoint:](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLineToPoint:](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurveToPoint:controlPoint1:controlPoint2:](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurveToPoint:controlPoint:](relativecurve%28to_controlpoint_%29.md)
