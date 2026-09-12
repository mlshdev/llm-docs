> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:didtransitiontorendersize:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller(_:didtransitiontorendersize:))

# pictureInPictureController(\_:didTransitionToRenderSize:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate when the system Picture in Picture window changes size.

## Declaration

```swift
func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, didTransitionToRenderSize newRenderSize: CMVideoDimensions)
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `newRenderSize`: The Picture in Picture content’s rendered size, in pixels.

<a id="Discussion"></a>

## Discussion

Take the new render size and the [isPictureInPictureActive](../avpictureinpicturecontroller/ispictureinpictureactive.md) state into account when choosing media variants to avoid uncessary decoding overhead.

## See Also

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback(\_:)](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:skipByInterval:completion:)](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

# pictureInPictureController:didTransitionToRenderSize: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate when the system Picture in Picture window changes size.

## Declaration

```objectivec
- (void) pictureInPictureController:(AVPictureInPictureController *) pictureInPictureController didTransitionToRenderSize:(CMVideoDimensions) newRenderSize;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.
- `newRenderSize`: The Picture in Picture content’s rendered size, in pixels.

<a id="Discussion"></a>

## Discussion

Take the new render size and the [pictureInPictureActive](../avpictureinpicturecontroller/ispictureinpictureactive.md) state into account when choosing media variants to avoid uncessary decoding overhead.

## See Also

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback:](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused:](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:skipByInterval:completionHandler:](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.
