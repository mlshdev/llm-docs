> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musiceventiteratorgeteventinfo(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musiceventiteratorgeteventinfo(_:_:_:_:_:))

# MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets information about the event at a music event iterator’s current position.

## Declaration

```swift
func MusicEventIteratorGetEventInfo(_ inIterator: MusicEventIterator, _ outTimeStamp: UnsafeMutablePointer<MusicTimeStamp>, _ outEventType: UnsafeMutablePointer<MusicEventType>, _ outEventData: UnsafeMutablePointer<UnsafeRawPointer?>, _ outEventDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inIterator`: The music event iterator whose current event you want information about.
- `outTimeStamp`: On output, the timestamp of the music event, in beats.
- `outEventType`: On output, the type of music event. For possible event types, see [MusicEventType](musiceventtype.md).
- `outEventData`: On output, a reference to the music event data. The type of data is specified by the `outEventType` parameter. Do not modify the referenced data directly; to change an event, use the [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md) function.
- `outEventDataSize`: On output, the size, in bytes, of the music event data in the `outEventData` parameter.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Pass `NULL` for any output parameter whose information you do not need.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator(\_:\_:)](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator(\_:)](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent(\_:)](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent(\_:)](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
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

# MusicEventIteratorGetEventInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets information about the event at a music event iterator’s current position.

## Declaration

```objectivec
extern OSStatus MusicEventIteratorGetEventInfo(MusicEventIterator inIterator, MusicTimeStamp *outTimeStamp, MusicEventType *outEventType, const void **outEventData, UInt32 *outEventDataSize);
```

## Parameters

- `inIterator`: The music event iterator whose current event you want information about.
- `outTimeStamp`: On output, the timestamp of the music event, in beats.
- `outEventType`: On output, the type of music event. For possible event types, see [MusicEventType](musiceventtype.md).
- `outEventData`: On output, a reference to the music event data. The type of data is specified by the `outEventType` parameter. Do not modify the referenced data directly; to change an event, use the [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md) function.
- `outEventDataSize`: On output, the size, in bytes, of the music event data in the `outEventData` parameter.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Pass `NULL` for any output parameter whose information you do not need.

## See Also

### Iterating Over Music Events

- [NewMusicEventIterator](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
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
