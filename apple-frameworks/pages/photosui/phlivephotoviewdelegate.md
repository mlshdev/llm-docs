> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoviewdelegate](https://developer.apple.com/documentation/photosui/phlivephotoviewdelegate)

# PHLivePhotoViewDelegate (Swift)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](phlivephotoview/delegate.md) property of a Live Photo view.

## Declaration

```swift
@MainActor protocol PHLivePhotoViewDelegate : NSObjectProtocol
```

## Topics

### Responding to Live Photos Playback Events

- [livePhotoView(\_:canBeginPlaybackWith:)](phlivephotoviewdelegate/livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView(\_:willBeginPlaybackWith:)](phlivephotoviewdelegate/livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView(\_:didEndPlaybackWith:)](phlivephotoviewdelegate/livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView(\_:extraMinimumTouchDurationFor:with:)](phlivephotoviewdelegate/livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Playback Events

- [delegate](phlivephotoview/delegate.md): An object to be notified when Live Photo playback begins or ends.

# PHLivePhotoViewDelegate (Objective-C)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The [PHLivePhotoViewDelegate](phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](phlivephotoview/delegate.md) property of a Live Photo view.

## Declaration

```objectivec
@protocol PHLivePhotoViewDelegate <NSObject>
```

## Topics

### Responding to Live Photos Playback Events

- [livePhotoView:canBeginPlaybackWithStyle:](phlivephotoviewdelegate/livephotoview%28__canbeginplaybackwith_%29.md): Notifies the delegate to determine whether the Live Photo can begin playback.
- [livePhotoView:willBeginPlaybackWithStyle:](phlivephotoviewdelegate/livephotoview%28__willbeginplaybackwith_%29.md): Notifies the delegate when Live Photos playback is beginning.
- [livePhotoView:didEndPlaybackWithStyle:](phlivephotoviewdelegate/livephotoview%28__didendplaybackwith_%29.md): Notifies the delegate when Live Photos playback ends.
- [livePhotoView:extraMinimumTouchDurationForTouch:withStyle:](phlivephotoviewdelegate/livephotoview%28__extraminimumtouchdurationfor_with_%29.md): Notifies the delegate to offset the timing of a touch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Playback Events

- [delegate](phlivephotoview/delegate.md): An object to be notified when Live Photo playback begins or ends.
