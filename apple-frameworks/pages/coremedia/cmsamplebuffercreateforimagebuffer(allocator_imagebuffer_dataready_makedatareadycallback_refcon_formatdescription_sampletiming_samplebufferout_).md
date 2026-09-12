> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreateforimagebuffer(allocator:imagebuffer:dataready:makedatareadycallback:refcon:formatdescription:sampletiming:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreateforimagebuffer(allocator:imagebuffer:dataready:makedatareadycallback:refcon:formatdescription:sampletiming:samplebufferout:))

# CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with an image buffer and a callback to make the data ready for use.

## Declaration

```swift
func CMSampleBufferCreateForImageBuffer(allocator: CFAllocator?, imageBuffer: CVImageBuffer, dataReady: Bool, makeDataReadyCallback: CMSampleBufferMakeDataReadyCallback?, refcon makeDataReadyRefcon: UnsafeMutableRawPointer?, formatDescription: CMVideoFormatDescription, sampleTiming: UnsafePointer<CMSampleTimingInfo>, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `imageBuffer`: `CVImageBuffer` for the media data. This can be a `CVImageBuffer` whose content hasn’t yet been rendered, or a `CVImageBuffer` that already contains the media data (in which case `dataReady` should be true). May not be `NULL`.
- `dataReady`: Indicates whether or not the `CVImageBuffer` already contains the media data.
- `makeDataReadyCallback`: Callback that [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md) should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: Refcon [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md) should pass to the callback.
- `formatDescription`: A description of the media data’s format. See discussion above for constraints. May not be `NULL`.
- `sampleTiming`: A `CMSampleTimingInfo` struct that provides the timing information for the media represented by the `CVImageBuffer`.
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer` that contains a `CVImageBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Unlike a `CMBlockBuffer` which can reference many samples, a `CVImageBuffer` is defined to reference only one sample; therefore this routine has fewer parameters than `CMSampleBufferCreate`. Sample timing information, which is a vector for `CMSampleBufferCreate`, consists of only one value for this routine. The concept of sample size doesn’t apply to `CVImageBuffers`. As such, [CMSampleBufferGetSampleSizeArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md) returns `kCMSampleBufferError_BufferHasNoSampleSizes`, and [CMSampleBufferGetSampleSize(\_:at:)](cmsamplebuffergetsamplesize%28__at_%29.md) returns 0.

Because `CVImageBuffers` hold visual data, the format description provided is a `CMVideoFormatDescription`. The format description must be consistent with the attributes and formatting information attached to the `CVImageBuffer`. The width, height, and `codecType` must match (for `CVPixelBuffers` the codec type is given by `CVPixelBufferGetPixelFormatType`(pixelBuffer); for other `CVImageBuffers`, the codecType must be 0). The format description extensions must match the image buffer attachments for all the keys in the list returned by `CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers`. If absent in either they must be absent in both.

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
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

# CMSampleBufferCreateForImageBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with an image buffer and a callback to make the data ready for use.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCreateForImageBuffer(CFAllocatorRef allocator, CVImageBufferRef imageBuffer, Boolean dataReady, CMSampleBufferMakeDataReadyCallback makeDataReadyCallback, void *makeDataReadyRefcon, CMVideoFormatDescriptionRef formatDescription, const CMSampleTimingInfo *sampleTiming, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `imageBuffer`: `CVImageBuffer` for the media data. This can be a `CVImageBuffer` whose content hasn’t yet been rendered, or a `CVImageBuffer` that already contains the media data (in which case `dataReady` should be true). May not be `NULL`.
- `dataReady`: Indicates whether or not the `CVImageBuffer` already contains the media data.
- `makeDataReadyCallback`: Callback that [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md) should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: Refcon [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md) should pass to the callback.
- `formatDescription`: A description of the media data’s format. See discussion above for constraints. May not be `NULL`.
- `sampleTiming`: A `CMSampleTimingInfo` struct that provides the timing information for the media represented by the `CVImageBuffer`.
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer` that contains a `CVImageBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Unlike a `CMBlockBuffer` which can reference many samples, a `CVImageBuffer` is defined to reference only one sample; therefore this routine has fewer parameters than `CMSampleBufferCreate`. Sample timing information, which is a vector for `CMSampleBufferCreate`, consists of only one value for this routine. The concept of sample size doesn’t apply to `CVImageBuffers`. As such, [CMSampleBufferGetSampleSizeArray](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md) returns `kCMSampleBufferError_BufferHasNoSampleSizes`, and [CMSampleBufferGetSampleSize](cmsamplebuffergetsamplesize%28__at_%29.md) returns 0.

Because `CVImageBuffers` hold visual data, the format description provided is a `CMVideoFormatDescription`. The format description must be consistent with the attributes and formatting information attached to the `CVImageBuffer`. The width, height, and `codecType` must match (for `CVPixelBuffers` the codec type is given by `CVPixelBufferGetPixelFormatType`(pixelBuffer); for other `CVImageBuffers`, the codecType must be 0). The format description extensions must match the image buffer attachments for all the keys in the list returned by `CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers`. If absent in either they must be absent in both.

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
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.
