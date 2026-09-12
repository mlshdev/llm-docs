> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreate(allocator:databuffer:dataready:makedatareadycallback:refcon:formatdescription:samplecount:sampletimingentrycount:sampletimingarray:samplesizeentrycount:samplesizearray:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreate(allocator:databuffer:dataready:makedatareadycallback:refcon:formatdescription:samplecount:sampletimingentrycount:sampletimingarray:samplesizeentrycount:samplesizearray:samplebufferout:))

# CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with a callback to make the data ready for use.

## Declaration

```swift
func CMSampleBufferCreate(allocator: CFAllocator?, dataBuffer: CMBlockBuffer?, dataReady: Bool, makeDataReadyCallback: CMSampleBufferMakeDataReadyCallback?, refcon makeDataReadyRefcon: UnsafeMutableRawPointer?, formatDescription: CMFormatDescription?, sampleCount numSamples: CMItemCount, sampleTimingEntryCount numSampleTimingEntries: CMItemCount, sampleTimingArray: UnsafePointer<CMSampleTimingInfo>?, sampleSizeEntryCount numSampleSizeEntries: CMItemCount, sampleSizeArray: UnsafePointer<Int>?, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` for the media data. This can be `NULL`, a `CMBlockBuffer` with no backing memory, a `CMBlockBuffer` with backing memory but no data yet, or a `CMBlockBuffer` that already contains the media data. If `CMBlockBuffer` contains the media data, `dataReady` should be `true`. The Boolean `dataReady` should also be `true` if the `dataBuffer` is `Null` and `numSamples` is 0.
- `dataReady`: Indicates whether or not the block buffer already contains the media data.
- `makeDataReadyCallback`: Callback that `CMSampleBufferMakeDataReady` should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: Refcon `CMSampleBufferMakeDataReady` should pass to the callback.
- `formatDescription`: A description of the media data’s format. Can be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Can be zero.
- `numSampleTimingEntries`: Number of entries in `sampleTimingArray`. Must be 0, 1, or `numSamples`.
- `sampleTimingArray`: Array of `CMSampleTimingInfo` structs, one struct per sample. If all samples have the same duration and are in presentation order, you can pass a single `CMSampleTimingInfo` struct with duration set to the duration of one sample, `presentationTimeStamp` set to the presentation time of the numerically earliest sample, and `decodeTimeStamp` set to `kCMTimeInvalid`. Behavior is undefined if samples in a `CMSampleBuffer` (or even in multiple buffers in the same stream) have the same `presentationTimeStamp`. Can be `NULL`.
- `numSampleSizeEntries`: Number of entries in `sampleSizeArray`. Must be 0, 1, or `numSamples`.
- `sampleSizeArray`: Array of size entries, one entry per sample. If all samples have the same size, you can pass a single size entry containing the size of one sample. Can be `NULL`. Must be `NULL` if the samples are non-contiguous in the buffer (for example, non-interleaved audio, where the channel values for a single sample are scattered through the buffer).
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Array parameters (`sampleSizeArray`, `sampleTimingArray`) should have only one element if that same element applies to all samples. All parameters are copied. On return, the caller can release them, free them or reuse them. On return, the caller owns the returned `CMSampleBuffer`, and must release it when done with it.

Example of usage for in-display-order video frames:

- dataBuffer: contains 7 Motion JPEG frames
- dataFormatDescription: describes Motion JPEG video
- dataFormatDescription: describes Motion JPEG video
- numSamples: 7
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {duration = 1001/30000, presentationTimeStamp = 0/30000, decodeTimeStamp = invalid }
- numSampleSizeEntries: 7
- sampleSizeArray: \[105840, 104456, 103464, 116460, 100412, 94808, 120400\]

Example of usage for video frames in out-of-display-order :

- dataBuffer: contains 6 H.264 frames in decode order (P2,B0,B1,I5,B3,B4)
- dataFormatDescription: describes H.264 video
- numSamples: 6
- numSampleTimingEntries: 6
- sampleTimingArray: 6 entries = {
- {duration = 1001/30000, presentationTimeStamp = 12012/30000, decodeTimeStamp = 10010/30000},
- {duration = 1001/30000, presentationTimeStamp = 10010/30000, decodeTimeStamp = 11011/30000},
- {duration = 1001/30000, presentationTimeStamp = 11011/30000, decodeTimeStamp = 12012/30000},
- {duration = 1001/30000, presentationTimeStamp = 15015/30000, decodeTimeStamp = 13013/30000},
- {duration = 1001/30000, presentationTimeStamp = 13013/30000, decodeTimeStamp = 14014/30000},
- {duration = 1001/30000, presentationTimeStamp = 13013/30000, decodeTimeStamp = 14014/30000}}
- numSampleSizeEntries: 6
- sampleSizeArray: \[10580, 1234, 1364, 75660, 1012, 988\]

Example of usage for compressed audio:

- dataBuffer: contains 24 compressed AAC packets
- dataFormatDescription: describes 44.1kHz AAC audio
- numSamples: 24
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {{duration = 1024/44100, presentationTimeStamp = 0/44100, decodeTimeStamp = invalid }}
- numSampleSizeEntries: 24
- sampleSizeArray:\[191, 183, 208, 213, 202, 206, 209, 206, 204, 192, 202, 277, 282, 240, 209, 194, 193, 197, 196, 198, 168, 199, 171, 194\]

Example of usage for uncompressed interleaved audio:

- dataBuffer: contains 24000 uncompressed interleaved stereo frames, each containing 2 Float32s =
- {{L,R},
- {L,R},
- {L,R}, …}
- dataFormatDescription: describes 48kHz Float32 interleaved audio
- numSamples: 24000
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {{duration = 1/48000, presentationTimeStamp = 0/48000, decodeTimeStamp = invalid }}
- numSampleSizeEntries: 1
- sampleSizeArray: {8}

Example of usage for uncompressed non-interleaved audio:

- dataBuffer: contains 24000 uncompressed non-interleaved stereo frames, each containing 2 (non-contiguous) Float32s =
- {{L,L,L,L,L,…},
- {R,R,R,R,R,…}}
- dataFormatDescription: describes 48kHz Float32 non-interleaved audio
- numSamples: 24000
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {duration = 1/48000, presentationTimeStamp = 0/48000, decodeTimeStamp = invalid }
- numSampleSizeEntries: 0
- sampleSizeArray: `NULL` (because the samples aren’t contiguous)

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
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

# CMSampleBufferCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer with a callback to make the data ready for use.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCreate(CFAllocatorRef allocator, CMBlockBufferRef dataBuffer, Boolean dataReady, CMSampleBufferMakeDataReadyCallback makeDataReadyCallback, void *makeDataReadyRefcon, CMFormatDescriptionRef formatDescription, CMItemCount numSamples, CMItemCount numSampleTimingEntries, const CMSampleTimingInfo *sampleTimingArray, CMItemCount numSampleSizeEntries, const size_t *sampleSizeArray, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `dataBuffer`: `CMBlockBuffer` for the media data. This can be `NULL`, a `CMBlockBuffer` with no backing memory, a `CMBlockBuffer` with backing memory but no data yet, or a `CMBlockBuffer` that already contains the media data. If `CMBlockBuffer` contains the media data, `dataReady` should be `true`. The Boolean `dataReady` should also be `true` if the `dataBuffer` is `Null` and `numSamples` is 0.
- `dataReady`: Indicates whether or not the block buffer already contains the media data.
- `makeDataReadyCallback`: Callback that `CMSampleBufferMakeDataReady` should call to make the data ready. Can be `NULL`.
- `makeDataReadyRefcon`: Refcon `CMSampleBufferMakeDataReady` should pass to the callback.
- `formatDescription`: A description of the media data’s format. Can be `NULL`.
- `numSamples`: Number of samples in the `CMSampleBuffer`. Can be zero.
- `numSampleTimingEntries`: Number of entries in `sampleTimingArray`. Must be 0, 1, or `numSamples`.
- `sampleTimingArray`: Array of `CMSampleTimingInfo` structs, one struct per sample. If all samples have the same duration and are in presentation order, you can pass a single `CMSampleTimingInfo` struct with duration set to the duration of one sample, `presentationTimeStamp` set to the presentation time of the numerically earliest sample, and `decodeTimeStamp` set to `kCMTimeInvalid`. Behavior is undefined if samples in a `CMSampleBuffer` (or even in multiple buffers in the same stream) have the same `presentationTimeStamp`. Can be `NULL`.
- `numSampleSizeEntries`: Number of entries in `sampleSizeArray`. Must be 0, 1, or `numSamples`.
- `sampleSizeArray`: Array of size entries, one entry per sample. If all samples have the same size, you can pass a single size entry containing the size of one sample. Can be `NULL`. Must be `NULL` if the samples are non-contiguous in the buffer (for example, non-interleaved audio, where the channel values for a single sample are scattered through the buffer).
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Array parameters (`sampleSizeArray`, `sampleTimingArray`) should have only one element if that same element applies to all samples. All parameters are copied. On return, the caller can release them, free them or reuse them. On return, the caller owns the returned `CMSampleBuffer`, and must release it when done with it.

Example of usage for in-display-order video frames:

- dataBuffer: contains 7 Motion JPEG frames
- dataFormatDescription: describes Motion JPEG video
- dataFormatDescription: describes Motion JPEG video
- numSamples: 7
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {duration = 1001/30000, presentationTimeStamp = 0/30000, decodeTimeStamp = invalid }
- numSampleSizeEntries: 7
- sampleSizeArray: \[105840, 104456, 103464, 116460, 100412, 94808, 120400\]

Example of usage for video frames in out-of-display-order :

- dataBuffer: contains 6 H.264 frames in decode order (P2,B0,B1,I5,B3,B4)
- dataFormatDescription: describes H.264 video
- numSamples: 6
- numSampleTimingEntries: 6
- sampleTimingArray: 6 entries = {
- {duration = 1001/30000, presentationTimeStamp = 12012/30000, decodeTimeStamp = 10010/30000},
- {duration = 1001/30000, presentationTimeStamp = 10010/30000, decodeTimeStamp = 11011/30000},
- {duration = 1001/30000, presentationTimeStamp = 11011/30000, decodeTimeStamp = 12012/30000},
- {duration = 1001/30000, presentationTimeStamp = 15015/30000, decodeTimeStamp = 13013/30000},
- {duration = 1001/30000, presentationTimeStamp = 13013/30000, decodeTimeStamp = 14014/30000},
- {duration = 1001/30000, presentationTimeStamp = 13013/30000, decodeTimeStamp = 14014/30000}}
- numSampleSizeEntries: 6
- sampleSizeArray: \[10580, 1234, 1364, 75660, 1012, 988\]

Example of usage for compressed audio:

- dataBuffer: contains 24 compressed AAC packets
- dataFormatDescription: describes 44.1kHz AAC audio
- numSamples: 24
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {{duration = 1024/44100, presentationTimeStamp = 0/44100, decodeTimeStamp = invalid }}
- numSampleSizeEntries: 24
- sampleSizeArray:\[191, 183, 208, 213, 202, 206, 209, 206, 204, 192, 202, 277, 282, 240, 209, 194, 193, 197, 196, 198, 168, 199, 171, 194\]

Example of usage for uncompressed interleaved audio:

- dataBuffer: contains 24000 uncompressed interleaved stereo frames, each containing 2 Float32s =
- {{L,R},
- {L,R},
- {L,R}, …}
- dataFormatDescription: describes 48kHz Float32 interleaved audio
- numSamples: 24000
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {{duration = 1/48000, presentationTimeStamp = 0/48000, decodeTimeStamp = invalid }}
- numSampleSizeEntries: 1
- sampleSizeArray: {8}

Example of usage for uncompressed non-interleaved audio:

- dataBuffer: contains 24000 uncompressed non-interleaved stereo frames, each containing 2 (non-contiguous) Float32s =
- {{L,L,L,L,L,…},
- {R,R,R,R,R,…}}
- dataFormatDescription: describes 48kHz Float32 non-interleaved audio
- numSamples: 24000
- numSampleTimingEntries: 1
- sampleTimingArray: one entry = {duration = 1/48000, presentationTimeStamp = 0/48000, decodeTimeStamp = invalid }
- numSampleSizeEntries: 0
- sampleSizeArray: `NULL` (because the samples aren’t contiguous)

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
- [CMSampleBufferCreateForImageBuffer](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.
