> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewimplicitlyanimating/addanimations(_:)](https://developer.apple.com/documentation/uikit/uiviewimplicitlyanimating/addanimations(_:))

# addAnimations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Adds the specified animation block to the animator.

## Declaration

```swift
optional func addAnimations(_ animation: @escaping () -> Void)
```

## Parameters

- `animation`: A block containing the animations to add to the animator object. This block has no return value and takes no parameters.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to your custom animator object. The animations in the specified block should run alongside any previously configured animations, starting at the current time and finishing at the same time as any original animations. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimation(withTimingParameters:durationFactor:)](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.

# addAnimations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Adds the specified animation block to the animator.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animation;
```

## Parameters

- `animation`: A block containing the animations to add to the animator object. This block has no return value and takes no parameters.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to your custom animator object. The animations in the specified block should run alongside any previously configured animations, starting at the current time and finishing at the same time as any original animations. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimationWithTimingParameters:durationFactor:](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.
