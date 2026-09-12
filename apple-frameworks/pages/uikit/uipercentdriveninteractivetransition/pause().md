> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/pause()](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/pause())

# pause() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Pauses an interruptible transition animation.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls through to the [pauseInteractiveTransition()](../uiviewcontrollercontexttransitioning/pauseinteractivetransition%28%29.md) method of the context object. You might call this method so that you can begin driving an animation interactively. For example, when the user’s finger touches the screen, your gesture handler would call this method to stop the animation and then use changes to the touch location to update the [percentComplete](percentcomplete.md) property.

## See Also

### Managing a transition

- [update(\_:)](update%28__%29.md): Updates the completion percentage of the transition.
- [cancel()](cancel%28%29.md): Notifies the system that user interactions canceled the transition.
- [finish()](finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.

# pauseInteractiveTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Pauses an interruptible transition animation.

## Declaration

```objectivec
- (void) pauseInteractiveTransition;
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that calls through to the [pauseInteractiveTransition](../uiviewcontrollercontexttransitioning/pauseinteractivetransition%28%29.md) method of the context object. You might call this method so that you can begin driving an animation interactively. For example, when the user’s finger touches the screen, your gesture handler would call this method to stop the animation and then use changes to the touch location to update the [percentComplete](percentcomplete.md) property.

## See Also

### Managing a transition

- [updateInteractiveTransition:](update%28__%29.md): Updates the completion percentage of the transition.
- [cancelInteractiveTransition](cancel%28%29.md): Notifies the system that user interactions canceled the transition.
- [finishInteractiveTransition](finish%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
