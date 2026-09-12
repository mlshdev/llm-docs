> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/midioutputeventblock](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/midioutputeventblock)

# midiOutputEventBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
var midiOutputEventBlock: AUMIDIOutputEventBlock? { get set }
```

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)

# MIDIOutputEventBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AUMIDIOutputEventBlock MIDIOutputEventBlock;
```

```objectivec
@property (atomic, copy, nullable) AUMIDIOutputEventBlock MIDIOutputEventBlock;
```

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)
