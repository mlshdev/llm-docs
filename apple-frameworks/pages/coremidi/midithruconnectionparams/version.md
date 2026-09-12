> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionparams/version](https://developer.apple.com/documentation/coremidi/midithruconnectionparams/version)

# version (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number.

## Declaration

```swift
var version: UInt32
```

<a id="Discussion"></a>

## Discussion

The value of this parameter must be 0.

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
- [numSources](numsources.md): The number of valid sources.
- [sources](sources.md): All MIDI sources for this connection.
- [numDestinations](numdestinations.md): The number of valid destinations.
- [destinations](destinations.md): All MIDI destinations for this connection.
- [channelMap](channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.
- [filterOutBeatClock](filteroutbeatclock.md): A value that indicates whether to filter out MIDI clock, play, stop, and resume messages.

# version (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number.

## Declaration

```objectivec
UInt32 version;
```

<a id="Discussion"></a>

## Discussion

The value of this parameter must be 0.

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
- [numSources](numsources.md): The number of valid sources.
- [sources](sources.md): All MIDI sources for this connection.
- [numDestinations](numdestinations.md): The number of valid destinations.
- [destinations](destinations.md): All MIDI destinations for this connection.
- [channelMap](channelmap.md): A mapping of MIDI channels.
- [filterOutAllControls](filteroutallcontrols.md): A value that indicates whether to filter out MIDI continuous control messages.
- [filterOutBeatClock](filteroutbeatclock.md): A value that indicates whether to filter out MIDI clock, play, stop, and resume messages.
