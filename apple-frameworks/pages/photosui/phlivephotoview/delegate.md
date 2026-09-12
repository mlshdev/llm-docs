> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/delegate](https://developer.apple.com/documentation/photosui/phlivephotoview/delegate)

# delegate (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object to be notified when Live Photo playback begins or ends.

## Declaration

```swift
weak var delegate: (any PHLivePhotoViewDelegate)? { get set }
```

## See Also

### Responding to Playback Events

- [PHLivePhotoViewDelegate](../phlivephotoviewdelegate.md): The [PHLivePhotoViewDelegate](../phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](../phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](delegate.md) property of a Live Photo view.

# delegate (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object to be notified when Live Photo playback begins or ends.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id<PHLivePhotoViewDelegate> delegate;
```

## See Also

### Responding to Playback Events

- [PHLivePhotoViewDelegate](../phlivephotoviewdelegate.md): The [PHLivePhotoViewDelegate](../phlivephotoviewdelegate.md) protocol describes messages sent by a [PHLivePhotoView](../phlivephotoview.md) instance in response to playback events when playing the motion and sound content associated with a Live Photo. To receive these messages, implement the methods in this protocol in one of your controller objects and assign that object to the [delegate](delegate.md) property of a Live Photo view.
