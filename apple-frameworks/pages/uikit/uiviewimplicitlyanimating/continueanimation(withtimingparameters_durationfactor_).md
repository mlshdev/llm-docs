> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewimplicitlyanimating/continueanimation(withtimingparameters:durationfactor:)](https://developer.apple.com/documentation/uikit/uiviewimplicitlyanimating/continueanimation(withtimingparameters:durationfactor:))

# continueAnimation(withTimingParameters:durationFactor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Adjusts the final timing and duration of a paused animation.

## Declaration

```swift
optional func continueAnimation(withTimingParameters parameters: (any UITimingCurveProvider)?, durationFactor: CGFloat)
```

## Parameters

- `parameters`: The new timing information to apply to the animation. Your custom animator determines how to transition from any current animations to the new animations specified by this parameter.
- `durationFactor`: A multiplying factor to apply to the animation’s original duration. Multiply this value by your animation’s original duration value to obtain the new duration for the animations.

<a id="Discussion"></a>

## Discussion

Use this method to change the timing and duration parameters for the current animations temporarily. You define the conditions for which it’s safe to call this method, but typically it’s an error to call this method on an animator that’s inactive, running, or not interruptible. You should retain the original timing and duration values and restore them when your animator transitions back to the inactive state.

## See Also

### Related Documentation

- [pauseAnimation()](../uiviewanimating/pauseanimation%28%29.md): Pauses a running animation at its current position.

### Modifying animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.

# continueAnimationWithTimingParameters:durationFactor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Adjusts the final timing and duration of a paused animation.

## Declaration

```objectivec
- (void) continueAnimationWithTimingParameters:(id<UITimingCurveProvider>) parameters durationFactor:(CGFloat) durationFactor;
```

## Parameters

- `parameters`: The new timing information to apply to the animation. Your custom animator determines how to transition from any current animations to the new animations specified by this parameter.
- `durationFactor`: A multiplying factor to apply to the animation’s original duration. Multiply this value by your animation’s original duration value to obtain the new duration for the animations.

<a id="Discussion"></a>

## Discussion

Use this method to change the timing and duration parameters for the current animations temporarily. You define the conditions for which it’s safe to call this method, but typically it’s an error to call this method on an animator that’s inactive, running, or not interruptible. You should retain the original timing and duration values and restore them when your animator transitions back to the inactive state.

## See Also

### Related Documentation

- [pauseAnimation](../uiviewanimating/pauseanimation%28%29.md): Pauses a running animation at its current position.

### Modifying animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
