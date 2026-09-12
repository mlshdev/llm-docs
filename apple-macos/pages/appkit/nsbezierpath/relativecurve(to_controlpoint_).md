> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/relativecurve(to:controlpoint:)](https://developer.apple.com/documentation/appkit/nsbezierpath/relativecurve(to:controlpoint:))

# relativeCurve(to:controlPoint:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func relativeCurve(to endPoint: NSPoint, controlPoint: NSPoint)
```

## See Also

### Constructing a Path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.
- [curve(to:controlPoint1:controlPoint2:)](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curve(to:controlPoint:)](curve%28to_controlpoint_%29.md)
- [close()](close%28%29.md): Closes the most recently added subpath.
- [relativeMove(to:)](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLine(to:)](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurve(to:controlPoint1:controlPoint2:)](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.

# relativeCurveToPoint:controlPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) relativeCurveToPoint:(NSPoint) endPoint controlPoint:(NSPoint) controlPoint;
```

## See Also

### Constructing a Path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.
- [curveToPoint:controlPoint1:controlPoint2:](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curveToPoint:controlPoint:](curve%28to_controlpoint_%29.md)
- [closePath](close%28%29.md): Closes the most recently added subpath.
- [relativeMoveToPoint:](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLineToPoint:](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurveToPoint:controlPoint1:controlPoint2:](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
