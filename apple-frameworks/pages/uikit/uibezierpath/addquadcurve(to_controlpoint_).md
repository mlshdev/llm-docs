> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/addquadcurve(to:controlpoint:)](https://developer.apple.com/documentation/uikit/uibezierpath/addquadcurve(to:controlpoint:))

# addQuadCurve(to:controlPoint:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends a quadratic Bézier curve to the path.

## Declaration

```swift
func addQuadCurve(to endPoint: CGPoint, controlPoint: CGPoint)
```

## Parameters

- `endPoint`: The end point of the curve.
- `controlPoint`: The control point of the curve.

<a id="Discussion"></a>

## Discussion

This method appends a quadratic Bézier curve from the current point to the end point specified by the `endPoint` parameter. The relationships between the current point, control point, and end point are what defines the actual curve. The following image shows some examples of quadratic curves and the approximate curve shape based on some sample points. The exact curvature of the segment involves a complex mathematical relationship between the points and is well documented online.

![](https://developer.apple.com/images/com.apple.uikit/media-1965858.jpg)

You must set the path’s current point (using the [move(to:)](move%28to_%29.md) method or through the previous creation of a line or curve segment) before you call this method. If the path is empty, this method does nothing. After adding the curve segment, this method updates the current point to the value in `point`.

## See Also

### Constructing a path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line to the path.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# addQuadCurveToPoint:controlPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends a quadratic Bézier curve to the path.

## Declaration

```objectivec
- (void) addQuadCurveToPoint:(CGPoint) endPoint controlPoint:(CGPoint) controlPoint;
```

## Parameters

- `endPoint`: The end point of the curve.
- `controlPoint`: The control point of the curve.

<a id="Discussion"></a>

## Discussion

This method appends a quadratic Bézier curve from the current point to the end point specified by the `endPoint` parameter. The relationships between the current point, control point, and end point are what defines the actual curve. The following image shows some examples of quadratic curves and the approximate curve shape based on some sample points. The exact curvature of the segment involves a complex mathematical relationship between the points and is well documented online.

![](https://developer.apple.com/images/com.apple.uikit/media-1965858.jpg)

You must set the path’s current point (using the [moveToPoint:](move%28to_%29.md) method or through the previous creation of a line or curve segment) before you call this method. If the path is empty, this method does nothing. After adding the curve segment, this method updates the current point to the value in `point`.

## See Also

### Constructing a path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLineToPoint:](addline%28to_%29.md): Appends a straight line to the path.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [appendPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
