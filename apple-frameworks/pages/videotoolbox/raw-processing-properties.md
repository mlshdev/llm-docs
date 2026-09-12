> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/raw-processing-properties](https://developer.apple.com/documentation/videotoolbox/raw-processing-properties)

# RAW Processing Properties (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

Properties that you use to configure a RAW processing session.

## Topics

### Properties

- [kVTRAWProcessingPropertyKey_OutputColorAttachments](kvtrawprocessingpropertykey_outputcolorattachments.md): The color-related image buffer keys and values that will be attachments to the returned pixel buffers.
- [kVTRAWProcessingPropertyKey_MetadataForSidecarFile](kvtrawprocessingpropertykey_metadataforsidecarfile.md)

### Functions

- [VTRAWProcessorExtensionProperties(\_:)](https://developer.apple.com/documentation/videotoolbox/vtrawprocessorextensionproperties%28_:%29)

## See Also

### Configuring a session

- [RAW processing parameters](raw-processing-parameters.md): Parameters to set on a RAW processing session.

# RAW Processing Properties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

Properties that you use to configure a RAW processing session.

## Topics

### Properties

- [kVTRAWProcessingPropertyKey_MetalDeviceRegistryID](kvtrawprocessingpropertykey_metaldeviceregistryid.md): This property requests that the Metal device corresponding to the specified registryID be used for any Metal related processing.
- [kVTRAWProcessingPropertyKey_OutputColorAttachments](kvtrawprocessingpropertykey_outputcolorattachments.md): The color-related image buffer keys and values that will be attachments to the returned pixel buffers.
- [kVTRAWProcessingPropertyKey_MetadataForSidecarFile](kvtrawprocessingpropertykey_metadataforsidecarfile.md)

## See Also

### Configuring a session

- [VTRAWProcessingSessionCopyProcessingParameters](vtrawprocessingsessioncopyprocessingparameters.md): Copies an array of dictionaries describing the parameters provided by the RAW Processor for frame processing.
- [VTRAWProcessingSessionSetProcessingParameters](vtrawprocessingsessionsetprocessingparameters.md): Sets a collection of RAW Processing parameters.
- [VTRAWProcessingSessionSetParameterChangedHandler](vtrawprocessingsessionsetparameterchangedhandler.md)
- [RAW processing parameters](raw-processing-parameters.md): Parameters to set on a RAW processing session.
- [VTCopyRAWProcessorExtensionProperties](vtcopyrawprocessorextensionproperties.md): Returns information about the Media Extension RAW processor supporting the specified format.
