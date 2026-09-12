> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer-deprecated-symbols](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Initiating media data requests

- [requestMediaDataWhenReady(on:using:)](avsamplebufferdisplaylayer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [isReadyForMoreMediaData](avsamplebufferdisplaylayer/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](avsamplebufferdisplaylayer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData()](avsamplebufferdisplaylayer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

### Flushing sample buffers

- [flush()](avsamplebufferdisplaylayer/flush%28%29.md): Deprecated. Instructs the layer to discard any enqueued sample buffers that are pending.
- [flushAndRemoveImage()](avsamplebufferdisplaylayer/flushandremoveimage%28%29.md): Deprecated. Instructs the layer to discard pending enqueued sample buffers and remove any currently displayed image.

### Configuring the timebase

- [timebase](avsamplebufferdisplaylayer/timebase.md): Deprecated. The renderer’s timebase, which determines how the layer interprets time stamps.

### Enqueuing the sample buffer

- [enqueue(\_:)](avsamplebufferdisplaylayer/enqueue%28__%29.md): Deprecated. Sends a sample buffer for display.

### Getting display layer settings

- [status](avsamplebufferdisplaylayer/status.md): Deprecated. The ability of the display layer to be used for enqueuing sample buffers.
- [AVQueuedSampleBufferRenderingStatus](avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

### Handling errors

- [error](avsamplebufferdisplaylayer/error.md): Deprecated. The error that caused the failure.

# Deprecated symbols (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Initiating media data requests

- [requestMediaDataWhenReadyOnQueue:usingBlock:](avsamplebufferdisplaylayer/requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [readyForMoreMediaData](avsamplebufferdisplaylayer/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](avsamplebufferdisplaylayer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData](avsamplebufferdisplaylayer/stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

### Flushing sample buffers

- [flush](avsamplebufferdisplaylayer/flush%28%29.md): Deprecated. Instructs the layer to discard any enqueued sample buffers that are pending.
- [flushAndRemoveImage](avsamplebufferdisplaylayer/flushandremoveimage%28%29.md): Deprecated. Instructs the layer to discard pending enqueued sample buffers and remove any currently displayed image.

### Configuring the timebase

- [timebase](avsamplebufferdisplaylayer/timebase.md): Deprecated. The renderer’s timebase, which determines how the layer interprets time stamps.

### Enqueuing the sample buffer

- [enqueueSampleBuffer:](avsamplebufferdisplaylayer/enqueue%28__%29.md): Deprecated. Sends a sample buffer for display.

### Getting display layer settings

- [status](avsamplebufferdisplaylayer/status.md): Deprecated. The ability of the display layer to be used for enqueuing sample buffers.
- [AVQueuedSampleBufferRenderingStatus](avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

### Handling errors

- [error](avsamplebufferdisplaylayer/error.md): Deprecated. The error that caused the failure.
