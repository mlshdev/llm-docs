> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioningdelegate](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate)

# UIViewControllerTransitioningDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that vend objects used to manage a fixed-length or interactive transition between view controllers.

## Declaration

```swift
@MainActor protocol UIViewControllerTransitioningDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When you want to present a view controller using a custom modal presentation type, set its [modalPresentationStyle](uiviewcontroller/modalpresentationstyle.md) property to `custom` and assign an object that conforms to this protocol to its [transitioningDelegate](uiviewcontroller/transitioningdelegate.md) property. When you present that view controller, UIKit queries your transitioning delegate for the objects to use when animating the view controller into position.

When implementing your transitioning delegate object, you can return different animator objects depending on whether a view controller is being presented or dismissed. All transitions use a *transition animator object*—an object that conforms to the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) protocol—to implement the basic animations. A transition animator object performs a set of animations over a finite period of time. If you want to use touch input or other user interactions to control the timing of the animation, you can also provide an *interactive animator object*—an object that conforms to the [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) protocol—to update the progress of the animations. You can provide separate animator objects for presenting and dismissing the view controller.

For custom modal transition styles, you can provide a [UIPresentationController](uipresentationcontroller.md) object in addition to the animator objects. The system creates your presentation controller before presenting the view controller and keeps a reference to that object until the view controller is dismissed. Because its existence extends beyond the lifespan of either animator object, you can use the presentation controller to coordinate aspects of the presentation or dismissal process that would be difficult to do otherwise. For example, if your custom transition style involves displaying a separate shadow view as a backdrop to the view controller’s content, the presentation controller can create the shadow view and show it and hide it at the appropriate times.

## Topics

### Getting the transition animator objects

- [animationController(forPresented:presenting:source:)](uiviewcontrollertransitioningdelegate/animationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the transition animator object to use when presenting a view controller.
- [animationController(forDismissed:)](uiviewcontrollertransitioningdelegate/animationcontroller%28fordismissed_%29.md): Asks your delegate for the transition animator object to use when dismissing a view controller.

### Getting the interactive animator objects

- [interactionControllerForPresentation(using:)](uiviewcontrollertransitioningdelegate/interactioncontrollerforpresentation%28using_%29.md): Asks your delegate for the interactive animator object to use when presenting a view controller.
- [interactionControllerForDismissal(using:)](uiviewcontrollertransitioningdelegate/interactioncontrollerfordismissal%28using_%29.md): Asks your delegate for the interactive animator object to use when dismissing a view controller.

### Getting the custom presentation controller

- [presentationController(forPresented:presenting:source:)](uiviewcontrollertransitioningdelegate/presentationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the custom presentation controller to use for managing the view hierarchy when presenting a view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UISearchController](uisearchcontroller.md)

# UIViewControllerTransitioningDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that vend objects used to manage a fixed-length or interactive transition between view controllers.

## Declaration

```objectivec
@protocol UIViewControllerTransitioningDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When you want to present a view controller using a custom modal presentation type, set its [modalPresentationStyle](uiviewcontroller/modalpresentationstyle.md) property to `custom` and assign an object that conforms to this protocol to its [transitioningDelegate](uiviewcontroller/transitioningdelegate.md) property. When you present that view controller, UIKit queries your transitioning delegate for the objects to use when animating the view controller into position.

When implementing your transitioning delegate object, you can return different animator objects depending on whether a view controller is being presented or dismissed. All transitions use a *transition animator object*—an object that conforms to the [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) protocol—to implement the basic animations. A transition animator object performs a set of animations over a finite period of time. If you want to use touch input or other user interactions to control the timing of the animation, you can also provide an *interactive animator object*—an object that conforms to the [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) protocol—to update the progress of the animations. You can provide separate animator objects for presenting and dismissing the view controller.

For custom modal transition styles, you can provide a [UIPresentationController](uipresentationcontroller.md) object in addition to the animator objects. The system creates your presentation controller before presenting the view controller and keeps a reference to that object until the view controller is dismissed. Because its existence extends beyond the lifespan of either animator object, you can use the presentation controller to coordinate aspects of the presentation or dismissal process that would be difficult to do otherwise. For example, if your custom transition style involves displaying a separate shadow view as a backdrop to the view controller’s content, the presentation controller can create the shadow view and show it and hide it at the appropriate times.

## Topics

### Getting the transition animator objects

- [animationControllerForPresentedController:presentingController:sourceController:](uiviewcontrollertransitioningdelegate/animationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the transition animator object to use when presenting a view controller.
- [animationControllerForDismissedController:](uiviewcontrollertransitioningdelegate/animationcontroller%28fordismissed_%29.md): Asks your delegate for the transition animator object to use when dismissing a view controller.

### Getting the interactive animator objects

- [interactionControllerForPresentation:](uiviewcontrollertransitioningdelegate/interactioncontrollerforpresentation%28using_%29.md): Asks your delegate for the interactive animator object to use when presenting a view controller.
- [interactionControllerForDismissal:](uiviewcontrollertransitioningdelegate/interactioncontrollerfordismissal%28using_%29.md): Asks your delegate for the interactive animator object to use when dismissing a view controller.

### Getting the custom presentation controller

- [presentationControllerForPresentedViewController:presentingViewController:sourceViewController:](uiviewcontrollertransitioningdelegate/presentationcontroller%28forpresented_presenting_source_%29.md): Asks your delegate for the custom presentation controller to use for managing the view hierarchy when presenting a view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UISearchController](uisearchcontroller.md)
