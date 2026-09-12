> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsession-api-collection](https://developer.apple.com/documentation/videotoolbox/vtcompressionsession-api-collection)

# VTCompressionSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that compresses video data.

<a id="overview"></a>

## Overview

A compression session supports the compression of a sequence of video frames. Here’s the workflow:

1. Create a compression session using [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).
2. Optionally, configure the session with your desired [Compression Properties](compression-properties.md) by calling [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties(\_:propertyDictionary:)](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Encode video frames using [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) and receive the compressed video frames in the session’s [VTCompressionOutputCallback](vtcompressionoutputcallback.md).
4. To force the completion of some or all pending frames, call [VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:)](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md).
5. When you finish with the compression session, call [VTCompressionSessionInvalidate(\_:)](vtcompressionsessioninvalidate%28__%29.md) to invalidate it and [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating a Session

- [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md): Creates an object that compresses video frames.

### Configuring a Session

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool(\_:)](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames(\_:)](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:)](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.

### Encoding Multi-Image Frames

- [VTIsStereoMVHEVCEncodeSupported()](vtisstereomvhevcencodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC encoding.
- [VTCompressionSessionEncodeMultiImageFrame(\_:taggedBuffers:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodemultiimageframe%28__taggedbuffers_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Passes a multi-image frame to a compression session for encoding and provides a callback to handle the output.

### Performing Multiple Passes

- [VTCompressionSessionBeginPass(\_:flags:\_:)](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass(\_:timeRangeCountOut:timeRangeArrayOut:)](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

### Invalidating a Session

- [VTCompressionSessionInvalidate(\_:)](vtcompressionsessioninvalidate%28__%29.md): Tears down a compression session.

### Accessing the Type Identifier

- [VTCompressionSessionGetTypeID()](vtcompressionsessiongettypeid%28%29.md): Retrieves the Core Foundation type identifier for the compression session.

### Data Types

- [VTCompressionSession](vtcompressionsession.md): A reference to a VideoToolbox compression session.
- [VTEncodeInfoFlags](vtencodeinfoflags.md): Flags that indicate encoder state.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTDecompressionSession](vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.

# VTCompressionSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that compresses video data.

<a id="overview"></a>

## Overview

A compression session supports the compression of a sequence of video frames. Here’s the workflow:

1. Create a compression session using [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).
2. Optionally, configure the session with your desired [Compression Properties](compression-properties.md) by calling [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Encode video frames using [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) and receive the compressed video frames in the session’s [VTCompressionOutputCallback](vtcompressionoutputcallback.md).
4. To force the completion of some or all pending frames, call [VTCompressionSessionCompleteFrames](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md).
5. When you finish with the compression session, call [VTCompressionSessionInvalidate](vtcompressionsessioninvalidate%28__%29.md) to invalidate it and [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating a Session

- [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md): Creates an object that compresses video frames.

### Configuring a Session

- [Compression Properties](compression-properties.md): Properties that you use to configure a compression session.

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrameWithOutputHandler](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.

### Encoding Multi-Image Frames

- [VTIsStereoMVHEVCEncodeSupported](vtisstereomvhevcencodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC encoding.
- [VTCompressionSessionEncodeMultiImageFrame](vtcompressionsessionencodemultiimageframe.md): Passes a multi-image frame to a compression session for encoding.
- [VTCompressionSessionEncodeMultiImageFrameWithOutputHandler](vtcompressionsessionencodemultiimageframewithoutputhandler.md): Passes a multi-image frame to a compression session for encoding and provides a callback to handle the output.

### Performing Multiple Passes

- [VTCompressionSessionBeginPass](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

### Invalidating a Session

- [VTCompressionSessionInvalidate](vtcompressionsessioninvalidate%28__%29.md): Tears down a compression session.

### Accessing the Type Identifier

- [VTCompressionSessionGetTypeID](vtcompressionsessiongettypeid%28%29.md): Retrieves the Core Foundation type identifier for the compression session.

### Data Types

- [VTCompressionSessionRef](vtcompressionsession.md): A reference to a VideoToolbox compression session.
- [VTEncodeInfoFlags](vtencodeinfoflags.md): Flags that indicate encoder state.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTDecompressionSession](vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.
