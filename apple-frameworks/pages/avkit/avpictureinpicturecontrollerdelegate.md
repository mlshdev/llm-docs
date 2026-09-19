> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate

# AVPictureInPictureControllerDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol to adopt to respond to Picture in Picture events.

## Declaration

```swift
protocol AVPictureInPictureControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object, and assign the object as the [delegate](avpictureinpicturecontroller/delegate.md) of your [AVPictureInPictureController](avpictureinpicturecontroller.md) instance.

## Topics

### Restoring the user interface

- [pictureInPictureController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture stops.

### Responding to Picture in Picture life cycle events

- [pictureInPictureControllerWillStartPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Picture in Picture

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Adopting Picture in Picture playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [AVPictureInPictureController](avpictureinpicturecontroller.md): A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPictureInPictureVideoCallViewController](avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.

# AVPictureInPictureControllerDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol to adopt to respond to Picture in Picture events.

## Declaration

```objectivec
@protocol AVPictureInPictureControllerDelegate <NSObject>
```

## Mentioned In

- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object, and assign the object as the [delegate](avpictureinpicturecontroller/delegate.md) of your [AVPictureInPictureController](avpictureinpicturecontroller.md) instance.

## Topics

### Restoring the user interface

- [pictureInPictureController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture stops.

### Responding to Picture in Picture life cycle events

- [pictureInPictureControllerWillStartPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController:failedToStartPictureInPictureWithError:](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Picture in Picture

- [Adopting Picture in Picture in a standard player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a custom player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Adopting Picture in Picture playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [AVPictureInPictureController](avpictureinpicturecontroller.md): A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPictureInPictureVideoCallViewController](avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.
- [AVPlayerViewPictureInPictureDelegate](avplayerviewpictureinpicturedelegate.md): A protocol that defines the methods to implement to respond to Picture in Picture playback events.
