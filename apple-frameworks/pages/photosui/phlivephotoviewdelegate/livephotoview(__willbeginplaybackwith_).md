> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewdelegate/livephotoview(_:willbeginplaybackwith:)](https://developer.apple.com/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:willbeginplaybackwith:))

# livePhotoView(\_:willBeginPlaybackWith:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate when Live Photos playback is beginning.

## Declaration

```swift
optional func livePhotoView(_ livePhotoView: PHLivePhotoView, willBeginPlaybackWith playbackStyle: PHLivePhotoViewPlaybackStyle)
```

## Parameters

- `livePhotoView`: The view beginning playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content is to play in full or as a brief preview.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView(\_:canBeginPlaybackWith:)](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView(\_:didEndPlaybackWith:)](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView(\_:extraMinimumTouchDurationFor:with:)](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.

# livePhotoView:willBeginPlaybackWithStyle: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate when Live Photos playback is beginning.

## Declaration

```objectivec
- (void) livePhotoView:(PHLivePhotoView *) livePhotoView willBeginPlaybackWithStyle:(PHLivePhotoViewPlaybackStyle) playbackStyle;
```

## Parameters

- `livePhotoView`: The view beginning playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content is to play in full or as a brief preview.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView:canBeginPlaybackWithStyle:](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView:didEndPlaybackWithStyle:](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView:extraMinimumTouchDurationForTouch:withStyle:](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.
