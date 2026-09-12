> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/init(controlpoint1:controlpoint2:)](https://developer.apple.com/documentation/uikit/uicubictimingparameters/init(controlpoint1:controlpoint2:))

# init(controlPoint1:controlPoint2:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the specified control points for a cubic Bézier curve.

## Declaration

```swift
init(controlPoint1 point1: CGPoint, controlPoint2 point2: CGPoint)
```

## Parameters

- `point1`: The first control point for the cubic Bézier timing curve. The x and y values of this point must be in the range `0.0` to `1.0`.
- `point2`: The second control point for the cubic Bézier timing curve. The x and y values of this point must be in the range `0.0` to `1.0`.

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the timing curve with a custom cubic Bézier curve. The curve consists of a line whose starting point is (0, 0), whose end point is (1, 1), and whose shape is defined by `point1` and `point2`.

## See Also

### Initializing a cubic timing parameters object

- [init()](init%28%29.md): Initializes the object with the system’s default timing curve.
- [init(animationCurve:)](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [init(coder:)](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

# initWithControlPoint1:controlPoint2: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the specified control points for a cubic Bézier curve.

## Declaration

```objectivec
- (instancetype) initWithControlPoint1:(CGPoint) point1 controlPoint2:(CGPoint) point2;
```

## Parameters

- `point1`: The first control point for the cubic Bézier timing curve. The x and y values of this point must be in the range `0.0` to `1.0`.
- `point2`: The second control point for the cubic Bézier timing curve. The x and y values of this point must be in the range `0.0` to `1.0`.

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the timing curve with a custom cubic Bézier curve. The curve consists of a line whose starting point is (0, 0), whose end point is (1, 1), and whose shape is defined by `point1` and `point2`.

## See Also

### Initializing a cubic timing parameters object

- [init](init%28%29.md): Initializes the object with the system’s default timing curve.
- [initWithAnimationCurve:](init%28animationcurve_%29.md): Initializes the object with the specified UIKit timing curve.
- [initWithCoder:](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.
