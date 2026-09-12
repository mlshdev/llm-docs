> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musiceventuserdata](https://developer.apple.com/documentation/audiotoolbox/musiceventuserdata)

# MusicEventUserData (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes a user-defined event.

## Declaration

```swift
struct MusicEventUserData
```

## Topics

### Initializers

- [init()](musiceventuserdata/init%28%29.md)
- [init(length:data:)](musiceventuserdata/init%28length_data_%29.md)

### Instance Properties

- [data](musiceventuserdata/data.md): User-defined data.
- [length](musiceventuserdata/length.md): The size, in bytes, of the user data.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

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
- [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.

# MusicEventUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes a user-defined event.

## Declaration

```objectivec
typedef struct MusicEventUserData { ... } MusicEventUserData;
```

## Topics

### Instance Properties

- [data](musiceventuserdata/data.md): User-defined data.
- [length](musiceventuserdata/length.md): The size, in bytes, of the user data.

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
- [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
