> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/pauseinteractivetransition()](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/pauseinteractivetransition())

# pauseInteractiveTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells the system to pause the animations.

## Declaration

```swift
func pauseInteractiveTransition()
```

<a id="Discussion"></a>

## Discussion

You can call this method in the middle of an interruptible animation to pause it.

## See Also

### Reporting the transition progress

- [completeTransition(\_:)](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition(\_:)](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.

# pauseInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Tells the system to pause the animations.

## Declaration

```objectivec
- (void) pauseInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

You can call this method in the middle of an interruptible animation to pause it.

## See Also

### Reporting the transition progress

- [completeTransition:](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition:](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
- [transitionWasCancelled](transitionwascancelled.md): Returns a Boolean value indicating whether the transition was canceled.
