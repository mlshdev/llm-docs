> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor](https://developer.apple.com/documentation/mediaextension/merawprocessor)

# MERAWProcessor (Swift)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the requirements for a RAW processor.

## Declaration

```swift
protocol MERAWProcessor : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol provides an interface for [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) to create and interact with MediaExtension RAW processors. [MERAWProcessor](merawprocessor.md) objects are instantiated by Video Toolbox and are closely linked to a corresponding [MEVideoDecoder](mevideodecoder.md) object that produces RAW video output.

> **Note**

>  Developers who wish to build MediaExtension RAW processors using this API need to include a [RAW processor entitlement](raw-processor-entitlement.md), provisioning profile, and specialized dictionary in their Info.plist file when building their extensions.
>
> For more information, see [Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements), [Create a development provisioning profile](https://developer.apple.com/help/account/manage-provisioning-profiles/create-a-development-provisioning-profile), and [RAW processor property list dictionary](raw-processor-property-list-dictionary.md).

Once a user installs and runs the host app, embedded RAW processor extensions become available to any app on the user’s system that opts in to using them by calling [VTRegisterProfessionalVideoWorkflowVideoDecoders()](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29).

> **Important**

>  `MERAWProcessor` objects run in a sandboxed process without access to the filesystem, network, and other kernel resources.

MediaExtension RAW processor’s operation and life cycle closely tie to [VTRAWProcessingSession](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession).

<a id="Creating-a-raw-processor"></a>

### Creating a raw processor

An instance of the [MERAWProcessorExtension](merawprocessorextension.md) factory object is created the first time the given processor is opened by Video Toolbox in a process. The [makeProcessor(formatDescription:pixelBufferManager:)](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md) method on the [MERAWProcessorExtension](merawprocessorextension.md) object will be called once for each processor instance needed. The processor can evaluate the provided [CMVideoFormatDescription](https://developer.apple.com/documentation/coremedia/cmvideoformatdescription) at this point and confirm whether it is able to process the specified format. If the processor cannot process the format, the factory routine should return [MEError.Code.unsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md). This sequence of calls will happen inside of [VTRAWProcessingSession](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession).

<a id="Configuring-pixel-buffer-requirements"></a>

### Configuring pixel buffer requirements

At any point after instantiation, the processor can call back into the provided [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md) object to notify Video Toolbox of its output pixel buffer requirements. The processor extension may make multiple calls if output requirements change in response to properties being set or due to observed bitstream characteristics.

<a id="Processing-frames"></a>

### Processing frames

Calls to [processFrame(fromImageBuffer:completionHandler:)](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) are serialized. A new frame is not sent to the processor until the last [processFrame(fromImageBuffer:completionHandler:)](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) has returned, but may be submitted before the [processFrame(fromImageBuffer:completionHandler:)](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) completion handler is called if the processing is happening asynchronously. These calls correspond to [VTRAWProcessingSessionProcessFrame](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessionprocessframe) calls on the parent `VTRAWProcessingSession`.

RAW processors must write their output frames into `CVPixelBuffers` allocated through the [makePixelBuffer()](merawprocessorpixelbuffermanager/makepixelbuffer%28%29.md) interface. Returning [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) from any other source may result in degraded performance or other issues.

If the processor’s internal processing queue is full, and it cannot process more frames, it should return [NO](https://developer.apple.com/documentation/objectivec/no) when the [isReadyForMoreMediaData](merawprocessor/isreadyformoremediadata.md) property is queried. This property should return [YES](https://developer.apple.com/documentation/objectivec/yes) again when the processor is able to accept new frames – generally after an earlier asynchronous frame processing operation is completed.

## Topics

### Inspecting a RAW processor

- [metalDeviceRegistryID](merawprocessor/metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](merawprocessor/outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](merawprocessor/processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [isReadyForMoreMediaData](merawprocessor/isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.

### Processing RAW frame

- [processFrame(fromImageBuffer:completionHandler:)](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md): Requests the processor to process a video frame.

### Extension requirements

- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

### Instance Properties

- [metadataForSidecarFile](merawprocessor/metadataforsidecarfile.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

# MERAWProcessor (Objective-C)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the requirements for a RAW processor.

## Declaration

```objectivec
@protocol MERAWProcessor <NSObject>
```

<a id="overview"></a>

## Overview

This protocol provides an interface for [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) to create and interact with MediaExtension RAW processors. [MERAWProcessor](merawprocessor.md) objects are instantiated by Video Toolbox and are closely linked to a corresponding [MEVideoDecoder](mevideodecoder.md) object that produces RAW video output.

> **Note**

>  Developers who wish to build MediaExtension RAW processors using this API need to include a [RAW processor entitlement](raw-processor-entitlement.md), provisioning profile, and specialized dictionary in their Info.plist file when building their extensions.
>
> For more information, see [Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements), [Create a development provisioning profile](https://developer.apple.com/help/account/manage-provisioning-profiles/create-a-development-provisioning-profile), and [RAW processor property list dictionary](raw-processor-property-list-dictionary.md).

Once a user installs and runs the host app, embedded RAW processor extensions become available to any app on the user’s system that opts in to using them by calling [VTRegisterProfessionalVideoWorkflowVideoDecoders](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders%28%29).

> **Important**

>  `MERAWProcessor` objects run in a sandboxed process without access to the filesystem, network, and other kernel resources.

MediaExtension RAW processor’s operation and life cycle closely tie to [VTRAWProcessingSessionRef](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession).

<a id="Creating-a-raw-processor"></a>

### Creating a raw processor

An instance of the [MERAWProcessorExtension](merawprocessorextension.md) factory object is created the first time the given processor is opened by Video Toolbox in a process. The [processorWithFormatDescription:extensionPixelBufferManager:error:](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md) method on the [MERAWProcessorExtension](merawprocessorextension.md) object will be called once for each processor instance needed. The processor can evaluate the provided [CMVideoFormatDescriptionRef](https://developer.apple.com/documentation/coremedia/cmvideoformatdescription) at this point and confirm whether it is able to process the specified format. If the processor cannot process the format, the factory routine should return [MEErrorUnsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md). This sequence of calls will happen inside of [VTRAWProcessingSessionRef](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession).

<a id="Configuring-pixel-buffer-requirements"></a>

### Configuring pixel buffer requirements

At any point after instantiation, the processor can call back into the provided [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md) object to notify Video Toolbox of its output pixel buffer requirements. The processor extension may make multiple calls if output requirements change in response to properties being set or due to observed bitstream characteristics.

<a id="Processing-frames"></a>

### Processing frames

Calls to [processFrameFromImageBuffer:completionHandler:](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) are serialized. A new frame is not sent to the processor until the last [processFrameFromImageBuffer:completionHandler:](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) has returned, but may be submitted before the [processFrameFromImageBuffer:completionHandler:](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md) completion handler is called if the processing is happening asynchronously. These calls correspond to [VTRAWProcessingSessionProcessFrame](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessionprocessframe) calls on the parent `VTRAWProcessingSession`.

RAW processors must write their output frames into `CVPixelBuffers` allocated through the [createPixelBufferAndReturnError:](merawprocessorpixelbuffermanager/makepixelbuffer%28%29.md) interface. Returning [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) from any other source may result in degraded performance or other issues.

If the processor’s internal processing queue is full, and it cannot process more frames, it should return [NO](https://developer.apple.com/documentation/objectivec/no) when the [readyForMoreMediaData](merawprocessor/isreadyformoremediadata.md) property is queried. This property should return [YES](https://developer.apple.com/documentation/objectivec/yes) again when the processor is able to accept new frames – generally after an earlier asynchronous frame processing operation is completed.

## Topics

### Inspecting a RAW processor

- [metalDeviceRegistryID](merawprocessor/metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](merawprocessor/outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](merawprocessor/processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [readyForMoreMediaData](merawprocessor/isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.

### Processing RAW frame

- [processFrameFromImageBuffer:completionHandler:](merawprocessor/processframe%28fromimagebuffer_completionhandler_%29.md): Requests the processor to process a video frame.

### Extension requirements

- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

### Notifications

- [MERAWProcessorReadyForMoreMediaDataDidChangeNotification](merawprocessorreadyformoremediadatadidchangenotification.md): A notification that indicates a change to the object’s readiness to process additional media data.
- [MERAWProcessorValuesDidChangeNotification](merawprocessorvaluesdidchangenotification.md): A notification that indicates a change to the object’s set of available processing parameters.

### Instance Properties

- [metadataForSidecarFile](merawprocessor/metadataforsidecarfile.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
