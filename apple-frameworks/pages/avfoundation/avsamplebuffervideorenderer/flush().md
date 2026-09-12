> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/flush()](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/flush())

# flush() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Instructs the receiver to discard pending enqueued sample buffers.

> Attach renderer to a render synchronizer with sampleBufferReceiver(adding:) and use the receiver's flush() method instead

## Declaration

```swift
func flush()
```

<a id="discussion"></a>

## Discussion

Additional sample buffers can be appended after -flush.

Video-specific notes:

It is not possible to determine which sample buffers have been decoded, so the next frame passed to enqueueSampleBuffer: should be an IDR frame (also known as a key frame or sync sample).

# flush (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Instructs the receiver to discard pending enqueued sample buffers.

## Declaration

```objectivec
- (void) flush;
```

<a id="discussion"></a>

## Discussion

Additional sample buffers can be appended after -flush.

Video-specific notes:

It is not possible to determine which sample buffers have been decoded, so the next frame passed to enqueueSampleBuffer: should be an IDR frame (also known as a key frame or sync sample).
