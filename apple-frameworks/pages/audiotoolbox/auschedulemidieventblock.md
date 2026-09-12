> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auschedulemidieventblock](https://developer.apple.com/documentation/audiotoolbox/auschedulemidieventblock)

# AUScheduleMIDIEventBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to schedule MIDI events.

## Declaration

```swift
typealias AUScheduleMIDIEventBlock = (AUEventSampleTime, UInt8, Int, UnsafePointer<UInt8>) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **eventSampleTime**: The sample time at which the MIDI event is to occur. When scheduling parameters during the render cycle, this time can be set to the `AUEventSampleTimeImmediate` value plus an optional buffer offset, in which case the event is scheduled at that position in the current render cycle.
- **cable**: The virtual cable number.
- **length**: The number of bytes of MIDI data in the provided event(s).
- **midiBytes**: One or more valid MIDI 1.0 events, except *sysex* which must always be sent as the only event in the chunk. Running status is not allowed.

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [midiOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUMIDIOutputEventBlock](aumidioutputeventblock.md)

# AUScheduleMIDIEventBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to schedule MIDI events.

## Declaration

```objectivec
typedef void (^)(long long, unsigned char, long, const unsigned char *) __attribute__((nonblocking)) AUScheduleMIDIEventBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **eventSampleTime**: The sample time at which the MIDI event is to occur. When scheduling parameters during the render cycle, this time can be set to the `AUEventSampleTimeImmediate` value plus an optional buffer offset, in which case the event is scheduled at that position in the current render cycle.
- **cable**: The virtual cable number.
- **length**: The number of bytes of MIDI data in the provided event(s).
- **midiBytes**: One or more valid MIDI 1.0 events, except *sysex* which must always be sent as the only event in the chunk. Running status is not allowed.

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [MIDIOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUMIDIOutputEventBlock](aumidioutputeventblock.md)
