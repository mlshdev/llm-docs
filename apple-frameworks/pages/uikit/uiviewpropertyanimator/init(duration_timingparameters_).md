> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/init(duration:timingparameters:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/init(duration:timingparameters:))

# init(duration:timingParameters:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator object with a custom timing curve object.

## Declaration

```swift
init(duration: TimeInterval, timingParameters parameters: any UITimingCurveProvider)
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `parameters`: The object providing the timing information. This object must adopt the [UITimingCurveProvider](../uitimingcurveprovider.md) protocol.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the animator with a custom timing curve. After initializing the animator, you must add one or more animation blocks before calling starting the animations.

The animator object returned by this method begins in the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation()](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [init(duration:curve:animations:)](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [init(duration:controlPoint1:controlPoint2:animations:)](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [init(duration:dampingRatio:animations:)](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [runningPropertyAnimator(withDuration:delay:options:animations:completion:)](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.

# initWithDuration:timingParameters: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator object with a custom timing curve object.

## Declaration

```objectivec
- (instancetype) initWithDuration:(NSTimeInterval) duration timingParameters:(id<UITimingCurveProvider>) parameters;
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `parameters`: The object providing the timing information. This object must adopt the [UITimingCurveProvider](../uitimingcurveprovider.md) protocol.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize the animator with a custom timing curve. After initializing the animator, you must add one or more animation blocks before calling starting the animations.

The animator object returned by this method begins in the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [initWithDuration:curve:animations:](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [initWithDuration:controlPoint1:controlPoint2:animations:](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [initWithDuration:dampingRatio:animations:](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [runningPropertyAnimatorWithDuration:delay:options:animations:completion:](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.
