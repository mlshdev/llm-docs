> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/init(duration:controlpoint1:controlpoint2:animations:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/init(duration:controlpoint1:controlpoint2:animations:))

# init(duration:controlPoint1:controlPoint2:animations:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator object with a cubic Bézier timing curve.

## Declaration

```swift
convenience init(duration: TimeInterval, controlPoint1 point1: CGPoint, controlPoint2 point2: CGPoint, animations: (() -> Void)? = nil)
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `point1`: The first control point for the cubic Bézier timing curve.
- `point2`: The second control point for the cubic Bézier timing curve.
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable view properties. When you start the animations, those properties are animated from their current values to the new values using the specified animation parameters.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create an animator object using a cubic timing curve whose starting point is (0, 0) and whose end point is (1, 1). The `point1` and `point2` parameters are the control points that define the shape of the resulting Bezier curve. The slope of the curve defines the speed of the animation at different times. Steep slopes cause animations to appear to run faster and shallower slopes cause them to appear to run slower. The following image shows a timing curve where the animations start fast and finish fast but run more slowly through the middle section.

![](https://developer.apple.com/images/com.apple.uikit/media-1965739@2x.png)

The animator object returned by this method begins in the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation()](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [init(duration:curve:animations:)](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [init(duration:dampingRatio:animations:)](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [init(duration:timingParameters:)](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimator(withDuration:delay:options:animations:completion:)](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.

# initWithDuration:controlPoint1:controlPoint2:animations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Initializes the animator object with a cubic Bézier timing curve.

## Declaration

```objectivec
- (instancetype) initWithDuration:(NSTimeInterval) duration controlPoint1:(CGPoint) point1 controlPoint2:(CGPoint) point2 animations:(void (^)()) animations;
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `point1`: The first control point for the cubic Bézier timing curve.
- `point2`: The second control point for the cubic Bézier timing curve.
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable view properties. When you start the animations, those properties are animated from their current values to the new values using the specified animation parameters.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create an animator object using a cubic timing curve whose starting point is (0, 0) and whose end point is (1, 1). The `point1` and `point2` parameters are the control points that define the shape of the resulting Bezier curve. The slope of the curve defines the speed of the animation at different times. Steep slopes cause animations to appear to run faster and shallower slopes cause them to appear to run slower. The following image shows a timing curve where the animations start fast and finish fast but run more slowly through the middle section.

![](https://developer.apple.com/images/com.apple.uikit/media-1965739@2x.png)

The animator object returned by this method begins in the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state. You must explicitly start the animations by calling the [startAnimation](../uiviewanimating/startanimation%28%29.md) method.

## See Also

### Initializing a property animator

- [initWithDuration:curve:animations:](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [initWithDuration:dampingRatio:animations:](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [initWithDuration:timingParameters:](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
- [runningPropertyAnimatorWithDuration:delay:options:animations:completion:](runningpropertyanimator%28withduration_delay_options_animations_completion_%29.md): Creates and returns an animator object that begins running its animations immediately.
