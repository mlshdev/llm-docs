> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/addarc(withcenter:radius:startangle:endangle:clockwise:)](https://developer.apple.com/documentation/uikit/uibezierpath/addarc(withcenter:radius:startangle:endangle:clockwise:))

# addArc(withCenter:radius:startAngle:endAngle:clockwise:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends an arc to the path.

## Declaration

```swift
func addArc(withCenter center: CGPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
```

## Parameters

- `center`: Specifies the center point of the circle (in the current coordinate system) used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc (measured in radians).
- `endAngle`: Specifies the end angle of the arc (measured in radians).
- `clockwise`: The direction in which to draw the arc.

<a id="Discussion"></a>

## Discussion

This method adds the specified arc beginning at the current point. The created arc lies on the perimeter of the specified circle. When drawn in the default coordinate system, the start and end angles are based on the unit circle shown in the image in [init(arcCenter:radius:startAngle:endAngle:clockwise:)](init%28arccenter_radius_startangle_endangle_clockwise_%29.md). For example, specifying a start angle of `0` radians, an end angle of `π` radians, and setting the `clockwise` parameter to [true](https://developer.apple.com/documentation/swift/true) draws the bottom half of the circle. However, specifying the same start and end angles but setting the `clockwise` parameter set to [false](https://developer.apple.com/documentation/swift/false) draws the top half of the circle.

After calling this method, the current point is set to the point on the arc at the end angle of the circle.

## See Also

### Constructing a path

- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLine(to:)](addline%28to_%29.md): Appends a straight line to the path.
- [addCurve(to:controlPoint1:controlPoint2:)](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurve(to:controlPoint:)](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [close()](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [append(\_:)](append%28__%29.md): Appends the contents of the specified path object to the path.
- [cgPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.

# addArcWithCenter:radius:startAngle:endAngle:clockwise: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Appends an arc to the path.

## Declaration

```objectivec
- (void) addArcWithCenter:(CGPoint) center radius:(CGFloat) radius startAngle:(CGFloat) startAngle endAngle:(CGFloat) endAngle clockwise:(BOOL) clockwise;
```

## Parameters

- `center`: Specifies the center point of the circle (in the current coordinate system) used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc (measured in radians).
- `endAngle`: Specifies the end angle of the arc (measured in radians).
- `clockwise`: The direction in which to draw the arc.

<a id="Discussion"></a>

## Discussion

This method adds the specified arc beginning at the current point. The created arc lies on the perimeter of the specified circle. When drawn in the default coordinate system, the start and end angles are based on the unit circle shown in the image in [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](init%28arccenter_radius_startangle_endangle_clockwise_%29.md). For example, specifying a start angle of `0` radians, an end angle of `π` radians, and setting the `clockwise` parameter to [true](https://developer.apple.com/documentation/swift/true) draws the bottom half of the circle. However, specifying the same start and end angles but setting the `clockwise` parameter set to [false](https://developer.apple.com/documentation/swift/false) draws the top half of the circle.

After calling this method, the current point is set to the point on the arc at the end angle of the circle.

## See Also

### Constructing a path

- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [addLineToPoint:](addline%28to_%29.md): Appends a straight line to the path.
- [addCurveToPoint:controlPoint1:controlPoint2:](addcurve%28to_controlpoint1_controlpoint2_%29.md): Appends a cubic Bézier curve to the path.
- [addQuadCurveToPoint:controlPoint:](addquadcurve%28to_controlpoint_%29.md): Appends a quadratic Bézier curve to the path.
- [closePath](close%28%29.md): Closes the most recent subpath.
- [removeAllPoints](removeallpoints%28%29.md): Removes all points from the path, effectively deleting all subpaths.
- [appendPath:](append%28__%29.md): Appends the contents of the specified path object to the path.
- [CGPath](cgpath.md): The Core Graphics representation of the path.
- [currentPoint](currentpoint.md): The current point in the graphics path.
