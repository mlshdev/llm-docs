> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/canstoppictureinpicture](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/canstoppictureinpicture)

# canStopPictureInPicture (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

A Boolean value that indicates whether Picture in Picture is active and is able to stop.

## Declaration

```swift
var canStopPictureInPicture: Bool { get }
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

When this value is `true`, calling [stopPictureInPicture()](stoppictureinpicture%28%29.md) stops the active Picture in Picture session. Apps should update the state of UI that starts Picture in Picture when this property value changes.

Thie value is key-value observable.

## See Also

### Controlling Picture in Picture Playback

- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture()](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture()](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState()](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

# canStopPictureInPicture (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

A Boolean value that indicates whether Picture in Picture is active and is able to stop.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canStopPictureInPicture;
```

## Mentioned In

- [Adopting Picture in Picture in a Custom Player](../adopting-picture-in-picture-in-a-custom-player.md)

<a id="Discussion"></a>

## Discussion

When this value is `true`, calling [stopPictureInPicture](stoppictureinpicture%28%29.md) stops the active Picture in Picture session. Apps should update the state of UI that starts Picture in Picture when this property value changes.

Thie value is key-value observable.

## See Also

### Controlling Picture in Picture Playback

- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.
