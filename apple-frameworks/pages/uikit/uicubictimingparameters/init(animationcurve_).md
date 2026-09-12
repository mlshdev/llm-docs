> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicubictimingparameters/init(animationcurve:)](https://developer.apple.com/documentation/uikit/uicubictimingparameters/init(animationcurve:))

# init(animationCurve:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the specified UIKit timing curve.

## Declaration

```swift
init(animationCurve curve: UIView.AnimationCurve)
```

## Parameters

- `curve`: The UIKit timing curve to use for the animations. You can specify a linear animation or an animation whose initial or final speed is slightly slower.

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a timing curve that uses the standard UIKit timing curves such as [UIView.AnimationCurve.easeIn](../uiview/animationcurve/easein.md), [UIView.AnimationCurve.easeOut](../uiview/animationcurve/easeout.md), [UIView.AnimationCurve.easeInOut](../uiview/animationcurve/easeinout.md), or [UIView.AnimationCurve.linear](../uiview/animationcurve/linear.md).

## See Also

### Initializing a cubic timing parameters object

- [init()](init%28%29.md): Initializes the object with the system’s default timing curve.
- [init(controlPoint1:controlPoint2:)](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [init(coder:)](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.

# initWithAnimationCurve: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the object with the specified UIKit timing curve.

## Declaration

```objectivec
- (instancetype) initWithAnimationCurve:(UIViewAnimationCurve) curve;
```

## Parameters

- `curve`: The UIKit timing curve to use for the animations. You can specify a linear animation or an animation whose initial or final speed is slightly slower.

<a id="return-value"></a>

## Return Value

An initialized timing parameter object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a timing curve that uses the standard UIKit timing curves such as [UIViewAnimationCurveEaseIn](../uiview/animationcurve/easein.md), [UIViewAnimationCurveEaseOut](../uiview/animationcurve/easeout.md), [UIViewAnimationCurveEaseInOut](../uiview/animationcurve/easeinout.md), or [UIViewAnimationCurveLinear](../uiview/animationcurve/linear.md).

## See Also

### Initializing a cubic timing parameters object

- [init](init%28%29.md): Initializes the object with the system’s default timing curve.
- [initWithControlPoint1:controlPoint2:](init%28controlpoint1_controlpoint2_%29.md): Initializes the object with the specified control points for a cubic Bézier curve.
- [initWithCoder:](init%28coder_%29.md): Creates a timing parameters object from data in an unarchiver.
