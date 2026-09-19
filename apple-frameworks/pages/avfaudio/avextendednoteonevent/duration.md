> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/duration

# duration (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The duration of the event, in beats.

## Declaration

```swift
var duration: AVMusicTimeStamp { get set }
```

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.

# duration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The duration of the event, in beats.

## Declaration

```objectivec
@property (readwrite) AVMusicTimeStamp duration;
```

## See Also

### Configuring a Note On Event

- [midiNote](midinote.md): The MIDI note number.
- [velocity](velocity.md): The MDI velocity.
- [instrumentID](instrumentid.md): The instrument identifier.
- [groupID](groupid.md): The audio unit channel that handles the event.
