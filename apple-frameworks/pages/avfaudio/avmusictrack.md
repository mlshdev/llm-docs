> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack](https://developer.apple.com/documentation/avfaudio/avmusictrack)

# AVMusicTrack (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.

## Declaration

```swift
class AVMusicTrack
```

## Topics

### Configuring Music Track Properties

- [isMuted](avmusictrack/ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [isSoloed](avmusictrack/issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [offsetTime](avmusictrack/offsettime.md): The offset of the track’s start time, in beats.
- [timeResolution](avmusictrack/timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](avmusictrack/usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.

### Configuring the Track Duration

- [lengthInBeats](avmusictrack/lengthinbeats.md): The total duration of the track, in beats.
- [lengthInSeconds](avmusictrack/lengthinseconds.md): The total duration of the track, in seconds.

### Configuring the Track Destinations

- [destinationAudioUnit](avmusictrack/destinationaudiounit.md): The audio unit that receives the track’s events.
- [destinationMIDIEndpoint](avmusictrack/destinationmidiendpoint.md): The MIDI endpoint you specify as the track’s target.

### Configuring the Looping State

- [isLoopingEnabled](avmusictrack/isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [loopRange](avmusictrack/looprange.md): The timestamp range for the loop, in beats.
- [numberOfLoops](avmusictrack/numberofloops.md): The number of times the track’s loop repeats.

### Adding and Clearing Events

- [addEvent(\_:at:)](avmusictrack/addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [moveEvents(in:by:)](avmusictrack/moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.
- [clearEvents(in:)](avmusictrack/clearevents%28in_%29.md): Removes all events in the given beat range from the music track.

### Cutting and Copying Events

- [cutEvents(in:)](avmusictrack/cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyEvents(in:from:insertAt:)](avmusictrack/copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.
- [copyAndMergeEvents(in:from:mergeAt:)](avmusictrack/copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.

### Iterating Over Events

- [enumerateEvents(in:using:)](avmusictrack/enumerateevents%28in_using_%29.md): Iterates through the music events within the track.
- [AVMusicEventEnumerationBlock](avmusiceventenumerationblock.md): A type you use to enumerate and remove music events, if necessary.

### Getting the End of Track Timestamp

- [AVMusicTimeStampEndOfTrack](avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Music Tracks

- [createAndAppendTrack()](avaudiosequencer/createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents()](avaudiosequencer/reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack(\_:)](avaudiosequencer/removetrack%28__%29.md): Removes the music track from the sequencer.
- [AVMusicTrackLoopCount](avmusictrackloopcount.md): Options that define the number of times a track loops.

# AVMusicTrack (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.

## Declaration

```objectivec
@interface AVMusicTrack : NSObject
```

## Topics

### Configuring Music Track Properties

- [muted](avmusictrack/ismuted.md): A Boolean value that indicates whether the track is in a muted state.
- [soloed](avmusictrack/issoloed.md): A Boolean value that indicates whether the track is in a soloed state.
- [offsetTime](avmusictrack/offsettime.md): The offset of the track’s start time, in beats.
- [timeResolution](avmusictrack/timeresolution.md): The time resolution value for the sequence, in ticks (pulses) per quarter note.
- [usesAutomatedParameters](avmusictrack/usesautomatedparameters.md): A Boolean value that indicates whether the track is an automation track.

### Configuring the Track Duration

- [lengthInBeats](avmusictrack/lengthinbeats.md): The total duration of the track, in beats.
- [lengthInSeconds](avmusictrack/lengthinseconds.md): The total duration of the track, in seconds.

### Configuring the Track Destinations

- [destinationAudioUnit](avmusictrack/destinationaudiounit.md): The audio unit that receives the track’s events.
- [destinationMIDIEndpoint](avmusictrack/destinationmidiendpoint.md): The MIDI endpoint you specify as the track’s target.

### Configuring the Looping State

- [loopingEnabled](avmusictrack/isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [loopRange](avmusictrack/looprange.md): The timestamp range for the loop, in beats.
- [numberOfLoops](avmusictrack/numberofloops.md): The number of times the track’s loop repeats.

### Adding and Clearing Events

- [addEvent:atBeat:](avmusictrack/addevent%28__at_%29.md): Adds a music event to a track at the time you specify.
- [moveEventsInRange:byAmount:](avmusictrack/moveevents%28in_by_%29.md): Moves the beat location of all events in the given beat range by the amount you specify.
- [clearEventsInRange:](avmusictrack/clearevents%28in_%29.md): Removes all events in the given beat range from the music track.

### Cutting and Copying Events

- [cutEventsInRange:](avmusictrack/cutevents%28in_%29.md): Splices all events in the beat range from the music track.
- [copyEventsInRange:fromTrack:insertAtBeat:](avmusictrack/copyevents%28in_from_insertat_%29.md): Copies the events from the source track and splices them into the current music track.
- [copyAndMergeEventsInRange:fromTrack:mergeAtBeat:](avmusictrack/copyandmergeevents%28in_from_mergeat_%29.md): Copies the events from the source track and merges them into the current music track.

### Iterating Over Events

- [enumerateEventsInRange:usingBlock:](avmusictrack/enumerateevents%28in_using_%29.md): Iterates through the music events within the track.
- [AVMusicEventEnumerationBlock](avmusiceventenumerationblock.md): A type you use to enumerate and remove music events, if necessary.

### Getting the End of Track Timestamp

- [AVMusicTimeStampEndOfTrack](avmusictimestampendoftrack.md): A timestamp you use to access all events in a music track through a beat range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Handling Music Tracks

- [createAndAppendTrack](avaudiosequencer/createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents](avaudiosequencer/reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack:](avaudiosequencer/removetrack%28__%29.md): Removes the music track from the sequencer.
- [AVMusicTrackLoopCount](avmusictrackloopcount.md): Options that define the number of times a track loops.
