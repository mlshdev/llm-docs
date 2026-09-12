> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/addanimations(_:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/addanimations(_:))

# addAnimations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified animation block to the animator.

## Declaration

```swift
func addAnimations(_ animation: @escaping () -> Void)
```

## Parameters

- `animation`: A block containing the animations you want to add to the animator object. This block has no return value and takes no parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to the animator. The animations in the new block run alongside any previously configured animations. Blocks added while the animator’s state is [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) are executed over the time specified by the [duration](duration.md) property. Blocks added while the animator’s state is [UIViewAnimatingState.active](../uiviewanimatingstate/active.md) are executed over the remaining portion of the total run time. For example, if the duration is `2.0` and you add an animation block to a running animator whose [fractionComplete](../uiviewanimating/fractioncomplete.md) property is `0.5`, the animations run for `1.0` second. Any blocks you add while the animator is running begin executing immediately.

If the `animation` block modifies a property that’s being modified by a different property animator, then the animators combine their changes in the most appropriate way. For many properties, the changes from each animator are added together to yield a new intermediate value. If a property can’t be modified in this additive manner, the new animations take over as if the [beginFromCurrentState](../uiview/animationoptions/beginfromcurrentstate.md) option had been specified for a view-based animation.

You can call this method multiple times to add multiple blocks to the animator. It’s a programmer error to call this method when the animator’s [state](../uiviewanimating/state.md) property is set to [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md).

## See Also

### Modifying animations

- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimation(withTimingParameters:durationFactor:)](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.

# addAnimations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified animation block to the animator.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animation;
```

## Parameters

- `animation`: A block containing the animations you want to add to the animator object. This block has no return value and takes no parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to add new animation blocks to the animator. The animations in the new block run alongside any previously configured animations. Blocks added while the animator’s state is [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) are executed over the time specified by the [duration](duration.md) property. Blocks added while the animator’s state is [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md) are executed over the remaining portion of the total run time. For example, if the duration is `2.0` and you add an animation block to a running animator whose [fractionComplete](../uiviewanimating/fractioncomplete.md) property is `0.5`, the animations run for `1.0` second. Any blocks you add while the animator is running begin executing immediately.

If the `animation` block modifies a property that’s being modified by a different property animator, then the animators combine their changes in the most appropriate way. For many properties, the changes from each animator are added together to yield a new intermediate value. If a property can’t be modified in this additive manner, the new animations take over as if the [UIViewAnimationOptionBeginFromCurrentState](../uiview/animationoptions/beginfromcurrentstate.md) option had been specified for a view-based animation.

You can call this method multiple times to add multiple blocks to the animator. It’s a programmer error to call this method when the animator’s [state](../uiviewanimating/state.md) property is set to [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md).

## See Also

### Modifying animations

- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimationWithTimingParameters:durationFactor:](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.
