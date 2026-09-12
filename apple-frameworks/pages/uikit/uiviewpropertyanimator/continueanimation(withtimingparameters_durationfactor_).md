> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/continueanimation(withtimingparameters:durationfactor:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/continueanimation(withtimingparameters:durationfactor:))

# continueAnimation(withTimingParameters:durationFactor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adjusts the timing and duration of a paused animation.

## Declaration

```swift
func continueAnimation(withTimingParameters parameters: (any UITimingCurveProvider)?, durationFactor: CGFloat)
```

## Parameters

- `parameters`: The new timing information to apply to the animation. The animator may transition from the previous timing curve to the new timing curve over time to keep the transition from becoming too jarring. For example, if the previous timing curve used a spring animation, the animator may add some of spring behavior to the new animation.
- `durationFactor`: A multiplying factor to apply to the animation’s original duration. The value of this parameter is multiplied by the original [duration](duration.md) value to obtain the new duration for the animations.

<a id="Discussion"></a>

## Discussion

This method overrides the timing and duration parameters for the current animations. When calling this method, the animator must be active and currently paused. It’s a programmer error to call this method when the animator is inactive, running, or its [isInterruptible](isinterruptible.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

This method overrides the original timing and duration values only until the current animations finish. The original timing and duration values are restored when the animator transitions back to the inactive state.

## See Also

### Related Documentation

- [pauseAnimation()](../uiviewanimating/pauseanimation%28%29.md): Pauses a running animation at its current position.

### Modifying animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.

# continueAnimationWithTimingParameters:durationFactor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adjusts the timing and duration of a paused animation.

## Declaration

```objectivec
- (void) continueAnimationWithTimingParameters:(id<UITimingCurveProvider>) parameters durationFactor:(CGFloat) durationFactor;
```

## Parameters

- `parameters`: The new timing information to apply to the animation. The animator may transition from the previous timing curve to the new timing curve over time to keep the transition from becoming too jarring. For example, if the previous timing curve used a spring animation, the animator may add some of spring behavior to the new animation.
- `durationFactor`: A multiplying factor to apply to the animation’s original duration. The value of this parameter is multiplied by the original [duration](duration.md) value to obtain the new duration for the animations.

<a id="Discussion"></a>

## Discussion

This method overrides the timing and duration parameters for the current animations. When calling this method, the animator must be active and currently paused. It’s a programmer error to call this method when the animator is inactive, running, or its [interruptible](isinterruptible.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

This method overrides the original timing and duration values only until the current animations finish. The original timing and duration values are restored when the animator transitions back to the inactive state.

## See Also

### Related Documentation

- [pauseAnimation](../uiviewanimating/pauseanimation%28%29.md): Pauses a running animation at its current position.

### Modifying animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
