> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/init(midinote:velocity:groupid:duration:)-60hve](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/init(midinote:velocity:groupid:duration:)-60hve)

# init(midiNote:velocity:groupID:duration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI note, velocity, group identifier, and duration.

## Declaration

```swift
init(midiNote: Float, velocity: Float, groupID: UInt32, duration: AVMusicTimeStamp)
```

## Parameters

- `midiNote`: The MIDI note number.
- `velocity`: The MIDI velocity.
- `groupID`: The identifier that represents the audio unit channel that handles the event.
- `duration`: The duration of the event, in beats.

## See Also

### Creating a Note On Event

- [init(midiNote:velocity:instrumentID:groupID:duration:)](init%28midinote_velocity_instrumentid_groupid_duration_%29-rqr5.md): Creates a note on event with the default instrument.

# initWithMIDINote:velocity:groupID:duration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI note, velocity, group identifier, and duration.

## Declaration

```objectivec
- (instancetype) initWithMIDINote:(float) midiNote velocity:(float) velocity groupID:(UInt32) groupID duration:(AVMusicTimeStamp) duration;
```

## Parameters

- `midiNote`: The MIDI note number.
- `velocity`: The MIDI velocity.
- `groupID`: The identifier that represents the audio unit channel that handles the event.
- `duration`: The duration of the event, in beats.

## See Also

### Creating a Note On Event

- [initWithMIDINote:velocity:instrumentID:groupID:duration:](init%28midinote_velocity_instrumentid_groupid_duration_%29-rqr5.md): Creates a note on event with the default instrument.
