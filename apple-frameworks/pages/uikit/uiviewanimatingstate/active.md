> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimatingstate/active](https://developer.apple.com/documentation/uikit/uiviewanimatingstate/active)

# UIViewAnimatingState.active (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The animator object is active and animations are either running or paused. An animator moves to this state after the first call to [startAnimation()](../uiviewanimating/startanimation%28%29.md) or [pauseAnimation()](../uiviewanimating/pauseanimation%28%29.md). It stays in the active state until the animations finish naturally or until you call the [stopAnimation(\_:)](../uiviewanimating/stopanimation%28__%29.md) method.

## Declaration

```swift
case active
```

## See Also

### Constants

- [UIViewAnimatingState.inactive](inactive.md): The animations have not yet started executing. This is the initial state of the animator object.
- [UIViewAnimatingState.stopped](stopped.md): The animation is stopped. Putting an animation into this state ends the animation and leaves any animatable properties at their current values, instead of updating them to their intended final values. An animation cannot be started while in this state.

# UIViewAnimatingStateActive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The animator object is active and animations are either running or paused. An animator moves to this state after the first call to [startAnimation](../uiviewanimating/startanimation%28%29.md) or [pauseAnimation](../uiviewanimating/pauseanimation%28%29.md). It stays in the active state until the animations finish naturally or until you call the [stopAnimation:](../uiviewanimating/stopanimation%28__%29.md) method.

## Declaration

```objectivec
UIViewAnimatingStateActive
```

## See Also

### Constants

- [UIViewAnimatingStateInactive](inactive.md): The animations have not yet started executing. This is the initial state of the animator object.
- [UIViewAnimatingStateStopped](stopped.md): The animation is stopped. Putting an animation into this state ends the animation and leaves any animatable properties at their current values, instead of updating them to their intended final values. An animation cannot be started while in this state.
