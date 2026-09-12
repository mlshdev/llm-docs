> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcopyvideoencoderlist(_:_:)](https://developer.apple.com/documentation/videotoolbox/vtcopyvideoencoderlist(_:_:))

# VTCopyVideoEncoderList(\_:\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Builds a list of available video encoders.

## Declaration

```swift
func VTCopyVideoEncoderList(_ options: CFDictionary?, _ listOfVideoEncodersOut: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `options`: Not currently supported. Pass `NULL` for this parameter.
- `listOfVideoEncodersOut`: Pointer to a `CFArray` of available video encoders.

<a id="Discussion"></a>

## Discussion

The caller must release the returned list using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported(\_:)](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

# VTCopyVideoEncoderList (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Builds a list of available video encoders.

## Declaration

```objectivec
extern OSStatus VTCopyVideoEncoderList(CFDictionaryRef options, CFArrayRef*listOfVideoEncodersOut);
```

## Parameters

- `options`: Not currently supported. Pass `NULL` for this parameter.
- `listOfVideoEncodersOut`: Pointer to a `CFArray` of available video encoders.

<a id="Discussion"></a>

## Discussion

The caller must release the returned list using [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Codec Support

- [VTIsHardwareDecodeSupported](vtishardwaredecodesupported%28__%29.md): Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.
- [VTRegisterProfessionalVideoWorkflowVideoEncoders](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.
