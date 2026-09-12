> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:setplaying:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:setplaying:))

# pictureInPictureController(\_:setPlaying:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate that the user requested to begin or pause playback.

## Declaration

```swift
func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, setPlaying playing: Bool)
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `playing`: A Boolean value that indicates whether to begin or pause playback.

## See Also

### Responding to Playback Events

- [pictureInPictureControllerTimeRangeForPlayback(\_:)](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController(\_:skipByInterval:completion:)](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

# pictureInPictureController:setPlaying: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate that the user requested to begin or pause playback.

## Declaration

```objectivec
- (void) pictureInPictureController:(AVPictureInPictureController *) pictureInPictureController setPlaying:(BOOL) playing;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `playing`: A Boolean value that indicates whether to begin or pause playback.

## See Also

### Responding to Playback Events

- [pictureInPictureControllerTimeRangeForPlayback:](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused:](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:didTransitionToRenderSize:](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController:skipByInterval:completionHandler:](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.
