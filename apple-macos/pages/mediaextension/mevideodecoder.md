> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder](https://developer.apple.com/documentation/mediaextension/mevideodecoder)

# MEVideoDecoder (Swift)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines the requirements for a video decoder.

## Declaration

```swift
protocol MEVideoDecoder : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol provides an interface for [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) to create and interact with MediaExtension video decoders. `MEVideoDecoder` objects are always instantiated by Video Toolbox.

> **Note**

>  Developers who wish to build MediaExtension video decoders using this API need to include a [Video decoder entitlement](video-decoder-entitlement.md), provisioning profile, and specialized dictionary in their Info.plist file when building their extensions.
>
> For more information, see [Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements), [Create a development provisioning profile](https://developer.apple.com/help/account/manage-provisioning-profiles/create-a-development-provisioning-profile), and [Video decoder property list dictionary](video-decoder-property-list-dictionary.md)

Once a user installs and runs the host app, embedded video decoder extensions become available to any app on the user’s system that opts in to using them by calling [VTRegisterProfessionalVideoWorkflowVideoDecoders()](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29).

> **Important**

>  `MEVideoDecoder` objects run in a sandboxed process without access to the filesystem, network, and other kernel resources.

The following sections explain the video decoder life cycle and performing decoding operations.

<a id="Creating-a-video-decoder"></a>

### Creating a video decoder

The first time Video Toolbox opens a decoder in a process, it creates an instance of the [MEVideoDecoderExtension](mevideodecoderextension.md) factory object. It then calls its [makeVideoDecoder(codecType:videoFormatDescription:videoDecoderSpecifications:pixelBufferManager:)](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md) method for each decoder instance it needs. A decoder can evaluate the [CMVideoCodecType](https://developer.apple.com/documentation/coremedia/cmvideocodectype) and [CMVideoFormatDescription](https://developer.apple.com/documentation/coremedia/cmvideoformatdescription) that the system provides and confirm whether it can decode the specified format. If the decoder can’t decode the format, the factory routine needs to return the error [MEError.Code.unsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md). This sequence of events happens within [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncreate%28allocator:formatdescription:decoderspecification:imagebufferattributes:outputcallback:decompressionsessionout:%29).

<a id="Configuring-a-pixel-buffer"></a>

### Configuring a pixel buffer

Once instantiated, a decoder can call back to the provided [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md) object to notify Video Toolbox of its output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) requirements. It can make these calls multiple times if output requirements change in response to properties receiving new values or due to observed bitstream characteristics.

<a id="Querying-and-setting-properties"></a>

### Querying and setting properties

Properties can receive queries or new values on the decoder at any time, before, during or after frame decode, unless otherwise noted. These calls generally correspond to [VTSessionSetProperty(\_:key:value:)](https://developer.apple.com/documentation/videotoolbox/vtsessionsetproperty%28_:key:value:%29) and [VTSessionCopyProperty(\_:key:allocator:valueOut:)](https://developer.apple.com/documentation/videotoolbox/vtsessioncopyproperty%28_:key:allocator:valueout:%29) calls on the [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession) which opened the decoder. There may be cases where Video Toolbox directly sets or queries properties as well.

<a id="Decoding-frames"></a>

### Decoding frames

The framework serializes calls to [decodeFrame(from:options:completionHandler:)](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md) and doesn’t send a new frame to the decoder until the last [decodeFrame(from:options:completionHandler:)](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md) returns, unless decoding happens asynchronously. These calls correspond to [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessiondecodeframe%28_:samplebuffer:flags:infoflagsout:outputhandler:%29) calls on the owning `VTDecompressionSession`.

Video decoders need to write their output frames into [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) objects allocated by the [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md) object’s [makePixelBuffer()](mevideodecoderpixelbuffermanager/makepixelbuffer%28%29.md) method. Obtaining pixel buffers from any other source may degrade performance or result in other issues.

If the decoder’s internal decoding queue is full and it can’t decode more frames, its [isReadyForMoreMediaData](mevideodecoder/isreadyformoremediadata.md) property value returns [false](https://developer.apple.com/documentation/swift/false). It returns [true](https://developer.apple.com/documentation/swift/true) once the decoder can start accepting new frames again. This generally occurs after an earlier asynchronous frame completes.

<a id="Handling-format-description-changes"></a>

### Handling format description changes

If a change occurs in the format description on incoming [CMSampleBuffer](https://developer.apple.com/documentation/coremedia/cmsamplebuffer) objects, [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) calls [canAccept(\_:)](mevideodecoder/canaccept%28__%29.md) to confirm whether the decoder can transition to the new format description. If that method response is [false](https://developer.apple.com/documentation/swift/false), the system usually closes the decoder and creates a new instance for the changed format description. A call to [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncanacceptformatdescription%28_:formatdescription:%29) can trigger a call of [canAccept(\_:)](mevideodecoder/canaccept%28__%29.md), or Video Toolbox calls this method if it sees a format description change on incoming `CMSampleBufferRef` objects.

## Topics

### Inspecting a video decoder

- [contentHasInterframeDependencies](mevideodecoder/contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](mevideodecoder/recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](mevideodecoder/actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](mevideodecoder/supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](mevideodecoder/reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](mevideodecoder/pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](mevideodecoder/producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [isReadyForMoreMediaData](mevideodecoder/isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

### Decoding frames

- [canAccept(\_:)](mevideodecoder/canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [decodeFrame(from:options:completionHandler:)](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.
- [MEDecodeFrameStatus](medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

### Extension requirements

- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Video decoders

- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

# MEVideoDecoder (Objective-C)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines the requirements for a video decoder.

## Declaration

```objectivec
@protocol MEVideoDecoder <NSObject>
```

<a id="overview"></a>

## Overview

This protocol provides an interface for [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) to create and interact with MediaExtension video decoders. `MEVideoDecoder` objects are always instantiated by Video Toolbox.

> **Note**

>  Developers who wish to build MediaExtension video decoders using this API need to include a [Video decoder entitlement](video-decoder-entitlement.md), provisioning profile, and specialized dictionary in their Info.plist file when building their extensions.
>
> For more information, see [Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements), [Create a development provisioning profile](https://developer.apple.com/help/account/manage-provisioning-profiles/create-a-development-provisioning-profile), and [Video decoder property list dictionary](video-decoder-property-list-dictionary.md)

Once a user installs and runs the host app, embedded video decoder extensions become available to any app on the user’s system that opts in to using them by calling [VTRegisterProfessionalVideoWorkflowVideoDecoders](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29).

> **Important**

>  `MEVideoDecoder` objects run in a sandboxed process without access to the filesystem, network, and other kernel resources.

The following sections explain the video decoder life cycle and performing decoding operations.

<a id="Creating-a-video-decoder"></a>

### Creating a video decoder

The first time Video Toolbox opens a decoder in a process, it creates an instance of the [MEVideoDecoderExtension](mevideodecoderextension.md) factory object. It then calls its [videoDecoderWithCodecType:videoFormatDescription:videoDecoderSpecifications:extensionDecoderPixelBufferManager:error:](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md) method for each decoder instance it needs. A decoder can evaluate the [CMVideoCodecType](https://developer.apple.com/documentation/coremedia/cmvideocodectype) and [CMVideoFormatDescriptionRef](https://developer.apple.com/documentation/coremedia/cmvideoformatdescription) that the system provides and confirm whether it can decode the specified format. If the decoder can’t decode the format, the factory routine needs to return the error [MEErrorUnsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md). This sequence of events happens within [VTDecompressionSessionCreate](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncreate%28allocator:formatdescription:decoderspecification:imagebufferattributes:outputcallback:decompressionsessionout:%29).

<a id="Configuring-a-pixel-buffer"></a>

### Configuring a pixel buffer

Once instantiated, a decoder can call back to the provided [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md) object to notify Video Toolbox of its output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) requirements. It can make these calls multiple times if output requirements change in response to properties receiving new values or due to observed bitstream characteristics.

<a id="Querying-and-setting-properties"></a>

### Querying and setting properties

Properties can receive queries or new values on the decoder at any time, before, during or after frame decode, unless otherwise noted. These calls generally correspond to [VTSessionSetProperty](https://developer.apple.com/documentation/videotoolbox/vtsessionsetproperty%28_:key:value:%29) and [VTSessionCopyProperty](https://developer.apple.com/documentation/videotoolbox/vtsessioncopyproperty%28_:key:allocator:valueout:%29) calls on the [VTDecompressionSessionRef](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession) which opened the decoder. There may be cases where Video Toolbox directly sets or queries properties as well.

<a id="Decoding-frames"></a>

### Decoding frames

The framework serializes calls to [decodeFrameFromSampleBuffer:options:completionHandler:](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md) and doesn’t send a new frame to the decoder until the last [decodeFrameFromSampleBuffer:options:completionHandler:](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md) returns, unless decoding happens asynchronously. These calls correspond to [VTDecompressionSessionDecodeFrameWithOutputHandler](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessiondecodeframe%28_:samplebuffer:flags:infoflagsout:outputhandler:%29) calls on the owning `VTDecompressionSession`.

Video decoders need to write their output frames into [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) objects allocated by the [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md) object’s [createPixelBufferAndReturnError:](mevideodecoderpixelbuffermanager/makepixelbuffer%28%29.md) method. Obtaining pixel buffers from any other source may degrade performance or result in other issues.

If the decoder’s internal decoding queue is full and it can’t decode more frames, its [readyForMoreMediaData](mevideodecoder/isreadyformoremediadata.md) property value returns [false](https://developer.apple.com/documentation/swift/false). It returns [true](https://developer.apple.com/documentation/swift/true) once the decoder can start accepting new frames again. This generally occurs after an earlier asynchronous frame completes.

<a id="Handling-format-description-changes"></a>

### Handling format description changes

If a change occurs in the format description on incoming [CMSampleBufferRef](https://developer.apple.com/documentation/coremedia/cmsamplebuffer) objects, [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) calls [canAcceptFormatDescription:](mevideodecoder/canaccept%28__%29.md) to confirm whether the decoder can transition to the new format description. If that method response is [false](https://developer.apple.com/documentation/swift/false), the system usually closes the decoder and creates a new instance for the changed format description. A call to [VTDecompressionSessionCanAcceptFormatDescription](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncanacceptformatdescription%28_:formatdescription:%29) can trigger a call of [canAcceptFormatDescription:](mevideodecoder/canaccept%28__%29.md), or Video Toolbox calls this method if it sees a format description change on incoming `CMSampleBufferRef` objects.

## Topics

### Inspecting a video decoder

- [contentHasInterframeDependencies](mevideodecoder/contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](mevideodecoder/recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](mevideodecoder/actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](mevideodecoder/supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](mevideodecoder/reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](mevideodecoder/pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](mevideodecoder/producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [readyForMoreMediaData](mevideodecoder/isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

### Decoding frames

- [canAcceptFormatDescription:](mevideodecoder/canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [decodeFrameFromSampleBuffer:options:completionHandler:](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.
- [MEDecodeFrameStatus](medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

### Notifications

- [MEVideoDecoderReadyForMoreMediaDataDidChangeNotification](mevideodecoderreadyformoremediadatadidchangenotification.md): A notification that indicates a change to the decoder’s readiness to process additional media data.

### Extension requirements

- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Video decoders

- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.
