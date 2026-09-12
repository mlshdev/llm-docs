> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer)

# AVSampleBufferVideoRenderer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that enqueues video sample buffers for rendering.

## Declaration

```swift
class AVSampleBufferVideoRenderer
```

## Topics

### Flushing the renderer

- [requiresFlushToResumeDecoding](avsamplebuffervideorenderer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [requiresFlushToResumeDecodingDidChangeNotification](avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flush(removingDisplayedImage:completionHandler:)](avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

### Setting presentation time expectations

- [presentationTimeExpectation](avsamplebuffervideorenderer/presentationtimeexpectation-swift.property.md)
- [AVSampleBufferVideoRenderer.PresentationTimeExpectation](avsamplebuffervideorenderer/presentationtimeexpectation-swift.enum.md): Options that specify the expected presentation time stamps of enqueue samples.

### Inspecting the status

- [status](avsamplebuffervideorenderer/status.md): Deprecated. A status value that indicates whether this object can enqueue and render sample buffers.
- [error](avsamplebuffervideorenderer/error.md): Deprecated. An object the describes the error that caused the rendering failure.

### Accessing the pixel buffer

- [displayedPixelBuffer()](avsamplebuffervideorenderer/displayedpixelbuffer%28%29.md)
- [recommendedPixelBufferAttributes](avsamplebuffervideorenderer/recommendedpixelbufferattributes-6zrqb.md): Recommended pixel buffer attributes for optimal performance when using CMSampleBuffers containing CVPixelbuffers.

### Handling decode failures

- [didFailToDecodeNotification](avsamplebuffervideorenderer/didfailtodecodenotification.md): Deprecated. A notification that indicates the video renderer fails to decode a sample buffer.
- [didFailToDecodeNotificationErrorKey](avsamplebuffervideorenderer/didfailtodecodenotificationerrorkey.md): Deprecated. A key to retrieve an error object that provides the details of the failure.

### Capturing performance metrics

- [loadVideoPerformanceMetrics(completionHandler:)](avsamplebuffervideorenderer/loadvideoperformancemetrics%28completionhandler_%29.md)

### Classes

- [AVSampleBufferVideoRenderer.Receiver](avsamplebuffervideorenderer/receiver.md)

### Instance Properties

- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebuffervideorenderer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. Indicates whether the enqueued media data meets the renderer’s preroll level.
- [isReadyForMoreMediaData](avsamplebuffervideorenderer/isreadyformoremediadata.md): Deprecated. Indicates the readiness of the receiver to accept more sample buffers.

### Instance Methods

- [enqueue(\_:)](avsamplebuffervideorenderer/enqueue%28__%29.md): Deprecated. Sends a sample buffer in order to render its contents.
- [flush()](avsamplebuffervideorenderer/flush%28%29.md): Deprecated. Instructs the receiver to discard pending enqueued sample buffers.
- [requestMediaDataWhenReady(on:using:)](avsamplebuffervideorenderer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.
- [stopRequestingMediaData()](avsamplebuffervideorenderer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

# AVSampleBufferVideoRenderer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that enqueues video sample buffers for rendering.

## Declaration

```objectivec
@interface AVSampleBufferVideoRenderer : NSObject
```

## Topics

### Flushing the renderer

- [requiresFlushToResumeDecoding](avsamplebuffervideorenderer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification](avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flushWithRemovalOfDisplayedImage:completionHandler:](avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

### Setting presentation time expectations

- [expectMinimumUpcomingSampleBufferPresentationTime:](avsamplebuffervideorenderer/expectminimumupcomingsamplebufferpresentationtime_.md)
- [expectMonotonicallyIncreasingUpcomingSampleBufferPresentationTimes](avsamplebuffervideorenderer/expectmonotonicallyincreasingupcomingsamplebufferpresentationtimes.md)
- [resetUpcomingSampleBufferPresentationTimeExpectations](avsamplebuffervideorenderer/resetupcomingsamplebufferpresentationtimeexpectations.md)

### Inspecting the status

- [status](avsamplebuffervideorenderer/status.md): Deprecated. A status value that indicates whether this object can enqueue and render sample buffers.
- [error](avsamplebuffervideorenderer/error.md): Deprecated. An object the describes the error that caused the rendering failure.

### Accessing the pixel buffer

- [copyDisplayedPixelBuffer](avsamplebuffervideorenderer/displayedpixelbuffer%28%29.md)
- [recommendedPixelBufferAttributes](avsamplebuffervideorenderer/recommendedpixelbufferattributes-6326f.md): Recommended pixel buffer attributes for optimal performance when using CMSampleBuffers containing CVPixelBuffers.

### Handling decode failures

- [AVSampleBufferVideoRendererDidFailToDecodeNotification](avsamplebuffervideorenderer/didfailtodecodenotification.md): Deprecated. A notification that indicates the video renderer fails to decode a sample buffer.
- [AVSampleBufferVideoRendererDidFailToDecodeNotificationErrorKey](avsamplebuffervideorenderer/didfailtodecodenotificationerrorkey.md): Deprecated. A key to retrieve an error object that provides the details of the failure.

### Capturing performance metrics

- [loadVideoPerformanceMetricsWithCompletionHandler:](avsamplebuffervideorenderer/loadvideoperformancemetrics%28completionhandler_%29.md)

### Instance Properties

- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebuffervideorenderer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. Indicates whether the enqueued media data meets the renderer’s preroll level.
- [readyForMoreMediaData](avsamplebuffervideorenderer/isreadyformoremediadata.md): Deprecated. Indicates the readiness of the receiver to accept more sample buffers.

### Instance Methods

- [enqueueSampleBuffer:](avsamplebuffervideorenderer/enqueue%28__%29.md): Deprecated. Sends a sample buffer in order to render its contents.
- [flush](avsamplebuffervideorenderer/flush%28%29.md): Deprecated. Instructs the receiver to discard pending enqueued sample buffers.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](avsamplebuffervideorenderer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.
- [stopRequestingMediaData](avsamplebuffervideorenderer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md)

## See Also

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.
