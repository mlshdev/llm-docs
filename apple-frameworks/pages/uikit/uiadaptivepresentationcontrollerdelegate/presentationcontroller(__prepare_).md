> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:prepare:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:prepare:))

# presentationController(\_:prepare:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Provides an opportunity to configure the adaptive presentation controller after an adaptivity change.

## Declaration

```swift
optional func presentationController(_ presentationController: UIPresentationController, prepare adaptivePresentationController: UIPresentationController)
```

## Parameters

- `presentationController`: The presentation controller that is managing the adaptivity change.
- `adaptivePresentationController`: The adaptive presentation controller to prepare. Configure this presentation controller’s properties as necessary before it presents.

<a id="Discussion"></a>

## Discussion

The system calls this method during adaptation so the delegate can configure properties of the adaptive presentation controller before it presents.

For example, the system automatically adapts a view controller that presents as a popover in standard size classes to a sheet in compact size classes. You can implement this method to customize the sheet’s properties before it presents.

# presentationController:prepareAdaptivePresentationController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Provides an opportunity to configure the adaptive presentation controller after an adaptivity change.

## Declaration

```objectivec
- (void) presentationController:(UIPresentationController *) presentationController prepareAdaptivePresentationController:(UIPresentationController *) adaptivePresentationController;
```

## Parameters

- `presentationController`: The presentation controller that is managing the adaptivity change.
- `adaptivePresentationController`: The adaptive presentation controller to prepare. Configure this presentation controller’s properties as necessary before it presents.

<a id="Discussion"></a>

## Discussion

The system calls this method during adaptation so the delegate can configure properties of the adaptive presentation controller before it presents.

For example, the system automatically adapts a view controller that presents as a popover in standard size classes to a sheet in compact size classes. You can implement this method to customize the sheet’s properties before it presents.
