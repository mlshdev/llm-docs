> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/timeresolution](https://developer.apple.com/documentation/avfaudio/avmusictrack/timeresolution)

# timeResolution (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The time resolution value for the sequence, in ticks (pulses) per quarter note.

## Declaration

```swift
var timeResolution: Int { get }
```

<a id="Discussion"></a>

## Discussion

If you use a MIDI file to construct the containing sequence, the resolution is the contents of the file. If you want to keep a time resolution when writing a new file, retrieve this value and then specify it when writing to an audio sequencer. It doesn’t affect the rendering or notion of time of the sequence — only it’s MIDI file representation.

By default, the framework sets this value to `480` when creating the sequence manually, or to a value from a MIDI file if you use it to create the sequence.

You can only retrieve this value from the tempo track.

## See Also

### Configuring Music Track Properties

- [isMuted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [offsetTime](offsettime.md): The offset of the track’s start time, in beats.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.

# timeResolution (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The time resolution value for the sequence, in ticks (pulses) per quarter note.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger timeResolution;
```

<a id="Discussion"></a>

## Discussion

If you use a MIDI file to construct the containing sequence, the resolution is the contents of the file. If you want to keep a time resolution when writing a new file, retrieve this value and then specify it when writing to an audio sequencer. It doesn’t affect the rendering or notion of time of the sequence — only it’s MIDI file representation.

By default, the framework sets this value to `480` when creating the sequence manually, or to a value from a MIDI file if you use it to create the sequence.

You can only retrieve this value from the tempo track.

## See Also

### Configuring Music Track Properties

- [muted](ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [soloed](issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [offsetTime](offsettime.md): The offset of the track’s start time, in beats.
- [usesAutomatedParameters](usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.
