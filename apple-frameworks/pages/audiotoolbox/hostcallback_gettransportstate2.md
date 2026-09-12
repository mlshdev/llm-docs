> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallback_gettransportstate2](https://developer.apple.com/documentation/audiotoolbox/hostcallback_gettransportstate2)

# HostCallback_GetTransportState2 (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias HostCallback_GetTransportState2 = (UnsafeMutableRawPointer?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<Float64>?, UnsafeMutablePointer<DarwinBoolean>?, UnsafeMutablePointer<Float64>?, UnsafeMutablePointer<Float64>?) -> OSStatus
```

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

# HostCallback_GetTransportState2 (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char *, unsigned char *, unsigned char *, double *, unsigned char *, double *, double *) __attribute__((nonblocking)) HostCallback_GetTransportState2;
```

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.
