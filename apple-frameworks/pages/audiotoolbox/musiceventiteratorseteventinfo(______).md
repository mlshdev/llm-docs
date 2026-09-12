> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musiceventiteratorseteventinfo(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musiceventiteratorseteventinfo(_:_:_:))

# MusicEventIteratorSetEventInfo(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets information for the event at a music event iterator’s current position.

## Declaration

```swift
func MusicEventIteratorSetEventInfo(_ inIterator: MusicEventIterator, _ inEventType: MusicEventType, _ inEventData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inIterator`: The music event iterator whose current event you want to set.
- `inEventType`: The type of music event that you are specifying. For possible event types, see [MusicEventType](musiceventtype.md).
- `inEventData`: The event data that you are specifying. The size and type of the data must be appropriate for the music event type you specify in the `inEventType` parameter.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Use this function to set the music event type and event data for the event that a music event iterator is positioned at. This function doesn’t allow you to change an event’s timestamp; to do that, call the [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md) function.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator(\_:\_:)](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator(\_:)](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent(\_:)](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent(\_:)](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:)](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent(\_:\_:)](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent(\_:\_:)](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent(\_:\_:)](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent(\_:)](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.

# MusicEventIteratorSetEventInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets information for the event at a music event iterator’s current position.

## Declaration

```objectivec
extern OSStatus MusicEventIteratorSetEventInfo(MusicEventIterator inIterator, MusicEventType inEventType, const void *inEventData);
```

## Parameters

- `inIterator`: The music event iterator whose current event you want to set.
- `inEventType`: The type of music event that you are specifying. For possible event types, see [MusicEventType](musiceventtype.md).
- `inEventData`: The event data that you are specifying. The size and type of the data must be appropriate for the music event type you specify in the `inEventType` parameter.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Use this function to set the music event type and event data for the event that a music event iterator is positioned at. This function doesn’t allow you to change an event’s timestamp; to do that, call the [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md) function.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
