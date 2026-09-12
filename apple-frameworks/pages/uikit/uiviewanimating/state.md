> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/state](https://developer.apple.com/documentation/uikit/uiviewanimating/state)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The current state of the animation.

## Declaration

```swift
var state: UIViewAnimatingState { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the current state of the animation. An animator object starts in the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state. Calling the [startAnimation()](startanimation%28%29.md) or [pauseAnimation()](pauseanimation%28%29.md) method changes the state to [UIViewAnimatingState.active](../uiviewanimatingstate/active.md). Changing the [fractionComplete](fractioncomplete.md) property also moves the animator to the active state. The animator remains in the active state until its animations finish, at which point it moves back to the inactive state.

Calling the [stopAnimation(\_:)](stopanimation%28__%29.md) method changes the state of the animator to [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md). When in this state, the animations are stopped and cannot be restarted until you call the [finishAnimation(at:)](finishanimation%28at_%29.md) method, which returns the animator to the inactive state.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [isReversed](isreversed.md): A Boolean value indicating whether the animation is running in the reverse direction.
- [isRunning](isrunning.md): A Boolean value indicating whether the animation is currently running.

# state (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The current state of the animation.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewAnimatingState state;
```

<a id="Discussion"></a>

## Discussion

This property reflects the current state of the animation. An animator object starts in the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state. Calling the [startAnimation](startanimation%28%29.md) or [pauseAnimation](pauseanimation%28%29.md) method changes the state to [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md). Changing the [fractionComplete](fractioncomplete.md) property also moves the animator to the active state. The animator remains in the active state until its animations finish, at which point it moves back to the inactive state.

Calling the [stopAnimation:](stopanimation%28__%29.md) method changes the state of the animator to [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md). When in this state, the animations are stopped and cannot be restarted until you call the [finishAnimationAtPosition:](finishanimation%28at_%29.md) method, which returns the animator to the inactive state.

## See Also

### Getting the animator’s state

- [fractionComplete](fractioncomplete.md): The completion percentage of the animation.
- [reversed](isreversed.md): A Boolean value indicating whether the animation is running in the reverse direction.
- [running](isrunning.md): A Boolean value indicating whether the animation is currently running.
