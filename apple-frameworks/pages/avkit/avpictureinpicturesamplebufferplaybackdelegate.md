> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate](https://developer.apple.com/documentation/avkit/avpictureinpicturesamplebufferplaybackdelegate)

# AVPictureInPictureSampleBufferPlaybackDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol for controlling playback from a sample buffer display layer in Picture in Picture.

## Declaration

```swift
protocol AVPictureInPictureSampleBufferPlaybackDelegate : NSObjectProtocol
```

## Topics

### Responding to Playback Events

- [pictureInPictureController(\_:setPlaying:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback(\_:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused(\_:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController(\_:didTransitionToRenderSize:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController(\_:skipByInterval:completion:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback(\_:)](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Delegate

- [sampleBufferPlaybackDelegate](avpictureinpicturecontroller/contentsource-swift.class/samplebufferplaybackdelegate.md): A delegate object that responds to sample buffer playback events.

# AVPictureInPictureSampleBufferPlaybackDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol for controlling playback from a sample buffer display layer in Picture in Picture.

## Declaration

```objectivec
@protocol AVPictureInPictureSampleBufferPlaybackDelegate <NSObject>
```

## Topics

### Responding to Playback Events

- [pictureInPictureController:setPlaying:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__setplaying_%29.md): Tells the delegate that the user requested to begin or pause playback.
- [pictureInPictureControllerTimeRangeForPlayback:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollertimerangeforplayback%28__%29.md): Asks the delegate for the current playable time range.
- [pictureInPictureControllerIsPlaybackPaused:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollerisplaybackpaused%28__%29.md): Asks delegate to indicate whether the playback UI reflects a playing or paused state, regardless of the current playback rate.
- [pictureInPictureController:didTransitionToRenderSize:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__didtransitiontorendersize_%29.md): Tells the delegate when the system Picture in Picture window changes size.
- [pictureInPictureController:skipByInterval:completionHandler:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontroller%28__skipbyinterval_completion_%29.md): Tells the delegate that the user has requested skipping forward or backward by the indicated time interval.
- [pictureInPictureControllerShouldProhibitBackgroundAudioPlayback:](avpictureinpicturesamplebufferplaybackdelegate/pictureinpicturecontrollershouldprohibitbackgroundaudioplayback%28__%29.md): Asks the delegate whether to always prohibit background audio playback.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Delegate

- [sampleBufferPlaybackDelegate](avpictureinpicturecontroller/contentsource-swift.class/samplebufferplaybackdelegate.md): A delegate object that responds to sample buffer playback events.
