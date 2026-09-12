> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/video-encoder-list-keys](https://developer.apple.com/documentation/videotoolbox/video-encoder-list-keys)

# Video Encoder List Keys (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

Dictionary key constants to use to retrieve video encoder information.

<a id="overview"></a>

## Overview

Use these keys to pass to the [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md) function.

## Topics

### Encoder Keys

- [kVTVideoEncoderList_EncoderID](kvtvideoencoderlist_encoderid.md): A key that identifies the encoder ID.
- [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md): A key for the encoder’s name.
- [kVTVideoEncoderList_DisplayName](kvtvideoencoderlist_displayname.md): The encoder’s display name key.
- [kVTVideoEncoderList_CodecType](kvtvideoencoderlist_codectype.md): The encoder’s codec type key.
- [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md): The encoder’s codec name key.
- [kVTVideoEncoderList_GPURegistryID](kvtvideoencoderlist_gpuregistryid.md)
- [kVTVideoEncoderList_InstanceLimit](kvtvideoencoderlist_instancelimit.md)
- [kVTVideoEncoderList_IsHardwareAccelerated](kvtvideoencoderlist_ishardwareaccelerated.md)
- [kVTVideoEncoderList_PerformanceRating](kvtvideoencoderlist_performancerating.md)
- [kVTVideoEncoderList_QualityRating](kvtvideoencoderlist_qualityrating.md)
- [kVTVideoEncoderList_SupportedSelectionProperties](kvtvideoencoderlist_supportedselectionproperties.md)
- [kVTVideoEncoderList_SupportsFrameReordering](kvtvideoencoderlist_supportsframereordering.md)
- [kVTVideoEncoderListOption_IncludeStandardDefinitionDVEncoders](kvtvideoencoderlistoption_includestandarddefinitiondvencoders.md)

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.

# Video Encoder List Keys (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

Dictionary key constants to use to retrieve video encoder information.

<a id="overview"></a>

## Overview

Use these keys to pass to the [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md) function.

## Topics

### Encoder Keys

- [kVTVideoEncoderList_EncoderID](kvtvideoencoderlist_encoderid.md): A key that identifies the encoder ID.
- [kVTVideoEncoderList_EncoderName](kvtvideoencoderlist_encodername.md): A key for the encoder’s name.
- [kVTVideoEncoderList_DisplayName](kvtvideoencoderlist_displayname.md): The encoder’s display name key.
- [kVTVideoEncoderList_CodecType](kvtvideoencoderlist_codectype.md): The encoder’s codec type key.
- [kVTVideoEncoderList_CodecName](kvtvideoencoderlist_codecname.md): The encoder’s codec name key.
- [kVTVideoEncoderList_GPURegistryID](kvtvideoencoderlist_gpuregistryid.md)
- [kVTVideoEncoderList_InstanceLimit](kvtvideoencoderlist_instancelimit.md)
- [kVTVideoEncoderList_IsHardwareAccelerated](kvtvideoencoderlist_ishardwareaccelerated.md)
- [kVTVideoEncoderList_PerformanceRating](kvtvideoencoderlist_performancerating.md)
- [kVTVideoEncoderList_QualityRating](kvtvideoencoderlist_qualityrating.md)
- [kVTVideoEncoderList_SupportedSelectionProperties](kvtvideoencoderlist_supportedselectionproperties.md)
- [kVTVideoEncoderList_SupportsFrameReordering](kvtvideoencoderlist_supportsframereordering.md)
- [kVTVideoEncoderList_SupportsMultiPass](kvtvideoencoderlist_supportsmultipass.md)
- [kVTVideoEncoderListOption_IncludeStandardDefinitionDVEncoders](kvtvideoencoderlistoption_includestandarddefinitiondvencoders.md)

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
