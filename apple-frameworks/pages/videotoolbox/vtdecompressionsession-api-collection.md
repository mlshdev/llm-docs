> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsession-api-collection](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession-api-collection)

# VTDecompressionSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that decompresses video data.

<a id="overview"></a>

## Overview

A decompression session supports the decompression of a sequence of video frames. Here’s the basic workflow:

1. Create a decompression session by calling [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).
2. Optionally, configure the session with your desired [Decompression Properties](decompression-properties.md) by calling [VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties(\_:propertyDictionary:)](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Decode video frames using [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md).
4. When you finish with the decompression session, call [VTDecompressionSessionInvalidate(\_:)](vtdecompressionsessioninvalidate%28__%29.md) to tear it down, and call [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating a Session

- [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_decompressionsessionout_%29.md)
- [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md): Creates a session for decompressing video frames.

### Configuring a Session

- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.
- [VTVideoDecoderExtensionProperties(\_:)](vtvideodecoderextensionproperties%28__%29.md)

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_completionhandler_%29.md): Decompresses a video frame and calls the provided output closure when decompression completes.
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames(\_:)](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:)](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.

### Decoding Multi-Image Frames

- [VTIsStereoMVHEVCDecodeSupported()](vtisstereomvhevcdecodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.
- [VTDecompressionMultiImageCapableOutputHandler](vtdecompressionmultiimagecapableoutputhandler.md): A type alias for callback that the system invokes when it finishes decompressing a frame.

### Invalidating a Session

- [VTDecompressionSessionInvalidate(\_:)](vtdecompressionsessioninvalidate%28__%29.md): Tears down a decompression session.

### Accessing the Type Identifier

- [VTDecompressionSessionGetTypeID()](vtdecompressionsessiongettypeid%28%29.md): Returns the Core Foundation type identifier for the decompression session.

### Data Types

- [VTDecompressionSession](vtdecompressionsession.md): A reference to a decompression session.
- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.

# VTDecompressionSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that decompresses video data.

<a id="overview"></a>

## Overview

A decompression session supports the decompression of a sequence of video frames. Here’s the basic workflow:

1. Create a decompression session by calling [VTDecompressionSessionCreate](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).
2. Optionally, configure the session with your desired [Decompression Properties](decompression-properties.md) by calling [VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) or [VTSessionSetProperties](vtsessionsetproperties%28__propertydictionary_%29.md).
3. Decode video frames using [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md).
4. When you finish with the decompression session, call [VTDecompressionSessionInvalidate](vtdecompressionsessioninvalidate%28__%29.md) to tear it down, and call [CFRelease](../corefoundation/cfrelease.md) to free its memory.

## Topics

### Creating a Session

- [VTDecompressionSessionCreate](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md): Creates a session for decompressing video frames.

### Configuring a Session

- [Decompression Properties](decompression-properties.md): Properties used to configure a VideoToolbox decompression session.

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrameWithOptions](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrameWithOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.

### Decoding Multi-Image Frames

- [VTIsStereoMVHEVCDecodeSupported](vtisstereomvhevcdecodesupported%28%29.md): Returns a Boolean value that indicates whether the system supports MV-HEVC decoding.
- [VTDecompressionSessionSetMultiImageCallback](vtdecompressionsessionsetmultiimagecallback.md): Provides a callback capable of receiving multiple images for individual frame decoding requests.
- [VTDecompressionSessionDecodeFrameWithMultiImageCapableOutputHandler](vtdecompressionsessiondecodeframewithmultiimagecapableoutputhandler.md): Decompresses a multi-image frame and calls the specified output handler upon completion.
- [VTDecompressionMultiImageCapableOutputHandler](vtdecompressionmultiimagecapableoutputhandler.md): A type alias for callback that the system invokes when it finishes decompressing a frame.

### Invalidating a Session

- [VTDecompressionSessionInvalidate](vtdecompressionsessioninvalidate%28__%29.md): Tears down a decompression session.

### Accessing the Type Identifier

- [VTDecompressionSessionGetTypeID](vtdecompressionsessiongettypeid%28%29.md): Returns the Core Foundation type identifier for the decompression session.

### Data Types

- [VTDecompressionSessionRef](vtdecompressionsession.md): A reference to a decompression session.
- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.
