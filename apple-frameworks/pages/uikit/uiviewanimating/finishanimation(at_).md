> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimating/finishanimation(at:)](https://developer.apple.com/documentation/uikit/uiviewanimating/finishanimation(at:))

# finishAnimation(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Finishes the animations and returns the animator to the inactive state.

## Declaration

```swift
func finishAnimation(at finalPosition: UIViewAnimatingPosition)
```

## Parameters

- `finalPosition`: The final position for any view properties. Specify [UIViewAnimatingPosition.current](../uiviewanimatingposition/current.md) to leave the view properties unchanged from their current values.

<a id="Discussion"></a>

## Discussion

After putting the animator object into the [UIViewAnimatingState.stopped](../uiviewanimatingstate/stopped.md) state, call this method to perform any final cleanup tasks. It is a programmer error to call this method at any time except after a call to the [stopAnimation(\_:)](stopanimation%28__%29.md) method where you pass [false](https://developer.apple.com/documentation/swift/false) for the `withoutFinishing` parameter. Calling this method is not required, but is recommended in cases where you want to ensure that completion blocks or other final tasks are performed.

Implementations of this method are responsible for setting the state of the animator object to [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) and for performing any final cleanup tasks, such as executing completion blocks.

## See Also

### Starting and stopping the animations

- [startAnimation()](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimation(afterDelay:)](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [pauseAnimation()](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [stopAnimation(\_:)](stopanimation%28__%29.md): Stops the animations at their current positions.

# finishAnimationAtPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Finishes the animations and returns the animator to the inactive state.

## Declaration

```objectivec
- (void) finishAnimationAtPosition:(UIViewAnimatingPosition) finalPosition;
```

## Parameters

- `finalPosition`: The final position for any view properties. Specify [UIViewAnimatingPositionCurrent](../uiviewanimatingposition/current.md) to leave the view properties unchanged from their current values.

<a id="Discussion"></a>

## Discussion

After putting the animator object into the [UIViewAnimatingStateStopped](../uiviewanimatingstate/stopped.md) state, call this method to perform any final cleanup tasks. It is a programmer error to call this method at any time except after a call to the [stopAnimation:](stopanimation%28__%29.md) method where you pass [false](https://developer.apple.com/documentation/swift/false) for the `withoutFinishing` parameter. Calling this method is not required, but is recommended in cases where you want to ensure that completion blocks or other final tasks are performed.

Implementations of this method are responsible for setting the state of the animator object to [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) and for performing any final cleanup tasks, such as executing completion blocks.

## See Also

### Starting and stopping the animations

- [startAnimation](startanimation%28%29.md): Starts the animation from its current position.
- [startAnimationAfterDelay:](startanimation%28afterdelay_%29.md): Starts the animation after the specified delay.
- [pauseAnimation](pauseanimation%28%29.md): Pauses a running animation at its current position.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animations at their current positions.
