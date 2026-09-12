> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller)

# AVPictureInPictureController (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.

## Declaration

```swift
class AVPictureInPictureController
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md)
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

To use Picture in Picture, you need to configure your app to support background audio playback. See [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md) for more details.

Before presenting a user interface to start Picture in Picture, call the [isPictureInPictureSupported()](avpictureinpicturecontroller/ispictureinpicturesupported%28%29.md) method to determine if the current device supports the feature, and check the [isPictureInPicturePossible](avpictureinpicturecontroller/ispictureinpicturepossible.md) property value to determine whether PiP is possible in the current context.

> **Important**

>  The framework doesn’t support subclassing [AVPictureInPictureController](avpictureinpicturecontroller.md).

## Topics

### Creating a Controller

- [init(contentSource:)](avpictureinpicturecontroller/init%28contentsource_%29.md): Creates a Picture in Picture controller with a content source.
- [init(playerLayer:)](avpictureinpicturecontroller/init%28playerlayer_%29.md): Creates a Picture in Picture controller with a player layer.

### Configuring the Content Source

- [contentSource](avpictureinpicturecontroller/contentsource-swift.property.md): The source of the controller’s content.
- [AVPictureInPictureController.ContentSource](avpictureinpicturecontroller/contentsource-swift.class.md): An object that represents the source of the content to present in Picture in Picture.

### Accessing the Player Layer

- [playerLayer](avpictureinpicturecontroller/playerlayer.md): The layer that displays the video content.

### Configuring Playback Behavior

- [requiresLinearPlayback](avpictureinpicturecontroller/requireslinearplayback.md): A Boolean value that determines whether the controller allows the user to skip media content.

### Accessing the Delegate Object

- [delegate](avpictureinpicturecontroller/delegate.md): A delegate object for a Picture in Picture controller.
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.

### Accessing Picture in Picture State

- [isPictureInPictureSupported()](avpictureinpicturecontroller/ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [isPictureInPicturePossible](avpictureinpicturecontroller/ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [isPictureInPictureActive](avpictureinpicturecontroller/ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [isPictureInPictureSuspended](avpictureinpicturecontroller/ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](avpictureinpicturecontroller/canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](avpictureinpicturecontroller/canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture()](avpictureinpicturecontroller/startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture()](avpictureinpicturecontroller/stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState()](avpictureinpicturecontroller/invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

### Retrieving Picture in Picture Template Images

- [pictureInPictureButtonStartImage](avpictureinpicturecontroller/pictureinpicturebuttonstartimage.md): A system-default template image for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImage](avpictureinpicturecontroller/pictureinpicturebuttonstopimage.md): A system-default template image for the button that stops Picture in Picture in your app.
- [pictureInPictureButtonStartImage(compatibleWith:)](avpictureinpicturecontroller/pictureinpicturebuttonstartimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImage(compatibleWith:)](avpictureinpicturecontroller/pictureinpicturebuttonstopimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that stops Picture in Picture in your app.

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

### Picture in Picture

- [Adopting Picture in Picture Playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [Adopting Picture in Picture in a Standard Player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Accessing the camera while multitasking on iPad](accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.

# AVPictureInPictureController (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.

## Declaration

```objectivec
@interface AVPictureInPictureController : NSObject
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md)
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md)

<a id="overview"></a>

## Overview

To use Picture in Picture, you need to configure your app to support background audio playback. See [Configuring your app for media playback](../avfoundation/configuring-your-app-for-media-playback.md) for more details.

Before presenting a user interface to start Picture in Picture, call the [isPictureInPictureSupported](avpictureinpicturecontroller/ispictureinpicturesupported%28%29.md) method to determine if the current device supports the feature, and check the [pictureInPicturePossible](avpictureinpicturecontroller/ispictureinpicturepossible.md) property value to determine whether PiP is possible in the current context.

> **Important**

>  The framework doesn’t support subclassing [AVPictureInPictureController](avpictureinpicturecontroller.md).

## Topics

### Creating a Controller

- [initWithContentSource:](avpictureinpicturecontroller/init%28contentsource_%29.md): Creates a Picture in Picture controller with a content source.
- [initWithPlayerLayer:](avpictureinpicturecontroller/init%28playerlayer_%29.md): Creates a Picture in Picture controller with a player layer.

### Configuring the Content Source

- [contentSource](avpictureinpicturecontroller/contentsource-swift.property.md): The source of the controller’s content.
- [AVPictureInPictureControllerContentSource](avpictureinpicturecontroller/contentsource-swift.class.md): An object that represents the source of the content to present in Picture in Picture.

### Accessing the Player Layer

- [playerLayer](avpictureinpicturecontroller/playerlayer.md): The layer that displays the video content.

### Configuring Playback Behavior

- [requiresLinearPlayback](avpictureinpicturecontroller/requireslinearplayback.md): A Boolean value that determines whether the controller allows the user to skip media content.

### Accessing the Delegate Object

- [delegate](avpictureinpicturecontroller/delegate.md): A delegate object for a Picture in Picture controller.
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.

### Accessing Picture in Picture State

- [isPictureInPictureSupported](avpictureinpicturecontroller/ispictureinpicturesupported%28%29.md): Returns a Boolean value that indicates whether the current device supports Picture in Picture.
- [pictureInPicturePossible](avpictureinpicturecontroller/ispictureinpicturepossible.md): A Boolean value that indicates whether Picture in Picture playback is currently possible.
- [pictureInPictureActive](avpictureinpicturecontroller/ispictureinpictureactive.md): A Boolean value that indicates whether the Picture in Picture window is onscreen.
- [pictureInPictureSuspended](avpictureinpicturecontroller/ispictureinpicturesuspended.md): A Boolean value that indicates whether the system suspends the controller’s Picture in Picture window.

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](avpictureinpicturecontroller/canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](avpictureinpicturecontroller/canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture](avpictureinpicturecontroller/startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture](avpictureinpicturecontroller/stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState](avpictureinpicturecontroller/invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

### Retrieving Picture in Picture Template Images

- [pictureInPictureButtonStartImage](avpictureinpicturecontroller/pictureinpicturebuttonstartimage.md): A system-default template image for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImage](avpictureinpicturecontroller/pictureinpicturebuttonstopimage.md): A system-default template image for the button that stops Picture in Picture in your app.
- [pictureInPictureButtonStartImageCompatibleWithTraitCollection:](avpictureinpicturecontroller/pictureinpicturebuttonstartimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that starts Picture in Picture in your app.
- [pictureInPictureButtonStopImageCompatibleWithTraitCollection:](avpictureinpicturecontroller/pictureinpicturebuttonstopimage%28compatiblewith_%29.md): Returns a system-default template image that’s compatible with a trait collection for the button that stops Picture in Picture in your app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Picture in Picture

- [Adopting Picture in Picture Playback in tvOS](adopting-picture-in-picture-playback-in-tvos.md): Add advanced multitasking capabilities to your video apps by using Picture in Picture playback in tvOS.
- [Adopting Picture in Picture in a Standard Player](adopting-picture-in-picture-in-a-standard-player.md): Add Picture in Picture (PiP) playback to your app using a player view controller.
- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md): Add controls to your custom player user interface to invoke Picture in Picture (PiP) playback.
- [Adopting Picture in Picture for video calls](adopting-picture-in-picture-for-video-calls.md): Add multitasking capability to your video-call apps by using Picture in Picture (PiP).
- [Accessing the camera while multitasking on iPad](accessing-the-camera-while-multitasking-on-ipad.md): Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.
