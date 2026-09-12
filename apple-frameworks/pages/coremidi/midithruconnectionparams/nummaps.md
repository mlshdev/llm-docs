> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionparams/nummaps](https://developer.apple.com/documentation/coremidi/midithruconnectionparams/nummaps)

# numMaps (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of MIDI value maps in the variable-length portion of the struct.

## Declaration

```swift
var numMaps: UInt16
```

## See Also

### Connection Parameters

- [noteNumber](notenumber.md): The transformation of MIDI note numbers.
- [lowNote](lownote.md): The note value below which the system filters out notes.
- [highNote](highnote.md): The note value above which the system filters out notes.
- [velocity](velocity.md): A note velocity transformation.
- [lowVelocity](lowvelocity.md): The velocity value below which the system filters out notes.
- [highVelocity](highvelocity.md): The velocity value above which the system filters out notes.
- [keyPressure](keypressure.md): The transformation of polyphonic key pressure events.
- [channelPressure](channelpressure.md): The transformation of MIDI monophonic channel pressure events.
- [version](version.md): The version number.
- [numSources](numsources.md): The number of valid sources.
- [sources](sources.md): All MIDI sources for this connection.
- [numDestinations](numdestinations.md): The number of valid destinations.
- [destinations](destinations.md): All MIDI destinations for this connection.
- [channelMap](channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.

# numMaps (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of MIDI value maps in the variable-length portion of the struct.

## Declaration

```objectivec
UInt16 numMaps;
```

## See Also

### Connection Parameters

- [noteNumber](notenumber.md): The transformation of MIDI note numbers.
- [lowNote](lownote.md): The note value below which the system filters out notes.
- [highNote](highnote.md): The note value above which the system filters out notes.
- [velocity](velocity.md): A note velocity transformation.
- [lowVelocity](lowvelocity.md): The velocity value below which the system filters out notes.
- [highVelocity](highvelocity.md): The velocity value above which the system filters out notes.
- [keyPressure](keypressure.md): The transformation of polyphonic key pressure events.
- [channelPressure](channelpressure.md): The transformation of MIDI monophonic channel pressure events.
- [version](version.md): The version number.
- [numSources](numsources.md): The number of valid sources.
- [sources](sources.md): All MIDI sources for this connection.
- [numDestinations](numdestinations.md): The number of valid destinations.
- [destinations](destinations.md): All MIDI destinations for this connection.
- [channelMap](channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.
