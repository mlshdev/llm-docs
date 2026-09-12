> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avdisplaymanager](https://developer.apple.com/documentation/avkit/avdisplaymanager)

# AVDisplayManager (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A tvOS management object that controls whether a TV switches modes to match the video’s native mode.

## Declaration

```swift
class AVDisplayManager
```

<a id="overview"></a>

## Overview

If you set the display manager’s [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md), when a user enables a Match Content setting, the TV attempts to change modes to match the currently playing video’s native display criteria.

> **Important**

>  Don’t directly instantiate a display manager object. Instead, access the current instance from the key window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) property.

## Topics

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [isDisplayCriteriaMatchingEnabled](avdisplaymanager/isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [isDisplayModeSwitchInProgress](avdisplaymanager/isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.
- [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md): An interface that responds to events from a continuity device picker view controller.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVDisplayManager (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A tvOS management object that controls whether a TV switches modes to match the video’s native mode.

## Declaration

```objectivec
@interface AVDisplayManager : NSObject
```

<a id="overview"></a>

## Overview

If you set the display manager’s [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md), when a user enables a Match Content setting, the TV attempts to change modes to match the currently playing video’s native display criteria.

> **Important**

>  Don’t directly instantiate a display manager object. Instead, access the current instance from the key window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) property.

## Topics

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [displayCriteriaMatchingEnabled](avdisplaymanager/isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [displayModeSwitchInProgress](avdisplaymanager/isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

### Notifications

- [AVDisplayManagerModeSwitchEndNotification](avdisplaymanagermodeswitchendnotification.md): Posted when a display mode switch has completed.
- [AVDisplayManagerModeSwitchSettingsChangedNotification](avdisplaymanagermodeswitchsettingschangednotification.md): Posted when the user settings for display criteria matching have changed.
- [AVDisplayManagerModeSwitchStartNotification](avdisplaymanagermodeswitchstartnotification.md): Posted when a display begins a display mode switch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVContinuityDevicePickerViewController](avcontinuitydevicepickerviewcontroller.md): A view controller that provides an interface to a person so they can select and connect a continuity device to the system.
- [AVContinuityDevicePickerViewControllerDelegate](avcontinuitydevicepickerviewcontrollerdelegate.md): An interface that responds to events from a continuity device picker view controller.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
