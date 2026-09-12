> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontrollerdelegate](https://developer.apple.com/documentation/appkit/nspagecontrollerdelegate)

# NSPageControllerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSPageControllerDelegate` protocol allows you to customize the behavior of instances of the NSPageController class.

## Declaration

```swift
protocol NSPageControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

See [NSPageController](nspagecontroller.md) for more information.

> **Note**

>  If your page controller is going to completely manage the page snapshots, then you should not implement the [pageController(\_:viewControllerForIdentifier:)](nspagecontrollerdelegate/pagecontroller%28__viewcontrollerforidentifier_%29.md) or [pageController(\_:prepare:with:)](nspagecontrollerdelegate/pagecontroller%28__prepare_with_%29.md) methods.
>
> However, if you manually set the `NSPageController` instance’s [arrangedObjects](nspagecontroller/arrangedobjects.md) property, you are required to implement the following those methods so that navigation can properly occur.

## Topics

### Transition Notification

- [pageControllerWillStartLiveTransition(\_:)](nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageControllerDidEndLiveTransition(\_:)](nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.
- [pageController(\_:didTransitionTo:)](nspagecontrollerdelegate/pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.

### Managing View Controllers

- [pageController(\_:identifierFor:)](nspagecontrollerdelegate/pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController(\_:viewControllerForIdentifier:)](nspagecontrollerdelegate/pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController(\_:prepare:with:)](nspagecontrollerdelegate/pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController(\_:frameFor:)](nspagecontrollerdelegate/pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageController.ObjectIdentifier](nspagecontroller/objectidentifier.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Customizing the Paged Interface Behavior

- [delegate](nspagecontroller/delegate.md): The page controller’s delegate object.

# NSPageControllerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSPageControllerDelegate` protocol allows you to customize the behavior of instances of the NSPageController class.

## Declaration

```objectivec
@protocol NSPageControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

See [NSPageController](nspagecontroller.md) for more information.

> **Note**

>  If your page controller is going to completely manage the page snapshots, then you should not implement the [pageController:viewControllerForIdentifier:](nspagecontrollerdelegate/pagecontroller%28__viewcontrollerforidentifier_%29.md) or [pageController:prepareViewController:withObject:](nspagecontrollerdelegate/pagecontroller%28__prepare_with_%29.md) methods.
>
> However, if you manually set the `NSPageController` instance’s [arrangedObjects](nspagecontroller/arrangedobjects.md) property, you are required to implement the following those methods so that navigation can properly occur.

## Topics

### Transition Notification

- [pageControllerWillStartLiveTransition:](nspagecontrollerdelegate/pagecontrollerwillstartlivetransition%28__%29.md): This message is sent when the user begins a transition.
- [pageControllerDidEndLiveTransition:](nspagecontrollerdelegate/pagecontrollerdidendlivetransition%28__%29.md): This message is sent when a transition animation completes.
- [pageController:didTransitionToObject:](nspagecontrollerdelegate/pagecontroller%28__didtransitionto_%29.md): This message is sent when any page transition is completed.

### Managing View Controllers

- [pageController:identifierForObject:](nspagecontrollerdelegate/pagecontroller%28__identifierfor_%29.md): Return the identifier of the view controller that owns a view to display the object.
- [pageController:viewControllerForIdentifier:](nspagecontrollerdelegate/pagecontroller%28__viewcontrollerforidentifier_%29.md): Returns a view controller the page controller uses for managing the specified identifier.
- [pageController:prepareViewController:withObject:](nspagecontrollerdelegate/pagecontroller%28__prepare_with_%29.md): Prepare the view controller and it’s view for drawing.
- [pageController:frameForObject:](nspagecontrollerdelegate/pagecontroller%28__framefor_%29.md): Returns the frame appropriate for displaying the specified object.
- [NSPageControllerObjectIdentifier](nspagecontroller/objectidentifier.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Customizing the Paged Interface Behavior

- [delegate](nspagecontroller/delegate.md): The page controller’s delegate object.
