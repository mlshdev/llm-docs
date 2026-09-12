> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/relativeline(to:)](https://developer.apple.com/documentation/appkit/nsbezierpath/relativeline(to:))

# relativeLine(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.

## Declaration

```swift
func relativeLine(to point: NSPoint)
```

## Parameters

- `point`: A point whose coordinates are interpreted as a relative offset from the current point.

<a id="Discussion"></a>

## Discussion

The destination point is relative to the current point. For example, if the current point is (1, 1) and `aPoint` contains the value (1, 2), a line segment is created between the points (1, 1) and (2, 3).

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Constructing a Path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.
- [curve(to:controlPoint1:controlPoint2:)](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curve(to:controlPoint:)](curve%28to_controlpoint_%29.md)
- [close()](close%28%29.md): Closes the most recently added subpath.
- [relativeMove(to:)](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeCurve(to:controlPoint1:controlPoint2:)](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurve(to:controlPoint:)](relativecurve%28to_controlpoint_%29.md)

# relativeLineToPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.

## Declaration

```objectivec
- (void) relativeLineToPoint:(NSPoint) point;
```

## Parameters

- `point`: A point whose coordinates are interpreted as a relative offset from the current point.

<a id="Discussion"></a>

## Discussion

The destination point is relative to the current point. For example, if the current point is (1, 1) and `aPoint` contains the value (1, 2), a line segment is created between the points (1, 1) and (2, 3).

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Constructing a Path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.
- [curveToPoint:controlPoint1:controlPoint2:](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [curveToPoint:controlPoint:](curve%28to_controlpoint_%29.md)
- [closePath](close%28%29.md): Closes the most recently added subpath.
- [relativeMoveToPoint:](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeCurveToPoint:controlPoint1:controlPoint2:](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurveToPoint:controlPoint:](relativecurve%28to_controlpoint_%29.md)
