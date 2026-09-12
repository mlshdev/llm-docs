> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontinuitydevicepickerviewcontrollerdelegate](https://developer.apple.com/documentation/avkit/avcontinuitydevicepickerviewcontrollerdelegate)

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

### tvOS playback and capture

- [Customizing the tvOS Playback Experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Presenting Navigation Markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [Working with Interstitial Content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting Content Proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with Overlays and Parental Controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [Supporting Continuity Camera in your tvOS app](supporting-continuity-camera-in-your-tvos-app.md): Capture high-quality photos, video, and audio in your Apple TV app by connecting an iPhone or iPad as a continuity device.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVInterstitialTimeRange](avinterstitialtimerange.md): A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.
- [AVNavigationMarkersGroup](avnavigationmarkersgroup.md): A set of markers for navigating playback of an audiovisual presentation.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.
- [AVDisplayManager](avdisplaymanager.md): A tvOS management object that controls whether a TV switches modes to match the video’s native mode.
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

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

### tvOS playback and capture

- [Customizing the tvOS Playback Experience](customizing-the-tvos-playback-experience.md): Adopt the latest features of the redesigned tvOS player user interface to provide a more streamlined way to watch your content.
- [Presenting Navigation Markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [Working with Interstitial Content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting Content Proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with Overlays and Parental Controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [Supporting Continuity Camera in your tvOS app](supporting-continuity-camera-in-your-tvos-app.md): Capture high-quality photos, video, and audio in your Apple TV app by connecting an iPhone or iPad as a continuity device.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVInterstitialTimeRange](avinterstitialtimerange.md): A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.
- [AVNavigationMarkersGroup](avnavigationmarkersgroup.md): A set of markers for navigating playback of an audiovisual presentation.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.
- [AVDisplayManager](avdisplaymanager.md): A tvOS management object that controls whether a TV switches modes to match the video’s native mode.
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
