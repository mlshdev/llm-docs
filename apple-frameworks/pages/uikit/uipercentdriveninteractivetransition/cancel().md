> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/cancel()](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/cancel())

# cancel() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the system that user interactions canceled the transition.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls through to the [cancelInteractiveTransition()](../uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) method of the context object.

While tracking user interactions, your gesture recognizer or event-handling code would call this method when interactions suggest that the user wants to cancel or abort the view controller transition. For example, if the user reverses the swipe direction and then touch events end, suggesting that the user decided against the transition, you would call this method.

## See Also

### Managing a transition

- [update(\_:)](update%28__%29.md): Updates the completion percentage of the transition.
- [pause()](pause%28%29.md): Pauses an interruptible transition animation.
- [finish()](finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.

# cancelInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the system that user interactions canceled the transition.

## Declaration

```objectivec
- (void) cancelInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls through to the [cancelInteractiveTransition](../uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) method of the context object.

While tracking user interactions, your gesture recognizer or event-handling code would call this method when interactions suggest that the user wants to cancel or abort the view controller transition. For example, if the user reverses the swipe direction and then touch events end, suggesting that the user decided against the transition, you would call this method.

## See Also

### Managing a transition

- [updateInteractiveTransition:](update%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](pause%28%29.md): Pauses an interruptible transition animation.
- [finishInteractiveTransition](finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
