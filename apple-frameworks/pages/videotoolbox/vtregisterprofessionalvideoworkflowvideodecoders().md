> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders()](https://developer.apple.com/documentation/videotoolbox/vtregisterprofessionalvideoworkflowvideodecoders())

# VTRegisterProfessionalVideoWorkflowVideoDecoders() (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 10.9+

Loads decoders appropriate for the client’s professional video workflows.

## Declaration

```swift
func VTRegisterProfessionalVideoWorkflowVideoDecoders()
```

<a id="Discussion"></a>

## Discussion

This function loads the video decoders within the client’s `/Library/Video/Professional Video Workflow Plug-Ins/` directory, if any are present. Additionally, calling this function indicates to Video Toolbox that your app supports [MediaExtension](https://developer.apple.com/documentation/mediaextension) video decoders. Any associated video RAW Processors will also be supported as well.

> **Note**

> This functionality is only intended for apps that support professional video workflows. It isn’t recommended for network-facing applications such as web browsers, messaging clients, mail clients, and so on.

<a id="Apple-Afterburner-Acceleration"></a>

### Apple Afterburner Acceleration

Apple Afterburner is an accelerator card for the Mac Pro (2019), created to enhance Apple ProRes and ProRes RAW workflows for film and video professionals. Afterburner accelerates decoding and playback of multiple streams of ProRes and Pro Res RAW video files.

You must call this function to load the ProRes and ProRes RAW decoders so the Afterburner card can accelerate ProRes and ProRes RAW decoding and playback.

If the decoders aren’t loaded, the system performs nonaccelerated software playback and decoding of ProRes and ProRes RAW video files.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

# VTRegisterProfessionalVideoWorkflowVideoDecoders (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 10.9+

Loads decoders appropriate for the client’s professional video workflows.

## Declaration

```objectivec
extern void VTRegisterProfessionalVideoWorkflowVideoDecoders();
```

<a id="Discussion"></a>

## Discussion

This function loads the video decoders within the client’s `/Library/Video/Professional Video Workflow Plug-Ins/` directory, if any are present. Additionally, calling this function indicates to Video Toolbox that your app supports [MediaExtension](https://developer.apple.com/documentation/mediaextension) video decoders. Any associated video RAW Processors will also be supported as well.

> **Note**

> This functionality is only intended for apps that support professional video workflows. It isn’t recommended for network-facing applications such as web browsers, messaging clients, mail clients, and so on.

<a id="Apple-Afterburner-Acceleration"></a>

### Apple Afterburner Acceleration

Apple Afterburner is an accelerator card for the Mac Pro (2019), created to enhance Apple ProRes and ProRes RAW workflows for film and video professionals. Afterburner accelerates decoding and playback of multiple streams of ProRes and Pro Res RAW video files.

You must call this function to load the ProRes and ProRes RAW decoders so the Afterburner card can accelerate ProRes and ProRes RAW decoding and playback.

If the decoders aren’t loaded, the system performs nonaccelerated software playback and decoding of ProRes and ProRes RAW video files.

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.
