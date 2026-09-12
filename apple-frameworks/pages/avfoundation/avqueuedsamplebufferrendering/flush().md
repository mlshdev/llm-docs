> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/flush()](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/flush())

# flush() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Discards all pending enqueued sample buffers.

## Declaration

```swift
func flush()
```

<a id="Discussion"></a>

## Discussion

It is not possible to determine which sample buffers have been decoded for video. The next frame passed to [enqueue(\_:)](enqueue%28__%29.md) should be an IDR frame (also known as a key frame or sync sample).

# flush (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Discards all pending enqueued sample buffers.

## Declaration

```objectivec
- (void) flush;
```

<a id="Discussion"></a>

## Discussion

It is not possible to determine which sample buffers have been decoded for video. The next frame passed to [enqueueSampleBuffer:](enqueue%28__%29.md) should be an IDR frame (also known as a key frame or sync sample).
