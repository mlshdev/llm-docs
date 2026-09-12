> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/captionreceiver](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver)

# AVAssetWriterInput.CaptionReceiver

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Provides an interface for writing caption data to an input.

## Declaration

```swift
class CaptionReceiver
```

## Topics

### Appending captions

- [append(\_:)](captionreceiver/append%28__%29-4opbd.md): Suspends until the input is ready for more media data, then appends the caption group.
- [append(\_:)](captionreceiver/append%28__%29-4wpi2.md): Suspends until the input is ready for more media data, then appends the caption.
- [appendImmediately(\_:)](captionreceiver/appendimmediately%28__%29-7q21r.md): Appends the caption group synchronously if the input is ready for more media data.
- [appendImmediately(\_:)](captionreceiver/appendimmediately%28__%29-9uy14.md): Appends the caption synchronously if the input is ready for more media data.
- [finish()](captionreceiver/finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

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
- [AVAssetWriterInput.MetadataReceiver](metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
