> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallback_gettransportstate](https://developer.apple.com/documentation/audiotoolbox/hostcallback_gettransportstate)

# HostCallback_GetTransportState (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides audio transport state and timeline information to an audio unit from a host application.

## Declaration

```swift
typealias HostCallback_GetTransportState = (UnsafeMutableRawPointer?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<Float64>?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<Float64>?, UnsafeMutablePointer<Float64>?) -> OSStatus
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outIsPlaying`: On output, `TRUE` if audio is playing, or `FALSE` otherwise.
- `outTransportStateChanged`: On output, `TRUE` if the transport state changed since the last time the callback was invoked, or `FALSE` otherwise.
- `outCurrentSampleInTimeLine`: On output, the sample number, indexed from zero from the beginning of the timeline.
- `outIsCycling`: On output, `TRUE` if cycling, or `FALSE` otherwise.
- `outCycleStartBeat`:
- `outCycleEndBeat`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetTransportState`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

# HostCallback_GetTransportState (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides audio transport state and timeline information to an audio unit from a host application.

## Declaration

```objectivec
typedef int (*)(void *, unsigned char *, unsigned char *, double *, unsigned char *, double *, double *) __attribute__((nonblocking)) HostCallback_GetTransportState;
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outIsPlaying`: On output, `TRUE` if audio is playing, or `FALSE` otherwise.
- `outTransportStateChanged`: On output, `TRUE` if the transport state changed since the last time the callback was invoked, or `FALSE` otherwise.
- `outCurrentSampleInTimeLine`: On output, the sample number, indexed from zero from the beginning of the timeline.
- `outIsCycling`: On output, `TRUE` if cycling, or `FALSE` otherwise.
- `outCycleStartBeat`:
- `outCycleEndBeat`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetTransportState`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.
