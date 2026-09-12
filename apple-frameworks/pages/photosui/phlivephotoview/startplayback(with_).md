> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/startplayback(with:)](https://developer.apple.com/documentation/photosui/phlivephotoview/startplayback(with:))

# startPlayback(with:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Begins playback of Live Photo content in the view.

## Declaration

```swift
func startPlayback(with playbackStyle: PHLivePhotoViewPlaybackStyle)
```

## Parameters

- `playbackStyle`: An option for how much of the Live Photo’s motion and sound content to play. See [PHLivePhotoViewPlaybackStyle](../phlivephotoviewplaybackstyle.md).

## Mentioned In

- [Displaying Live Photos](../../photokit/displaying-live-photos.md)

<a id="Discussion"></a>

## Discussion

Use the `playbackStyle` parameter to choose whether to play the full motion and sound content of the Live Photo or only a brief section.

Typically, an app does not need to directly control playback, because a Live Photo view provides interactive playback control. Use this method only when non-interactive playback is appropriate—for example, to briefly animate the content to indicate that a view contains a Live Photo rather than a still image.

## See Also

### Manually Playing Live Photo Content

- [stopPlayback()](stopplayback%28%29.md): Stops playback of a Live Photo.
- [stopPlayback(animated:)](stopplayback%28animated_%29.md): Stops playback of a Live Photo in an animated manner.

# startPlaybackWithStyle: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Begins playback of Live Photo content in the view.

## Declaration

```objectivec
- (void) startPlaybackWithStyle:(PHLivePhotoViewPlaybackStyle) playbackStyle;
```

## Parameters

- `playbackStyle`: An option for how much of the Live Photo’s motion and sound content to play. See [PHLivePhotoViewPlaybackStyle](../phlivephotoviewplaybackstyle.md).

## Mentioned In

- [Displaying Live Photos](../../photokit/displaying-live-photos.md)

<a id="Discussion"></a>

## Discussion

Use the `playbackStyle` parameter to choose whether to play the full motion and sound content of the Live Photo or only a brief section.

Typically, an app does not need to directly control playback, because a Live Photo view provides interactive playback control. Use this method only when non-interactive playback is appropriate—for example, to briefly animate the content to indicate that a view contains a Live Photo rather than a still image.

## See Also

### Manually Playing Live Photo Content

- [stopPlayback](stopplayback%28%29.md): Stops playback of a Live Photo.
- [stopPlaybackAnimated:](stopplayback%28animated_%29.md): Stops playback of a Live Photo in an animated manner.
