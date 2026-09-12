> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreateforimagebufferwithmakedatareadyhandler(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreateforimagebufferwithmakedatareadyhandler(_:_:_:_:_:_:_:))

# CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with an image buffer and a handler to make the data ready for use.

## Declaration

```swift
func CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(_ allocator: CFAllocator?, _ imageBuffer: CVImageBuffer, _ dataReady: Bool, _ formatDescription: CMVideoFormatDescription, _ sampleTiming: UnsafePointer<CMSampleTimingInfo>, _ sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>, _ makeDataReadyHandler: CMSampleBufferMakeDataReadyHandler?) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use to create a sample buffer object. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `imageBuffer`: An image buffer that contains the media data. Must not be `NULL`.
- `dataReady`: A Boolean value that indicates whether the buffer already contains the data.
- `formatDescription`: A description of the media data’s format. Must not be `NULL`.
- `sampleTiming`: A [CMSampleTimingInfo](cmsampletiminginfo.md) structure that provides the timing information for the media contained in `imageBuffer`.
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
- [CMSampleBufferCreateWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

# CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with an image buffer and a handler to make the data ready for use.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(CFAllocatorRef allocator, CVImageBufferRef imageBuffer, Boolean dataReady, CMVideoFormatDescriptionRef formatDescription, const CMSampleTimingInfo *sampleTiming, CMSampleBufferRef*sampleBufferOut, CMSampleBufferMakeDataReadyHandler makeDataReadyHandler);
```

## Parameters

- `allocator`: The allocator to use to create a sample buffer object. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `imageBuffer`: An image buffer that contains the media data. Must not be `NULL`.
- `dataReady`: A Boolean value that indicates whether the buffer already contains the data.
- `formatDescription`: A description of the media data’s format. Must not be `NULL`.
- `sampleTiming`: A [CMSampleTimingInfo](cmsampletiminginfo.md) structure that provides the timing information for the media contained in `imageBuffer`.
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
- [CMSampleBufferCreateWithMakeDataReadyHandler](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForTaggedBufferGroup](cmsamplebuffercreatefortaggedbuffergroup.md): Creates a new sample buffer from a tagged buffer group.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.
