> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/instrumentid](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/instrumentid)

# instrumentID (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The instrument identifier.

## Declaration

```swift
var instrumentID: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to [defaultInstrument](defaultinstrument.md).

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.

# instrumentID (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The instrument identifier.

## Declaration

```objectivec
@property (readwrite) UInt32 instrumentID;
```

<a id="Discussion"></a>

## Discussion

Set this value to [AVExtendedNoteOnEventDefaultInstrument](defaultinstrument.md).

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.
