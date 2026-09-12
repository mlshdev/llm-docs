> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/requestmediadatawhenready(on:using:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requestmediadatawhenready(on:using:))

# requestMediaDataWhenReady(on:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.

> Attach renderer to a render synchronizer with sampleBufferReceiver(adding:) and use the receiver to enqueue samples on a detached Task instead

## Declaration

```swift
func requestMediaDataWhenReady(on queue: dispatch_queue_t, using block: @escaping @Sendable () -> Void)
```

<a id="discussion"></a>

## Discussion

The block should enqueue sample buffers to the receiver either until the receiver’s readyForMoreMediaData property becomes NO or until there is no more data to supply. When the receiver has decoded enough of the media data it has received that it becomes ready for more media data again, it will invoke the block again in order to obtain more.

If this method is called multiple times, only the last call is effective. Call stopRequestingMediaData to cancel this request.

Each call to requestMediaDataWhenReadyOnQueue:usingBlock: should be paired with a corresponding call to stopRequestingMediaData:. Releasing the AVQueuedSampleBufferRendering object without a call to stopRequestingMediaData will result in undefined behavior.

# requestMediaDataWhenReadyOnQueue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.

## Declaration

```objectivec
- (void) requestMediaDataWhenReadyOnQueue:(dispatch_queue_t) queue usingBlock:(void (^)()) block;
```

<a id="discussion"></a>

## Discussion

The block should enqueue sample buffers to the receiver either until the receiver’s readyForMoreMediaData property becomes NO or until there is no more data to supply. When the receiver has decoded enough of the media data it has received that it becomes ready for more media data again, it will invoke the block again in order to obtain more.

If this method is called multiple times, only the last call is effective. Call stopRequestingMediaData to cancel this request.

Each call to requestMediaDataWhenReadyOnQueue:usingBlock: should be paired with a corresponding call to stopRequestingMediaData:. Releasing the AVQueuedSampleBufferRendering object without a call to stopRequestingMediaData will result in undefined behavior.
