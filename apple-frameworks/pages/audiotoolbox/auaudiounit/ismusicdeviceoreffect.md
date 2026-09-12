> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/ismusicdeviceoreffect](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/ismusicdeviceoreffect)

# isMusicDeviceOrEffect (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether an audio unit responds to MIDI events.

## Declaration

```swift
var isMusicDeviceOrEffect: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the audio unit is a music device or effect.

## See Also

### Managing MIDI Events

- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](midioutputeventblock.md)
- [midiOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)

# musicDeviceOrEffect (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Specifies whether an audio unit responds to MIDI events.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMusicDeviceOrEffect) BOOL musicDeviceOrEffect;
```

```objectivec
@property (atomic, readonly, getter=isMusicDeviceOrEffect) BOOL musicDeviceOrEffect;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the audio unit is a music device or effect.

## See Also

### Managing MIDI Events

- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](midioutputeventblock.md)
- [MIDIOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)
