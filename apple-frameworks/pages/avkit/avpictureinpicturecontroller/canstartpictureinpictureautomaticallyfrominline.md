> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/canstartpictureinpictureautomaticallyfrominline](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/canstartpictureinpictureautomaticallyfrominline)

# canStartPictureInPictureAutomaticallyFromInline (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · visionOS 1.0+

A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.

## Declaration

```swift
var canStartPictureInPictureAutomaticallyFromInline: Bool { get set }
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="Discussion"></a>

## Discussion

Only set this value to `true` for content that you intend to be the user’s primary focus.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [startPictureInPicture()](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture()](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState()](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

# canStartPictureInPictureAutomaticallyFromInline (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · visionOS 1.0+

A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.

## Declaration

```objectivec
@property (nonatomic) BOOL canStartPictureInPictureAutomaticallyFromInline;
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="Discussion"></a>

## Discussion

Only set this value to `true` for content that you intend to be the user’s primary focus.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [startPictureInPicture](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.
