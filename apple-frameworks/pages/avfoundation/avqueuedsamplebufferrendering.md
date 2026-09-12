> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering)

# AVQueuedSampleBufferRendering (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Methods you can implement to enqueue sample buffers for presentation.

> Use an AVSampleBufferVideoRenderer or AVSampleBufferAudioRenderer with a render synchronizer instead

## Declaration

```swift
protocol AVQueuedSampleBufferRendering : NSObjectProtocol
```

<a id="overview"></a>

## Overview

[AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md) and [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md) conform to this protocol. When used in conjunction with an [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md), an object conforming to `AVQueuedSampleBufferRendering` can only be attached to a single synchronizer.

## Topics

### Requesting media

- [isReadyForMoreMediaData](avqueuedsamplebufferrendering/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueue(\_:)](avqueuedsamplebufferrendering/enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReady(on:using:)](avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData()](avqueuedsamplebufferrendering/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReady(on:using:)](avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md) call.

### Determining playback readiness

- [hasSufficientMediaDataForReliablePlaybackStart](avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqued media meets the required preroll level for reliable playback.

### Clearing queued sample buffers

- [flush()](avqueuedsamplebufferrendering/flush%28%29.md): Deprecated. Discards all pending enqueued sample buffers.

### Indentifying the timebase

- [timebase](avqueuedsamplebufferrendering/timebase.md): Deprecated. The timebase for a renderer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md)
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md)
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md)

## See Also

### Presentation

- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

# AVQueuedSampleBufferRendering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Methods you can implement to enqueue sample buffers for presentation.

## Declaration

```objectivec
@protocol AVQueuedSampleBufferRendering <NSObject>
```

<a id="overview"></a>

## Overview

[AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md) and [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md) conform to this protocol. When used in conjunction with an [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md), an object conforming to `AVQueuedSampleBufferRendering` can only be attached to a single synchronizer.

## Topics

### Requesting media

- [readyForMoreMediaData](avqueuedsamplebufferrendering/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueueSampleBuffer:](avqueuedsamplebufferrendering/enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData](avqueuedsamplebufferrendering/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md) call.

### Determining playback readiness

- [hasSufficientMediaDataForReliablePlaybackStart](avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqued media meets the required preroll level for reliable playback.

### Clearing queued sample buffers

- [flush](avqueuedsamplebufferrendering/flush%28%29.md): Deprecated. Discards all pending enqueued sample buffers.

### Indentifying the timebase

- [timebase](avqueuedsamplebufferrendering/timebase.md): Deprecated. The timebase for a renderer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md)
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md)
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md)

## See Also

### Presentation

- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.
