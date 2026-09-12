> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/raw-processor-entitlement](https://developer.apple.com/documentation/mediaextension/raw-processor-entitlement)

# RAW processor entitlement (Swift)

**Framework:** MediaExtension  
**Kind:** Article

Include an entitlement to indicate your extension is a MediaExtension RAW processor.

<a id="overview"></a>

## Overview

MediaExtension RAW processors must include an special entitlement key with a Boolean value set to true. This entitlement is the same as for MediaExtension video decoders, since RAW processors always work in conjunction with a corresponding video decoder. To add the entitlement key in Xcode, follow these steps:

1. Select the build target for your format reader extension
2. Go to the Signing & Capabilities tab
3. Click + to add a new capability
4. Choose Media Extension Video Decoder from the list

The entitlement key is `com.apple.developer.mediaextension.videodecoder` and it must have a Boolean value set to true. A developer provisioning profile will be needed to use this entitlement.

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.

# RAW processor entitlement (Objective-C)

**Framework:** MediaExtension  
**Kind:** Article

Include an entitlement to indicate your extension is a MediaExtension RAW processor.

<a id="overview"></a>

## Overview

MediaExtension RAW processors must include an special entitlement key with a Boolean value set to true. This entitlement is the same as for MediaExtension video decoders, since RAW processors always work in conjunction with a corresponding video decoder. To add the entitlement key in Xcode, follow these steps:

1. Select the build target for your format reader extension
2. Go to the Signing & Capabilities tab
3. Click + to add a new capability
4. Choose Media Extension Video Decoder from the list

The entitlement key is `com.apple.developer.mediaextension.videodecoder` and it must have a Boolean value set to true. A developer provisioning profile will be needed to use this entitlement.

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
