> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer)

# AVSampleBufferAudioRenderer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object used to decompress audio and play compressed or uncompressed audio.

## Declaration

```swift
class AVSampleBufferAudioRenderer
```

## Mentioned In

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

You must add an instance of this class to an [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md) before queuing the first sample buffer.

## Topics

### Determining rendering status

- [status](avsamplebufferaudiorenderer/status.md): Deprecated. The status of the audio renderer.
- [AVQueuedSampleBufferRenderingStatus](avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

### Removing queued buffers

- [flush(fromSourceTime:completionHandler:)](avsamplebufferaudiorenderer/flush%28fromsourcetime_completionhandler_%29.md): Deprecated. Flushes queued sample buffers with presentation time stamps later than or equal to the specified time.
- [AVSampleBufferAudioRendererFlushTimeKey](avsamplebufferaudiorendererflushtimekey.md): Deprecated. The key that indicates the presentation timestamp of the first queued sample that was flushed.

### Configuring time and pitch

- [audioTimePitchAlgorithm](avsamplebufferaudiorenderer/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch at different rates.
- [AVAudioTimePitchAlgorithm](avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

### Configuring audio spatialization

- [allowedAudioSpatializationFormats](avsamplebufferaudiorenderer/allowedaudiospatializationformats.md): The source audio channel layouts the audio renderer supports for spatialization.

### Managing audio output

- [volume](avsamplebufferaudiorenderer/volume.md): The current audio volume for the audio renderer.
- [isMuted](avsamplebufferaudiorenderer/ismuted.md): A Boolean value that indicates whether audio for the renderer is in a muted state.
- [audioOutputDeviceUniqueID](avsamplebufferaudiorenderer/audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.

### Responding to errors

- [error](avsamplebufferaudiorenderer/error.md): Deprecated. The error that caused the renderer to no longer render sample buffers.

### Classes

- [AVSampleBufferAudioRenderer.Receiver](avsamplebufferaudiorenderer/receiver.md)

### Instance Properties

- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebufferaudiorenderer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. Indicates whether the enqueued media data meets the renderer’s preroll level.
- [isReadyForMoreMediaData](avsamplebufferaudiorenderer/isreadyformoremediadata.md): Deprecated. Indicates the readiness of the receiver to accept more sample buffers.

### Instance Methods

- [enqueue(\_:)](avsamplebufferaudiorenderer/enqueue%28__%29.md): Deprecated. Sends a sample buffer in order to render its contents.
- [flush()](avsamplebufferaudiorenderer/flush%28%29.md): Deprecated. Instructs the receiver to discard pending enqueued sample buffers.
- [requestMediaDataWhenReady(on:using:)](avsamplebufferaudiorenderer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.
- [stopRequestingMediaData()](avsamplebufferaudiorenderer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

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
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.

# AVSampleBufferAudioRenderer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object used to decompress audio and play compressed or uncompressed audio.

## Declaration

```objectivec
@interface AVSampleBufferAudioRenderer : NSObject
```

## Mentioned In

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

You must add an instance of this class to an [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md) before queuing the first sample buffer.

## Topics

### Determining rendering status

- [status](avsamplebufferaudiorenderer/status.md): Deprecated. The status of the audio renderer.
- [AVQueuedSampleBufferRenderingStatus](avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

### Removing queued buffers

- [flushFromSourceTime:completionHandler:](avsamplebufferaudiorenderer/flush%28fromsourcetime_completionhandler_%29.md): Deprecated. Flushes queued sample buffers with presentation time stamps later than or equal to the specified time.
- [AVSampleBufferAudioRendererFlushTimeKey](avsamplebufferaudiorendererflushtimekey.md): Deprecated. The key that indicates the presentation timestamp of the first queued sample that was flushed.

### Configuring time and pitch

- [audioTimePitchAlgorithm](avsamplebufferaudiorenderer/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch at different rates.
- [AVAudioTimePitchAlgorithm](avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

### Configuring audio spatialization

- [allowedAudioSpatializationFormats](avsamplebufferaudiorenderer/allowedaudiospatializationformats.md): The source audio channel layouts the audio renderer supports for spatialization.

### Managing audio output

- [volume](avsamplebufferaudiorenderer/volume.md): The current audio volume for the audio renderer.
- [muted](avsamplebufferaudiorenderer/ismuted.md): A Boolean value that indicates whether audio for the renderer is in a muted state.
- [audioOutputDeviceUniqueID](avsamplebufferaudiorenderer/audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.

### Responding to errors

- [error](avsamplebufferaudiorenderer/error.md): Deprecated. The error that caused the renderer to no longer render sample buffers.

### Instance Properties

- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebufferaudiorenderer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. Indicates whether the enqueued media data meets the renderer’s preroll level.
- [readyForMoreMediaData](avsamplebufferaudiorenderer/isreadyformoremediadata.md): Deprecated. Indicates the readiness of the receiver to accept more sample buffers.

### Instance Methods

- [enqueueSampleBuffer:](avsamplebufferaudiorenderer/enqueue%28__%29.md): Deprecated. Sends a sample buffer in order to render its contents.
- [flush](avsamplebufferaudiorenderer/flush%28%29.md): Deprecated. Instructs the receiver to discard pending enqueued sample buffers.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](avsamplebufferaudiorenderer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for playback.
- [stopRequestingMediaData](avsamplebufferaudiorenderer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current requestMediaDataWhenReadyOnQueue:usingBlock: call.

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
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
