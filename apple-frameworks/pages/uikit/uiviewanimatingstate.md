> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimatingstate](https://developer.apple.com/documentation/uikit/uiviewanimatingstate)

# UIViewAnimatingState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating the current state of the animation.

## Declaration

```swift
enum UIViewAnimatingState
```

## Topics

### Constants

- [UIViewAnimatingState.inactive](uiviewanimatingstate/inactive.md): The animations have not yet started executing. This is the initial state of the animator object.
- [UIViewAnimatingState.active](uiviewanimatingstate/active.md): The animator object is active and animations are either running or paused. An animator moves to this state after the first call to [startAnimation()](uiviewanimating/startanimation%28%29.md) or [pauseAnimation()](uiviewanimating/pauseanimation%28%29.md). It stays in the active state until the animations finish naturally or until you call the [stopAnimation(\_:)](uiviewanimating/stopanimation%28__%29.md) method.
- [UIViewAnimatingState.stopped](uiviewanimatingstate/stopped.md): The animation is stopped. Putting an animation into this state ends the animation and leaves any animatable properties at their current values, instead of updating them to their intended final values. An animation cannot be started while in this state.

### Initializers

- [init(rawValue:)](uiviewanimatingstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIViewAnimatingPosition](uiviewanimatingposition.md): Constants indicating positions within the animation.

# UIViewAnimatingState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating the current state of the animation.

## Declaration

```objectivec
enum UIViewAnimatingState : NSInteger;
```

## Topics

### Constants

- [UIViewAnimatingStateInactive](uiviewanimatingstate/inactive.md): The animations have not yet started executing. This is the initial state of the animator object.
- [UIViewAnimatingStateActive](uiviewanimatingstate/active.md): The animator object is active and animations are either running or paused. An animator moves to this state after the first call to [startAnimation](uiviewanimating/startanimation%28%29.md) or [pauseAnimation](uiviewanimating/pauseanimation%28%29.md). It stays in the active state until the animations finish naturally or until you call the [stopAnimation:](uiviewanimating/stopanimation%28__%29.md) method.
- [UIViewAnimatingStateStopped](uiviewanimatingstate/stopped.md): The animation is stopped. Putting an animation into this state ends the animation and leaves any animatable properties at their current values, instead of updating them to their intended final values. An animation cannot be started while in this state.

## See Also

### Constants

- [UIViewAnimatingPosition](uiviewanimatingposition.md): Constants indicating positions within the animation.
