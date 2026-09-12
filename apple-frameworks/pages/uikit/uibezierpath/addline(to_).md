> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/addline(to:)](https://developer.apple.com/documentation/uikit/uibezierpath/addline(to:))

# addLine(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends a straight line to the path.

## Declaration

```swift
func addLine(to point: CGPoint)
```

## Parameters

- `point`: The destination point of the line segment, specified in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method creates a straight line segment starting at the current point and ending at the point specified by the `point` parameter. After adding the line segment, this method updates the current point to the value in `point`.

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the previous creation of a line or curve segment) before you call this method. If the path is empty, this method does nothing.

## See Also

### Constructing a path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# addLineToPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends a straight line to the path.

## Declaration

```objectivec
- (void) addLineToPoint:(CGPoint) point;
```

## Parameters

- `point`: The destination point of the line segment, specified in the current coordinate system.

<a id="Discussion"></a>

## Discussion

This method creates a straight line segment starting at the current point and ending at the point specified by the `point` parameter. After adding the line segment, this method updates the current point to the value in `point`.

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the previous creation of a line or curve segment) before you call this method. If the path is empty, this method does nothing.

## See Also

### Constructing a path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [appendPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
