> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-codec](https://developer.apple.com/documentation/audiotoolbox/audio-codec)

# Audio Codec (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Translate audio data from one format to another.

## Topics

### Initializing an Audio Codec

- [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecReset(\_:)](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.
- [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.

### Configuring Buffers

- [AudioCodecAppendInputBufferList(\_:\_:\_:\_:\_:)](audiocodecappendinputbufferlist%28__________%29.md)
- [AudioCodecProduceOutputBufferList(\_:\_:\_:\_:\_:)](audiocodecproduceoutputbufferlist%28__________%29.md)

### Accessing the Data

- [AudioCodecAppendInputData(\_:\_:\_:\_:\_:)](audiocodecappendinputdata%28__________%29.md): Appends audio data to the codec’s input buffer.
- [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.

### Accessing Codec Properties

- [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecGetPropertyInfo(\_:\_:\_:\_:)](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.
- [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecAppendInputDataProc](audiocodecappendinputdataproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)

### Audio Settings

- [AudioSettingsFlags](audiosettingsflags.md)
- [kAudioSettings_AvailableValues](kaudiosettings_availablevalues.md)
- [kAudioSettings_CurrentValue](kaudiosettings_currentvalue.md)
- [kAudioSettings_Hint](kaudiosettings_hint.md)
- [kAudioSettings_LimitedValues](kaudiosettings_limitedvalues.md)
- [kAudioSettings_Parameters](kaudiosettings_parameters.md)
- [kAudioSettings_SettingKey](kaudiosettings_settingkey.md)
- [kAudioSettings_SettingName](kaudiosettings_settingname.md)
- [kAudioSettings_Summary](kaudiosettings_summary.md)
- [kAudioSettings_TopLevelKey](kaudiosettings_toplevelkey.md)
- [kAudioSettings_Unit](kaudiosettings_unit.md)
- [kAudioSettings_ValueType](kaudiosettings_valuetype.md)
- [kAudioSettings_Version](kaudiosettings_version.md)

### Enumerations

- [Output Status Constants](1494122-output-status-constants.md): Status values returned from the [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md) function.
- [Program Target Levels](1494116-program-target-levels.md)
- [Dynamic Range Control Modes](1494094-dynamic-range-control-modes.md)
- [Bit Rate Control Mode Constants](1494144-bit-rate-control-mode-constants.md): Bit rate control modes to be used with `kAudioCodecPropertyBitRateControlMode`.
- [Global Codec Properties](1494121-global-codec-properties.md): These read-only properties disclose the capabilities of the codec and remain the same for all instances of the codec.
- [Instance Codec Properties](1494111-instance-codec-properties.md): Properties that can be set or read on an instance of the audio codec.
- [Audio Codec Priming Method Constants](1494154-audio-codec-priming-method-const.md): Values used with `kAudioCodecPropertyPrimeMethod`.
- [Audio Codec Quality Constants](1494130-audio-codec-quality-constants.md): Sound quality settings to be used with the property `kAudioCodecPropertyQualitySetting`.
- [Audio Codec Routine Selectors](1494074-audio-codec-routine-selectors.md): Selectors used by the Component Manager to call routines implemented by the codec and exposed to developers through the Audio Codec Services API. These selectors are for use by codec developers; if you are calling Audio Codec Services functions, you don’t need to use these constants.
- [Audio Codec Delays](1494127-audio-codec-delays.md)
- [Audio Codec Delay Modes](1494050-audio-codec-delay-modes.md)
- [Audio Codec Properties](1494068-audio-codec-properties.md)
- [Audio Codec Errors](1494076-audio-codec-errors.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.

# Audio Codec (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Translate audio data from one format to another.

## Topics

### Initializing an Audio Codec

- [AudioCodecInitialize](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecReset](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.
- [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.

### Configuring Buffers

- [AudioCodecAppendInputBufferList](audiocodecappendinputbufferlist%28__________%29.md)
- [AudioCodecProduceOutputBufferList](audiocodecproduceoutputbufferlist%28__________%29.md)

### Accessing the Data

- [AudioCodecAppendInputData](audiocodecappendinputdata%28__________%29.md): Appends audio data to the codec’s input buffer.
- [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.

### Accessing Codec Properties

- [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecGetPropertyInfo](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.
- [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

### Codec Types

- [AudioCodecMagicCookieInfo](audiocodecmagiccookieinfo.md): A structure holding magic cookie information needed by some codecs.
- [AudioCodecPrimeInfo](audiocodecprimeinfo.md): A structure specifying the number of leading and trailing empty frames to be inserted.
- [AudioCodec](audiocodec.md): An instance of a Component Manager component.
- [AudioCodecAppendInputBufferListProc](audiocodecappendinputbufferlistproc.md)
- [AudioCodecAppendInputDataProc](audiocodecappendinputdataproc.md)
- [AudioCodecGetPropertyInfoProc](audiocodecgetpropertyinfoproc.md)
- [AudioCodecGetPropertyProc](audiocodecgetpropertyproc.md)
- [AudioCodecInitializeProc](audiocodecinitializeproc.md)
- [AudioCodecProduceOutputBufferListProc](audiocodecproduceoutputbufferlistproc.md)
- [AudioCodecProduceOutputPacketsProc](audiocodecproduceoutputpacketsproc.md)
- [AudioCodecPropertyID](audiocodecpropertyid.md): An integer identifying an audio codec property.
- [AudioCodecResetProc](audiocodecresetproc.md)
- [AudioCodecSetPropertyProc](audiocodecsetpropertyproc.md)
- [AudioCodecUninitializeProc](audiocodecuninitializeproc.md)

### Audio Settings

- [AudioSettingsFlags](audiosettingsflags.md)
- [kAudioSettings_AvailableValues](kaudiosettings_availablevalues.md)
- [kAudioSettings_CurrentValue](kaudiosettings_currentvalue.md)
- [kAudioSettings_Hint](kaudiosettings_hint.md)
- [kAudioSettings_LimitedValues](kaudiosettings_limitedvalues.md)
- [kAudioSettings_Parameters](kaudiosettings_parameters.md)
- [kAudioSettings_SettingKey](kaudiosettings_settingkey.md)
- [kAudioSettings_SettingName](kaudiosettings_settingname.md)
- [kAudioSettings_Summary](kaudiosettings_summary.md)
- [kAudioSettings_TopLevelKey](kaudiosettings_toplevelkey.md)
- [kAudioSettings_Unit](kaudiosettings_unit.md)
- [kAudioSettings_ValueType](kaudiosettings_valuetype.md)
- [kAudioSettings_Version](kaudiosettings_version.md)

### Enumerations

- [Output Status Constants](1494122-output-status-constants.md): Status values returned from the [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md) function.
- [Program Target Levels](1494116-program-target-levels.md)
- [Dynamic Range Control Modes](1494094-dynamic-range-control-modes.md)
- [Bit Rate Control Mode Constants](1494144-bit-rate-control-mode-constants.md): Bit rate control modes to be used with `kAudioCodecPropertyBitRateControlMode`.
- [Global Codec Properties](1494121-global-codec-properties.md): These read-only properties disclose the capabilities of the codec and remain the same for all instances of the codec.
- [Instance Codec Properties](1494111-instance-codec-properties.md): Properties that can be set or read on an instance of the audio codec.
- [Audio Codec Priming Method Constants](1494154-audio-codec-priming-method-const.md): Values used with `kAudioCodecPropertyPrimeMethod`.
- [Audio Codec Quality Constants](1494130-audio-codec-quality-constants.md): Sound quality settings to be used with the property `kAudioCodecPropertyQualitySetting`.
- [Audio Codec Routine Selectors](1494074-audio-codec-routine-selectors.md): Selectors used by the Component Manager to call routines implemented by the codec and exposed to developers through the Audio Codec Services API. These selectors are for use by codec developers; if you are calling Audio Codec Services functions, you don’t need to use these constants.
- [Audio Codec Delays](1494127-audio-codec-delays.md)
- [Audio Codec Delay Modes](1494050-audio-codec-delay-modes.md)
- [Audio Codec Properties](1494068-audio-codec-properties.md)
- [Audio Codec Errors](1494076-audio-codec-errors.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.
