> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallback_getmusicaltimelocation](https://developer.apple.com/documentation/audiotoolbox/hostcallback_getmusicaltimelocation)

# HostCallback_GetMusicalTimeLocation (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides musical timing information to an audio unit from a host application.

## Declaration

```swift
typealias HostCallback_GetMusicalTimeLocation = (UnsafeMutableRawPointer?, UnsafeMutablePointer<UInt32>?, UnsafeMutablePointer<Float32>?, UnsafeMutablePointer<UInt32>?, UnsafeMutablePointer<Float64>?) -> OSStatus
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outDeltaSampleOffsetToNextBeat`: On output, the number of samples until the next beat.
- `outTimeSig_Numerator`: On output, the numerator for a musical time signature.
- `outTimeSig_Denominator`: On output, the denominator for a musical time signature.
- `outCurrentMeasureDownBeat`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetMusicalTimeLocation`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

# HostCallback_GetMusicalTimeLocation (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by the system, provides musical timing information to an audio unit from a host application.

## Declaration

```objectivec
typedef int (*)(void *, unsigned int *, float *, unsigned int *, double *) __attribute__((nonblocking)) HostCallback_GetMusicalTimeLocation;
```

## Parameters

- `inHostUserData`: Custom data that you provided when registering your callback with the audio unit.
- `outDeltaSampleOffsetToNextBeat`: On output, the number of samples until the next beat.
- `outTimeSig_Numerator`: On output, the numerator for a musical time signature.
- `outTimeSig_Denominator`: On output, the denominator for a musical time signature.
- `outCurrentMeasureDownBeat`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyHostCallback_GetMusicalTimeLocation`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.
