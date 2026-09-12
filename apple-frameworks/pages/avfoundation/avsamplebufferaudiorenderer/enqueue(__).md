> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/enqueue(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/enqueue(_:))

# enqueue(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Sends a sample buffer in order to render its contents.

> Attach renderer to a render synchronizer with sampleBufferReceiver(adding:) and use the receiver's enqueue(\_:) async or enqueueImmediately(\_:) methods instead

## Declaration

```swift
func enqueue(_ sampleBuffer: CMSampleBuffer)
```

<a id="discussion"></a>

## Discussion

The audio in the sample buffer is rendered at the sample buffer’s output presentation timestamp, as interpreted by the timebase.

# enqueueSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sends a sample buffer in order to render its contents.

## Declaration

```objectivec
- (void) enqueueSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

<a id="discussion"></a>

## Discussion

The audio in the sample buffer is rendered at the sample buffer’s output presentation timestamp, as interpreted by the timebase.
