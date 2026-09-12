> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/append(_:)](https://developer.apple.com/documentation/uikit/uibezierpath/append(_:))

# append(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends the contents of the specified path object to the path.

## Declaration

```swift
func append(_ bezierPath: UIBezierPath)
```

## Parameters

- `bezierPath`: The path to add to the receiver.

<a id="Discussion"></a>

## Discussion

This method adds the commands used to create the path in `bezierPath` to the end of the receiver’s path. This method does not explicitly try to connect the subpaths in the two objects, although the operations in `bezierPath` might still cause that effect.

## See Also

### Constructing a path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line to the path.
- [addArc(withCenter:radius:startAngle:endAngle:clockwise:)](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# appendPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends the contents of the specified path object to the path.

## Declaration

```objectivec
- (void) appendPath:(UIBezierPath *) bezierPath;
```

## Parameters

- `bezierPath`: The path to add to the receiver.

<a id="Discussion"></a>

## Discussion

This method adds the commands used to create the path in `bezierPath` to the end of the receiver’s path. This method does not explicitly try to connect the subpaths in the two objects, although the operations in `bezierPath` might still cause that effect.

## See Also

### Constructing a path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLineToPoint:](addline%28to_%29.md): Appends a straight line to the path.
- [addArcWithCenter:radius:startAngle:endAngle:clockwise:](addarc%28withcenter_radius_startangle_endangle_clockwise_%29.md): Appends an arc to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
