> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewdelegate/livephotoview(_:extraminimumtouchdurationfor:with:)](https://developer.apple.com/documentation/photosui/phlivephotoviewdelegate/livephotoview(_:extraminimumtouchdurationfor:with:))

# livePhotoView(\_:extraMinimumTouchDurationFor:with:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate to offset the timing of a touch.

## Declaration

```swift
optional func livePhotoView(_ livePhotoView: PHLivePhotoView, extraMinimumTouchDurationFor touch: UITouch, with playbackStyle: PHLivePhotoViewPlaybackStyle) -> TimeInterval
```

## Parameters

- `livePhotoView`: The view that ends playback of Live Photos content.
- `touch`: The touch to offset the timing for.
- `playbackStyle`: The style of playback, indicating whether the content plays in full or as a brief preview.

<a id="return-value"></a>

## Return Value

The time interval offset.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView(\_:canBeginPlaybackWith:)](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView(\_:willBeginPlaybackWith:)](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView(\_:didEndPlaybackWith:)](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.

# livePhotoView:extraMinimumTouchDurationForTouch:withStyle: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate to offset the timing of a touch.

## Declaration

```objectivec
- (NSTimeInterval) livePhotoView:(PHLivePhotoView *) livePhotoView extraMinimumTouchDurationForTouch:(UITouch *) touch withStyle:(PHLivePhotoViewPlaybackStyle) playbackStyle;
```

## Parameters

- `livePhotoView`: The view that ends playback of Live Photos content.
- `touch`: The touch to offset the timing for.
- `playbackStyle`: The style of playback, indicating whether the content plays in full or as a brief preview.

<a id="return-value"></a>

## Return Value

The time interval offset.

## See Also

### Responding to Live Photos Playback Events

- [livePhotoView:canBeginPlaybackWithStyle:](livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView:willBeginPlaybackWithStyle:](livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView:didEndPlaybackWithStyle:](livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
