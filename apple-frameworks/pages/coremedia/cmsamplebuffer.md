> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer](https://developer.apple.com/documentation/coremedia/cmsamplebuffer)

# CMSampleBuffer (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer of media data.

## Declaration

```swift
class CMSampleBuffer
```

<a id="overview"></a>

## Overview

A sample buffer is a Core Foundation object that contains zero or more media samples of a particular type (audio, video, muxed, and so on).

## Topics

### Determining Readiness

- [dataReadiness](cmsamplebuffer/datareadiness-swift.property.md): A value that indicates the status of the data the sample buffer contains.
- [setDataReadiness(\_:)](cmsamplebuffer/setdatareadiness%28__%29.md): Sets the status of the sample buffer’s data.
- [CMSampleBuffer.DataReadiness](cmsamplebuffer/datareadiness-swift.enum.md): Constants that indicate the readiness of a sample buffer’s data.
- [makeDataReady()](cmsamplebuffer/makedataready%28%29.md): Makes the sample buffer’s data ready for use by calling its handler closure.
- [trackDataReadiness(\_:)](cmsamplebuffer/trackdatareadiness%28__%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

### Invalidating Sample Buffers

- [isValid](cmsamplebuffer/isvalid.md): A Boolean value that indicates whether the sample buffer is valid.
- [setInvalidateHandler(\_:)](cmsamplebuffer/setinvalidatehandler%28__%29.md): Sets a closure for the sample buffer to call when it’s invalidated.
- [invalidate()](cmsamplebuffer/invalidate%28%29.md): Invalidates a sample buffer by calling its invalidation handler.

### Inspecting Size Information

- [numSamples](cmsamplebuffer/numsamples.md): The number of media samples the buffer contains.
- [sampleSizes()](cmsamplebuffer/samplesizes%28%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.
- [sampleSize(at:)](cmsamplebuffer/samplesize%28at_%29.md): Returns the size of a sample in bytes.
- [totalSampleSize](cmsamplebuffer/totalsamplesize.md): The total size in bytes of sample data in the buffer.

### Inspecting Duration and Timing

- [duration](cmsamplebuffer/duration.md): The total duration of a sample buffer.
- [decodeTimeStamp](cmsamplebuffer/decodetimestamp.md): The decode timestamp of the first sample in the buffer.
- [presentationTimeStamp](cmsamplebuffer/presentationtimestamp.md): The sample presentation timestamp that’s the earliest numerically in the sample buffer.
- [outputDuration](cmsamplebuffer/outputduration.md): The output duration of the sample buffer.
- [outputDecodeTimeStamp](cmsamplebuffer/outputdecodetimestamp.md): The output decode timestamp for a sample buffer.
- [outputPresentationTimeStamp](cmsamplebuffer/outputpresentationtimestamp.md): The output presentation timestamp of a sample buffer.
- [setOutputPresentationTimeStamp(\_:)](cmsamplebuffer/setoutputpresentationtimestamp%28__%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [sampleTimingInfos()](cmsamplebuffer/sampletiminginfos%28%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [sampleTimingInfo(at:)](cmsamplebuffer/sampletiminginfo%28at_%29.md): Returns sample timing information for a sample at the specified index.
- [outputSampleTimingInfos()](cmsamplebuffer/outputsampletiminginfos%28%29.md): Retrieves an array of output sample timing information structures that represents each sample in a sample buffer.

### Accessing the Format Description

- [formatDescription](cmsamplebuffer/formatdescription.md): An object that describes the details of the media data.

### Modifying Sample Buffers

- [dataBuffer](cmsamplebuffer/databuffer.md): A block buffer that contains the media data.
- [setDataBuffer(\_:)](cmsamplebuffer/setdatabuffer%28__%29.md): Associates a block buffer of media data with a sample buffer.
- [imageBuffer](cmsamplebuffer/imagebuffer.md): An image buffer that contains the media data.
- [withAudioBufferList(blockBufferMemoryAllocator:flags:body:)](cmsamplebuffer/withaudiobufferlist%28blockbuffermemoryallocator_flags_body_%29.md): Calls a closure with an audio buffer list that contains the data from a sample buffer and a block buffer backing the audio buffers.
- [setDataBuffer(fromAudioBufferList:blockBufferMemoryAllocator:flags:)](cmsamplebuffer/setdatabuffer%28fromaudiobufferlist_blockbuffermemoryallocator_flags_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list, and sets it as the sample buffer’s data.
- [copyPCMData(fromRange:into:)](cmsamplebuffer/copypcmdata%28fromrange_into_%29.md): Copies PCM audio data from a sample buffer into a prepopulated audio buffer list.
- [audioStreamPacketDescriptions()](cmsamplebuffer/audiostreampacketdescriptions%28%29.md): Creates an array of audio stream packet descriptions for the variable bytes per packet or variable frames per packet audio data in a sample buffer.
- [withUnsafeAudioStreamPacketDescriptions(\_:)](cmsamplebuffer/withunsafeaudiostreampacketdescriptions%28__%29.md): Calls a closure with an audio stream packet description.
- [singleSampleBuffers()](cmsamplebuffer/singlesamplebuffers%28%29.md): Returns all samples in a sample buffer.
- [CMSampleBuffer.SingleSampleBuffers](cmsamplebuffer/singlesamplebuffers.md)

### Managing Attachments

- [CMSampleBuffer.AttachmentKey](cmsamplebuffer/attachmentkey.md): Keys that identify sample buffer attachments.
- [sampleAttachments](cmsamplebuffer/sampleattachments-swift.property.md): An array of sample attachments.
- [CMSampleBuffer.SampleAttachmentsArray](cmsamplebuffer/sampleattachmentsarray.md)
- [CMSampleBuffer.PerSampleAttachmentsDictionary](cmsamplebuffer/persampleattachmentsdictionary.md): A structure that defines keys to identify per-sample attachments.

### Accessing the Type Identifier

- [typeID](cmsamplebuffer/typeid.md): Returns the type identifier of sample buffer objects.

### Accessing Tagged Buffers

- [taggedBuffers](cmsamplebuffer/taggedbuffers.md): Returns the tagged buffers associated with this buffer.

### Constants

- [CMSampleBuffer.Error](cmsamplebuffer/error.md): A structure that defines errors that occur during framework operations.
- [CMSampleBuffer.Flags](cmsamplebuffer/flags.md): Flags that customize the behavior of framework operations.
- [CMSampleBuffer.NotificationKey](cmsamplebuffer/notificationkey.md): A key for sample buffer notifications.

### Notifications

- [dataBecameReady](cmsamplebuffer/databecameready.md): A notification the system posts when a sample buffer’s data becomes ready.
- [dataFailed](cmsamplebuffer/datafailed.md): A notification the system posts when a sample buffer fails to load its data.

### Protocols

- [CMSampleBuffer.Content](cmsamplebuffer/content.md): All buffer types that can be carried by sample buffer are marked by this protocol.
- [CMSampleBuffer.ContentWithFormatDescription](cmsamplebuffer/contentwithformatdescription.md): This is a marker protocol to indicate content that always has a format description.
- [CMSampleBuffer.MultiSampleContent](cmsamplebuffer/multisamplecontent.md): This is a marker protocol to indicate content that supports multiple samples.

### Structures

- [CMSampleBuffer.HEVCTemporalInfo](cmsamplebuffer/hevctemporalinfo.md): The temporal layer information for all samples in a temporal layer.
- [CMSampleBuffer.SampleAttachments](cmsamplebuffer/sampleattachments-swift.struct.md): Attachments applicable to each sample within a sample buffer.
- [CMSampleBuffer.SampleProperties](cmsamplebuffer/sampleproperties.md): Information about a sample in the sample buffer.
- [CMSampleBuffer.SamplePropertiesCollection](cmsamplebuffer/samplepropertiescollection.md): Fixed size collection of sample information.

### Initializers

- [init(referencing:)](cmsamplebuffer/init%28referencing_%29.md)

### Instance Properties

- [contentType](cmsamplebuffer/contenttype-swift.property.md): Type of the content carried by this sample buffer.

### Type Aliases

- [CMSampleBuffer.T](cmsamplebuffer/t.md)

### Enumerations

- [CMSampleBuffer.ContentType](cmsamplebuffer/contenttype-swift.enum.md): Describes the type of content carried by a sample buffer instance.
- [CMSampleBuffer.DynamicContent](cmsamplebuffer/dynamiccontent.md): Sample buffer content not known at compile time.
- [CMSampleBuffer.SizePerSample](cmsamplebuffer/sizepersample.md): Specifies size of each sample in a sample buffer.
- [CMSampleBuffer.TimingPerSample](cmsamplebuffer/timingpersample.md): Specifies timing of each sample in a sample buffer.

## Relationships

### Conforms To

- [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBuffer](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

# CMSampleBufferRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer of media data.

## Declaration

```objectivec
typedef struct opaqueCMSampleBuffer * CMSampleBufferRef;
```

<a id="overview"></a>

## Overview

A sample buffer is a Core Foundation object that contains zero or more media samples of a particular type (audio, video, muxed, and so on).

## See Also

### Data Types

- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBufferRef](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.
