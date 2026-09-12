> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/moveevents(in:by:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/moveevents(in:by:))

# moveEvents(in:by:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Moves the beat location of all events in the given beat range by the amount you specify.

## Declaration

```swift
func moveEvents(in range: AVBeatRange, by beatAmount: AVMusicTimeStamp)
```

## Parameters

- `range`: The range of beats.
- `beatAmount`: The amount of beats to shift each event.

## See Also

### Adding and Clearing Events

- [addEvent(\_:at:)](addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [clearEvents(in:)](clearevents%28in_%29.md): Removes all events in the given beat range from the music track.

# moveEventsInRange:byAmount: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Moves the beat location of all events in the given beat range by the amount you specify.

## Declaration

```objectivec
- (void) moveEventsInRange:(AVBeatRange) range byAmount:(AVMusicTimeStamp) beatAmount;
```

## Parameters

- `range`: The range of beats.
- `beatAmount`: The amount of beats to shift each event.

## See Also

### Adding and Clearing Events

- [addEvent:atBeat:](addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [clearEventsInRange:](clearevents%28in_%29.md): Removes all events in the given beat range from the music track.
