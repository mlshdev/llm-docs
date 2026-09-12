> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/clearevents(in:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/clearevents(in:))

# clearEvents(in:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Removes all events in the given beat range from the music track.

## Declaration

```swift
func clearEvents(in range: AVBeatRange)
```

## Parameters

- `range`: The range of beats.

<a id="Discussion"></a>

## Discussion

The system won’t modify the events outside of the range you specify.

## See Also

### Adding and Clearing Events

- [addEvent(\_:at:)](addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [moveEvents(in:by:)](moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.

# clearEventsInRange: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Removes all events in the given beat range from the music track.

## Declaration

```objectivec
- (void) clearEventsInRange:(AVBeatRange) range;
```

## Parameters

- `range`: The range of beats.

<a id="Discussion"></a>

## Discussion

The system won’t modify the events outside of the range you specify.

## See Also

### Adding and Clearing Events

- [addEvent:atBeat:](addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [moveEventsInRange:byAmount:](moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.
