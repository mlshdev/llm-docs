> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/append(_:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/append(_:))

# append(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Appends a sample buffer to an input to write to the output file.

> Use SampleBufferReceiver.append(\_:) instead

## Declaration

```swift
func append(_ sampleBuffer: CMSampleBuffer) -> Bool
```

## Parameters

- `sampleBuffer`: The sample buffer to append.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the input successfully appends the sample buffer; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Order the samples you append according to storage requirements. For example, if you’re working with sample buffers containing compressed video, order and append them according to their decode timestamp. The system uses the timing information in the sample buffer relative to the time you set in the call to [startSession(atSourceTime:)](../avassetwriter/startsession%28atsourcetime_%29.md) to determine the timing of samples in the output file.

If this method returns [false](https://developer.apple.com/documentation/swift/false), check the value of the asset writer’s [status](../avassetwriter/status-swift.property.md) property to determine whether the writing operation’s status is complete, failed, or canceled. If the status is [AVAssetWriter.Status.failed](../avassetwriter/status-swift.enum/failed.md), the asset writer’s [error](../avassetwriter/error.md) property contains an error object that describes the failure.

> **Important**

>  Don’t modify the sample buffer or its contents after you’ve passed it to this method.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [markAsFinished()](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
- [AVAssetWriterInput.SampleBufferReceiver](samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.MetadataReceiver](metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
- [AVAssetWriterInput.CaptionReceiver](captionreceiver.md): Provides an interface for writing caption data to an input.

# appendSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Appends a sample buffer to an input to write to the output file.

## Declaration

```objectivec
- (BOOL) appendSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

## Parameters

- `sampleBuffer`: The sample buffer to append.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the input successfully appends the sample buffer; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Order the samples you append according to storage requirements. For example, if you’re working with sample buffers containing compressed video, order and append them according to their decode timestamp. The system uses the timing information in the sample buffer relative to the time you set in the call to [startSessionAtSourceTime:](../avassetwriter/startsession%28atsourcetime_%29.md) to determine the timing of samples in the output file.

If this method returns [false](https://developer.apple.com/documentation/swift/false), check the value of the asset writer’s [status](../avassetwriter/status-swift.property.md) property to determine whether the writing operation’s status is complete, failed, or canceled. If the status is [AVAssetWriterStatusFailed](../avassetwriter/status-swift.enum/failed.md), the asset writer’s [error](../avassetwriter/error.md) property contains an error object that describes the failure.

> **Important**

>  Don’t modify the sample buffer or its contents after you’ve passed it to this method.

## See Also

### Appending media samples

- [expectsMediaDataInRealTime](expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [markAsFinished](markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
