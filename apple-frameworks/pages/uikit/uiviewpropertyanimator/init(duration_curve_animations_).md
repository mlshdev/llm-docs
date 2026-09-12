> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/init(duration:curve:animations:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/init(duration:curve:animations:))

# init(duration:curve:animations:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator with a built-in UIKit timing curve.

## Declaration

```swift
convenience init(duration: TimeInterval, curve: UIView.AnimationCurve, animations: (() -> Void)? = nil)
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `curve`: The UIKit timing curve to apply to the animation.
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable view properties. When you start the animations, those properties are animated from their current values to the new values using the specified animation parameters.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create an animator object that uses the existing UIKit timing curves to control the animation behavior. Standard UIKit timing curves include [UIView.AnimationCurve.linear](../uiview/animationcurve/linear.md) and [UIView.AnimationCurve.easeInOut](../uiview/animationcurve/easeinout.md) among others.

The animator object returned by this method begins in the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation()](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [init(duration:controlPoint1:controlPoint2:animations:)](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [init(duration:dampingRatio:animations:)](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [init(duration:timingParameters:)](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimator(withDuration:delay:options:animations:completion:)](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.

# initWithDuration:curve:animations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator with a built-in UIKit timing curve.

## Declaration

```objectivec
- (instancetype) initWithDuration:(NSTimeInterval) duration curve:(UIViewAnimationCurve) curve animations:(void (^)()) animations;
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `curve`: The UIKit timing curve to apply to the animation.
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable view properties. When you start the animations, those properties are animated from their current values to the new values using the specified animation parameters.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create an animator object that uses the existing UIKit timing curves to control the animation behavior. Standard UIKit timing curves include [UIViewAnimationCurveLinear](../uiview/animationcurve/linear.md) and [UIViewAnimationCurveEaseInOut](../uiview/animationcurve/easeinout.md) among others.

The animator object returned by this method begins in the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [initWithDuration:controlPoint1:controlPoint2:animations:](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [initWithDuration:dampingRatio:animations:](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [initWithDuration:timingParameters:](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimatorWithDuration:delay:options:animations:completion:](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.
