> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreatewithmakedatareadyhandler(_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreatewithmakedatareadyhandler(_:_:_:_:_:_:_:_:_:_:_:))

# CMSampleBufferCreateWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with a handler to make the data ready for use.

## Declaration

```swift
func CMSampleBufferCreateWithMakeDataReadyHandler(_ allocator: CFAllocator?, _ dataBuffer: CMBlockBuffer?, _ dataReady: Bool, _ formatDescription: CMFormatDescription?, _ numSamples: CMItemCount, _ numSampleTimingEntries: CMItemCount, _ sampleTimingArray: UnsafePointer<CMSampleTimingInfo>?, _ numSampleSizeEntries: CMItemCount, _ sampleSizeArray: UnsafePointer<Int>?, _ sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>, _ makeDataReadyHandler: CMSampleBufferMakeDataReadyHandler?) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use to create a sample buffer object. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `dataBuffer`: A block buffer that contains the media data. This argument can be `NULL`, such as for a block buffer that doesn’t yet have backing memory or data.

  If the buffer contains media data, specify `true` for the `dataReady` argument. Also set `dataReady` to true if the buffer is `NULL` and `numSamples` is `0`.
- `dataReady`: A Boolean value that indicates whether the buffer already contains the data.
- `formatDescription`: A description of the media data’s format, or `NULL` for none.
- `numSamples`: The number of samples in the sample buffer, or `0` if media samples aren’t yet loaded.
- `numSampleTimingEntries`: The number of entries in `sampleTimingArray`. The value must be `0`, `1`, or `numSamples`.
- `sampleTimingArray`: An array of [CMSampleTimingInfo](cmsampletiminginfo.md) structures, one per sample. This value can be `NULL`.

  If all samples are in presentation order and have the same duration, pass a timing info structure that you configure as follows:

  - Set its duration to the duration of one sample
  - Set its presentation timestamp to the presentation time of the numerically earliest sample
  - Set the decode timestamp set to [invalid](cmtime/invalid.md).

  The system’s behavior isn’t defined if multiple samples in a sample buffer (or even in multiple buffers in the same stream) have the same presentation timestamp.
- `numSampleSizeEntries`: The number of entries in `sampleSizeArray`. The value must be `0`, `1`, or `numSamples`.
- `sampleSizeArray`: An array of size entries, one per sample. If all samples have the same size, you can pass a single size entry containing the size of one sample.

  This value can be `NULL`, and must be if the samples aren’t contiguous in the buffer, such as when working with noninterleaved audio.
- `sampleBufferOut`: On return, a new [CMSampleBuffer](cmsamplebuffer.md) object.
- `makeDataReadyHandler`: A block for the system to call to make the data ready for use. This argument can be `NULL`.

## Topics

### Handlers

- [CMSampleBufferMakeDataReadyHandler](cmsamplebuffermakedatareadyhandler.md): A block the system calls to make the sample buffer ready for use.

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady(allocator:dataBuffer:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer(allocator:imageBuffer:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator:dataBuffer:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatereadywithpacketdescriptions%28allocator_databuffer_formatdescription_samplecount_presentationtimestamp_packetdescriptions_samplebufferout_%29.md): Creates a sample buffer with packet descriptions.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

# CMSampleBufferCreateWithMakeDataReadyHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with a handler to make the data ready for use.

## Declaration

```objectivec
OSStatus CMSampleBufferCreateWithMakeDataReadyHandler(CFAllocatorRef allocator, CMBlockBufferRef dataBuffer, Boolean dataReady, CMFormatDescriptionRef formatDescription, CMItemCount numSamples, CMItemCount numSampleTimingEntries, const CMSampleTimingInfo *sampleTimingArray, CMItemCount numSampleSizeEntries, const size_t *sampleSizeArray, CMSampleBufferRef*sampleBufferOut, CMSampleBufferMakeDataReadyHandler makeDataReadyHandler);
```

## Parameters

- `allocator`: The allocator to use to create a sample buffer object. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `dataBuffer`: A block buffer that contains the media data. This argument can be `NULL`, such as for a block buffer that doesn’t yet have backing memory or data.

  If the buffer contains media data, specify `true` for the `dataReady` argument. Also set `dataReady` to true if the buffer is `NULL` and `numSamples` is `0`.
- `dataReady`: A Boolean value that indicates whether the buffer already contains the data.
- `formatDescription`: A description of the media data’s format, or `NULL` for none.
- `numSamples`: The number of samples in the sample buffer, or `0` if media samples aren’t yet loaded.
- `numSampleTimingEntries`: The number of entries in `sampleTimingArray`. The value must be `0`, `1`, or `numSamples`.
- `sampleTimingArray`: An array of [CMSampleTimingInfo](cmsampletiminginfo.md) structures, one per sample. This value can be `NULL`.

  If all samples are in presentation order and have the same duration, pass a timing info structure that you configure as follows:

  - Set its duration to the duration of one sample
  - Set its presentation timestamp to the presentation time of the numerically earliest sample
  - Set the decode timestamp set to [kCMTimeInvalid](cmtime/invalid.md).

  The system’s behavior isn’t defined if multiple samples in a sample buffer (or even in multiple buffers in the same stream) have the same presentation timestamp.
- `numSampleSizeEntries`: The number of entries in `sampleSizeArray`. The value must be `0`, `1`, or `numSamples`.
- `sampleSizeArray`: An array of size entries, one per sample. If all samples have the same size, you can pass a single size entry containing the size of one sample.

  This value can be `NULL`, and must be if the samples aren’t contiguous in the buffer, such as when working with noninterleaved audio.
- `sampleBufferOut`: On return, a new [CMSampleBufferRef](cmsamplebuffer.md) object.
- `makeDataReadyHandler`: A block for the system to call to make the data ready for use. This argument can be `NULL`.

## Topics

### Handlers

- [CMSampleBufferMakeDataReadyHandler](cmsamplebuffermakedatareadyhandler.md): A block the system calls to make the sample buffer ready for use.

## See Also

### Creating Sample Buffers

- [CMSampleBufferCreateReady](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMAudioSampleBufferCreateReadyWithPacketDescriptions](cmaudiosamplebuffercreatereadywithpacketdescriptions%28allocator_databuffer_formatdescription_samplecount_presentationtimestamp_packetdescriptions_samplebufferout_%29.md): Creates a sample buffer with packet descriptions.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMSampleBufferCreateForTaggedBufferGroup](cmsamplebuffercreatefortaggedbuffergroup.md): Creates a new sample buffer from a tagged buffer group.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.
