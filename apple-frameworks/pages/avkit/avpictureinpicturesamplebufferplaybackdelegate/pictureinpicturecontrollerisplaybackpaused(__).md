> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollerisplaybackpaused(_:)](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollerisplaybackpaused(_:))

# pictureInPictureControllerIsPlaybackPaused(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.

## Declaration

```swift
func pictureInPictureControllerIsPlaybackPaused(_ pictureInPictureController: AVPictureInPictureController) -> Bool
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.

<a id="return-value"></a>

## Return Value

`true` to indicate a paused state, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The system calls this method whenever you call its [invalidatePlaybackState()](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) method, and at other times as it requires.

## See Also

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback(\_:)](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController(\_:skipByInterval:completion:)](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

# pictureInPictureControllerIsPlaybackPaused: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.

## Declaration

```objectivec
- (BOOL) pictureInPictureControllerIsPlaybackPaused:(AVPictureInPictureController *) pictureInPictureController;
```

## Parameters

- `pictureInPictureController`: The Picture in Picture controller.

<a id="return-value"></a>

## Return Value

`true` to indicate a paused state, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The system calls this method whenever you call its [invalidatePlaybackState](../avpictureinpicturecontroller/invalidateplaybackstate%28%29.md) method, and at other times as it requires.

## See Also

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback:](pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureController:didTransitionToRenderSize:](pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController:skipByInterval:completionHandler:](pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.
