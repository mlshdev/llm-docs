> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate)

# UIAdaptivePresentationControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.

## Declaration

```swift
@MainActor protocol UIAdaptivePresentationControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

After implementing an object that conforms to this protocol, assign that object to the [delegate](uipresentationcontroller/delegate.md) property of an appropriate [UIPresentationController](uipresentationcontroller.md) object. Your delegate can suggest a new presentation style or an entirely new view controller for displaying content. For more information about using the delegate to respond to size class changes, see [UIPresentationController](uipresentationcontroller.md).

## Topics

### Adapting the presentation style

- [adaptivePresentationStyle(for:traitCollection:)](uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_traitcollection_%29.md): Asks the delegate for the presentation style to use when the specified set of traits are active.
- [adaptivePresentationStyle(for:)](uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md): Asks the delegate for the new presentation style to use.

### Adapting the view controller

- [presentationController(\_:viewControllerForAdaptivePresentationStyle:)](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__viewcontrollerforadaptivepresentationstyle_%29.md): Asks the delegate for the view controller to display when adapting to the specified presentation style.

### Responding to adaptive transitions

- [presentationController(\_:willPresentWithAdaptiveStyle:transitionCoordinator:)](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss(\_:)](uiadaptivepresentationcontrollerdelegate/presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

### Preparing the adaptive presentation controller

- [presentationController(\_:prepare:)](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__prepare_%29.md): Provides an opportunity to configure the adaptive presentation controller after an adaptivity change.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPopoverPresentationControllerDelegate](uipopoverpresentationcontrollerdelegate.md)
- [UISheetPresentationControllerDelegate](uisheetpresentationcontrollerdelegate.md)

## See Also

### Adaptivity

- [UITraitCollection](uitraitcollection.md): A collection of data that represents the environment for an individual element in your app’s user interface.
- [UITraitEnvironment](uitraitenvironment.md): A set of methods that makes the iOS interface environment available to your app.
- [Automatic trait tracking](automatic-trait-tracking.md): Reduce the need to manually register for trait changes when you use traits within a method or closure that supports automatic trait tracking.
- [UIContentContainer](uicontentcontainer.md): A set of methods for adapting the contents of your view controllers to size and trait changes.

# UIAdaptivePresentationControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.

## Declaration

```objectivec
@protocol UIAdaptivePresentationControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

After implementing an object that conforms to this protocol, assign that object to the [delegate](uipresentationcontroller/delegate.md) property of an appropriate [UIPresentationController](uipresentationcontroller.md) object. Your delegate can suggest a new presentation style or an entirely new view controller for displaying content. For more information about using the delegate to respond to size class changes, see [UIPresentationController](uipresentationcontroller.md).

## Topics

### Adapting the presentation style

- [adaptivePresentationStyleForPresentationController:traitCollection:](uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_traitcollection_%29.md): Asks the delegate for the presentation style to use when the specified set of traits are active.
- [adaptivePresentationStyleForPresentationController:](uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle%28for_%29.md): Asks the delegate for the new presentation style to use.

### Adapting the view controller

- [presentationController:viewControllerForAdaptivePresentationStyle:](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__viewcontrollerforadaptivepresentationstyle_%29.md): Asks the delegate for the view controller to display when adapting to the specified presentation style.

### Responding to adaptive transitions

- [presentationController:willPresentWithAdaptiveStyle:transitionCoordinator:](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__willpresentwithadaptivestyle_transitioncoordinator_%29.md): Notifies the delegate that an adaptivity-related transition is about to occur.
- [presentationControllerDidAttemptToDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss:](uiadaptivepresentationcontrollerdelegate/presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

### Preparing the adaptive presentation controller

- [presentationController:prepareAdaptivePresentationController:](uiadaptivepresentationcontrollerdelegate/presentationcontroller%28__prepare_%29.md): Provides an opportunity to configure the adaptive presentation controller after an adaptivity change.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPopoverPresentationControllerDelegate](uipopoverpresentationcontrollerdelegate.md)
- [UISheetPresentationControllerDelegate](uisheetpresentationcontrollerdelegate.md)

## See Also

### Adaptivity

- [UITraitCollection](uitraitcollection.md): A collection of data that represents the environment for an individual element in your app’s user interface.
- [UITraitEnvironment](uitraitenvironment.md): A set of methods that makes the iOS interface environment available to your app.
- [Automatic trait tracking](automatic-trait-tracking.md): Reduce the need to manually register for trait changes when you use traits within a method or closure that supports automatic trait tracking.
- [UIContentContainer](uicontentcontainer.md): A set of methods for adapting the contents of your view controllers to size and trait changes.
