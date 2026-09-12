> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox](https://developer.apple.com/documentation/videotoolbox)

# Video Toolbox (Swift)

**Framework:** Video Toolbox  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Work directly with hardware-accelerated video encoding and decoding capabilities.

<a id="overview"></a>

## Overview

VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders. It provides services for video compression and decompression, and for conversion between raster image formats stored in CoreVideo pixel buffers. These services are provided in the form of session objects (compression, decompression, and pixel transfer), which are vended as Core Foundation (CF) types. Apps that don’t need direct access to hardware encoders and decoders shouldn’t need to use VideoToolbox directly.

## Topics

### Frame Processing

- [Frame processing](videotoolbox/frame-processing.md): An interface for accessing a range of different video-processing features.

### Motion Estimation

- [VTMotionEstimationSession](videotoolbox/vtmotionestimationsession.md)

### Compression

- [Encoding video for low-latency conferencing](videotoolbox/encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](videotoolbox/encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](videotoolbox/encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](videotoolbox/vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTDecompressionSession](videotoolbox/vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](videotoolbox/vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](videotoolbox/vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.

### Transformation

- [VTPixelTransferSession](videotoolbox/vtpixeltransfersession-api-collection.md): An object converts video data from source pixel buffers to destination pixel buffers.
- [VTPixelRotationSession](videotoolbox/vtpixelrotationsession-api-collection.md): An object that rotates source pixel buffers to destination pixel buffers.

### RAW Processing

- [VTRAWProcessingSession](videotoolbox/vtrawprocessingsession.md): An object that processes frames in camera native formats such as RAW or Bayer.

### Media Extension

- [VTExtensionPropertiesKey](videotoolbox/vtextensionpropertieskey.md): A key in a Media Extension extension properties dictionary.

### HDR Metadata

- [VTHDRPerFrameMetadataGenerationSession](videotoolbox/vthdrperframemetadatagenerationsession.md): An object that generates per-frame HDR metadata.

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](videotoolbox/vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](videotoolbox/vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](videotoolbox/vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](videotoolbox/vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](videotoolbox/vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](videotoolbox/video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

### Utilities

- [VTCreateCGImageFromCVPixelBuffer(\_:options:imageOut:)](videotoolbox/vtcreatecgimagefromcvpixelbuffer%28__options_imageout_%29.md): Creates a Core Graphics bitmap image or image mask using the provided pixel buffer.

### Data Types

- [VTSession](videotoolbox/vtsession-api-collection.md): An abstract object that provides the common interface to configure VideoToolbox session objects.
- [VTInt32Point](videotoolbox/vtint32point.md): A structure that represents a 32-bit integer point value.
- [VTInt32Size](videotoolbox/vtint32size.md): A structure that represents a 32-bit integer size value.

### Errors

- [Error Code Constants](videotoolbox/1490398-error-code-constants.md): Constants for Video Toolbox operation error codes.

### Reference

- [VideoToolbox Reference](videotoolbox/videotoolbox-reference.md)

### Variables

- [kVTCompressionPreset_ConsistentQuality](videotoolbox/kvtcompressionpreset_consistentquality.md)
- [kVTCompressionPropertyKey_ConstantQualityFactor](videotoolbox/kvtcompressionpropertykey_constantqualityfactor.md)
- [kVTCompressionPropertyKey_LogTransferFunction](videotoolbox/kvtcompressionpropertykey_logtransferfunction.md): Indicates that the transfer function or gamma of the content is a log format and identifies the specific log curve. Log curve identifiers include `kCVImageBufferLogTransferFunction_AppleLog` (“com.apple.rec2020.apple-log”) and `kCVImageBufferLogTransferFunction_AppleLog2` (“com.apple.apple-wide-gamut.apple-log”). When the LogTransferFunction is specified for a VTCompressionSession, if source image buffers do not have exactly that LogTransferFunction, encoding will fail.
- [kVTLogTransferFunctionMismatchErr](videotoolbox/kvtlogtransferfunctionmismatcherr.md)
- [kVTProjectionKind_AppleImmersiveVideo](videotoolbox/kvtprojectionkind_appleimmersivevideo.md)

# Video Toolbox (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Work directly with hardware-accelerated video encoding and decoding capabilities.

<a id="overview"></a>

## Overview

VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders. It provides services for video compression and decompression, and for conversion between raster image formats stored in CoreVideo pixel buffers. These services are provided in the form of session objects (compression, decompression, and pixel transfer), which are vended as Core Foundation (CF) types. Apps that don’t need direct access to hardware encoders and decoders shouldn’t need to use VideoToolbox directly.

## Topics

### Frame Processing

- [Frame processing](videotoolbox/frame-processing.md): An interface for accessing a range of different video-processing features.

### Motion Estimation

- [VTMotionEstimationSession](videotoolbox/vtmotionestimationsession-api-collection.md)

### Compression

- [Encoding video for low-latency conferencing](videotoolbox/encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](videotoolbox/encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](videotoolbox/encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](videotoolbox/vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTDecompressionSession](videotoolbox/vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](videotoolbox/vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
- [VTMultiPassStorage](videotoolbox/vtmultipassstorage-api-collection.md): An object that stores video encoding metadata from a multipass encoding session.

### Transformation

- [VTPixelTransferSession](videotoolbox/vtpixeltransfersession-api-collection.md): An object converts video data from source pixel buffers to destination pixel buffers.
- [VTPixelRotationSession](videotoolbox/vtpixelrotationsession-api-collection.md): An object that rotates source pixel buffers to destination pixel buffers.

### RAW Processing

- [VTRAWProcessingSession](videotoolbox/vtrawprocessingsession-api-collection.md): An object that processes frames in camera native formats such as RAW or Bayer.

### Media Extension

- [VTExtensionPropertiesKey](videotoolbox/vtextensionpropertieskey.md): A key in a Media Extension extension properties dictionary.
- [VTCopyVideoDecoderExtensionProperties](videotoolbox/vtcopyvideodecoderextensionproperties.md): Returns information about the Media Extension video decoder required to decode the specified format.

### HDR Metadata

- [VTHDRPerFrameMetadataGenerationSession](videotoolbox/vthdrperframemetadatagenerationsession-api-collection.md): An object that generates per-frame HDR metadata.

### Codec Support

- [VTIsHardwareDecodeSupported](videotoolbox/vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders](videotoolbox/vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](videotoolbox/vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](videotoolbox/vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](videotoolbox/vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](videotoolbox/video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

### Utilities

- [VTCreateCGImageFromCVPixelBuffer](videotoolbox/vtcreatecgimagefromcvpixelbuffer%28__options_imageout_%29.md): Creates a Core Graphics bitmap image or image mask using the provided pixel buffer.

### Data Types

- [VTSession](videotoolbox/vtsession-api-collection.md): An abstract object that provides the common interface to configure VideoToolbox session objects.
- [VTInt32Point](videotoolbox/vtint32point.md): A structure that represents a 32-bit integer point value.
- [VTInt32Size](videotoolbox/vtint32size.md): A structure that represents a 32-bit integer size value.

### Errors

- [Error Code Constants](videotoolbox/1490398-error-code-constants.md): Constants for Video Toolbox operation error codes.

### Reference

- [VideoToolbox Reference](videotoolbox/videotoolbox-reference.md)

### Variables

- [kVTCompressionPreset_ConsistentQuality](videotoolbox/kvtcompressionpreset_consistentquality.md)
- [kVTCompressionPropertyKey_ConstantQualityFactor](videotoolbox/kvtcompressionpropertykey_constantqualityfactor.md)
- [kVTCompressionPropertyKey_LogTransferFunction](videotoolbox/kvtcompressionpropertykey_logtransferfunction.md): Indicates that the transfer function or gamma of the content is a log format and identifies the specific log curve. Log curve identifiers include `kCVImageBufferLogTransferFunction_AppleLog` (“com.apple.rec2020.apple-log”) and `kCVImageBufferLogTransferFunction_AppleLog2` (“com.apple.apple-wide-gamut.apple-log”). When the LogTransferFunction is specified for a VTCompressionSession, if source image buffers do not have exactly that LogTransferFunction, encoding will fail.
- [kVTProjectionKind_AppleImmersiveVideo](videotoolbox/kvtprojectionkind_appleimmersivevideo.md)

### Enumeration Cases

- [kVTLogTransferFunctionMismatchErr](videotoolbox/kvtlogtransferfunctionmismatcherr.md)
