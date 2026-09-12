> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/completetransition(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/completetransition(_:))

# completeTransition(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that the transition animation is done.

## Declaration

```swift
func completeTransition(_ didComplete: Bool)
```

## Parameters

- `didComplete`: [true](https://developer.apple.com/documentation/swift/true) if the transition to the presented view controller completed successfully or [false](https://developer.apple.com/documentation/swift/false) if the original view controller is still being displayed.

<a id="Discussion"></a>

## Discussion

You must call this method after your animations have completed to notify the system that the transition animation is done. The parameter you pass must indicate whether the animations completed successfully. For interactive animations, you must call this method in addition to the [finishInteractiveTransition()](finishinteractivetransition%28%29.md) or [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md) method. The best place to call this method is in the completion block of your animations.

The default implementation of this method calls the animator object’s [animationEnded(\_:)](../uiviewcontrolleranimatedtransitioning/animationended%28__%29.md) method to give it a chance to perform any last minute cleanup.

## See Also

### Reporting the transition progress

- [updateInteractiveTransition(\_:)](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition()](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

# completeTransition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that the transition animation is done.

## Declaration

```objectivec
- (void) completeTransition:(BOOL) didComplete;
```

## Parameters

- `didComplete`: [true](https://developer.apple.com/documentation/swift/true) if the transition to the presented view controller completed successfully or [false](https://developer.apple.com/documentation/swift/false) if the original view controller is still being displayed.

<a id="Discussion"></a>

## Discussion

You must call this method after your animations have completed to notify the system that the transition animation is done. The parameter you pass must indicate whether the animations completed successfully. For interactive animations, you must call this method in addition to the [finishInteractiveTransition](finishinteractivetransition%28%29.md) or [cancelInteractiveTransition](cancelinteractivetransition%28%29.md) method. The best place to call this method is in the completion block of your animations.

The default implementation of this method calls the animator object’s [animationEnded:](../uiviewcontrolleranimatedtransitioning/animationended%28__%29.md) method to give it a chance to perform any last minute cleanup.

## See Also

### Reporting the transition progress

- [updateInteractiveTransition:](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.
