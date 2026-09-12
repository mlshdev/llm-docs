> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/midioutputnames](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/midioutputnames)

# midiOutputNames (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The names of the MIDI outputs.

## Declaration

```swift
var midiOutputNames: [String] { get }
```

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](midioutputeventblock.md)
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)

# MIDIOutputNames (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The names of the MIDI outputs.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * MIDIOutputNames;
```

```objectivec
@property (atomic, copy, readonly) NSArray<NSString *> * MIDIOutputNames;
```

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](midioutputeventblock.md)
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)
