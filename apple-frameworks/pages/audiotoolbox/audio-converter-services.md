> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-converter-services](https://developer.apple.com/documentation/audiotoolbox/audio-converter-services)

# Audio Converter Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Convert between linear PCM audio formats, and between linear PCM and compressed formats.

<a id="overview"></a>

## Overview

Audio converter objects convert between various linear PCM audio formats. They can also convert between linear PCM and compressed formats. Supported transformations include the following:

- PCM bit depth
- PCM sample rate
- PCM floating point to and from PCM integer
- PCM interleaved to and from PCM deinterleaved
- PCM to and from compressed formats

A single audio converter may perform more than one of the listed transformations.

## Topics

### Managing Audio Converter Objects

- [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific(\_:\_:\_:\_:\_:)](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterReset(\_:)](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.
- [AudioConverterDispose(\_:)](audioconverterdispose%28__%29.md): Disposes of an audio converter object.

### Configuring Audio Converter Properties

- [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.
- [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterConvertBuffer(\_:\_:\_:\_:\_:)](audioconverterconvertbuffer%28__________%29.md): Converts audio data from one linear PCM format to another.
- [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.
- [AudioConverterConvertComplexBuffer(\_:\_:\_:\_:)](audioconverterconvertcomplexbuffer%28________%29.md): Converts audio data from one linear PCM format to another, where both use the same sample rate.

### Callbacks

- [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md): Supplies input data to the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function.
- [AudioConverterInputDataProc](audioconverterinputdataproc.md): Deprecated. Use [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) instead.

### Data Types

- [AudioConverterPrimeInfo](audioconverterprimeinfo.md): Specifies priming information for an audio converter.
- [AudioConverterRef](audioconverterref.md): A reference to an audio converter object.
- [AudioConverterPropertyID](audioconverterpropertyid.md): An audio converter property identifier.

### Constants

- [Audio Converter Properties](1559928-audio-converter-properties.md): Audio converter properties, used with the [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md) functions.
- [Converter Priming Constants](1559927-converter-priming-constants.md): Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.

### Enumerations

- [Converter Audio Unit Properties](1533972-converter_audio_unit_properties.md): Properties for the Apple AUConverter audio unit.
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Audio Converter Dithering Algorithms](1559931-audio-converter-dithering-algori.md)
- [Audio Converter Properties (macOS)](1559925-audio-converter-properties-macos.md)
- [Audio Converter Errors](1559930-audio-converter-errors.md)

### Result Codes

This table lists result codes defined for Audio Converter Services.

- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_InvalidInputSize](kaudioconvertererr_invalidinputsize.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)
- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.

# Audio Converter Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Convert between linear PCM audio formats, and between linear PCM and compressed formats.

<a id="overview"></a>

## Overview

Audio converter objects convert between various linear PCM audio formats. They can also convert between linear PCM and compressed formats. Supported transformations include the following:

- PCM bit depth
- PCM sample rate
- PCM floating point to and from PCM integer
- PCM interleaved to and from PCM deinterleaved
- PCM to and from compressed formats

A single audio converter may perform more than one of the listed transformations.

## Topics

### Managing Audio Converter Objects

- [AudioConverterNew](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterNewSpecific](audioconverternewspecific%28__________%29.md): Creates a new audio converter object using a specified codec.
- [AudioConverterReset](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.
- [AudioConverterDispose](audioconverterdispose%28__%29.md): Disposes of an audio converter object.

### Configuring Audio Converter Properties

- [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md): Gets information about an audio converter property.
- [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterConvertBuffer](audioconverterconvertbuffer%28__________%29.md): Converts audio data from one linear PCM format to another.
- [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.
- [AudioConverterConvertComplexBuffer](audioconverterconvertcomplexbuffer%28________%29.md): Converts audio data from one linear PCM format to another, where both use the same sample rate.

### Deprecated Functions

- [AudioConverterFillBuffer](audioconverterfillbuffer.md): Deprecated.

### Callbacks

- [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md): Supplies input data to the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function.
- [AudioConverterInputDataProc](audioconverterinputdataproc.md): Deprecated. Use [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) instead.

### Data Types

- [AudioConverterPrimeInfo](audioconverterprimeinfo.md): Specifies priming information for an audio converter.
- [AudioConverterRef](audioconverterref.md): A reference to an audio converter object.
- [AudioConverterPropertyID](audioconverterpropertyid.md): An audio converter property identifier.

### Constants

- [Audio Converter Properties](1559928-audio-converter-properties.md): Audio converter properties, used with the [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md) functions.
- [Converter Priming Constants](1559927-converter-priming-constants.md): Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.

### Enumerations

- [Converter Audio Unit Properties](1533972-converter_audio_unit_properties.md): Properties for the Apple AUConverter audio unit.
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Audio Converter Dithering Algorithms](1559931-audio-converter-dithering-algori.md)
- [Audio Converter Properties (macOS)](1559925-audio-converter-properties-macos.md)
- [Audio Converter Errors](1559930-audio-converter-errors.md)

### Result Codes

This table lists result codes defined for Audio Converter Services.

- [kAudioConverterErr_FormatNotSupported](kaudioconvertererr_formatnotsupported.md)
- [kAudioConverterErr_OperationNotSupported](kaudioconvertererr_operationnotsupported.md)
- [kAudioConverterErr_PropertyNotSupported](kaudioconvertererr_propertynotsupported.md)
- [kAudioConverterErr_InvalidInputSize](kaudioconvertererr_invalidinputsize.md)
- [kAudioConverterErr_InvalidOutputSize](kaudioconvertererr_invalidoutputsize.md): The byte size is not an integer multiple of the frame size.
- [kAudioConverterErr_UnspecifiedError](kaudioconvertererr_unspecifiederror.md)
- [kAudioConverterErr_BadPropertySizeError](kaudioconvertererr_badpropertysizeerror.md)
- [kAudioConverterErr_RequiresPacketDescriptionsError](kaudioconvertererr_requirespacketdescriptionserror.md)
- [kAudioConverterErr_InputSampleRateOutOfRange](kaudioconvertererr_inputsamplerateoutofrange.md)
- [kAudioConverterErr_OutputSampleRateOutOfRange](kaudioconvertererr_outputsamplerateoutofrange.md)
- [kAudioConverterErr_HardwareInUse](kaudioconvertererr_hardwareinuse.md): Returned from the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function if the underlying hardware codec has become unavailable, probably due to an audio interruption.
- [kAudioConverterErr_NoHardwarePermission](kaudioconvertererr_nohardwarepermission.md): Returned from the [AudioConverterNew](audioconverternew%28______%29.md) function if the new converter would use a hardware codec which the application does not have permission to use.

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.
