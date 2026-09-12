> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumidioutputcallback](https://developer.apple.com/documentation/audiotoolbox/aumidioutputcallback)

# AUMIDIOutputCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by a host application, gets MIDI data from an audio unit.

## Declaration

```swift
typealias AUMIDIOutputCallback = (UnsafeMutableRawPointer?, UnsafePointer<AudioTimeStamp>, UInt32, UnsafePointer<MIDIPacketList>) -> OSStatus
```

## Parameters

- `userData`: Custom data.
- `timeStamp`:
- `midiOutNum`:
- `pktlist`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAUMIDIOutputCallback`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.

# AUMIDIOutputCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When called by a host application, gets MIDI data from an audio unit.

## Declaration

```objectivec
typedef int (*)(void *, const struct AudioTimeStamp *, unsigned int, const struct MIDIPacketList *) __attribute__((nonblocking)) AUMIDIOutputCallback;
```

## Parameters

- `userData`: Custom data.
- `timeStamp`:
- `midiOutNum`:
- `pktlist`:

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAUMIDIOutputCallback`, you would declare it like this:

## See Also

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
