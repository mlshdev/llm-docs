> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/startpictureinpicture()](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/startpictureinpicture())

# startPictureInPicture() (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Starts Picture in Picture, if possible.

## Declaration

```swift
func startPictureInPicture()
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="Discussion"></a>

## Discussion

When you call this method and Picture in Picture (PiP) is possible, your delegate receives a call to its [pictureInPictureControllerWillStartPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md) method. After a successful start, your delegate receives a call to the [pictureInPictureControllerDidStartPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md) method.

If PiP fails, your delegate receives a call to the [pictureInPictureController(\_:failedToStartPictureInPictureWithError:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md)method.

Whether you explicitly stop PiP, the user stops it through interaction, or the system stops it, your delegate receives a call to the [pictureInPictureControllerWillStopPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md) method, followed by the [pictureInPictureControllerDidStopPictureInPicture(\_:)](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md) method after the PiP stop animation completes.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [stopPictureInPicture()](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState()](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.

# startPictureInPicture (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Starts Picture in Picture, if possible.

## Declaration

```objectivec
- (void) startPictureInPicture;
```

## Mentioned In

- [Adopting Picture in Picture for video calls](../adopting-picture-in-picture-for-video-calls.md)

<a id="Discussion"></a>

## Discussion

When you call this method and Picture in Picture (PiP) is possible, your delegate receives a call to its [pictureInPictureControllerWillStartPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstartpictureinpicture%28__%29.md) method. After a successful start, your delegate receives a call to the [pictureInPictureControllerDidStartPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstartpictureinpicture%28__%29.md) method.

If PiP fails, your delegate receives a call to the [pictureInPictureController:failedToStartPictureInPictureWithError:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontroller%28__failedtostartpictureinpicturewitherror_%29.md)method.

Whether you explicitly stop PiP, the user stops it through interaction, or the system stops it, your delegate receives a call to the [pictureInPictureControllerWillStopPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerwillstoppictureinpicture%28__%29.md) method, followed by the [pictureInPictureControllerDidStopPictureInPicture:](../avpictureinpicturecontrollerdelegate/pictureinpicturecontrollerdidstoppictureinpicture%28__%29.md) method after the PiP stop animation completes.

## See Also

### Controlling Picture in Picture Playback

- [canStopPictureInPicture](canstoppictureinpicture.md): A Boolean value that indicates whether Picture in Picture is active and is able to stop.
- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when the controller embeds its content inline and the app transitions to the background.
- [stopPictureInPicture](stoppictureinpicture%28%29.md): Stops Picture in Picture, if active.
- [invalidatePlaybackState](invalidateplaybackstate%28%29.md): Invalidates the controller’s current playback state and fetches the updated state from the sample buffer playback delegate object.
