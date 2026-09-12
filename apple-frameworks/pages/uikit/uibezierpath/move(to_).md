> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/move(to:)](https://developer.apple.com/documentation/uikit/uibezierpath/move(to:))

# move(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Moves the path’s current point to the specified location.

## Declaration

```swift
func move(to point: CGPoint)
```

## Parameters

- `point`: A point in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method implicitly ends the current subpath (if any) and sets the current point to the value in the `point` parameter. When ending the previous subpath, this method does not actually close the subpath. Therefore, the first and last points of the previous subpath are not connected to each other.

For many path operations, you must call this method before issuing any commands that cause a line or curve segment to be drawn.

## See Also

### Constructing a path

- [addLine(to:)](addline%28to_%29.md): Appends a straight line to the path.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# moveToPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Moves the path’s current point to the specified location.

## Declaration

```objectivec
- (void) moveToPoint:(CGPoint) point;
```

## Parameters

- `point`: A point in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method implicitly ends the current subpath (if any) and sets the current point to the value in the `point` parameter. When ending the previous subpath, this method does not actually close the subpath. Therefore, the first and last points of the previous subpath are not connected to each other.

For many path operations, you must call this method before issuing any commands that cause a line or curve segment to be drawn.

## See Also

### Constructing a path

- [addLineToPoint:](addline%28to_%29.md): Appends a straight line to the path.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [appendPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
