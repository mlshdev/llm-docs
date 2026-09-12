> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/expectsmediadatainrealtime](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/expectsmediadatainrealtime)

# expectsMediaDataInRealTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the input tailors its processing for real-time sources.

> Use the input receiver's appendImmediately(...) method instead

## Declaration

```swift
var expectsMediaDataInRealTime: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) if your app appends media data to the input from a real-time source, such as an [AVCaptureOutput](../avcaptureoutput.md). Setting a [true](https://developer.apple.com/documentation/swift/true) value optimizes the input for real-time usage so it accurately calculates the state of its [isReadyForMoreMediaData](isreadyformoremediadata.md) property value.

You can’t set this value after writing starts.

> **Important**

>  To ensure optimal behavior, don’t set the value of this property and [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md) to [true](https://developer.apple.com/documentation/swift/true) at the same time.

## See Also

### Appending media samples

- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [append(\_:)](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished()](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
- [AVAssetWriterInput.SampleBufferReceiver](samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.MetadataReceiver](metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
- [AVAssetWriterInput.CaptionReceiver](captionreceiver.md): Provides an interface for writing caption data to an input.

# expectsMediaDataInRealTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input tailors its processing for real-time sources.

## Declaration

```objectivec
@property (nonatomic) BOOL expectsMediaDataInRealTime;
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) if your app appends media data to the input from a real-time source, such as an [AVCaptureOutput](../avcaptureoutput.md). Setting a [true](https://developer.apple.com/documentation/swift/true) value optimizes the input for real-time usage so it accurately calculates the state of its [readyForMoreMediaData](isreadyformoremediadata.md) property value.

You can’t set this value after writing starts.

> **Important**

>  To ensure optimal behavior, don’t set the value of this property and [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md) to [true](https://developer.apple.com/documentation/swift/true) at the same time.

## See Also

### Appending media samples

- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [appendSampleBuffer:](append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
