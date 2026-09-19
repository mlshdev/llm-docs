> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturevideocallviewcontroller

# AVPictureInPictureVideoCallViewController (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A view controller that presents content from a video call in Picture in Picture.

## Declaration

```swift
class AVPictureInPictureVideoCallViewController
```

## Mentioned In

- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

> **Important**

>  In iOS 16 and later, you can use the camera in Picture in Picture mode by enabling a capture session’s [isMultitaskingCameraAccessEnabled](../avfoundation/avcapturesession/ismultitaskingcameraaccessenabled.md) property. Apps that have a deployment target earlier than iOS 16 require the [com.apple.developer.avfoundation.multitasking-camera-access](../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement to use the camera in PiP mode.

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Picture in Picture

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Adopting Picture in Picture playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [AVPictureInPictureController](avpictureinpicturecontroller.md): A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

# AVPictureInPictureVideoCallViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A view controller that presents content from a video call in Picture in Picture.

## Declaration

```objectivec
@interface AVPictureInPictureVideoCallViewController : UIViewController
```

## Mentioned In

- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

> **Important**

>  In iOS 16 and later, you can use the camera in Picture in Picture mode by enabling a capture session’s [multitaskingCameraAccessEnabled](../avfoundation/avcapturesession/ismultitaskingcameraaccessenabled.md) property. Apps that have a deployment target earlier than iOS 16 require the [com.apple.developer.avfoundation.multitasking-camera-access](../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement to use the camera in PiP mode.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Picture in Picture

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Adopting Picture in Picture playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [AVPictureInPictureController](avpictureinpicturecontroller.md): A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.
