> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiosamplebuffercreatereadywithpacketdescriptions(allocator:databuffer:formatdescription:samplecount:presentationtimestamp:packetdescriptions:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmaudiosamplebuffercreatereadywithpacketdescriptions(allocator:databuffer:formatdescription:samplecount:presentationtimestamp:packetdescriptions:samplebufferout:))

# CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator:dataBuffer:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with packet descriptions.

## Declaration

```swift
func CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator: CFAllocator?, dataBuffer: CMBlockBuffer, formatDescription: CMFormatDescription, sampleCount numSamples: CMItemCount, presentationTimeStamp: CMTime, packetDescriptions: UnsafePointer<AudioStreamPacketDescription>?, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` already containing the media data. Must not be `NULL`.
- `formatDescription`: A description of the media data’s format. Can’t be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Must not be 0.
- `presentationTimeStamp`: Timestamp of the first sample in the buffer. Must be a numeric `CMTime`.
- `packetDescriptions`: Array of packet descriptions, one for each of `numSamples`. May be `NULL` if the samples are known to have a constant number of frames per packet and a constant size.
- `sampleBufferOut`: Returned newly created `CMSampleBuffer`.

<a id="Discussion"></a>

## Discussion

Provides an optimization over [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md) when the caller already has `packetDescriptions` for the audio data. This routine will use the `packetDescriptions` to create the sizing and timing arrays required to make the sample buffer if necessary.

This function is identical to [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md) except that `dataReady` is always `true`, and so no `makeDataReadyCallback` or `refcon` needs to be passed.

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady(allocator:dataBuffer:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer(allocator:imageBuffer:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMSampleBufferCreateWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

# CMAudioSampleBufferCreateReadyWithPacketDescriptions (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with packet descriptions.

## Declaration

```objectivec
extern OSStatus CMAudioSampleBufferCreateReadyWithPacketDescriptions(CFAllocatorRef allocator, CMBlockBufferRef dataBuffer, CMFormatDescriptionRef formatDescription, CMItemCount numSamples, CMTime presentationTimeStamp, const AudioStreamPacketDescription *packetDescriptions, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` already containing the media data. Must not be `NULL`.
- `formatDescription`: A description of the media data’s format. Can’t be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Must not be 0.
- `presentationTimeStamp`: Timestamp of the first sample in the buffer. Must be a numeric `CMTime`.
- `packetDescriptions`: Array of packet descriptions, one for each of `numSamples`. May be `NULL` if the samples are known to have a constant number of frames per packet and a constant size.
- `sampleBufferOut`: Returned newly created `CMSampleBuffer`.

<a id="Discussion"></a>

## Discussion

Provides an optimization over [CMSampleBufferCreate](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md) when the caller already has `packetDescriptions` for the audio data. This routine will use the `packetDescriptions` to create the sizing and timing arrays required to make the sample buffer if necessary.

This function is identical to [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md) except that `dataReady` is always `true`, and so no `makeDataReadyCallback` or `refcon` needs to be passed.

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMSampleBufferCreateWithMakeDataReadyHandler](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMSampleBufferCreateForTaggedBufferGroup](cmsamplebuffercreatefortaggedbuffergroup.md): Creates a new sample buffer from a tagged buffer group.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.
