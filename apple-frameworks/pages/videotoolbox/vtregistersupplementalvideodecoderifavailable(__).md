> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtregistersupplementalvideodecoderifavailable(_:)](https://developer.apple.com/documentation/videotoolbox/vtregistersupplementalvideodecoderifavailable(_:))

# VTRegisterSupplementalVideoDecoderIfAvailable(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 11.0+ · tvOS 26.2+ · visionOS 26.2+

Registers a video decoder for the specified codec type, if one exists on the current system.

## Declaration

```swift
func VTRegisterSupplementalVideoDecoderIfAvailable(_ codecType: CMVideoCodecType)
```

## Parameters

- `codecType`: A codec type for which to register a decoder.

<a id="Discussion"></a>

## Discussion

Call this function to find and register video decoders that aren’t registered by default.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

# VTRegisterSupplementalVideoDecoderIfAvailable (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 11.0+ · tvOS 26.2+ · visionOS 26.2+

Registers a video decoder for the specified codec type, if one exists on the current system.

## Declaration

```objectivec
extern void VTRegisterSupplementalVideoDecoderIfAvailable(CMVideoCodecType codecType);
```

## Parameters

- `codecType`: A codec type for which to register a decoder.

<a id="Discussion"></a>

## Discussion

Call this function to find and register video decoders that aren’t registered by default.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.
