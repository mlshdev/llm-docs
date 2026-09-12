> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer)

# CMReadySampleBuffer

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Buffer carrying readily available samples of media data.

## Declaration

```swift
struct CMReadySampleBuffer<Content> where Content : CMSampleBuffer.Content
```

## Topics

### Initializers

- [init(\_:)](cmreadysamplebuffer/init%28__%29-35rzo.md): Conforms when `Content` is `CMSampleBuffer.DynamicContent`. Convert a ready sample buffer to dynamic content.
- [init(\_:)](cmreadysamplebuffer/init%28__%29-3rj25.md): Conforms when `Content` is `Never`. Converts dynamic sample buffer to a marker sample buffer.
- [init(\_:)](cmreadysamplebuffer/init%28__%29-3tjyq.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Converts dynamic sample buffer to a sample buffer containing pixel buffer.
- [init(\_:)](cmreadysamplebuffer/init%28__%29-4j97d.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Converts dynamic sample buffer to a sample buffer containing data buffer.
- [init(\_:)](cmreadysamplebuffer/init%28__%29-6uyu8.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Converts dynamic sample buffer to a sample buffer containing tagged buffers.
- [init(audioDataBuffer:formatDescription:sampleCount:presentationTimeStamp:)](cmreadysamplebuffer/init%28audiodatabuffer_formatdescription_samplecount_presentationtimestamp_%29.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Creates a sample buffer carrying audio media data.
- [init(compressedAudioDataBuffer:formatDescription:presentationTimeStamp:packetDescriptions:)](cmreadysamplebuffer/init%28compressedaudiodatabuffer_formatdescription_presentationtimestamp_packetdescriptions_%29.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Creates a sample buffer carrying compressed audio media data.
- [init(dataBuffer:formatDescription:sampleProperties:)](cmreadysamplebuffer/init%28databuffer_formatdescription_sampleproperties_%29.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Creates a sample buffer with media data.
- [init(markerAt:duration:)](cmreadysamplebuffer/init%28markerat_duration_%29.md): Conforms when `Content` is `Never`. Creates a marker-only sample buffer with no payload and no format description.
- [init(pixelBuffer:formatDescription:presentationTimeStamp:duration:)](cmreadysamplebuffer/init%28pixelbuffer_formatdescription_presentationtimestamp_duration_%29.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Creates a sample buffer carrying image buffer.
- [init(sampleDataReference:formatDescription:sampleProperties:)](cmreadysamplebuffer/init%28sampledatareference_formatdescription_sampleproperties_%29.md): Conforms when `Content` is `CMSampleDataReference`. Creates a sample buffer with references to sample data.
- [init(taggedBuffers:formatDescription:presentationTimeStamp:duration:)](cmreadysamplebuffer/init%28taggedbuffers_formatdescription_presentationtimestamp_duration_%29.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Creates a sample buffer carrying tagged buffers.
- [init(unsafeBuffer:)](cmreadysamplebuffer/init%28unsafebuffer_%29.md): Conforms when `Content` is `CMSampleBuffer.DynamicContent`. Create a ready sample buffer with dynamic content from an existing sample buffer.
- [init(unsafeMarkerOnlySampleBuffer:)](cmreadysamplebuffer/init%28unsafemarkeronlysamplebuffer_%29.md): Conforms when `Content` is `Never`. Create a ready sample buffer with marker content from an existing sample buffer.
- [init(unsafeSampleDataReferenceBuffer:)](cmreadysamplebuffer/init%28unsafesampledatareferencebuffer_%29.md): Conforms when `Content` is `CMSampleDataReference`. Create a ready sample buffer with data reference content from an existing sample buffer.
- [init(unsafeWithDataBuffer:)](cmreadysamplebuffer/init%28unsafewithdatabuffer_%29.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Creates a ready sample buffer with data buffer content from an existing sample buffer.
- [init(unsafeWithPixelBuffer:)](cmreadysamplebuffer/init%28unsafewithpixelbuffer_%29.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Creates a ready sample buffer with pixel buffer content from an existing sample buffer.
- [init(unsafeWithTaggedBuffers:)](cmreadysamplebuffer/init%28unsafewithtaggedbuffers_%29.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Create a ready sample buffer with tagged buffers content from an existing sample buffer.

### Instance Properties

- [attachments](cmreadysamplebuffer/attachments-swift.property.md): Conforms when `Content` conforms to `CMSampleBuffer.Content`.
- [audioStreamPacketDescriptions](cmreadysamplebuffer/audiostreampacketdescriptions.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`.
- [content](cmreadysamplebuffer/content-12bds.md): Conforms when `Content` is `CMSampleDataReference`. Payload containing the samples.
- [content](cmreadysamplebuffer/content-14qb7.md): Conforms when `Content` is `CMSampleBuffer.DynamicContent`. Payload containing the samples.
- [content](cmreadysamplebuffer/content-4peot.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Payload containing the samples.
- [content](cmreadysamplebuffer/content-5fko2.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Payload containing the samples.
- [content](cmreadysamplebuffer/content-6ihvr.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Payload containing the samples.
- [contentType](cmreadysamplebuffer/contenttype.md): Type of the content carried by this sample buffer
- [decodeTimeStamp](cmreadysamplebuffer/decodetimestamp.md): Numerically earliest sample decode timestamp in the sample buffer.
- [duration](cmreadysamplebuffer/duration-2ssr4.md): The unmodified sum of the durations of all samples in the sample buffer.
- [duration](cmreadysamplebuffer/duration-54778.md): Conforms when `Content` is `Never`. Duration of the sample buffer.
- [duration](cmreadysamplebuffer/duration-94fnq.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Duration of the sample buffer.
- [duration](cmreadysamplebuffer/duration-9lx3g.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Duration of the sample buffer.
- [formatDescription](cmreadysamplebuffer/formatdescription-6rp0o.md): Conforms when `Content` conforms to `CMSampleBuffer.ContentWithFormatDescription`. The format description of the samples in the sample buffer.
- [formatDescription](cmreadysamplebuffer/formatdescription-9i48t.md): The format description of the samples in the sample buffer.
- [markerTimeStamp](cmreadysamplebuffer/markertimestamp.md): Conforms when `Content` is `Never`. Presentation timestamp of the sample buffer.
- [outputDecodeTimeStamp](cmreadysamplebuffer/outputdecodetimestamp.md): The output decode timestamp of the sample buffer.
- [outputDuration](cmreadysamplebuffer/outputduration.md): The output duration of the sample buffer.
- [outputPresentationTimeStamp](cmreadysamplebuffer/outputpresentationtimestamp.md): The output presentation timestamp of the sample buffer.
- [outputSampleTimings](cmreadysamplebuffer/outputsampletimings.md): Conforms when `Content` conforms to `CMSampleBuffer.MultiSampleContent`. Output timing information of each sample in the sample buffer.
- [presentationTimeStamp](cmreadysamplebuffer/presentationtimestamp-19vwq.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Presentation timestamp of the sample buffer.
- [presentationTimeStamp](cmreadysamplebuffer/presentationtimestamp-266ka.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Presentation timestamp of the sample buffer.
- [presentationTimeStamp](cmreadysamplebuffer/presentationtimestamp-7ea7z.md): Numerically earliest sample presentation timestamp in the sample buffer.
- [sampleAttachments](cmreadysamplebuffer/sampleattachments-8g6nm.md): Conforms when `Content` is `CVReadOnlyPixelBuffer`. Attachments for the sample in this buffer.
- [sampleAttachments](cmreadysamplebuffer/sampleattachments-9g3d5.md): Conforms when `Content` is `[CMTaggedDynamicBuffer]`. Attachments for the sample in this buffer.
- [sampleCount](cmreadysamplebuffer/samplecount.md): Conforms when `Content` conforms to `CMSampleBuffer.MultiSampleContent`. Number of samples in the sample buffer.
- [sampleProperties](cmreadysamplebuffer/sampleproperties.md): Conforms when `Content` conforms to `CMSampleBuffer.MultiSampleContent`. Information about the samples in the sample buffer.
- [totalSampleSize](cmreadysamplebuffer/totalsamplesize.md): Conforms when `Content` conforms to `CMSampleBuffer.MultiSampleContent`. Total size in bytes of all samples in the sample buffer.

### Instance Methods

- [attach(contentKey:)](cmreadysamplebuffer/attach%28contentkey_%29.md): Conforms when `Content` conforms to `CMSampleBuffer.Content`. Attaches an AVContentKey to a CMReadySampleBuffer for the purpose of content decryption. The client is expected to attach AVContentKeys to CMReadySampleBuffers that have been created by the client for enqueueing with AVSampleBufferDisplayLayer or AVSampleBufferAudioRenderer, for which the AVContentKeySpecifier matches indications of suitability that are available to the client according to the content key system that’s in use.
- [copyPCMData(fromRange:into:)](cmreadysamplebuffer/copypcmdata%28fromrange_into_%29.md): Conforms when `Content` is `CMReadOnlyDataBlockBuffer`. Copies PCM audio data from the sample buffer into a pre-allocated `AudioBufferList`.
- [splitSamples()](cmreadysamplebuffer/splitsamples%28%29.md): Conforms when `Content` conforms to `CMSampleBuffer.MultiSampleContent`. Split sample buffer into a smaller representation, ideally carrying a single sample per resulting sample buffer.
- [withUnsafeSampleBuffer(\_:)](cmreadysamplebuffer/withunsafesamplebuffer%28__%29.md): Access the underlying CMSampleBuffer instance.

### Type Aliases

- [CMReadySampleBuffer.Attachments](cmreadysamplebuffer/attachments-swift.typealias.md): Conforms when `Content` conforms to `CMSampleBuffer.Content`.

## Relationships

### Conforms To

- [AVAssetReaderOutput.SupportedPayload](../avfoundation/avassetreaderoutput/supportedpayload.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.
