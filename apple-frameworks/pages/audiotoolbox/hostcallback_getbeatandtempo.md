> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallback_getbeatandtempo](https://developer.apple.com/documentation/audiotoolbox/hostcallback_getbeatandtempo)

# HostCallback_GetBeatAndTempo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides beat and tempo information to an audio unit from a host application.

## Declaration

```swift
typealias HostCallback_GetBeatAndTempo = (UnsafeMutableRawPointer?, UnsafeMutablePointer<Float64>?, UnsafeMutablePointer<Float64>?) -> OSStatus
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outCurrentBeat`: On output, the current beat of the music that is playing.
- `outCurrentTempo`: On output, the current tempo of the music that is playing.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetBeatAndTempo`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

# HostCallback_GetBeatAndTempo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides beat and tempo information to an audio unit from a host application.

## Declaration

```objectivec
typedef int (*)(void *, double *, double *) __attribute__((nonblocking)) HostCallback_GetBeatAndTempo;
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outCurrentBeat`: On output, the current beat of the music that is playing.
- `outCurrentTempo`: On output, the current tempo of the music that is playing.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetBeatAndTempo`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.
