> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension](https://developer.apple.com/documentation/mediaextension)

# MediaExtension (Swift)

**Framework:** MediaExtension  
**Kind:** Framework  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

This framework provides a means for developers to create format readers, video decoders, and RAW processors for media that the system doesn’t natively support.

<a id="overview"></a>

## Overview

MediaExtension format readers encapsulate media assets that the system doesn’t natively support so that the system can recognize them. MediaExtension video decoders decode video formats that the system doesn’t natively support. MediaExtension RAW processors work together with video decoders to allow direct control over the RAW decoding process. Developers need to build format readers, video decoders, and RAW processors as [ExtensionKit](https://developer.apple.com/documentation/extensionkit) bundles and embed them in a host app. Once a user installs and runs the host app, the embedded extensions become available to any app on the user’s system that opts in to using them.

## Topics

### Format readers

- [MEFormatReader](mediaextension/meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderExtension](mediaextension/meformatreaderextension.md): A protocol that defines a factory to create a new format reader with a byte source.
- [MEFormatReaderInstantiationOptions](mediaextension/meformatreaderinstantiationoptions.md): An object that contains options to pass to a format reader extension.
- [MEFileInfo](mediaextension/mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](mediaextension/format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](mediaextension/format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.

### Track readers

- [METrackReader](mediaextension/metrackreader.md): A protocol that defines the information to provide about a track within a media asset.
- [METrackInfo](mediaextension/metrackinfo.md): An object that includes track properties parsed from the media asset.

### Sample cursors

- [MESampleCursor](mediaextension/mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleLocation](mediaextension/mesamplelocation.md): An object that provides information about the sample location with the media.
- [MESampleCursorChunk](mediaextension/mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](mediaextension/meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mediaextension/mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.

### Byte sources

- [MEByteSource](mediaextension/mebytesource.md): Provides read access to the data in a media asset file.

### Video decoders

- [MEVideoDecoder](mediaextension/mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mediaextension/mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](mediaextension/medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mediaextension/mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](mediaextension/video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](mediaextension/video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

### RAW processors

- [MERAWProcessor](mediaextension/merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](mediaextension/merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](mediaextension/merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](mediaextension/merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](mediaextension/merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](mediaextension/raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](mediaextension/raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

### Errors

- [MediaExtensionErrorDomain](mediaextension/mediaextensionerrordomain.md): The domain of the error.
- [MEError](mediaextension/meerror-swift.struct.md): A MediaExtension framework error.
- [MEError.Code](mediaextension/meerror-swift.struct/code.md): An enumeration that models media extension error codes.

### Variables

- [kMEFormatReaderSidecarFileNameExtensionArrayKey](mediaextension/kmeformatreadersidecarfilenameextensionarraykey.md)
- [kMERAWProcessorClassImplementationIDKey](mediaextension/kmerawprocessorclassimplementationidkey.md)
- [kMERAWProcessorCodecNameKey](mediaextension/kmerawprocessorcodecnamekey.md)
- [kMERAWProcessorCodecTypeKey](mediaextension/kmerawprocessorcodectypekey.md)
- [kMERAWProcessorObjectNameKey](mediaextension/kmerawprocessorobjectnamekey.md)
- [kMERAWProcessorProcessorInfoKey](mediaextension/kmerawprocessorprocessorinfokey.md)

# MediaExtension (Objective-C)

**Framework:** MediaExtension  
**Kind:** Framework  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

This framework provides a means for developers to create format readers, video decoders, and RAW processors for media that the system doesn’t natively support.

<a id="overview"></a>

## Overview

MediaExtension format readers encapsulate media assets that the system doesn’t natively support so that the system can recognize them. MediaExtension video decoders decode video formats that the system doesn’t natively support. MediaExtension RAW processors work together with video decoders to allow direct control over the RAW decoding process. Developers need to build format readers, video decoders, and RAW processors as [ExtensionKit](https://developer.apple.com/documentation/extensionkit) bundles and embed them in a host app. Once a user installs and runs the host app, the embedded extensions become available to any app on the user’s system that opts in to using them.

## Topics

### Format readers

- [MEFormatReader](mediaextension/meformatreader.md): A protocol that defines the requirements for a format reader, which represents a single media asset.
- [MEFormatReaderExtension](mediaextension/meformatreaderextension.md): A protocol that defines a factory to create a new format reader with a byte source.
- [MEFormatReaderInstantiationOptions](mediaextension/meformatreaderinstantiationoptions.md): An object that contains options to pass to a format reader extension.
- [MEFileInfo](mediaextension/mefileinfo.md): An object that contains file properties from the media asset.
- [Format reader property list dictionaries](mediaextension/format-reader-property-list-dictionaries.md): Include property list dictionaries to describe a format reader and register the formats it supports.
- [Format reader entitlement](mediaextension/format-reader-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension format reader.

### Track readers

- [METrackReader](mediaextension/metrackreader.md): A protocol that defines the information to provide about a track within a media asset.
- [METrackInfo](mediaextension/metrackinfo.md): An object that includes track properties parsed from the media asset.

### Sample cursors

- [MESampleCursor](mediaextension/mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleLocation](mediaextension/mesamplelocation.md): An object that provides information about the sample location with the media.
- [MESampleCursorChunk](mediaextension/mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](mediaextension/meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mediaextension/mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.

### Byte sources

- [MEByteSource](mediaextension/mebytesource.md): Provides read access to the data in a media asset file.

### Video decoders

- [MEVideoDecoder](mediaextension/mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mediaextension/mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](mediaextension/medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mediaextension/mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](mediaextension/video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](mediaextension/video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

### RAW processors

- [MERAWProcessor](mediaextension/merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](mediaextension/merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](mediaextension/merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](mediaextension/merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](mediaextension/raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](mediaextension/raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

### Errors

- [MediaExtensionErrorDomain](mediaextension/mediaextensionerrordomain.md): The domain of the error.
- [MEError](mediaextension/meerror-swift.struct/code.md): An enumeration that models media extension error codes.

### Macros

- [kMEFormatReaderSidecarFileNameExtensionArrayKey](mediaextension/kmeformatreadersidecarfilenameextensionarraykey.md)
- [kMERAWProcessorClassImplementationIDKey](mediaextension/kmerawprocessorclassimplementationidkey.md)
- [kMERAWProcessorCodecNameKey](mediaextension/kmerawprocessorcodecnamekey.md)
- [kMERAWProcessorCodecTypeKey](mediaextension/kmerawprocessorcodectypekey.md)
- [kMERAWProcessorObjectNameKey](mediaextension/kmerawprocessorobjectnamekey.md)
- [kMERAWProcessorProcessorInfoKey](mediaextension/kmerawprocessorprocessorinfokey.md)
