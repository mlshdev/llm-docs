> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/createandappendtrack()](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/createandappendtrack())

# createAndAppendTrack() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new music track and appends it to the sequencer’s list.

## Declaration

```swift
func createAndAppendTrack() -> AVMusicTrack
```

<a id="return-value"></a>

## Return Value

A new music track appended to the sequencer.

## See Also

### Handling Music Tracks

- [AVMusicTrack](../avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [reverseEvents()](reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes the music track from the sequencer.
- [AVMusicTrackLoopCount](../avmusictrackloopcount.md): Options that define the number of times a track loops.

# createAndAppendTrack (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new music track and appends it to the sequencer’s list.

## Declaration

```objectivec
- (AVMusicTrack *) createAndAppendTrack;
```

<a id="return-value"></a>

## Return Value

A new music track appended to the sequencer.

## See Also

### Handling Music Tracks

- [AVMusicTrack](../avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [reverseEvents](reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [removeTrack:](removetrack%28__%29.md): Removes the music track from the sequencer.
- [AVMusicTrackLoopCount](../avmusictrackloopcount.md): Options that define the number of times a track loops.
