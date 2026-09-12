> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/flushandremoveimage()](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/flushandremoveimage())

# flushAndRemoveImage() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Instructs the layer to discard pending enqueued sample buffers and remove any currently displayed image.

> Use sampleBufferRenderer's flushWithRemovalOfDisplayedImage:completionHandler: instead

## Declaration

```swift
func flushAndRemoveImage()
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [flush(removingDisplayedImage:completionHandler:)](../avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

It is not possible to determine which sample buffers have been decoded, so the next frame passed to [enqueue(\_:)](enqueue%28__%29.md) should be an IDR frame (also known as a key frame or sync sample).

## See Also

### Flushing sample buffers

- [flush()](flush%28%29.md): Deprecated. Instructs the layer to discard any enqueued sample buffers that are pending.

# flushAndRemoveImage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Instructs the layer to discard pending enqueued sample buffers and remove any currently displayed image.

> Use sampleBufferRenderer's flushWithRemovalOfDisplayedImage:completionHandler: instead

## Declaration

```objectivec
- (void) flushAndRemoveImage;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [flushWithRemovalOfDisplayedImage:completionHandler:](../avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

It is not possible to determine which sample buffers have been decoded, so the next frame passed to [enqueueSampleBuffer:](enqueue%28__%29.md) should be an IDR frame (also known as a key frame or sync sample).

## See Also

### Flushing sample buffers

- [flush](flush%28%29.md): Deprecated. Instructs the layer to discard any enqueued sample buffers that are pending.
