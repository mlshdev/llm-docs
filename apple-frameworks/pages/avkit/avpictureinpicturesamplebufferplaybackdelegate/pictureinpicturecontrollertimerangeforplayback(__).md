> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollertimerangeforplayback(_:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollertimerangeforplayback(_:))

# pictureInPictureControllerTimeRangeForPlayback(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate for the current playable time range.

## Declaration

```swift
func pictureInPictureControllerTimeRangeForPlayback(_ pictureInPictureController: AVPictureInPictureController) -> CMTimeRange
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.

<a id="return-value"></a>

## Return Value

A [CMTimeRange](../../coremedia/cmtimerange.md) value that defines the content’s time range.

<a id="Discussion"></a>

## Discussion

Use the following guidelines when specifying a time range value:

- For live content, return a time range with a duration of [positiveInfinity](../../coremedia/cmtime/positiveinfinity.md).
- For nonlive content, return a time range that contains the current time of the sample buffer display layer’s timebase.
- When there’s no content to play, return [invalid](../../coremedia/cmtimerange/invalid.md).

The system calls this method whenever you call the [invalidatePlaybackState()](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) method, and at other times as it requires.

## See Also

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController(\_:skipByInterval:completion:)](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

# pictureInPictureControllerTimeRangeForPlayback: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate for the current playable time range.

## Declaration

```objectivec
- (CMTimeRange) pictureInPictureControllerTimeRangeForPlayback:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.

<a id="return-value"></a>

## Return Value

A [CMTimeRange](../../coremedia/cmtimerange.md) value that defines the content’s time range.

<a id="Discussion"></a>

## Discussion

Use the following guidelines when specifying a time range value:

- For live content, return a time range with a duration of [kCMTimePositiveInfinity](../../coremedia/cmtime/positiveinfinity.md).
- For nonlive content, return a time range that contains the current time of the sample buffer display layer’s timebase.
- When there’s no content to play, return [kCMTimeRangeInvalid](../../coremedia/cmtimerange/invalid.md).

The system calls this method whenever you call the [invalidatePlaybackState](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) method, and at other times as it requires.

## See Also

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerIsPlaybackPaused:](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:didTransitionToRenderSize:](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController:skipByInterval:completionHandler:](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.
