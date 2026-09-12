> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/finishinteractivetransition()](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/finishinteractivetransition())

# finishInteractiveTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that user interactions signaled the completion of the transition.

## Declaration

```swift
func finishInteractiveTransition()
```

<a id="Discussion"></a>

## Discussion

While tracking user interactions, gesture recognizers or your interactive animator object should call this method when the interactions suggest that the transition is now complete. For example, if the user swipes a finger, and the touch events indicate that the swipe distance crossed the threshold needed to complete the gesture, call this method when the corresponding touch events end to let the system know that it can now complete the transition.

Always follow calls to this method with a call to the [completeTransition(\_:)](completetransition%28__%29.md) method to finalize the transition.

## See Also

### Reporting the transition progress

- [completeTransition(\_:)](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition(\_:)](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition()](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

# finishInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that user interactions signaled the completion of the transition.

## Declaration

```objectivec
- (void) finishInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

While tracking user interactions, gesture recognizers or your interactive animator object should call this method when the interactions suggest that the transition is now complete. For example, if the user swipes a finger, and the touch events indicate that the swipe distance crossed the threshold needed to complete the gesture, call this method when the corresponding touch events end to let the system know that it can now complete the transition.

Always follow calls to this method with a call to the [completeTransition:](completetransition%28__%29.md) method to finalize the transition.

## See Also

### Reporting the transition progress

- [completeTransition:](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition:](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.
