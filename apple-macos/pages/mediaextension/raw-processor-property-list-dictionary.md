> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/raw-processor-property-list-dictionary](https://developer.apple.com/documentation/mediaextension/raw-processor-property-list-dictionary)

# RAW processor property list dictionary (Swift)

**Framework:** MediaExtension  
**Kind:** API Collection

Include a property list dictionary to describe a RAW processor.

<a id="overview"></a>

## Overview

A MediaExtension RAW processor needs to include an `EXAppExtensionAttributes` dictionary in its `Info.plist` file that contains the following keys and values:

- [kMERAWProcessorClassImplementationIDKey](kmerawprocessorclassimplementationidkey.md): A string that uniquely identifies the RAW processor. Start this string with your reverse domain identifier, and for clarity, include `.rawprocessor.` and the name of the codec.
- `EXExtensionPointIdentifier`: The extension point name for RAW processors. Set to the value for [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md).
- `EXPrincipalClass`: The name of the RAW processor factory class that conforms to the [MERAWProcessorExtension](merawprocessorextension.md) protocol.
- [kMERAWProcessorObjectNameKey](kmerawprocessorobjectnamekey.md): A user-readable string that describes RAW processor. This string is used for uniquely identifying RAW processors and possibly for debug logging but is typically not visible to users.
- [kMERAWProcessorProcessorInfoKey](kmerawprocessorprocessorinfokey.md): An array of one or more dictionaries describing the codecs that the RAW processor supports. Each dictionary must include the following keys:

  - [kMERAWProcessorCodecTypeKey](kmerawprocessorcodectypekey.md): A string describing the four-character code of the codec associated with the video decoder. Each string should be exactly four characters long and use ASCII character set encoding.
  - [kMERAWProcessorCodecNameKey](kmerawprocessorcodecnamekey.md): A user-readable string describing the name of the codec format. This string might be displayed as format information for the video track in a player application.

## Topics

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md): The extension point name for RAW processors.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string describing the decoder.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

# RAW processor property list dictionary (Objective-C)

**Framework:** MediaExtension  
**Kind:** API Collection

Include a property list dictionary to describe a RAW processor.

<a id="overview"></a>

## Overview

A MediaExtension RAW processor needs to include an `EXAppExtensionAttributes` dictionary in its `Info.plist` file that contains the following keys and values:

- [kMERAWProcessorClassImplementationIDKey](kmerawprocessorclassimplementationidkey.md): A string that uniquely identifies the RAW processor. Start this string with your reverse domain identifier, and for clarity, include `.rawprocessor.` and the name of the codec.
- `EXExtensionPointIdentifier`: The extension point name for RAW processors. Set to the value for [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md).
- `EXPrincipalClass`: The name of the RAW processor factory class that conforms to the [MERAWProcessorExtension](merawprocessorextension.md) protocol.
- [kMERAWProcessorObjectNameKey](kmerawprocessorobjectnamekey.md): A user-readable string that describes RAW processor. This string is used for uniquely identifying RAW processors and possibly for debug logging but is typically not visible to users.
- [kMERAWProcessorProcessorInfoKey](kmerawprocessorprocessorinfokey.md): An array of one or more dictionaries describing the codecs that the RAW processor supports. Each dictionary must include the following keys:

  - [kMERAWProcessorCodecTypeKey](kmerawprocessorcodectypekey.md): A string describing the four-character code of the codec associated with the video decoder. Each string should be exactly four characters long and use ASCII character set encoding.
  - [kMERAWProcessorCodecNameKey](kmerawprocessorcodecnamekey.md): A user-readable string describing the name of the codec format. This string might be displayed as format information for the video track in a player application.

## Topics

### Property list keys

- [kMEVideoDecoderClassImplementationIDKey](kmevideodecoderclassimplementationidkey.md): The unique identifier for the video decoder.
- [kMERAWProcessorExtensionPointName](kmerawprocessorextensionpointname.md): The extension point name for RAW processors.
- [kMEVideoDecoderObjectNameKey](kmevideodecoderobjectnamekey.md): A user-readable string describing the decoder.
- [kMEVideoDecoderCodecInfoKey](kmevideodecodercodecinfokey.md): An array of one or more dictionaries describing the codecs that the decoder supports.
- [kMEVideoDecoderCodecTypeKey](kmevideodecodercodectypekey.md): A string describing the four-character code of the codec that the decoder supports.
- [kMEVideoDecoderCodecNameKey](kmevideodecodercodecnamekey.md): A user-readable string describing the name of the codec format.

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
