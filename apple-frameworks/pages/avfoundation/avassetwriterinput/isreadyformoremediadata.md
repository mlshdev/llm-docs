> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/isreadyformoremediadata](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/isreadyformoremediadata)

# isReadyForMoreMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the input is ready to accept media data.

> Use the input receiver's async append(...) method instead

## Declaration

```swift
var isReadyForMoreMediaData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An asset writer with multiple inputs writes media data in an interleaved manner for efficient playback and storage. To maintain appropriate interleaving, you can only append data to an input when the value of this property is [true](https://developer.apple.com/documentation/swift/true).

Apps that write media data from a non-real-time source, such as an instance of [AVAssetReader](../avassetreader.md), wait to generate or retrieve more media data while this property value is [false](https://developer.apple.com/documentation/swift/false). To control of the supply of non-real-time media data, use the [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) method to specify a callback for the input to invoke when it’s ready to append more data.

Apps that write media data from a real-time source, such as an instance of [AVCaptureOutput](../avcaptureoutput.md), set the input’s [expectsMediaDataInRealTime](expectsmediadatainrealtime.md) property value to [true](https://developer.apple.com/documentation/swift/true) so that the input accurately determines its readiness for more data. When [expectsMediaDataInRealTime](expectsmediadatainrealtime.md) is [true](https://developer.apple.com/documentation/swift/true), this property value becomes [false](https://developer.apple.com/documentation/swift/false) only when the input can’t process media samples at the current data rate. If this property value becomes [false](https://developer.apple.com/documentation/swift/false) for a real-time source, your app may need to reduce the rate at which it appends samples, or drop them altogether.

If the [canPerformMultiplePasses](canperformmultiplepasses.md) value of any of an asset writer’s inputs is [true](https://developer.apple.com/documentation/swift/true), the value of this property may start as [false](https://developer.apple.com/documentation/swift/false), and remain that way for extended periods.

The value of this property often changes from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true) asynchronously, as the asset writer processes and writes media samples to the output. It’s possible for this property value to temporarily be [false](https://developer.apple.com/documentation/swift/false) for all inputs.

This property is key-value observable. The system doesn’t notify observers on a specific thread.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [append(\_:)](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished()](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
- [AVAssetWriterInput.SampleBufferReceiver](samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.MetadataReceiver](metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
- [AVAssetWriterInput.CaptionReceiver](captionreceiver.md): Provides an interface for writing caption data to an input.

# readyForMoreMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input is ready to accept media data.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyForMoreMediaData) BOOL readyForMoreMediaData;
```

<a id="Discussion"></a>

## Discussion

An asset writer with multiple inputs writes media data in an interleaved manner for efficient playback and storage. To maintain appropriate interleaving, you can only append data to an input when the value of this property is [true](https://developer.apple.com/documentation/swift/true).

Apps that write media data from a non-real-time source, such as an instance of [AVAssetReader](../avassetreader.md), wait to generate or retrieve more media data while this property value is [false](https://developer.apple.com/documentation/swift/false). To control of the supply of non-real-time media data, use the [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) method to specify a callback for the input to invoke when it’s ready to append more data.

Apps that write media data from a real-time source, such as an instance of [AVCaptureOutput](../avcaptureoutput.md), set the input’s [expectsMediaDataInRealTime](expectsmediadatainrealtime.md) property value to [true](https://developer.apple.com/documentation/swift/true) so that the input accurately determines its readiness for more data. When [expectsMediaDataInRealTime](expectsmediadatainrealtime.md) is [true](https://developer.apple.com/documentation/swift/true), this property value becomes [false](https://developer.apple.com/documentation/swift/false) only when the input can’t process media samples at the current data rate. If this property value becomes [false](https://developer.apple.com/documentation/swift/false) for a real-time source, your app may need to reduce the rate at which it appends samples, or drop them altogether.

If the [canPerformMultiplePasses](canperformmultiplepasses.md) value of any of an asset writer’s inputs is [true](https://developer.apple.com/documentation/swift/true), the value of this property may start as [false](https://developer.apple.com/documentation/swift/false), and remain that way for extended periods.

The value of this property often changes from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true) asynchronously, as the asset writer processes and writes media samples to the output. It’s possible for this property value to temporarily be [false](https://developer.apple.com/documentation/swift/false) for all inputs.

This property is key-value observable. The system doesn’t notify observers on a specific thread.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [appendSampleBuffer:](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
