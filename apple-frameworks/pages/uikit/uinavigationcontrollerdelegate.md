> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontrollerdelegate](https://developer.apple.com/documentation/uikit/uinavigationcontrollerdelegate)

# UINavigationControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for an object that serves as a navigation controller’s delegate.

## Declaration

```swift
@MainActor protocol UINavigationControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use a navigation controller delegate (a custom object that implements this protocol) to modify behavior when a view controller is pushed or popped from the navigation stack of a [UINavigationController](uinavigationcontroller.md) object.

## Topics

### Responding to a view controller being shown

- [navigationController(\_:willShow:animated:)](uinavigationcontrollerdelegate/navigationcontroller%28__willshow_animated_%29.md): Notifies the delegate before the navigation controller displays a view controller’s view and navigation item properties.
- [navigationController(\_:didShow:animated:)](uinavigationcontrollerdelegate/navigationcontroller%28__didshow_animated_%29.md): Notifies the delegate after the navigation controller displays a view controller’s view and navigation item properties.

### Supporting custom transition animations

- [navigationController(\_:animationControllerFor:from:to:)](uinavigationcontrollerdelegate/navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationController(\_:interactionControllerFor:)](uinavigationcontrollerdelegate/navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation(\_:)](uinavigationcontrollerdelegate/navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations(\_:)](uinavigationcontrollerdelegate/navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.

### Constants

- [UINavigationController.Operation](uinavigationcontroller/operation.md): Constants that define the type of navigation controller transitions that can occur.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the navigation interface behavior

- [delegate](uinavigationcontroller/delegate.md): The delegate of the navigation controller object.

# UINavigationControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface for an object that serves as a navigation controller’s delegate.

## Declaration

```objectivec
@protocol UINavigationControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use a navigation controller delegate (a custom object that implements this protocol) to modify behavior when a view controller is pushed or popped from the navigation stack of a [UINavigationController](uinavigationcontroller.md) object.

## Topics

### Responding to a view controller being shown

- [navigationController:willShowViewController:animated:](uinavigationcontrollerdelegate/navigationcontroller%28__willshow_animated_%29.md): Notifies the delegate before the navigation controller displays a view controller’s view and navigation item properties.
- [navigationController:didShowViewController:animated:](uinavigationcontrollerdelegate/navigationcontroller%28__didshow_animated_%29.md): Notifies the delegate after the navigation controller displays a view controller’s view and navigation item properties.

### Supporting custom transition animations

- [navigationController:animationControllerForOperation:fromViewController:toViewController:](uinavigationcontrollerdelegate/navigationcontroller%28__animationcontrollerfor_from_to_%29.md): Allows the delegate to return a noninteractive animator object for use during view controller transitions.
- [navigationController:interactionControllerForAnimationController:](uinavigationcontrollerdelegate/navigationcontroller%28__interactioncontrollerfor_%29.md): Allows the delegate to return an interactive animator object for use during view controller transitions.
- [navigationControllerPreferredInterfaceOrientationForPresentation:](uinavigationcontrollerdelegate/navigationcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the navigation controller, as determined by the delegate.
- [navigationControllerSupportedInterfaceOrientations:](uinavigationcontrollerdelegate/navigationcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the navigation controller, as determined by the delegate.

### Constants

- [UINavigationControllerOperation](uinavigationcontroller/operation.md): Constants that define the type of navigation controller transitions that can occur.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the navigation interface behavior

- [delegate](uinavigationcontroller/delegate.md): The delegate of the navigation controller object.
