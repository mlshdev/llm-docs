> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioningdelegate/animationcontroller(fordismissed:)](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate/animationcontroller(fordismissed:))

# animationController(forDismissed:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks your delegate for the transition animator object to use when dismissing a view controller.

## Declaration

```swift
optional func animationController(forDismissed dismissed: UIViewController) -> (any UIViewControllerAnimatedTransitioning)?
```

## Parameters

- `dismissed`: The view controller object that is about to be dismissed.

<a id="return-value"></a>

## Return Value

The animator object to use when dismissing the view controller or `nil` if you do not want to dismiss the view controller using a custom transition. The object you return should be capable of performing a fixed-length animation that is not interactive.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol. Your implementation of that protocol must animate the disappearance of the `dismissed` view controller’s view from the screen. Use the `dismissed` parameter to initialize your object or perform any tasks necessary to prepare the transition animations. You may return `nil` from this method if you do not want to implement a custom transition animation when dismissing view controllers.

> **Note**

>  You must implement this method if you also plan to use an interactive animator object to manage the disappearance of the view controller. The animator object returned by this method is responsible for executing the animations. The interactive animator object manages only the timing of the animation, not the animations themselves.

For more information on implementing a transition animator object, see [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md).

## See Also

### Getting the transition animator objects

- [animationController(forPresented:presenting:source:)](animationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the transition animator object to use when presenting a view controller.

# animationControllerForDismissedController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your delegate for the transition animator object to use when dismissing a view controller.

## Declaration

```objectivec
- (id<UIViewControllerAnimatedTransitioning>) animationControllerForDismissedController:(UIViewController *) dismissed;
```

## Parameters

- `dismissed`: The view controller object that is about to be dismissed.

<a id="return-value"></a>

## Return Value

The animator object to use when dismissing the view controller or `nil` if you do not want to dismiss the view controller using a custom transition. The object you return should be capable of performing a fixed-length animation that is not interactive.

<a id="Discussion"></a>

## Discussion

Use this method to create and return an object that implements the methods of the [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md) protocol. Your implementation of that protocol must animate the disappearance of the `dismissed` view controller’s view from the screen. Use the `dismissed` parameter to initialize your object or perform any tasks necessary to prepare the transition animations. You may return `nil` from this method if you do not want to implement a custom transition animation when dismissing view controllers.

> **Note**

>  You must implement this method if you also plan to use an interactive animator object to manage the disappearance of the view controller. The animator object returned by this method is responsible for executing the animations. The interactive animator object manages only the timing of the animation, not the animations themselves.

For more information on implementing a transition animator object, see [UIViewControllerAnimatedTransitioning](../uiviewcontrolleranimatedtransitioning.md).

## See Also

### Getting the transition animator objects

- [animationControllerForPresentedController:presentingController:sourceController:](animationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the transition animator object to use when presenting a view controller.
