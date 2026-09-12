> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/updateinteractivetransition(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/updateinteractivetransition(_:))

# updateInteractiveTransition(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Updates the completion percentage of the transition.

## Declaration

```swift
func updateInteractiveTransition(_ percentComplete: CGFloat)
```

<a id="Discussion"></a>

## Discussion

While tracking user events, gesture recognizers or your interactive animator objects should call this method regularly to update the progress toward completing the transition. If, during tracking, the interactions cross a threshold that you consider signifies the completion or cancellation of the transition, stop tracking events and call the [finishInteractiveTransition()](finishinteractivetransition%28%29.md) or [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md) method.

## See Also

### Reporting the transition progress

- [completeTransition(\_:)](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [pauseInteractiveTransition()](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

# updateInteractiveTransition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Updates the completion percentage of the transition.

## Declaration

```objectivec
- (void) updateInteractiveTransition:(CGFloat) percentComplete;
```

<a id="Discussion"></a>

## Discussion

While tracking user events, gesture recognizers or your interactive animator objects should call this method regularly to update the progress toward completing the transition. If, during tracking, the interactions cross a threshold that you consider signifies the completion or cancellation of the transition, stop tracking events and call the [finishInteractiveTransition](finishinteractivetransition%28%29.md) or [cancelInteractiveTransition](cancelinteractivetransition%28%29.md) method.

## See Also

### Reporting the transition progress

- [completeTransition:](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [pauseInteractiveTransition](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.
