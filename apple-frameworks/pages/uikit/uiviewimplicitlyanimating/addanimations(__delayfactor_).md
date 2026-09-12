> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewimplicitlyanimating/addanimations(_:delayfactor:)](https://developer.apple.com/documentation/uikit/uiviewimplicitlyanimating/addanimations(_:delayfactor:))

# addAnimations(\_:delayFactor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified animation block to the animator with a delay.

## Declaration

```swift
optional func addAnimations(_ animation: @escaping () -> Void, delayFactor: CGFloat)
```

## Parameters

- `animation`: A block containing the animations to add to the animator object. This block has no return value and takes no parameters.
- `delayFactor`: The factor to use for delaying the start of the animations. The value must be between `0.0` and `1.0`. Multiply this value by the animator’s remaining duration to determine the actual delay in seconds. For example, if the value `0.5` and the animator’s duration is `2.0`, delay the start of the animations by one second.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to your custom animator object. The animations in the new block should run alongside any previously configured animations, starting after the specified delay and finishing at the same time as any original animations. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimation(withTimingParameters:durationFactor:)](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.

# addAnimations:delayFactor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Adds the specified animation block to the animator with a delay.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animation delayFactor:(CGFloat) delayFactor;
```

## Parameters

- `animation`: A block containing the animations to add to the animator object. This block has no return value and takes no parameters.
- `delayFactor`: The factor to use for delaying the start of the animations. The value must be between `0.0` and `1.0`. Multiply this value by the animator’s remaining duration to determine the actual delay in seconds. For example, if the value `0.5` and the animator’s duration is `2.0`, delay the start of the animations by one second.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to your custom animator object. The animations in the new block should run alongside any previously configured animations, starting after the specified delay and finishing at the same time as any original animations. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimationWithTimingParameters:durationFactor:](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.
