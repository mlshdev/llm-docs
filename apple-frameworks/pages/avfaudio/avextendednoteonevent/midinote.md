> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/midinote](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/midinote)

# midiNote (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The MIDI note number.

## Declaration

```swift
var midiNote: Float { get set }
```

<a id="Discussion"></a>

## Discussion

If the instrument within the [AVMusicTrack](../avmusictrack.md) destination audio unit supports fractional values, you use this to generate arbitrary tunings. The valid range of values depends on the destination audio unit, and is usually between `0.0` and `127.0`.

## See Also

### Configuring a Note On Event

- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.

# midiNote (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The MIDI note number.

## Declaration

```objectivec
@property (readwrite) float midiNote;
```

<a id="Discussion"></a>

## Discussion

If the instrument within the [AVMusicTrack](../avmusictrack.md) destination audio unit supports fractional values, you use this to generate arbitrary tunings. The valid range of values depends on the destination audio unit, and is usually between `0.0` and `127.0`.

## See Also

### Configuring a Note On Event

- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.
