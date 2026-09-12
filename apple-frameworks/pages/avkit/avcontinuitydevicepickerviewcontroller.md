> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontinuitydevicepickerviewcontroller](https://developer.apple.com/documentation/avkit/avcontinuitydevicepickerviewcontroller)

# AVContinuityDevicePickerViewController (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 17.0+

A view controller that provides an interface to a person so they can select and connect a continuity device to the system.

## Declaration

```swift
class AVContinuityDevicePickerViewController
```

<a id="overview"></a>

## Overview

The view controller presents an interface on an Apple TV that lets a person choose a nearby continuity device ([AVContinuityDevice](../avfoundation/avcontinuitydevice.md)). Your app can then connect to that device’s cameras and microphones (see [AVCaptureDevice](../avfoundation/avcapturedevice.md) and [AVAudioSessionPortDescription](../avfaudio/avaudiosessionportdescription.md), respectively).

> **Important**

>  The continuity device picker presents any devices near the Apple TV that use the same Apple ID.

To respond to the various outcome events from the picker, your app needs to implement the [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md) and assign it to the picker’s [delegate](avcontinuitydevicepickerviewcontroller/delegate.md) property.

> **Note**

>  SwiftUI apps can present the same interface with the [continuityDevicePicker(isPresented:onDidConnect:)](https://developer.apple.com/documentation/swiftui/view/continuitydevicepicker%28ispresented:ondidconnect:%29) view modifier.

## Topics

### Checking for feature support

- [isSupported](avcontinuitydevicepickerviewcontroller/issupported.md): A Boolean value that indicates whether the system supports connecting to a continuity device.

### Designating a delegate

- [delegate](avcontinuitydevicepickerviewcontroller/delegate.md): The delegate that responds to events from the continuity device picker view controller.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

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
- [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md): An interface that responds to events from a continuity device picker view controller.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVContinuityDevicePickerViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 17.0+

A view controller that provides an interface to a person so they can select and connect a continuity device to the system.

## Declaration

```objectivec
@interface AVContinuityDevicePickerViewController : UIViewController
```

<a id="overview"></a>

## Overview

The view controller presents an interface on an Apple TV that lets a person choose a nearby continuity device ([AVContinuityDevice](../avfoundation/avcontinuitydevice.md)). Your app can then connect to that device’s cameras and microphones (see [AVCaptureDevice](../avfoundation/avcapturedevice.md) and [AVAudioSessionPortDescription](../avfaudio/avaudiosessionportdescription.md), respectively).

> **Important**

>  The continuity device picker presents any devices near the Apple TV that use the same Apple ID.

To respond to the various outcome events from the picker, your app needs to implement the [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md) and assign it to the picker’s [delegate](avcontinuitydevicepickerviewcontroller/delegate.md) property.

> **Note**

>  SwiftUI apps can present the same interface with the [continuityDevicePicker(isPresented:onDidConnect:)](https://developer.apple.com/documentation/swiftui/view/continuitydevicepicker%28ispresented:ondidconnect:%29) view modifier.

## Topics

### Checking for feature support

- [supported](avcontinuitydevicepickerviewcontroller/issupported.md): A Boolean value that indicates whether the system supports connecting to a continuity device.

### Designating a delegate

- [delegate](avcontinuitydevicepickerviewcontroller/delegate.md): The delegate that responds to events from the continuity device picker view controller.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

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
- [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md): An interface that responds to events from a continuity device picker view controller.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
