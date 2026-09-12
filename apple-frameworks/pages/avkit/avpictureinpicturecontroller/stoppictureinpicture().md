> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture()](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture())

# stopPictureInPicture() (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops Picture in Picture, if active.

## Declaration

```swift
func stopPictureInPicture()
```

<a id="Discussion"></a>

## Discussion

Regardless of how Picture in Picture stops, the controller calls the delegate’s [pictureInPictureControllerWillStopPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md) method. When the PiP animation completes, the controller finalizes the session by calling the delegate’s [pictureInPictureControllerDidStopPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md) method.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture()](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [invalidatePlaybackState()](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

# stopPictureInPicture (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Stops Picture in Picture, if active.

## Declaration

```objectivec
- (void) stopPictureInPicture;
```

<a id="Discussion"></a>

## Discussion

Regardless of how Picture in Picture stops, the controller calls the delegate’s [pictureInPictureControllerWillStopPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md) method. When the PiP animation completes, the controller finalizes the session by calling the delegate’s [pictureInPictureControllerDidStopPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md) method.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [startPictureInPicture](startpictureinpicture%28%29.md): Starts Picture in Picture, if possible.
- [invalidatePlaybackState](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.
