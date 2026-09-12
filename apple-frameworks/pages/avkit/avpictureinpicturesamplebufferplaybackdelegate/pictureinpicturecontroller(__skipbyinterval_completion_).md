> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:skipbyinterval:completion:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:skipbyinterval:completion:))

# pictureInPictureController(\_:skipByInterval:completion:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.

## Declaration

```swift
func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, skipByInterval skipInterval: CMTime, completion completionHandler: @escaping @Sendable () -> Void)
```

```swift
func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, skipByInterval skipInterval: CMTime) async
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `skipInterval`: A [CMTime](../../coremedia/cmtime.md) value that indicates the time interval by which to skip.
- `completionHandler`: You must call the completion handler whether your seek operation succeeds or fails. Failing to call the completion handler is an app error and leaves the user interface in a seeking state.

<a id="Discussion"></a>

## Discussion

Your app’s implementation of this method may choose to seek by a different interval for efficiency reasons, such as seeking to a particular key frame or only allowing seeks that fall within the playable timeline.

> **Important**

>  Before calling the completion handler, ensure the seek operation is complete and the timebase reflects the current time and playback rate.

## See Also

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback(\_:)](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

# pictureInPictureController:skipByInterval:completionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.

## Declaration

```objectivec
- (void) pictureInPictureController:(AVPictureInPictureController *) pictureInPictureController skipByInterval:(CMTime) skipInterval completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `skipInterval`: A [CMTime](../../coremedia/cmtime.md) value that indicates the time interval by which to skip.
- `completionHandler`: You must call the completion handler whether your seek operation succeeds or fails. Failing to call the completion handler is an app error and leaves the user interface in a seeking state.

<a id="Discussion"></a>

## Discussion

Your app’s implementation of this method may choose to seek by a different interval for efficiency reasons, such as seeking to a particular key frame or only allowing seeks that fall within the playable timeline.

> **Important**

>  Before calling the completion handler, ensure the seek operation is complete and the timebase reflects the current time and playback rate.

## See Also

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback:](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused:](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:didTransitionToRenderSize:](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.
