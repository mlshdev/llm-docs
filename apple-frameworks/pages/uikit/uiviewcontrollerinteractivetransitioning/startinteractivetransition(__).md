> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerinteractivetransitioning/startinteractivetransition(_:)](https://developer.apple.com/documentation/uikit/uiviewcontrollerinteractivetransitioning/startinteractivetransition(_:))

# startInteractiveTransition(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when the system needs to set up the interactive portions of a view controller transition and start the animations.

## Declaration

```swift
func startInteractiveTransition(_ transitionContext: any UIViewControllerContextTransitioning)
```

## Parameters

- `transitionContext`: The context object containing information about the transition.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should use the data in the `transitionContext` parameter to configure user interactivity for the transition and then start the animations. While tracking user interactions, your event handling code should regularly call the context object’s [updateInteractiveTransition(\_:)](../uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md) method to report on how much of the transition is now complete. If events indicate that the user has canceled the transition, call the [cancelInteractiveTransition()](../uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) method. If events indicate that the transition has finished, call the [finishInteractiveTransition()](../uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md) method.

## See Also

### Starting an interactive transition

- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the transition is interactive when it starts.

# startInteractiveTransition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when the system needs to set up the interactive portions of a view controller transition and start the animations.

## Declaration

```objectivec
- (void) startInteractiveTransition:(id<UIViewControllerContextTransitioning>) transitionContext;
```

## Parameters

- `transitionContext`: The context object containing information about the transition.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should use the data in the `transitionContext` parameter to configure user interactivity for the transition and then start the animations. While tracking user interactions, your event handling code should regularly call the context object’s [updateInteractiveTransition:](../uiviewcontrollercontexttransitioning/updateinteractivetransition%28__%29.md) method to report on how much of the transition is now complete. If events indicate that the user has canceled the transition, call the [cancelInteractiveTransition](../uiviewcontrollercontexttransitioning/cancelinteractivetransition%28%29.md) method. If events indicate that the transition has finished, call the [finishInteractiveTransition](../uiviewcontrollercontexttransitioning/finishinteractivetransition%28%29.md) method.

## See Also

### Starting an interactive transition

- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the transition is interactive when it starts.
