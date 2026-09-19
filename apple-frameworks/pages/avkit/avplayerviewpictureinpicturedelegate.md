> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewpictureinpicturedelegate

# AVPlayerViewPictureInPictureDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol that defines the methods to implement to respond to Picture in Picture playback events.

## Declaration

```swift
protocol AVPlayerViewPictureInPictureDelegate : NSObjectProtocol
```

## Topics

### Responding to Picture in Picture playback events

- [playerViewWillStartPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPicture(inPicture:)](avplayerviewpictureinpicturedelegate/playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView(\_:failedToStartPictureInPictureWithError:)](avplayerviewpictureinpicturedelegate/playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](avplayerviewpictureinpicturedelegate/playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPicture(inPictureStart:)](avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

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
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPictureInPictureVideoCallViewController](avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.

# AVPlayerViewPictureInPictureDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol that defines the methods to implement to respond to Picture in Picture playback events.

## Declaration

```objectivec
@protocol AVPlayerViewPictureInPictureDelegate <NSObject>
```

## Topics

### Responding to Picture in Picture playback events

- [playerViewWillStartPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewwillstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to start.
- [playerViewDidStartPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewdidstartpicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback started.
- [playerViewWillStopPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewwillstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback is about to stop.
- [playerViewDidStopPictureInPicture:](avplayerviewpictureinpicturedelegate/playerviewdidstoppicture%28inpicture_%29.md): Tells the delegate that Picture in Picture playback stopped.
- [playerView:failedToStartPictureInPictureWithError:](avplayerviewpictureinpicturedelegate/playerview%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate that Picture in Picture playback failed to start.
- [playerView:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](avplayerviewpictureinpicturedelegate/playerview%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate to restore the user interface before Picture in Picture playback stops.
- [playerViewShouldAutomaticallyDismissAtPictureInPictureStart:](avplayerviewpictureinpicturedelegate/playerviewshouldautomaticallydismissatpicture%28inpicturestart_%29.md): Asks the delegate if the player view should miniaturize when Picture in Picture starts.

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
- [AVPictureInPictureControllerDelegate](avpictureinpicturecontrollerdelegate.md): A protocol to adopt to respond to Picture in Picture events.
- [AVPictureInPictureSampleBufferPlaybackDelegate](avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
- [AVPictureInPictureVideoCallViewController](avpictureinpicturevideocallviewcontroller.md): A view controller that presents content from a video call in Picture in Picture.
