> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musiceventiteratorpreviousevent(_:)](https://developer.apple.com/documentation/audiotoolbox/musiceventiteratorpreviousevent(_:))

# MusicEventIteratorPreviousEvent(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Positions a music event iterator at the previous event on a music track.

## Declaration

```swift
func MusicEventIteratorPreviousEvent(_ inIterator: MusicEventIterator) -> OSStatus
```

## Parameters

- `inIterator`: The music event iterator to reposition.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Use this function to decrement a music event iterator, moving it backward through a music track’s events.

If an iterator is at the first event of a track when you call this function, the iterator position remains unchanged and this function returns an error.

The following code snippet illustrates how to use a music event iterator to proceed backward along a music track, from the end:

```objc
// Points iterator just beyond the final event on its music track
MusicEventIteratorSeek (myIterator, kMusicTimeStamp_EndOfTrack);
 
bool hasPreviousEvent;
MusicEventIteratorHasPreviousEvent (myIterator, &hasPreviousEvent);
while (hasPreviousEvent) {
    MusicEventIteratorPreviousEvent (myIterator);
        // do work here
    MusicEventIteratorHasPreviousEvent (myIterator, &hasPreviousEvent);
}
```

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
- [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.

# MusicEventIteratorPreviousEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Positions a music event iterator at the previous event on a music track.

## Declaration

```objectivec
extern OSStatus MusicEventIteratorPreviousEvent(MusicEventIterator inIterator);
```

## Parameters

- `inIterator`: The music event iterator to reposition.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Use this function to decrement a music event iterator, moving it backward through a music track’s events.

If an iterator is at the first event of a track when you call this function, the iterator position remains unchanged and this function returns an error.

The following code snippet illustrates how to use a music event iterator to proceed backward along a music track, from the end:

```objc
// Points iterator just beyond the final event on its music track
MusicEventIteratorSeek (myIterator, kMusicTimeStamp_EndOfTrack);
 
bool hasPreviousEvent;
MusicEventIteratorHasPreviousEvent (myIterator, &hasPreviousEvent);
while (hasPreviousEvent) {
    MusicEventIteratorPreviousEvent (myIterator);
        // do work here
    MusicEventIteratorHasPreviousEvent (myIterator, &hasPreviousEvent);
}
```

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
- [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
