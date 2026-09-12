> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtishardwaredecodesupported(_:)](https://developer.apple.com/documentation/videotoolbox/vtishardwaredecodesupported(_:))

# VTIsHardwareDecodeSupported(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.

## Declaration

```swift
func VTIsHardwareDecodeSupported(_ codecType: CMVideoCodecType) -> Bool
```

## Parameters

- `codecType`: The codec for which to test for hardware decode support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current system supports hardware decode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Codec Support

- [VTRegisterProfessionalVideoWorkflowVideoEncoders()](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders()](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable(\_:)](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder(width:height:codecType:encoderSpecification:encoderIDOut:supportedPropertiesOut:)](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.

# VTIsHardwareDecodeSupported (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the current system supports hardware decode for the specified codec.

## Declaration

```objectivec
extern Boolean VTIsHardwareDecodeSupported(CMVideoCodecType codecType);
```

## Parameters

- `codecType`: The codec for which to test for hardware decode support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current system supports hardware decode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Codec Support

- [VTRegisterProfessionalVideoWorkflowVideoEncoders](vtregisterprofessionalvideoworkflowvideoencoders%28%29.md): Loads encoders appropriate for the client’s professional video workflows.
- [VTRegisterProfessionalVideoWorkflowVideoDecoders](vtregisterprofessionalvideoworkflowvideodecoders%28%29.md): Loads decoders appropriate for the client’s professional video workflows.
- [VTRegisterSupplementalVideoDecoderIfAvailable](vtregistersupplementalvideodecoderifavailable%28__%29.md): Registers a video decoder for the specified codec type, if one exists on the current system.
- [VTCopySupportedPropertyDictionaryForEncoder](vtcopysupportedpropertydictionaryforencoder%28width_height_codectype_encoderspecification_encoderidout_supportedpropertiesout_%29.md): Builds a list of supported properties and encoder ID for an encoder.
- [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md): Builds a list of available video encoders.
- [Video Encoder List Keys](video-encoder-list-keys.md): Dictionary key constants to use to retrieve video encoder information.
