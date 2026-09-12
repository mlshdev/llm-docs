> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioconvertererr_invalidinputsize](https://developer.apple.com/documentation/audiotoolbox/kaudioconvertererr_invalidinputsize)

# kAudioConverterErr_InvalidInputSize (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var kAudioConverterErr_InvalidInputSize: OSStatus { get }
```

## See Also

### Result Codes

- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)
- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.

# kAudioConverterErr_InvalidInputSize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
kAudioConverterErr_InvalidInputSize
```

## See Also

### Result Codes

- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)
- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.
