> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/removeallpoints()](https://developer.apple.com/documentation/uikit/uibezierpath/removeallpoints())

# removeAllPoints() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes all points from the path, effectively deleting all subpaths.

## Declaration

```swift
func removeAllPoints()
```

## See Also

### Constructing a path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line to the path.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# removeAllPoints (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes all points from the path, effectively deleting all subpaths.

## Declaration

```objectivec
- (void) removeAllPoints;
```

## See Also

### Constructing a path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLineToPoint:](addline%28to_%29.md): Appends a straight line to the path.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [appendPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
