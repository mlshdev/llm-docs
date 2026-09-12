> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/newmusiceventiterator(_:_:)](https://developer.apple.com/documentation/audiotoolbox/newmusiceventiterator(_:_:))

# NewMusicEventIterator(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Creates a new music event iterator.

## Declaration

```swift
func NewMusicEventIterator(_ inTrack: MusicTrack, _ outIterator: UnsafeMutablePointer<MusicEventIterator?>) -> OSStatus
```

## Parameters

- `inTrack`: The music track to iterate over.
- `outIterator`: On output, the newly created music event iterator.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

A newly-created music event iterator points at the first event on the music track specified in the `inTrack` parameter.

If you edit a music track after associating it with a music event iterator, you must discard iterator and create a new one. Perform the following steps after editing the track:

1. Obtain the current position using the [MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:)](musiceventiteratorgeteventinfo%28__________%29.md) function, and save the position.
2. Dispose of the music event iterator.
3. Create a new iterator.
4. Seek to the desired position using the [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md) function.

## See Also

### Iterating Over Music Events

- [DisposeMusicEventIterator(\_:)](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent(\_:)](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent(\_:)](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:)](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent(\_:\_:)](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent(\_:\_:)](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent(\_:\_:)](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent(\_:)](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.

# NewMusicEventIterator (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Creates a new music event iterator.

## Declaration

```objectivec
extern OSStatus NewMusicEventIterator(MusicTrack inTrack, MusicEventIterator*outIterator);
```

## Parameters

- `inTrack`: The music track to iterate over.
- `outIterator`: On output, the newly created music event iterator.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

A newly-created music event iterator points at the first event on the music track specified in the `inTrack` parameter.

If you edit a music track after associating it with a music event iterator, you must discard iterator and create a new one. Perform the following steps after editing the track:

1. Obtain the current position using the [MusicEventIteratorGetEventInfo](musiceventiteratorgeteventinfo%28__________%29.md) function, and save the position.
2. Dispose of the music event iterator.
3. Create a new iterator.
4. Seek to the desired position using the [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md) function.

## See Also

### Iterating Over Music Events

- [DisposeMusicEventIterator](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
