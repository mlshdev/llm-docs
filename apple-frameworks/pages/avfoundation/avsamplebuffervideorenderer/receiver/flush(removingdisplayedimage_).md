> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/receiver/flush(removingdisplayedimage:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/flush(removingdisplayedimage:))

# flush(removingDisplayedImage:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Instructs the receiver to discard pending enqueued sample buffers and call the provided block when complete. This method suspends until the flush is complete.

## Declaration

```swift
nonisolated(nonsending) func flush(removingDisplayedImage removeDisplayedImage: Bool) async
```

## Parameters

- `removeDisplayedImage`: Set to true to remove any currently displayed image, false to preserve any current image.

<a id="discussion"></a>

## Discussion

A flush resets decoder state. The next frame passed to enqueueSampleBuffer: should be an IDR frame (also known as a key frame or sync sample).

## See Also

### Flushing the receiver

- [flush()](flush%28%29.md): Instructs the receiver to discard pending enqueued sample buffers.
