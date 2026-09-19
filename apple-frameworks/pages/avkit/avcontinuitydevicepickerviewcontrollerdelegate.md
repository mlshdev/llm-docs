> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontinuitydevicepickerviewcontrollerdelegate

# AVContinuityDevicePickerViewControllerDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+

An interface that responds to events from a continuity device picker view controller.

## Declaration

```swift
protocol AVContinuityDevicePickerViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Your app can respond to the various outcome events from an [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md) instance with the following steps:

1. Adopt the [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md) protocol with one of the app’s classes.
2. Create an instance of that class.
3. Assign that instance to the view controller’s [delegate](avcontinuitydevicepickerviewcontroller/delegate.md) property.

## Topics

### Responding to continuity device events

- [continuityDevicePickerWillBeginPresenting(\_:)](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerwillbeginpresenting%28__%29.md): Informs the delegate that a continuity device picker is about to present its UI so that a person can select and connect a continuity device.
- [continuityDevicePickerDidCancel(\_:)](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerdidcancel%28__%29.md): Informs the delegate when a person declines to select a continuity device by dismissing an app’s continuity device picker.
- [continuityDevicePicker(\_:didConnect:)](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepicker%28__didconnect_%29.md): Informs the delegate when a person selects and connects a continuity device to the system with a continuity device picker.
- [continuityDevicePickerDidEndPresenting(\_:)](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerdidendpresenting%28__%29.md): Informs the delegate that a continuity device picker is no longer presenting its UI to a person.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Continuity Camera

- [Supporting Continuity Camera in your tvOS app](supporting-continuity-camera-in-your-tvos-app.md): Capture high-quality photos, video, and audio in your Apple TV app by connecting an iPhone or iPad as a continuity device.
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.

# AVContinuityDevicePickerViewControllerDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+

An interface that responds to events from a continuity device picker view controller.

## Declaration

```objectivec
@protocol AVContinuityDevicePickerViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Your app can respond to the various outcome events from an [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md) instance with the following steps:

1. Adopt the [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md) protocol with one of the app’s classes.
2. Create an instance of that class.
3. Assign that instance to the view controller’s [delegate](avcontinuitydevicepickerviewcontroller/delegate.md) property.

## Topics

### Responding to continuity device events

- [continuityDevicePickerWillBeginPresenting:](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerwillbeginpresenting%28__%29.md): Informs the delegate that a continuity device picker is about to present its UI so that a person can select and connect a continuity device.
- [continuityDevicePickerDidCancel:](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerdidcancel%28__%29.md): Informs the delegate when a person declines to select a continuity device by dismissing an app’s continuity device picker.
- [continuityDevicePicker:didConnectDevice:](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepicker%28__didconnect_%29.md): Informs the delegate when a person selects and connects a continuity device to the system with a continuity device picker.
- [continuityDevicePickerDidEndPresenting:](avcontinuitydevicepickerviewcontrollerdelegate/continuitydevicepickerdidendpresenting%28__%29.md): Informs the delegate that a continuity device picker is no longer presenting its UI to a person.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Continuity Camera

- [Supporting Continuity Camera in your tvOS app](supporting-continuity-camera-in-your-tvos-app.md): Capture high-quality photos, video, and audio in your Apple TV app by connecting an iPhone or iPad as a continuity device.
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.
