> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1559930-audio-converter-errors](https://developer.apple.com/documentation/audiotoolbox/1559930-audio-converter-errors)

# Audio Converter Errors (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_InvalidInputSize](kaudioconvertererr_invalidinputsize.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)

## See Also

### Enumerations

- [Converter Audio Unit Properties](1533972-converter_audio_unit_properties.md): Properties for the Apple AUConverter audio unit.
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Audio Converter Dithering Algorithms](1559931-audio-converter-dithering-algori.md)
- [Audio Converter Properties (macOS)](1559925-audio-converter-properties-macos.md)

# Audio Converter Errors (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_InvalidInputSize](kaudioconvertererr_invalidinputsize.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)

## See Also

### Enumerations

- [Converter Audio Unit Properties](1533972-converter_audio_unit_properties.md): Properties for the Apple AUConverter audio unit.
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Audio Converter Dithering Algorithms](1559931-audio-converter-dithering-algori.md)
- [Audio Converter Properties (macOS)](1559925-audio-converter-properties-macos.md)
