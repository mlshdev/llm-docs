> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/pauseanimation()](https://developer.apple.com/documentation/uikit/uiviewanimating/pauseanimation())

# pauseAnimation() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Pauses a running animation at its current position.

## Declaration

```swift
func pauseAnimation()
```

<a id="Discussion"></a>

## Discussion

This method pauses running animations at their current values. Calling this method on an inactive animator moves its state to [UIViewAnimatingState.active](../uiviewanimatingstate/active.md) and puts its animations in a paused state right away. To resume the animations, call the [startAnimation()](startanimation%28%29.md) method. If the animation is already paused, this method should do nothing. It is a programmer error to call this method while the state of the animator is set to [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md).

## See Also

### Starting and stopping the animations

- [startAnimation()](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimation(afterDelay:)](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [stopAnimation(\_:)](stopanimation%28__%29.md): Stops the animations at their current positions.
- [finishAnimation(at:)](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.

# pauseAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Pauses a running animation at its current position.

## Declaration

```objectivec
- (void) pauseAnimation;
```

<a id="Discussion"></a>

## Discussion

This method pauses running animations at their current values. Calling this method on an inactive animator moves its state to [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md) and puts its animations in a paused state right away. To resume the animations, call the [startAnimation](startanimation%28%29.md) method. If the animation is already paused, this method should do nothing. It is a programmer error to call this method while the state of the animator is set to [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md).

## See Also

### Starting and stopping the animations

- [startAnimation](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimationAfterDelay:](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animations at their current positions.
- [finishAnimationAtPosition:](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.
