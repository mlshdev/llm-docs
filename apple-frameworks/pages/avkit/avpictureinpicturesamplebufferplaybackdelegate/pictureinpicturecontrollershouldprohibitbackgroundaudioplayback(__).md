> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollershouldprohibitbackgroundaudioplayback(_:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollershouldprohibitbackgroundaudioplayback(_:))

# pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate whether to always prohibit background audio playback.

## Declaration

```swift
optional func pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(_ pictureInPictureController: AVPictureInPictureController) -> Bool
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller instance.

<a id="return-value"></a>

## Return Value

`true` if the delegate prohibits background audio playback; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If you implement this method, the system calls it once for each invocation of [invalidatePlaybackState()](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) to determine whether to prohibit audio playback when the Picture in Picture window is in the background.

## See Also

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback(\_:)](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController(\_:skipByInterval:completion:)](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.

# pictureInPictureControllerShouldProhibitBackgroundAudioPlayback: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate whether to always prohibit background audio playback.

## Declaration

```objectivec
- (BOOL) pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller instance.

<a id="return-value"></a>

## Return Value

`true` if the delegate prohibits background audio playback; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If you implement this method, the system calls it once for each invocation of [invalidatePlaybackState](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) to determine whether to prohibit audio playback when the Picture in Picture window is in the background.

## See Also

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback:](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused:](pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:didTransitionToRenderSize:](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController:skipByInterval:completionHandler:](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
