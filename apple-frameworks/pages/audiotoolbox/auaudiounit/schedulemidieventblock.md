> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/schedulemidieventblock](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/schedulemidieventblock)

# scheduleMIDIEventBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A block used to schedule MIDI events.

## Declaration

```swift
var scheduleMIDIEventBlock: AUScheduleMIDIEventBlock? { get }
```

<a id="Discussion"></a>

## Discussion

As with the render block, a host should fetch this block before beginning to render, if it intends to schedule MIDI events.

This property is implemented in the [AUAudioUnit](../auaudiounit.md) base class. If the audio unit is not a music device or effect, this property is `nil`.

Subclasses should not override this property. When hosts schedule events via this block, they are delivered to the audio unit via the list of render events delivered to the [internalRenderBlock](internalrenderblock.md) implementation.

## See Also

### Managing MIDI Events

- [isMusicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [midiOutputEventBlock](midioutputeventblock.md)
- [midiOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)

# scheduleMIDIEventBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A block used to schedule MIDI events.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AUScheduleMIDIEventBlock scheduleMIDIEventBlock;
```

```objectivec
@property (atomic, readonly, nullable) AUScheduleMIDIEventBlock scheduleMIDIEventBlock;
```

<a id="Discussion"></a>

## Discussion

As with the render block, a host should fetch this block before beginning to render, if it intends to schedule MIDI events.

This property is implemented in the [AUAudioUnit](../auaudiounit.md) base class. If the audio unit is not a music device or effect, this property is `nil`.

Subclasses should not override this property. When hosts schedule events via this block, they are delivered to the audio unit via the list of render events delivered to the [internalRenderBlock](internalrenderblock.md) implementation.

## See Also

### Managing MIDI Events

- [musicDeviceOrEffect](ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [MIDIOutputEventBlock](midioutputeventblock.md)
- [MIDIOutputNames](midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](../auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](../aumidioutputeventblock.md)
