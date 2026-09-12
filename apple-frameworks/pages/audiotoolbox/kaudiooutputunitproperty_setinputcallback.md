> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiooutputunitproperty_setinputcallback](https://developer.apple.com/documentation/audiotoolbox/kaudiooutputunitproperty_setinputcallback)

# kAudioOutputUnitProperty_SetInputCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.

## Declaration

```swift
var kAudioOutputUnitProperty_SetInputCallback: AudioUnitPropertyID { get }
```

## See Also

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_EnableIO](kaudiooutputunitproperty_enableio.md): Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).

# kAudioOutputUnitProperty_SetInputCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write `AURenderCallbackStruct` data structure valid on the audio unit global scope. When an output unit has been enabled for input operation, this callback can be used to provide a single callback to the host application from the input I/O proc, in order to notify the host that input is available and may be obtained by calling the `AudioUnitRender` function.

## Declaration

```objectivec
kAudioOutputUnitProperty_SetInputCallback
```

## See Also

### Properties

- [kAudioOutputUnitProperty_ChannelMap](kaudiooutputunitproperty_channelmap.md)
- [kAudioOutputUnitProperty_CurrentDevice](kaudiooutputunitproperty_currentdevice.md): A read/write audio device ID object, of type `AudioDeviceID`, valid on the audio unit global scope.
- [kAudioOutputUnitProperty_EnableIO](kaudiooutputunitproperty_enableio.md): Specifies whether audio I/O is enabled for an I/O unit bus-scope combination.
- [kAudioOutputUnitProperty_HasIO](kaudiooutputunitproperty_hasio.md)
- [kAudioOutputUnitProperty_StartTime](kaudiooutputunitproperty_starttime.md): A write-only `AudioOutputUnitStartAtTimeParams` data structure valid on the audio unit global scope. When this property is set on an output unit, it will cause the next Start request (but no subsequent Starts) to use the AudioDeviceStartAtTime function, using the specified timestamp, passing false for `inRequestedStartTimeIsInput`.
- [kAudioOutputUnitProperty_StartTimestampsAtZero](kaudiooutputunitproperty_starttimestampsatzero.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioOutputUnitProperty_IsRunning](kaudiooutputunitproperty_isrunning.md): Indicates whether an audio unit is running (`TRUE`) or not (`FALSE`).
- [kAudioOutputUnitProperty_OSWorkgroup](kaudiooutputunitproperty_osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.
