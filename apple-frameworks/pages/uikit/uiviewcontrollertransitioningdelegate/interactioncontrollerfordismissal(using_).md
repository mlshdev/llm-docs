> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioningdelegate/interactioncontrollerfordismissal(using:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate/interactioncontrollerfordismissal(using:))

# interactionControllerForDismissal(using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your delegate for the interactive animator object to use when dismissing a view controller.

## Declaration

```swift
optional func interactionControllerForDismissal(using animator: any UIViewControllerAnimatedTransitioning) -> (any UIViewControllerInteractiveTransitioning)?
```

## Parameters

- `animator`: The transition animator object returned by your [animationController(forDismissed:)](animationcontroller%28fordismissed_%29.md) method.

<a id="return-value"></a>

## Return Value

The animator object that implements the code needed specifically to manage interactive transitions or `nil` if you do not want to support interactive transitions.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol. The implementation of that protocol should configure the event-handling code required to manage the disappearance of the target view controller. You may return `nil` from this method if you do not want to the animations to be interactive.

> **Important**

>  If you implement this method, you must also implement the [animationController(forDismissed:)](animationcontroller%28fordismissed_%29.md) method and use it to return a custom transition animator object. If the [animationController(forDismissed:)](animationcontroller%28fordismissed_%29.md) method returns `nil`, UIKit does not call this method.

For more information on implementing an interactive animator object, see [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md).

## See Also

### Getting the interactive animator objects

- [interactionControllerForPresentation(using:)](interactioncontrollerforpresentation%28using_%29.md): Asks your delegate for the interactive animator object to use when presenting a view controller.

# interactionControllerForDismissal: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your delegate for the interactive animator object to use when dismissing a view controller.

## Declaration

```objectivec
- (id<UIViewControllerInteractiveTransitioning>) interactionControllerForDismissal:(id<UIViewControllerAnimatedTransitioning>) animator;
```

## Parameters

- `animator`: The transition animator object returned by your [animationControllerForDismissedController:](animationcontroller%28fordismissed_%29.md) method.

<a id="return-value"></a>

## Return Value

The animator object that implements the code needed specifically to manage interactive transitions or `nil` if you do not want to support interactive transitions.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol. The implementation of that protocol should configure the event-handling code required to manage the disappearance of the target view controller. You may return `nil` from this method if you do not want to the animations to be interactive.

> **Important**

>  If you implement this method, you must also implement the [animationControllerForDismissedController:](animationcontroller%28fordismissed_%29.md) method and use it to return a custom transition animator object. If the [animationControllerForDismissedController:](animationcontroller%28fordismissed_%29.md) method returns `nil`, UIKit does not call this method.

For more information on implementing an interactive animator object, see [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md).

## See Also

### Getting the interactive animator objects

- [interactionControllerForPresentation:](interactioncontrollerforpresentation%28using_%29.md): Asks your delegate for the interactive animator object to use when presenting a view controller.
