> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/virtualmidicablecount](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/virtualmidicablecount)

# virtualMIDICableCount (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of virtual MIDI cables implemented by a music device or effect.

## Declaration

```swift
var virtualMIDICableCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

A music device or effect can support up to 256 virtual MIDI cables of input.

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](midioutputeventblock.md)
- [midiOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)

# virtualMIDICableCount (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of virtual MIDI cables implemented by a music device or effect.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger virtualMIDICableCount;
```

```objectivec
@property (atomic, readonly) NSInteger virtualMIDICableCount;
```

<a id="Discussion"></a>

## Discussion

A music device or effect can support up to 256 virtual MIDI cables of input.

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](midioutputeventblock.md)
- [MIDIOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)
