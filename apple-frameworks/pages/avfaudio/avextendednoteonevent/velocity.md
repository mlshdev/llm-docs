> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/velocity](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/velocity)

# velocity (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The MDI velocity.

## Declaration

```swift
var velocity: Float { get set }
```

<a id="Discussion"></a>

## Discussion

If the instrument in the [AVMusicTrack](../avmusictrack.md) destination audio unit supports fractional values, use this to generate precise changes in gain and other values. The valid range of values depend on the destination audio unit, and is usually between `0.0` and `127.0`.

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.

# velocity (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The MDI velocity.

## Declaration

```objectivec
@property (readwrite) float velocity;
```

<a id="Discussion"></a>

## Discussion

If the instrument in the [AVMusicTrack](../avmusictrack.md) destination audio unit supports fractional values, use this to generate precise changes in gain and other values. The valid range of values depend on the destination audio unit, and is usually between `0.0` and `127.0`.

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.
- [duration](duration.md): The duration of the event, in beats.
