> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1534116-i_o_audio_unit_properties](https://developer.apple.com/documentation/audiotoolbox/1534116-i_o_audio_unit_properties)

# I/O Audio Unit Properties (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties for Apple I/O audio units (sometimes called output units).

## Topics

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_EnableIO](kaudiooutputunitproperty_enableio.md): Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_SetInputCallback](kaudiooutputunitproperty_setinputcallback.md): A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).

## See Also

### Input/Output

- [Inter-App Output Unit Property IDs](1621039-inter-app-output-unit-property-ids.md)
- [Inter-App Audio Unit Property IDs](1621038-inter-app-audio-unit-property-ids.md)
- [Output Unit Parameters](1389916-output_unit_parameters.md)
- [AUNetReceive Properties](1534109-aunetreceive-properties.md)
- [AUNetSend Properties](1534207-aunetsend-properties.md)
- [AUNetSend Parameters](1389633-aunetsend-parameters.md)
- [AUNetReceive Parameters](1389920-aunetreceive-parameters.md)
- [AUNetSendPresetFormat Properties](1534212-aunetsendpresetformat-properties.md)
- [Net Status Audio Unit Parameters](1389891-net-status-audio-unit-parameters.md)
- [I/O Audio Unit Function Selectors](1585807-i_o_audio_unit_function_selector.md): Audio unit component selectors, specific to I/O audio units, that correspond to functions in the audio unit API.
- [AudioOutputUnitMIDICallbacks](audiooutputunitmidicallbacks.md)
- [AudioOutputUnitStartAtTimeParams](audiooutputunitstartattimeparams.md): A timestamp for scheduled starting of an I/O audio unit.

# I/O Audio Unit Properties (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties for Apple I/O audio units (sometimes called output units).

## Topics

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_EnableIO](kaudiooutputunitproperty_enableio.md): Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_SetInputCallback](kaudiooutputunitproperty_setinputcallback.md): A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).
- [kAudioOutputUnitProperty_OSWorkgroup](kaudiooutputunitproperty_osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.

## See Also

### Input/Output

- [Inter-App Output Unit Property IDs](1621039-inter-app-output-unit-property-ids.md)
- [Inter-App Audio Unit Property IDs](1621038-inter-app-audio-unit-property-ids.md)
- [Output Unit Parameters](1389916-output_unit_parameters.md)
- [AUNetReceive Properties](1534109-aunetreceive-properties.md)
- [AUNetSend Properties](1534207-aunetsend-properties.md)
- [AUNetSend Parameters](1389633-aunetsend-parameters.md)
- [AUNetReceive Parameters](1389920-aunetreceive-parameters.md)
- [AUNetSendPresetFormat Properties](1534212-aunetsendpresetformat-properties.md)
- [Net Status Audio Unit Parameters](1389891-net-status-audio-unit-parameters.md)
- [I/O Audio Unit Function Selectors](1585807-i_o_audio_unit_function_selector.md): Audio unit component selectors, specific to I/O audio units, that correspond to functions in the audio unit API.
- [AudioOutputUnitMIDICallbacks](audiooutputunitmidicallbacks.md)
- [AudioOutputUnitStartAtTimeParams](audiooutputunitstartattimeparams.md): A timestamp for scheduled starting of an I/O audio unit.
