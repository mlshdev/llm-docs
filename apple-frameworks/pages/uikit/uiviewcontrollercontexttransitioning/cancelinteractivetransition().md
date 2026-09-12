> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/cancelinteractivetransition()](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/cancelinteractivetransition())

# cancelInteractiveTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that user interactions canceled the transition.

## Declaration

```swift
func cancelInteractiveTransition()
```

<a id="Discussion"></a>

## Discussion

While tracking user interactions, gesture recognizers or your interactive animator object should call this method when interactions suggest that the user wants to cancel or abort the view controller transition. For example, if the user reverses the swipe direction and touch events end, suggesting that the user decided against the transition, you would call this method.

Always follow calls to this method with a call to the [completeTransition(\_:)](completetransition%28__%29.md) method to finalize the transition.

## See Also

### Reporting the transition progress

- [completeTransition(\_:)](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition(\_:)](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition()](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

# cancelInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the system that user interactions canceled the transition.

## Declaration

```objectivec
- (void) cancelInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

While tracking user interactions, gesture recognizers or your interactive animator object should call this method when interactions suggest that the user wants to cancel or abort the view controller transition. For example, if the user reverses the swipe direction and touch events end, suggesting that the user decided against the transition, you would call this method.

Always follow calls to this method with a call to the [completeTransition:](completetransition%28__%29.md) method to finalize the transition.

## See Also

### Reporting the transition progress

- [completeTransition:](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition:](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.
