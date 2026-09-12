> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiosamplebuffercreatewithpacketdescriptions(allocator:databuffer:dataready:makedatareadycallback:refcon:formatdescription:samplecount:presentationtimestamp:packetdescriptions:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmaudiosamplebuffercreatewithpacketdescriptions(allocator:databuffer:dataready:makedatareadycallback:refcon:formatdescription:samplecount:presentationtimestamp:packetdescriptions:samplebufferout:))

# CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

## Declaration

```swift
func CMAudioSampleBufferCreateWithPacketDescriptions(allocator: CFAllocator?, dataBuffer: CMBlockBuffer?, dataReady: Bool, makeDataReadyCallback: CMSampleBufferMakeDataReadyCallback?, refcon makeDataReadyRefcon: UnsafeMutableRawPointer?, formatDescription: CMFormatDescription, sampleCount numSamples: CMItemCount, presentationTimeStamp: CMTime, packetDescriptions: UnsafePointer<AudioStreamPacketDescription>?, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` for the media data. This can be `NULL`, a `CMBlockBuffer` with no backing memory, a `CMBlockBuffer` with backing memory but no data yet, or a `CMBlockBuffer` that already contains the media data. If `CMBlockBuffer` contains the media data, `dataReady` should be `true`.
- `dataReady`: Indicates whether or not the `BlockBuffer` already contains the media data.
- `makeDataReadyCallback`: Callback that `CMSampleBufferMakeDataReady` should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: The reference constant, [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md), that this function should pass to the callback.
- `formatDescription`: A description of the media data’s format. Can’t be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Must not be 0.
- `presentationTimeStamp`: Timestamp of the first sample in the buffer. Must be a numeric `CMTime`.
- `packetDescriptions`: Array of `packetDescriptions`, one for each of `numSamples`. May be `NULL` if the samples are known to have a constant number of frames per packet and a constant size.
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Provides an optimization over `CMSampleBufferCreate`() when the caller already has `packetDescriptions` for the audio data. This routine uses the packetDescriptions to create the sizing and timing arrays required to make the sample buffer if necessary.

## Topics

### Callbacks

- [CMSampleBufferMakeDataReadyCallback](cmsamplebuffermakedatareadycallback.md): Client callback called by [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md).

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady(allocator:dataBuffer:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer(allocator:imageBuffer:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator:dataBuffer:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatereadywithpacketdescriptions%28allocator_databuffer_formatdescription_samplecount_presentationtimestamp_packetdescriptions_samplebufferout_%29.md): Creates a sample buffer with packet descriptions.
- [CMSampleBufferCreateWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.

# CMAudioSampleBufferCreateWithPacketDescriptions (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

## Declaration

```objectivec
extern OSStatus CMAudioSampleBufferCreateWithPacketDescriptions(CFAllocatorRef allocator, CMBlockBufferRef dataBuffer, Boolean dataReady, CMSampleBufferMakeDataReadyCallback makeDataReadyCallback, void *makeDataReadyRefcon, CMFormatDescriptionRef formatDescription, CMItemCount numSamples, CMTime presentationTimeStamp, const AudioStreamPacketDescription *packetDescriptions, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` for the media data. This can be `NULL`, a `CMBlockBuffer` with no backing memory, a `CMBlockBuffer` with backing memory but no data yet, or a `CMBlockBuffer` that already contains the media data. If `CMBlockBuffer` contains the media data, `dataReady` should be `true`.
- `dataReady`: Indicates whether or not the `BlockBuffer` already contains the media data.
- `makeDataReadyCallback`: Callback that `CMSampleBufferMakeDataReady` should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: The reference constant, [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md), that this function should pass to the callback.
- `formatDescription`: A description of the media data’s format. Can’t be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Must not be 0.
- `presentationTimeStamp`: Timestamp of the first sample in the buffer. Must be a numeric `CMTime`.
- `packetDescriptions`: Array of `packetDescriptions`, one for each of `numSamples`. May be `NULL` if the samples are known to have a constant number of frames per packet and a constant size.
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Provides an optimization over `CMSampleBufferCreate`() when the caller already has `packetDescriptions` for the audio data. This routine uses the packetDescriptions to create the sizing and timing arrays required to make the sample buffer if necessary.

## Topics

### Callbacks

- [CMSampleBufferMakeDataReadyCallback](cmsamplebuffermakedatareadycallback.md): Client callback called by [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md).

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMAudioSampleBufferCreateReadyWithPacketDescriptions](cmaudiosamplebuffercreatereadywithpacketdescriptions%28allocator_databuffer_formatdescription_samplecount_presentationtimestamp_packetdescriptions_samplebufferout_%29.md): Creates a sample buffer with packet descriptions.
- [CMSampleBufferCreateWithMakeDataReadyHandler](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMSampleBufferCreateForTaggedBufferGroup](cmsamplebuffercreatefortaggedbuffergroup.md): Creates a new sample buffer from a tagged buffer group.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
