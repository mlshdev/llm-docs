> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewdelegate/livephotoview(_:didendplaybackwith:)](https://developer.apple.com/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:didendplaybackwith:))

# livePhotoView(\_:didEndPlaybackWith:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate when Live Photos playback ends.

## Declaration

```swift
optional func livePhotoView(_ livePhotoView: PHLivePhotoView, didEndPlaybackWith playbackStyle: PHLivePhotoViewPlaybackStyle)
```

## Parameters

- `livePhotoView`: The view that ended playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content played in full or as a brief preview.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView(\_:canBeginPlaybackWith:)](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView(\_:willBeginPlaybackWith:)](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView(\_:extraMinimumTouchDurationFor:with:)](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.

# livePhotoView:didEndPlaybackWithStyle: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate when Live Photos playback ends.

## Declaration

```objectivec
- (void) livePhotoView:(PHLivePhotoView *) livePhotoView didEndPlaybackWithStyle:(PHLivePhotoViewPlaybackStyle) playbackStyle;
```

## Parameters

- `livePhotoView`: The view that ended playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content played in full or as a brief preview.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView:canBeginPlaybackWithStyle:](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView:willBeginPlaybackWithStyle:](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView:extraMinimumTouchDurationForTouch:withStyle:](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.
