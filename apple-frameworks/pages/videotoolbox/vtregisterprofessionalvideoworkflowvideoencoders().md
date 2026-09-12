> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideoencoders()](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideoencoders())

# VTRegisterProfessionalVideoWorkflowVideoEncoders() (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 10.10+

Loads encoders appropriate for the client’s professional video workflows.

## Declaration

```swift
func VTRegisterProfessionalVideoWorkflowVideoEncoders()
```

<a id="Discussion"></a>

## Discussion

Loads the video encoders within the client’s `/Library/Video/Professional Video Workflow Plug-Ins/` directory, if any are present.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

# VTRegisterProfessionalVideoWorkflowVideoEncoders (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 10.10+

Loads encoders appropriate for the client’s professional video workflows.

## Declaration

```objectivec
extern void VTRegisterProfessionalVideoWorkflowVideoEncoders();
```

<a id="Discussion"></a>

## Discussion

Loads the video encoders within the client’s `/Library/Video/Professional Video Workflow Plug-Ins/` directory, if any are present.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.
