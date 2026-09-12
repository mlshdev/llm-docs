> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer-api](https://developer.apple.com/documentation/coremedia/cmsamplebuffer-api)

# CMSampleBuffer (Swift)

**Framework:** Core Media  
**Kind:** API Collection

An object that contains zero or more media samples of a uniform media type.

<a id="overview"></a>

## Overview

Sample buffers are Core Foundation objects that the system uses to move media sample data through the media pipeline. An instance of `CMSampleBuffer` contains zero or more compressed (or uncompressed) samples of a particular media type and contains one of the following:

- A [CMBlockBuffer](cmblockbuffer.md) of one or more media samples
- A [CVImageBuffer](../corevideo/cvimagebuffer-q40.md), a reference to the format description for the stream of `CMSampleBuffers`, size and timing information for each of the contained media samples, and both buffer-level and sample-level attachments

A sample buffer can contain both sample-level and buffer-level attachments. Each individual sample in a buffer may provide attachments that include information such as timestamps and video frame dependencies. You read and write sample-level attachments using the [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) function. Buffer-level attachments provide information about the buffer as a whole, such as playback speed and actions to perform upon consuming the buffer. You can read and write buffer-level attachments using the APIs described in [CMAttachment](cmattachment-api.md) and the keys listed under [Sample Attachment Keys](sample-attachment-keys.md).

It’s possible for a sample buffer to describe samples it doesn’t yet contain. For example, some media services may have access to sample size, timing, and format information before they read the data. Such services may create sample buffers with that information and insert them into queues early, and attach (or fill) the buffer of media data later, when it becomes ready. Sample buffers have the concept of data-readiness, which means you can test, set, and force them to become ready “now.” It’s also possible for a sample buffer to contain nothing but a special buffer-level attachment that describes a media stream event (for example, “discontinuity: drain and reset decoder before processing the next `CMSampleBuffer`”).

## Topics

### Creating Sample Buffers

- [CMSampleBufferCreateReady(allocator:dataBuffer:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreateready%28allocator_databuffer_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samplesizearray_samplebufferout_%29.md): Creates a sample buffer with media data.
- [CMSampleBufferCreateReadyWithImageBuffer(allocator:imageBuffer:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreatereadywithimagebuffer%28allocator_imagebuffer_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with image data.
- [CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator:dataBuffer:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatereadywithpacketdescriptions%28allocator_databuffer_formatdescription_samplecount_presentationtimestamp_packetdescriptions_samplebufferout_%29.md): Creates a sample buffer with packet descriptions.
- [CMSampleBufferCreateWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreatewithmakedatareadyhandler%28______________________%29.md): Creates a sample buffer with a handler to make the data ready for use.
- [CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:)](cmsamplebuffercreateforimagebufferwithmakedatareadyhandler%28______________%29.md): Creates a sample buffer with an image buffer and a handler to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cmaudiosamplebuffercreatewithpacketdescriptionsandmakedatareadyhandler%28__________________%29.md): Creates a sample buffer with packet descriptions and a handler to make the data ready for use.
- [CMSampleBufferCreate(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:sampleTimingEntryCount:sampleTimingArray:sampleSizeEntryCount:sampleSizeArray:sampleBufferOut:)](cmsamplebuffercreate%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_sampletimingentrycount_sampletimingarray_samplesizeentrycount_samples~3749ab53.md): Creates a sample buffer with a callback to make the data ready for use.
- [CMSampleBufferCreateForImageBuffer(allocator:imageBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleTiming:sampleBufferOut:)](cmsamplebuffercreateforimagebuffer%28allocator_imagebuffer_dataready_makedatareadycallback_refcon_formatdescription_sampletiming_samplebufferout_%29.md): Creates a sample buffer with an image buffer and a callback to make the data ready for use.
- [CMAudioSampleBufferCreateWithPacketDescriptions(allocator:dataBuffer:dataReady:makeDataReadyCallback:refcon:formatDescription:sampleCount:presentationTimeStamp:packetDescriptions:sampleBufferOut:)](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

### Copying Sample Buffers

- [CMSampleBufferCreateCopy(allocator:sampleBuffer:sampleBufferOut:)](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCreateCopyWithNewTiming(allocator:sampleBuffer:sampleTimingEntryCount:sampleTimingArray:sampleBufferOut:)](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.
- [CMSampleBufferCopySampleBufferForRange(allocator:sampleBuffer:sampleRange:sampleBufferOut:)](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

### Determining Readiness

- [CMSampleBufferDataIsReady(\_:)](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed(\_:status:)](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed(\_:statusOut:)](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:)](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler(\_:invalidateHandler:)](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid(\_:)](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback(\_:callback:refcon:)](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

### Inspecting Size Information

- [CMSampleBufferGetNumSamples(\_:)](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetTotalSampleSize(\_:)](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSize(\_:at:)](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration(\_:)](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp(\_:)](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp(\_:)](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration(\_:)](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp(\_:)](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp(\_:)](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp(\_:newValue:)](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo(\_:at:timingInfoOut:)](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray(\_:entryCount:arrayToFill:entriesNeededOut:)](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

### Accessing the Format Description

- [CMSampleBufferGetFormatDescription(\_:)](cmsamplebuffergetformatdescription%28__%29.md): Returns the format description of the samples in a sample buffer.

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer(\_:newValue:)](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer(\_:)](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:)](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:)](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:)](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

### Managing Attachments

- [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md): Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.
- [Sample Attachment Keys](sample-attachment-keys.md): Keys that specify attachments to individual samples in a buffer.

### Processing Samples

- [CMSampleBufferCallBlockForEachSample(\_:\_:)](cmsamplebuffercallblockforeachsample%28____%29.md): Calls a block for every individual sample in a sample buffer.
- [CMSampleBufferCallForEachSample(\_:callback:refcon:)](cmsamplebuffercallforeachsample%28__callback_refcon_%29.md): Calls a function for every individual sample in a sample buffer.

### Accessing the Type Identifier

- [CMSampleBufferGetTypeID()](cmsamplebuffergettypeid%28%29.md): Returns the type identifier of sample buffer objects.

### Data Types

- [CMSampleBuffer](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBuffer](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

### Notifications

- [Sample Buffer Notifications](sample-buffer-notifications.md): Notifications the system posts when processing sample buffer objects.

### Errors

- [Sample Buffer Error Codes](sample-buffer-errors.md): Errors that occur when processing sample buffer objects.
- [kCMPersistentTrackID_Invalid](kcmpersistenttrackid_invalid.md): Indicates an invalid track ID.

### Functions

- [CMTimeFoldIntoRange(\_:foldRange:)](cmtimefoldintorange%28__foldrange_%29.md): Folds a time into a time range.
- [CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:)](cmvideoformatdescriptiongethevcparametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set contained in an HEVC (H.265) format description.

## See Also

### Sample Processing

- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.

# CMSampleBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

An object that contains zero or more media samples of a uniform media type.

<a id="overview"></a>

## Overview

Sample buffers are Core Foundation objects that the system uses to move media sample data through the media pipeline. An instance of `CMSampleBuffer` contains zero or more compressed (or uncompressed) samples of a particular media type and contains one of the following:

- A [CMBlockBufferRef](cmblockbuffer.md) of one or more media samples
- A [CVImageBuffer](../corevideo/cvimagebuffer-q40.md), a reference to the format description for the stream of `CMSampleBuffers`, size and timing information for each of the contained media samples, and both buffer-level and sample-level attachments

A sample buffer can contain both sample-level and buffer-level attachments. Each individual sample in a buffer may provide attachments that include information such as timestamps and video frame dependencies. You read and write sample-level attachments using the [CMSampleBufferGetSampleAttachmentsArray](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) function. Buffer-level attachments provide information about the buffer as a whole, such as playback speed and actions to perform upon consuming the buffer. You can read and write buffer-level attachments using the APIs described in [CMAttachment](cmattachment-api.md) and the keys listed under [Sample Attachment Keys](sample-attachment-keys.md).

It’s possible for a sample buffer to describe samples it doesn’t yet contain. For example, some media services may have access to sample size, timing, and format information before they read the data. Such services may create sample buffers with that information and insert them into queues early, and attach (or fill) the buffer of media data later, when it becomes ready. Sample buffers have the concept of data-readiness, which means you can test, set, and force them to become ready “now.” It’s also possible for a sample buffer to contain nothing but a special buffer-level attachment that describes a media stream event (for example, “discontinuity: drain and reset decoder before processing the next `CMSampleBuffer`”).

## Topics

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
- [CMAudioSampleBufferCreateWithPacketDescriptions](cmaudiosamplebuffercreatewithpacketdescriptions%28allocator_databuffer_dataready_makedatareadycallback_refcon_formatdescription_samplecount_presentationtimestamp_packetdescriptions_s~c44b5d68.md): Creates a sample buffer with packet descriptions and a callback to make the data ready for use.

### Copying Sample Buffers

- [CMSampleBufferCreateCopy](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCreateCopyWithNewTiming](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.
- [CMSampleBufferCopySampleBufferForRange](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

### Determining Readiness

- [CMSampleBufferDataIsReady](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

### Inspecting Size Information

- [CMSampleBufferGetNumSamples](cmsamplebuffergetnumsamples%28__%29.md): Returns the number of media samples in a sample buffer.
- [CMSampleBufferGetTotalSampleSize](cmsamplebuffergettotalsamplesize%28__%29.md): Returns the total size in bytes of sample data in a sample buffer.
- [CMSampleBufferGetSampleSize](cmsamplebuffergetsamplesize%28__at_%29.md): Returns the size in bytes of a specified sample in a sample buffer.
- [CMSampleBufferGetSampleSizeArray](cmsamplebuffergetsamplesizearray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample sizes that represents each sample in a sample buffer.

### Inspecting Duration and Timing

- [CMSampleBufferGetDuration](cmsamplebuffergetduration%28__%29.md): Returns the total duration of a sample buffer.
- [CMSampleBufferGetDecodeTimeStamp](cmsamplebuffergetdecodetimestamp%28__%29.md): Returns the decode timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetPresentationTimeStamp](cmsamplebuffergetpresentationtimestamp%28__%29.md): Returns the presentation timestamp that’s the earliest numerically of all the samples in a sample buffer.
- [CMSampleBufferGetOutputDuration](cmsamplebuffergetoutputduration%28__%29.md): Returns the output duration of a sample buffer.
- [CMSampleBufferGetOutputDecodeTimeStamp](cmsamplebuffergetoutputdecodetimestamp%28__%29.md): Returns the output decode timestamp of a sample buffer.
- [CMSampleBufferGetOutputPresentationTimeStamp](cmsamplebuffergetoutputpresentationtimestamp%28__%29.md): Returns the output presentation timestamp of a sample buffer.
- [CMSampleBufferSetOutputPresentationTimeStamp](cmsamplebuffersetoutputpresentationtimestamp%28__newvalue_%29.md): Sets an output presentation timestamp to use in place of a calculated value.
- [CMSampleBufferGetSampleTimingInfo](cmsamplebuffergetsampletiminginfo%28__at_timinginfoout_%29.md): Retrieves a timing information structure that describes a specified sample in a sample buffer.
- [CMSampleBufferGetSampleTimingInfoArray](cmsamplebuffergetsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of sample timing information structures that represents each sample in a sample buffer.
- [CMSampleBufferGetOutputSampleTimingInfoArray](cmsamplebuffergetoutputsampletiminginfoarray%28__entrycount_arraytofill_entriesneededout_%29.md): Retrieves an array of output timing information structures that represents each sample in a sample buffer.

### Accessing the Format Description

- [CMSampleBufferGetFormatDescription](cmsamplebuffergetformatdescription%28__%29.md): Returns the format description of the samples in a sample buffer.

### Accessing Tag Information

- [CMSampleBufferGetTaggedBufferGroup](cmsamplebuffergettaggedbuffergroup.md): Gets the tagged buffer group of a sample buffer.

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

### Managing Attachments

- [CMSampleBufferGetSampleAttachmentsArray](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md): Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.
- [Sample Attachment Keys](sample-attachment-keys.md): Keys that specify attachments to individual samples in a buffer.

### Processing Samples

- [CMSampleBufferCallBlockForEachSample](cmsamplebuffercallblockforeachsample%28____%29.md): Calls a block for every individual sample in a sample buffer.
- [CMSampleBufferCallForEachSample](cmsamplebuffercallforeachsample%28__callback_refcon_%29.md): Calls a function for every individual sample in a sample buffer.

### Accessing the Type Identifier

- [CMSampleBufferGetTypeID](cmsamplebuffergettypeid%28%29.md): Returns the type identifier of sample buffer objects.

### Data Types

- [CMSampleBufferRef](cmsamplebuffer.md): A reference to a buffer of media data.
- [Sample Buffer Flags](sample-buffer-flags.md): Flags that customize the behavior of framework operations.
- [CMSampleTimingInfo](cmsampletiminginfo.md): A collection of timing information for a sample in a sample buffer.
- [CMBufferRef](cmbuffer.md): A reference to a buffer object.
- [CMBufferGetSizeCallback](cmbuffergetsizecallback.md): A client callback that returns a size.
- [CMItemIndex](cmitemindex.md): A datatype that represents an item index.
- [CMItemCount](cmitemcount.md): A datatype that represents an item count.
- [CMPersistentTrackID](cmpersistenttrackid.md): A datatype that represents a persistent track identifier.
- [CMMuxedStreamType](cmmuxedstreamtype.md): A datatype that represents a muxed stream of data.

### Notifications

- [Sample Buffer Notifications](sample-buffer-notifications.md): Notifications the system posts when processing sample buffer objects.

### Errors

- [Sample Buffer Error Codes](sample-buffer-errors.md): Errors that occur when processing sample buffer objects.
- [kCMPersistentTrackID_Invalid](kcmpersistenttrackid_invalid.md): Indicates an invalid track ID.

### Functions

- [CMTimeFoldIntoRange](cmtimefoldintorange%28__foldrange_%29.md): Folds a time into a time range.
- [CMVideoFormatDescriptionGetHEVCParameterSetAtIndex](cmvideoformatdescriptiongethevcparametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set contained in an HEVC (H.265) format description.

## See Also

### Sample Processing

- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
