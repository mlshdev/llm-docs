> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionparams](https://developer.apple.com/documentation/coremidi/midithruconnectionparams)

# MIDIThruConnectionParams (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of MIDI routings and transformations.

## Declaration

```swift
struct MIDIThruConnectionParams
```

## Topics

### Connection Parameters

- [noteNumber](midithruconnectionparams/notenumber.md): The transformation of MIDI note numbers.
- [lowNote](midithruconnectionparams/lownote.md): The note value below which the system filters out notes.
- [highNote](midithruconnectionparams/highnote.md): The note value above which the system filters out notes.
- [velocity](midithruconnectionparams/velocity.md): A note velocity transformation.
- [lowVelocity](midithruconnectionparams/lowvelocity.md): The velocity value below which the system filters out notes.
- [highVelocity](midithruconnectionparams/highvelocity.md): The velocity value above which the system filters out notes.
- [keyPressure](midithruconnectionparams/keypressure.md): The transformation of polyphonic key pressure events.
- [channelPressure](midithruconnectionparams/channelpressure.md): The transformation of MIDI monophonic channel pressure events.
- [version](midithruconnectionparams/version.md): The version number.
- [numSources](midithruconnectionparams/numsources.md): The number of valid sources.
- [sources](midithruconnectionparams/sources.md): All MIDI sources for this connection.
- [numDestinations](midithruconnectionparams/numdestinations.md): The number of valid destinations.
- [destinations](midithruconnectionparams/destinations.md): All MIDI destinations for this connection.
- [channelMap](midithruconnectionparams/channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](midithruconnectionparams/filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.
- [filterOutBeatClock](midithruconnectionparams/filteroutbeatclock.md): A value that indicates whether to filter out MIDI clock, play, stop, and resume messages.
- [filterOutMTC](midithruconnectionparams/filteroutmtc.md): A value that indicates whether to filter out MIDI Time Code messages.
- [filterOutSysEx](midithruconnectionparams/filteroutsysex.md): A value that indicates wheter to filter out system-exclusive messages.
- [filterOutTuneRequest](midithruconnectionparams/filterouttunerequest.md): A value that specifies whether to filter out MIDI tune request messages.
- [numControlTransforms](midithruconnectionparams/numcontroltransforms.md): The number of control transformations in the variable-length portion of the struct.
- [numMaps](midithruconnectionparams/nummaps.md): The number of MIDI value maps in the variable-length portion of the struct.
- [pitchBend](midithruconnectionparams/pitchbend.md): The transformation of a MIDI pitch bend event.
- [programChange](midithruconnectionparams/programchange.md): A transformation of a MIDI program change event.
- [reserved2](midithruconnectionparams/reserved2.md): A reserved value that must be 0.
- [reserved3](midithruconnectionparams/reserved3.md): A reserved value that must be 0.

### Initializers

- [init()](midithruconnectionparams/init%28%29.md)
- [init(version:numSources:sources:numDestinations:destinations:channelMap:lowVelocity:highVelocity:lowNote:highNote:noteNumber:velocity:keyPressure:channelPressure:programChange:pitchBend:filterOutSysEx:filterOutMTC:filterOutBeatClock:filterOutTuneRequest:reserved2:filterOutAllControls:numControlTransforms:numMaps:reserved3:)](midithruconnectionparams/init%28version_numsources_sources_numdestinations_destinations_channelmap_lowvelocity_highvelocity_lownote_highnote_notenumber_velocity_keypressure_channelpressure_programchange_pitc~7e159c9f.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Configuring Parameters

- [MIDIThruConnectionParamsSize(\_:)](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize(\_:)](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams(\_:\_:)](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams(\_:\_:)](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

# MIDIThruConnectionParams (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of MIDI routings and transformations.

## Declaration

```objectivec
struct MIDIThruConnectionParams;
```

## Topics

### Connection Parameters

- [noteNumber](midithruconnectionparams/notenumber.md): The transformation of MIDI note numbers.
- [lowNote](midithruconnectionparams/lownote.md): The note value below which the system filters out notes.
- [highNote](midithruconnectionparams/highnote.md): The note value above which the system filters out notes.
- [velocity](midithruconnectionparams/velocity.md): A note velocity transformation.
- [lowVelocity](midithruconnectionparams/lowvelocity.md): The velocity value below which the system filters out notes.
- [highVelocity](midithruconnectionparams/highvelocity.md): The velocity value above which the system filters out notes.
- [keyPressure](midithruconnectionparams/keypressure.md): The transformation of polyphonic key pressure events.
- [channelPressure](midithruconnectionparams/channelpressure.md): The transformation of MIDI monophonic channel pressure events.
- [version](midithruconnectionparams/version.md): The version number.
- [numSources](midithruconnectionparams/numsources.md): The number of valid sources.
- [sources](midithruconnectionparams/sources.md): All MIDI sources for this connection.
- [numDestinations](midithruconnectionparams/numdestinations.md): The number of valid destinations.
- [destinations](midithruconnectionparams/destinations.md): All MIDI destinations for this connection.
- [channelMap](midithruconnectionparams/channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](midithruconnectionparams/filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.
- [filterOutBeatClock](midithruconnectionparams/filteroutbeatclock.md): A value that indicates whether to filter out MIDI clock, play, stop, and resume messages.
- [filterOutMTC](midithruconnectionparams/filteroutmtc.md): A value that indicates whether to filter out MIDI Time Code messages.
- [filterOutSysEx](midithruconnectionparams/filteroutsysex.md): A value that indicates wheter to filter out system-exclusive messages.
- [filterOutTuneRequest](midithruconnectionparams/filterouttunerequest.md): A value that specifies whether to filter out MIDI tune request messages.
- [numControlTransforms](midithruconnectionparams/numcontroltransforms.md): The number of control transformations in the variable-length portion of the struct.
- [numMaps](midithruconnectionparams/nummaps.md): The number of MIDI value maps in the variable-length portion of the struct.
- [pitchBend](midithruconnectionparams/pitchbend.md): The transformation of a MIDI pitch bend event.
- [programChange](midithruconnectionparams/programchange.md): A transformation of a MIDI program change event.
- [reserved2](midithruconnectionparams/reserved2.md): A reserved value that must be 0.
- [reserved3](midithruconnectionparams/reserved3.md): A reserved value that must be 0.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParamsSize](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.
