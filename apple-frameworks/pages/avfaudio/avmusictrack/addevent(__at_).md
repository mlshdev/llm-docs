> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/addevent(_:at:)](https://developer.apple.com/documentation/avfaudio/avmusictrack/addevent(_:at:))

# addEvent(\_:at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a music event to a track at the time you specify.

## Declaration

```swift
func addEvent(_ event: AVMusicEvent, at beat: AVMusicTimeStamp)
```

## Parameters

- `event`: The event to add.
- `beat`: The time to add the event at.

<a id="Discussion"></a>

## Discussion

The system copies event contents into the track, so you can add the same event at different timestamps. You can’t add all [AVMusicEvent](../avmusicevent.md) subclasses to a track.

- You can only add [AVExtendedTempoEvent](../avextendedtempoevent.md) and [AVMIDIMetaEvent](../avmidimetaevent.md) with certain [AVMIDIMetaEvent.EventType](../avmidimetaevent/eventtype.md) to a sequencer’s tempo track.
- You can add [AVParameterEvent](../avparameterevent.md) to automation tracks.
- You can’t add other event subclasses to tempo or automation tracks.

## See Also

### Adding and Clearing Events

- [moveEvents(in:by:)](moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.
- [clearEvents(in:)](clearevents%28in_%29.md): Removes all events in the given beat range from the music track.

# addEvent:atBeat: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a music event to a track at the time you specify.

## Declaration

```objectivec
- (void) addEvent:(AVMusicEvent *) event atBeat:(AVMusicTimeStamp) beat;
```

## Parameters

- `event`: The event to add.
- `beat`: The time to add the event at.

<a id="Discussion"></a>

## Discussion

The system copies event contents into the track, so you can add the same event at different timestamps. You can’t add all [AVMusicEvent](../avmusicevent.md) subclasses to a track.

- You can only add [AVExtendedTempoEvent](../avextendedtempoevent.md) and [AVMIDIMetaEvent](../avmidimetaevent.md) with certain [AVMIDIMetaEventType](../avmidimetaevent/eventtype.md) to a sequencer’s tempo track.
- You can add [AVParameterEvent](../avparameterevent.md) to automation tracks.
- You can’t add other event subclasses to tempo or automation tracks.

## See Also

### Adding and Clearing Events

- [moveEventsInRange:byAmount:](moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.
- [clearEventsInRange:](clearevents%28in_%29.md): Removes all events in the given beat range from the music track.
