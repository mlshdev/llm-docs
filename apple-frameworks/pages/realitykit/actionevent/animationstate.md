> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionevent/animationstate](https://developer.apple.com/documentation/realitykit/actionevent/animationstate)

# animationState

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The animation state for the action.

## Declaration

```swift
var animationState: (any AnimationStateProtocol)? { get }
```

<a id="discussion"></a>

## Discussion

Used to procedurally animate a target value with cross-fading, and additive blending support.

The animation state is available when a bind target along with its type is defined for the action. (See [AnimationStateProtocol](../animationstateprotocol.md))

The following example returns an animated value to the animation system for the current frame by storing its value within the returned animation state.

```swift
MyCustomAction.subscribe(.updated) { event in
    // The returned state will be nil
    // if the action animation's bind target, and type is not defined.
    guard let animationState = event.animationState else {
       return
    }
    animationState.storeAnimatedValue(myAnimatedResult)
}
```
