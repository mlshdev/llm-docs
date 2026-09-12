> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/init(midinote:velocity:instrumentid:groupid:duration:)-rqr5](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/init(midinote:velocity:instrumentid:groupid:duration:)-rqr5)

# init(midiNote:velocity:instrumentID:groupID:duration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a note on event with the default instrument.

## Declaration

```swift
init(midiNote: Float, velocity: Float, instrumentID: UInt32, groupID: UInt32, duration: AVMusicTimeStamp)
```

## Parameters

- `midiNote`: The MIDI note number.
- `velocity`: The MIDI velocity.
- `instrumentID`: The default instrument.
- `groupID`: The identifier that represents the audio unit channel that handles the event.
- `duration`: The duration of the event, in beats.

<a id="Discussion"></a>

## Discussion

Use [defaultInstrument](defaultinstrument.md) when you set `instrumentID`.

## See Also

### Creating a Note On Event

- [init(midiNote:velocity:groupID:duration:)](init%28midinote_velocity_groupid_duration_%29-60hve.md): Creates an event with a MIDI note, velocity, group identifier, and duration.

# initWithMIDINote:velocity:instrumentID:groupID:duration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a note on event with the default instrument.

## Declaration

```objectivec
- (instancetype) initWithMIDINote:(float) midiNote velocity:(float) velocity instrumentID:(UInt32) instrumentID groupID:(UInt32) groupID duration:(AVMusicTimeStamp) duration;
```

## Parameters

- `midiNote`: The MIDI note number.
- `velocity`: The MIDI velocity.
- `instrumentID`: The default instrument.
- `groupID`: The identifier that represents the audio unit channel that handles the event.
- `duration`: The duration of the event, in beats.

<a id="Discussion"></a>

## Discussion

Use [AVExtendedNoteOnEventDefaultInstrument](defaultinstrument.md) when you set `instrumentID`.

## See Also

### Creating a Note On Event

- [initWithMIDINote:velocity:groupID:duration:](init%28midinote_velocity_groupid_duration_%29-60hve.md): Creates an event with a MIDI note, velocity, group identifier, and duration.
