> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/transitionwascancelled](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/transitionwascancelled)

# transitionWasCancelled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the transition was canceled.

## Declaration

```swift
var transitionWasCancelled: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transition was canceled or [false](https://developer.apple.com/documentation/swift/false) if it is ongoing or finished normally.

<a id="Discussion"></a>

## Discussion

You can call this method from your animator object to determine whether the transition has been canceled. Calling the [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md) method causes this method to return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Reporting the transition progress

- [completeTransition(\_:)](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition(\_:)](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition()](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition()](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition()](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.

# transitionWasCancelled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the transition was canceled.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL transitionWasCancelled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transition was canceled or [false](https://developer.apple.com/documentation/swift/false) if it is ongoing or finished normally.

<a id="Discussion"></a>

## Discussion

You can call this method from your animator object to determine whether the transition has been canceled. Calling the [cancelInteractiveTransition](cancelinteractivetransition%28%29.md) method causes this method to return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Reporting the transition progress

- [completeTransition:](completetransition%28__%29.md): Notifies the system that the transition animation is done.
- [updateInteractiveTransition:](updateinteractivetransition%28__%29.md): Updates the completion percentage of the transition.
- [pauseInteractiveTransition](pauseinteractivetransition%28%29.md): Tells the system to pause the animations.
- [finishInteractiveTransition](finishinteractivetransition%28%29.md): Notifies the system that user interactions signaled the completion of the transition.
- [cancelInteractiveTransition](cancelinteractivetransition%28%29.md): Notifies the system that user interactions canceled the transition.
