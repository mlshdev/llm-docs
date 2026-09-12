> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/runningpropertyanimator(withduration:delay:options:animations:completion:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/runningpropertyanimator(withduration:delay:options:animations:completion:))

# runningPropertyAnimator(withDuration:delay:options:animations:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates and returns an animator object that begins running its animations immediately.

## Declaration

```swift
class func runningPropertyAnimator(withDuration duration: TimeInterval, delay: TimeInterval, options: UIView.AnimationOptions = [], animations: @escaping () -> Void, completion: ((UIViewAnimatingPosition) -> Void)? = nil) -> Self
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `delay`: The number of seconds to wait before starting the animations. Specify 0 to begin the animations immediately.
- `options`: The options to apply to the animations. You can specify most options, but transition-related options and options related to the animation direction are ignored. For a list of options, see [UIView.AnimationOptions](../uiview/animationoptions.md).
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable properties of your view. Those properties are animated from their current values to the new values using the specified animation parameters.
- `completion`: The block to execute when the animations finish. You can use this block to perform any final actions. This block has no return value and takes the following parameter:

  - **finalPosition**: The ending position of the animations. Use this value to determine whether the animations stopped at the beginning, end, or somewhere in the middle.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method creates the property animator object, configures it, and calls its [startAnimation()](../uiviewanimating/startanimation%28%29.md) method after the specified delay. If you don’t specify an animation curve in the options parameter, this method uses the [curveEaseInOut](../uiview/animationoptions/curveeaseinout.md) option.

## See Also

### Initializing a property animator

- [init(duration:curve:animations:)](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [init(duration:controlPoint1:controlPoint2:animations:)](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [init(duration:dampingRatio:animations:)](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [init(duration:timingParameters:)](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.

# runningPropertyAnimatorWithDuration:delay:options:animations:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates and returns an animator object that begins running its animations immediately.

## Declaration

```objectivec
+ (instancetype) runningPropertyAnimatorWithDuration:(NSTimeInterval) duration delay:(NSTimeInterval) delay options:(UIViewAnimationOptions) options animations:(void (^)()) animations completion:(void (^)(UIViewAnimatingPosition finalPosition)) completion;
```

## Parameters

- `duration`: The duration of the animation, in seconds.
- `delay`: The number of seconds to wait before starting the animations. Specify 0 to begin the animations immediately.
- `options`: The options to apply to the animations. You can specify most options, but transition-related options and options related to the animation direction are ignored. For a list of options, see [UIViewAnimationOptions](../uiview/animationoptions.md).
- `animations`: The block containing the animations. This block has no return value and takes no parameters. Use this block to modify any animatable properties of your view. Those properties are animated from their current values to the new values using the specified animation parameters.
- `completion`: The block to execute when the animations finish. You can use this block to perform any final actions. This block has no return value and takes the following parameter:

  - **finalPosition**: The ending position of the animations. Use this value to determine whether the animations stopped at the beginning, end, or somewhere in the middle.

<a id="return-value"></a>

## Return Value

An initialized animator object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method creates the property animator object, configures it, and calls its [startAnimation](../uiviewanimating/startanimation%28%29.md) method after the specified delay. If you don’t specify an animation curve in the options parameter, this method uses the [UIViewAnimationOptionCurveEaseInOut](../uiview/animationoptions/curveeaseinout.md) option.

## See Also

### Initializing a property animator

- [initWithDuration:curve:animations:](init%28duration_curve_animations_%29.md): Initializes the animator with a built-in UIKit timing curve.
- [initWithDuration:controlPoint1:controlPoint2:animations:](init%28duration_controlpoint1_controlpoint2_animations_%29.md): Initializes the animator object with a cubic Bézier timing curve.
- [initWithDuration:dampingRatio:animations:](init%28duration_dampingratio_animations_%29.md): Initializes the animator object with spring-based timing information.
- [initWithDuration:timingParameters:](init%28duration_timingparameters_%29.md): Initializes the animator object with a custom timing curve object.
