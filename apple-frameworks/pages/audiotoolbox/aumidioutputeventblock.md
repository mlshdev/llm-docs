> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumidioutputeventblock](https://developer.apple.com/documentation/audiotoolbox/aumidioutputeventblock)

# AUMIDIOutputEventBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AUMIDIOutputEventBlock = (AUEventSampleTime, UInt8, Int, UnsafePointer<UInt8>) -> OSStatus
```

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [midiOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](auschedulemidieventblock.md): A block to schedule MIDI events.

# AUMIDIOutputEventBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (^)(long long, unsigned char, long, const unsigned char *) __attribute__((nonblocking)) AUMIDIOutputEventBlock;
```

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [MIDIOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](auschedulemidieventblock.md): A block to schedule MIDI events.
