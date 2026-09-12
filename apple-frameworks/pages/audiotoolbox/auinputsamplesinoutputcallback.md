> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auinputsamplesinoutputcallback](https://developer.apple.com/documentation/audiotoolbox/auinputsamplesinoutputcallback)

# AUInputSamplesInOutputCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio unit has provided a buffer of output samples.

## Declaration

```swift
typealias AUInputSamplesInOutputCallback = (UnsafeMutableRawPointer, UnsafePointer<AudioTimeStamp>, Float64, Float64) -> Void
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `inOutputTimeStamp`: The time stamp that corresponds to the first sample of audio data produced in AudioUnitRender (its output data).
- `inInputSample`: The sample number of the input that is represented in the first sample of that output time stamp.
- `inNumberInputSamples`: The number of input samples that are represented in an output buffer.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAUInputSamplesInOutputCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

When your application uses a *varispeed* or pitch-shifting audio unit, it may not be clear which input samples are represented in a buffer of output samples. This callback function addresses this issue by providing the input sample number corresponding to the first sample in an output buffer.

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

# AUInputSamplesInOutputCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio unit has provided a buffer of output samples.

## Declaration

```objectivec
typedef void (*)(void *, const struct AudioTimeStamp *, double, double) __attribute__((nonblocking)) AUInputSamplesInOutputCallback;
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `inOutputTimeStamp`: The time stamp that corresponds to the first sample of audio data produced in AudioUnitRender (its output data).
- `inInputSample`: The sample number of the input that is represented in the first sample of that output time stamp.
- `inNumberInputSamples`: The number of input samples that are represented in an output buffer.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAUInputSamplesInOutputCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

When your application uses a *varispeed* or pitch-shifting audio unit, it may not be clear which input samples are represented in a buffer of output samples. This callback function addresses this issue by providing the input sample number corresponding to the first sample in an output buffer.

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.
