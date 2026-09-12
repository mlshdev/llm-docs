> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendednoteonevent/groupid](https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/groupid)

# groupID (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The audio unit channel that handles the event.

## Declaration

```swift
var groupID: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

The valid range of values are between `0` and `15`, but can be higher if the [AVMusicTrack](../avmusictrack.md) destination audio unit supports more channels.

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [duration](duration.md): The duration of the event, in beats.

# groupID (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The audio unit channel that handles the event.

## Declaration

```objectivec
@property (readwrite) UInt32 groupID;
```

<a id="Discussion"></a>

## Discussion

The valid range of values are between `0` and `15`, but can be higher if the [AVMusicTrack](../avmusictrack.md) destination audio unit supports more channels.

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [duration](duration.md): The duration of the event, in beats.
