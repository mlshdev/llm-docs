> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioningdelegate/interactioncontrollerforpresentation(using:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate/interactioncontrollerforpresentation(using:))

# interactionControllerForPresentation(using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your delegate for the interactive animator object to use when presenting a view controller.

## Declaration

```swift
optional func interactionControllerForPresentation(using animator: any UIViewControllerAnimatedTransitioning) -> (any UIViewControllerInteractiveTransitioning)?
```

## Parameters

- `animator`: The transition animator object returned by your [animationController(forPresented:presenting:source:)](animationcontroller%28forpresented_presenting_source_%29.md) method.

<a id="return-value"></a>

## Return Value

The interactive animator object to use to manage the timing of the transition or `nil` if you do not want to support interactive transitions.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol. The implementation of that protocol should configure the event-handling code required to manage the appearance of the target view controller. You may return `nil` from this method if you do not want to the animations to be interactive.

> **Important**

>  If you implement this method, you must also implement the [animationController(forPresented:presenting:source:)](animationcontroller%28forpresented_presenting_source_%29.md) method and use it to return a custom transition animator object. If the [animationController(forPresented:presenting:source:)](animationcontroller%28forpresented_presenting_source_%29.md) method returns `nil`, UIKit does not call this method.

For more information on implementing an interactive animator object, see [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md).

## See Also

### Getting the interactive animator objects

- [interactionControllerForDismissal(using:)](interactioncontrollerfordismissal%28using_%29.md): Asks your delegate for the interactive animator object to use when dismissing a view controller.

# interactionControllerForPresentation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your delegate for the interactive animator object to use when presenting a view controller.

## Declaration

```objectivec
- (id<UIViewControllerInteractiveTransitioning>) interactionControllerForPresentation:(id<UIViewControllerAnimatedTransitioning>) animator;
```

## Parameters

- `animator`: The transition animator object returned by your [animationControllerForPresentedController:presentingController:sourceController:](animationcontroller%28forpresented_presenting_source_%29.md) method.

<a id="return-value"></a>

## Return Value

The interactive animator object to use to manage the timing of the transition or `nil` if you do not want to support interactive transitions.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md) protocol. The implementation of that protocol should configure the event-handling code required to manage the appearance of the target view controller. You may return `nil` from this method if you do not want to the animations to be interactive.

> **Important**

>  If you implement this method, you must also implement the [animationControllerForPresentedController:presentingController:sourceController:](animationcontroller%28forpresented_presenting_source_%29.md) method and use it to return a custom transition animator object. If the [animationControllerForPresentedController:presentingController:sourceController:](animationcontroller%28forpresented_presenting_source_%29.md) method returns `nil`, UIKit does not call this method.

For more information on implementing an interactive animator object, see [UIViewControllerInteractiveTransitioning](../uiviewcontrollerinteractivetransitioning.md).

## See Also

### Getting the interactive animator objects

- [interactionControllerForDismissal:](interactioncontrollerfordismissal%28using_%29.md): Asks your delegate for the interactive animator object to use when dismissing a view controller.
