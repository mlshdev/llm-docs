> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/curve(to:controlpoint1:controlpoint2:)](https://developer.apple.com/documentation/appkit/nsbezierpath/curve(to:controlpoint1:controlpoint2:))

# curve(to:controlPoint1:controlPoint2:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a Bezier cubic curve to the path.

## Declaration

```swift
func curve(to endPoint: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint)
```

## Parameters

- `endPoint`: The destination point of the curve segment, specified in the current coordinate system
- `controlPoint1`: The point that determines the shape of the curve near the current point.
- `controlPoint2`: The point that determines the shape of the curve near the destination point.

<a id="Discussion"></a>

## Discussion

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Constructing a Path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.
- [curve(to:controlPoint:)](curve%28to_controlpoint_%29.md)
- [close()](close%28%29.md): Closes the most recently added subpath.
- [relativeMove(to:)](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLine(to:)](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurve(to:controlPoint1:controlPoint2:)](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurve(to:controlPoint:)](relativecurve%28to_controlpoint_%29.md)

# curveToPoint:controlPoint1:controlPoint2: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a Bezier cubic curve to the path.

## Declaration

```objectivec
- (void) curveToPoint:(NSPoint) endPoint controlPoint1:(NSPoint) controlPoint1 controlPoint2:(NSPoint) controlPoint2;
```

## Parameters

- `endPoint`: The destination point of the curve segment, specified in the current coordinate system
- `controlPoint1`: The point that determines the shape of the curve near the current point.
- `controlPoint2`: The point that determines the shape of the curve near the destination point.

<a id="Discussion"></a>

## Discussion

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the creation of a preceding line or curve segment) before you invoke this method. If the path is empty, this method raises an [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception) exception.

## See Also

### Constructing a Path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.
- [curveToPoint:controlPoint:](curve%28to_controlpoint_%29.md)
- [closePath](close%28%29.md): Closes the most recently added subpath.
- [relativeMoveToPoint:](relativemove%28to_%29.md): Moves the path’s current point to a new point whose location is the specified distance from the current point.
- [relativeLineToPoint:](relativeline%28to_%29.md): Appends a straight line segment to the path starting at the current point and moving towards the specified point, relative to the current location.
- [relativeCurveToPoint:controlPoint1:controlPoint2:](relativecurve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path from the current point to a new location, which is specified as a relative distance from the current point.
- [relativeCurveToPoint:controlPoint:](relativecurve%28to_controlpoint_%29.md)
