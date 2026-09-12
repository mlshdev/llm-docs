> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontrollerdelegate](https://developer.apple.com/documentation/safariservices/sfsafariviewcontrollerdelegate)

# SFSafariViewControllerDelegate (Swift)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A protocol used to implement custom event handling for a Safari view controller.

## Declaration

```swift
protocol SFSafariViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

For more information about the `SFSafariViewController` class, see [SFSafariViewController](sfsafariviewcontroller.md).

## Topics

### Working with the View Controller

- [safariViewController(\_:didCompleteInitialLoad:)](sfsafariviewcontrollerdelegate/safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController(\_:activityItemsFor:title:)](sfsafariviewcontrollerdelegate/safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish(\_:)](sfsafariviewcontrollerdelegate/safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController(\_:excludedActivityTypesFor:title:)](sfsafariviewcontrollerdelegate/safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)

### Instance Methods

- [safariViewController(\_:initialLoadDidRedirectTo:)](sfsafariviewcontrollerdelegate/safariviewcontroller%28__initialloaddidredirectto_%29.md)
- [safariViewControllerWillOpenInBrowser(\_:)](sfsafariviewcontrollerdelegate/safariviewcontrollerwillopeninbrowser%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to View Controller Interaction

- [delegate](sfsafariviewcontroller/delegate.md): An object that provides behavior for the Safari view controller’s Done and Action buttons.

# SFSafariViewControllerDelegate (Objective-C)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A protocol used to implement custom event handling for a Safari view controller.

## Declaration

```objectivec
@protocol SFSafariViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

For more information about the `SFSafariViewController` class, see [SFSafariViewController](sfsafariviewcontroller.md).

## Topics

### Working with the View Controller

- [safariViewController:didCompleteInitialLoad:](sfsafariviewcontrollerdelegate/safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController:activityItemsForURL:title:](sfsafariviewcontrollerdelegate/safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish:](sfsafariviewcontrollerdelegate/safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController:excludedActivityTypesForURL:title:](sfsafariviewcontrollerdelegate/safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)

### Instance Methods

- [safariViewController:initialLoadDidRedirectToURL:](sfsafariviewcontrollerdelegate/safariviewcontroller%28__initialloaddidredirectto_%29.md)
- [safariViewControllerWillOpenInBrowser:](sfsafariviewcontrollerdelegate/safariviewcontrollerwillopeninbrowser%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to View Controller Interaction

- [delegate](sfsafariviewcontroller/delegate.md): An object that provides behavior for the Safari view controller’s Done and Action buttons.
