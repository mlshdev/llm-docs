> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontrollerdelegate](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate)

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
- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object, and assign the object as the [delegate](avpictureinpicturecontroller/delegate.md) of your [AVPictureInPictureController](avpictureinpicturecontroller.md) instance.

## Topics

### Restoring the User Interface

- [pictureInPictureController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture stops.

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture(\_:)](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the Delegate Object

- [delegate](avpictureinpicturecontroller/delegate.md): A delegate object for a Picture in Picture controller.

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
- [Adopting Picture in Picture in a Custom Player](adopting-picture-in-picture-in-a-custom-player.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a custom object, and assign the object as the [delegate](avpictureinpicturecontroller/delegate.md) of your [AVPictureInPictureController](avpictureinpicturecontroller.md) instance.

## Topics

### Restoring the User Interface

- [pictureInPictureController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture stops.

### Responding to Picture in Picture Lifecycle Events

- [pictureInPictureControllerWillStartPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to start.
- [pictureInPictureControllerDidStartPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate that Picture in Picture started.
- [pictureInPictureController:failedToStartPictureInPictureWithError:](avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture failed to start.
- [pictureInPictureControllerWillStopPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture is about to stop.
- [pictureInPictureControllerDidStopPictureInPicture:](avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate that Picture in Picture stopped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing the Delegate Object

- [delegate](avpictureinpicturecontroller/delegate.md): A delegate object for a Picture in Picture controller.
