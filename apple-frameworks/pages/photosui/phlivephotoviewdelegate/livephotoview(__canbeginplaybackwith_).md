> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewdelegate/livephotoview(_:canbeginplaybackwith:)](https://developer.apple.com/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:canbeginplaybackwith:))

# livePhotoView(\_:canBeginPlaybackWith:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate to determine whether the Live Photo can begin playback.

## Declaration

```swift
optional func livePhotoView(_ livePhotoView: PHLivePhotoView, canBeginPlaybackWith playbackStyle: PHLivePhotoViewPlaybackStyle) -> Bool
```

## Parameters

- `livePhotoView`: The view requesting whether it can begin the playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content can play in full or as a brief preview.

<a id="return-value"></a>

## Return Value

Whether the playback of Live Photo content can begin.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView(\_:willBeginPlaybackWith:)](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView(\_:didEndPlaybackWith:)](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView(\_:extraMinimumTouchDurationFor:with:)](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.

# livePhotoView:canBeginPlaybackWithStyle: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate to determine whether the Live Photo can begin playback.

## Declaration

```objectivec
- (BOOL) livePhotoView:(PHLivePhotoView *) livePhotoView canBeginPlaybackWithStyle:(PHLivePhotoViewPlaybackStyle) playbackStyle;
```

## Parameters

- `livePhotoView`: The view requesting whether it can begin the playback of Live Photo content.
- `playbackStyle`: The style of playback, indicating whether the content can play in full or as a brief preview.

<a id="return-value"></a>

## Return Value

Whether the playback of Live Photo content can begin.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView:willBeginPlaybackWithStyle:](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView:didEndPlaybackWithStyle:](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView:extraMinimumTouchDurationForTouch:withStyle:](livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.
