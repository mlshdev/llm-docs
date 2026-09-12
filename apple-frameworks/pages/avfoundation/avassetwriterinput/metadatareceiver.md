> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/metadatareceiver](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadatareceiver)

# AVAssetWriterInput.MetadataReceiver

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an interface for writing timed metadata groups to an input.

## Declaration

```swift
class MetadataReceiver
```

## Topics

### Appending metadata

- [append(\_:)](metadatareceiver/append%28__%29.md): Suspends until the input is ready for more media data, then appends the timed metadata group.
- [appendImmediately(\_:)](metadatareceiver/appendimmediately%28__%29.md): Appends the timed metadata group synchronously if the input is ready for more media data.
- [finish()](metadatareceiver/finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [append(\_:)](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished()](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
- [AVAssetWriterInput.SampleBufferReceiver](samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.CaptionReceiver](captionreceiver.md): Provides an interface for writing caption data to an input.
