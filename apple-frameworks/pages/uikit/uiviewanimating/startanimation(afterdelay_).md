> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/startanimation(afterdelay:)](https://developer.apple.com/documentation/uikit/uiviewanimating/startanimation(afterdelay:))

# startAnimation(afterDelay:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Starts the animation after the specified delay.

## Declaration

```swift
func startAnimation(afterDelay delay: TimeInterval)
```

## Parameters

- `delay`: The amount of time (in seconds) to wait before starting the animation.

<a id="Discussion"></a>

## Discussion

Call this method to start the animations or to resume a set of paused animations after the specified time delay. This method sets the state of the animator to [UIViewAnimatingState.active](../uiviewanimatingstate/active.md), if it is not already there. It is a programmer error to call this method while the state of the animator is set to [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md).

When implementing a custom animator, use this method to transition your animator to the active state and to run the animations after the specified delay. Run your animations from the progress point in the [fractionComplete](fractioncomplete.md) property. Update the [state](state.md) and [isRunning](isrunning.md) properties, as well as any other relevant properties of your custom animator object.

## See Also

### Starting and stopping the animations

- [startAnimation()](startanimation%28%29.md): Starts the animation from its current position.
- [pauseAnimation()](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [stopAnimation(\_:)](stopanimation%28__%29.md): Stops the animations at their current positions.
- [finishAnimation(at:)](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.

# startAnimationAfterDelay: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Starts the animation after the specified delay.

## Declaration

```objectivec
- (void) startAnimationAfterDelay:(NSTimeInterval) delay;
```

## Parameters

- `delay`: The amount of time (in seconds) to wait before starting the animation.

<a id="Discussion"></a>

## Discussion

Call this method to start the animations or to resume a set of paused animations after the specified time delay. This method sets the state of the animator to [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md), if it is not already there. It is a programmer error to call this method while the state of the animator is set to [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md).

When implementing a custom animator, use this method to transition your animator to the active state and to run the animations after the specified delay. Run your animations from the progress point in the [fractionComplete](fractioncomplete.md) property. Update the [state](state.md) and [running](isrunning.md) properties, as well as any other relevant properties of your custom animator object.

## See Also

### Starting and stopping the animations

- [startAnimation](startanimation%28%29.md): Starts the animation from its current position.
- [pauseAnimation](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animations at their current positions.
- [finishAnimationAtPosition:](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.
