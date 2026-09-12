> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/stopanimation(_:)](https://developer.apple.com/documentation/uikit/uiviewanimating/stopanimation(_:))

# stopAnimation(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Stops the animations at their current positions.

## Declaration

```swift
func stopAnimation(_ withoutFinishing: Bool)
```

## Parameters

- `withoutFinishing`: A Boolean indicating whether any final actions should be performed. Specify [true](https://developer.apple.com/documentation/swift/true) to clear any animations and move the animator directly to the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state without performing any final actions. Specify [false](https://developer.apple.com/documentation/swift/false) to put the animator into the [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md) state.

<a id="Discussion"></a>

## Discussion

Call this method when you want to end the animations at their current position. This method removes all of the associated animations from the execution stack and sets the values of any animatable properties to their current values. This method also updates the state of the animator object based on the value of the `withoutFinishing` parameter.

If you specify [false](https://developer.apple.com/documentation/swift/false) for the `withoutFinishing` parameter, you can subsequently call the [finishAnimation(at:)](finishanimation%28at_%29.md) method to perform the animator’s final actions. For example, a [UIViewPropertyAnimator](../uiviewpropertyanimator.md) object executes its completion blocks when you call this method. You do not have to call the [finishAnimation(at:)](finishanimation%28at_%29.md) method right away, or at all, and you can perform other animations before calling that method.

## See Also

### Starting and stopping the animations

- [startAnimation()](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimation(afterDelay:)](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [pauseAnimation()](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [finishAnimation(at:)](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.

# stopAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Stops the animations at their current positions.

## Declaration

```objectivec
- (void) stopAnimation:(BOOL) withoutFinishing;
```

## Parameters

- `withoutFinishing`: A Boolean indicating whether any final actions should be performed. Specify [true](https://developer.apple.com/documentation/swift/true) to clear any animations and move the animator directly to the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state without performing any final actions. Specify [false](https://developer.apple.com/documentation/swift/false) to put the animator into the [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md) state.

<a id="Discussion"></a>

## Discussion

Call this method when you want to end the animations at their current position. This method removes all of the associated animations from the execution stack and sets the values of any animatable properties to their current values. This method also updates the state of the animator object based on the value of the `withoutFinishing` parameter.

If you specify [false](https://developer.apple.com/documentation/swift/false) for the `withoutFinishing` parameter, you can subsequently call the [finishAnimationAtPosition:](finishanimation%28at_%29.md) method to perform the animator’s final actions. For example, a [UIViewPropertyAnimator](../uiviewpropertyanimator.md) object executes its completion blocks when you call this method. You do not have to call the [finishAnimationAtPosition:](finishanimation%28at_%29.md) method right away, or at all, and you can perform other animations before calling that method.

## See Also

### Starting and stopping the animations

- [startAnimation](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimationAfterDelay:](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [pauseAnimation](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [finishAnimationAtPosition:](finishanimation%28at_%29.md): Finishes the animations and returns the animator to the inactive state.
