> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiooutputunitproperty_enableio](https://developer.apple.com/documentation/audiotoolbox/kaudiooutputunitproperty_enableio)

# kAudioOutputUnitProperty_EnableIO (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.

## Declaration

```swift
var kAudioOutputUnitProperty_EnableIO: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

An I/O unit’s bus 0 connects to output hardware, such as for playback through a speaker. Output is enabled by default. To disable output, the bus 0 output scope must be disabled, as follows:

```objc
UInt32 enableOutput        = 0;    // to disable output
AudioUnitElement outputBus = 0;
 
AudioUnitSetProperty (
    io_unit_instance,
    kAudioOutputUnitProperty_EnableIO,
    kAudioUnitScope_Output,
    outputBus,
    &enableOutput,
    sizeof (enableOutput)
);
```

An I/O unit’s bus 1 connects to input hardware, such as for recording from a microphone. Input is disabled by default. To enable input, the bus 1 input scope must be enabled, as follows:

```objc
UInt32 enableInput        = 1;    // to enable input
AudioUnitElement inputBus = 1;
 
AudioUnitSetProperty (
    io_unit_instance,
    kAudioOutputUnitProperty_EnableIO,
    kAudioUnitScope_Input,
    inputBus,
    &enableInput,
    sizeof (enableInput)
);
```

A read/write `UInt32` value valid on the input and output scopes.

## See Also

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_SetInputCallback](kaudiooutputunitproperty_setinputcallback.md): A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).

# kAudioOutputUnitProperty_EnableIO (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.

## Declaration

```objectivec
kAudioOutputUnitProperty_EnableIO
```

<a id="Discussion"></a>

## Discussion

An I/O unit’s bus 0 connects to output hardware, such as for playback through a speaker. Output is enabled by default. To disable output, the bus 0 output scope must be disabled, as follows:

```objc
UInt32 enableOutput        = 0;    // to disable output
AudioUnitElement outputBus = 0;
 
AudioUnitSetProperty (
    io_unit_instance,
    kAudioOutputUnitProperty_EnableIO,
    kAudioUnitScope_Output,
    outputBus,
    &enableOutput,
    sizeof (enableOutput)
);
```

An I/O unit’s bus 1 connects to input hardware, such as for recording from a microphone. Input is disabled by default. To enable input, the bus 1 input scope must be enabled, as follows:

```objc
UInt32 enableInput        = 1;    // to enable input
AudioUnitElement inputBus = 1;
 
AudioUnitSetProperty (
    io_unit_instance,
    kAudioOutputUnitProperty_EnableIO,
    kAudioUnitScope_Input,
    inputBus,
    &enableInput,
    sizeof (enableInput)
);
```

A read/write `UInt32` value valid on the input and output scopes.

## See Also

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_SetInputCallback](kaudiooutputunitproperty_setinputcallback.md): A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).
- [kAudioOutputUnitProperty_OSWorkgroup](kaudiooutputunitproperty_osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
