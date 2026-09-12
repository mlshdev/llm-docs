> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/invalidateplaybackstate()](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/invalidateplaybackstate())

# invalidatePlaybackState() (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

## Declaration

```swift
func invalidatePlaybackState()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever you start or pause playback and when the underlying content duration changes.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture()](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture()](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.

# invalidatePlaybackState (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

## Declaration

```objectivec
- (void) invalidatePlaybackState;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever you start or pause playback and when the underlying content duration changes.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [stopPictureInPicture](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
