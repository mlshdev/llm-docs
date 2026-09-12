> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/markasfinished()](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/markasfinished())

# markAsFinished() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Marks the input as finished to indicate that you’re done appending samples to it.

## Declaration

```swift
func markAsFinished()
```

<a id="Discussion"></a>

## Discussion

Apps that monitor an input’s [isReadyForMoreMediaData](isreadyformoremediadata.md) value must call this method when they finish appending to it. This is necessary to prevent other inputs from stalling because they’re waiting on the input’s media data to complete the ideal interleaving pattern.

After calling this method from the serial queue passed to [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md), the input issues no more invocations of the callback it passes to that method.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [append(\_:)](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [AVAssetWriterInput.SampleBufferReceiver](samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.MetadataReceiver](metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
- [AVAssetWriterInput.CaptionReceiver](captionreceiver.md): Provides an interface for writing caption data to an input.

# markAsFinished (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Marks the input as finished to indicate that you’re done appending samples to it.

## Declaration

```objectivec
- (void) markAsFinished;
```

<a id="Discussion"></a>

## Discussion

Apps that monitor an input’s [readyForMoreMediaData](isreadyformoremediadata.md) value must call this method when they finish appending to it. This is necessary to prevent other inputs from stalling because they’re waiting on the input’s media data to complete the ideal interleaving pattern.

After calling this method from the serial queue passed to [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md), the input issues no more invocations of the callback it passes to that method.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [appendSampleBuffer:](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
