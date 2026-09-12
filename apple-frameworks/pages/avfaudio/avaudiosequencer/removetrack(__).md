> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/removetrack(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/removetrack(_:))

# removeTrack(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Removes the music track from the sequencer.

## Declaration

```swift
func removeTrack(_ track: AVMusicTrack) -> Bool
```

## Parameters

- `track`: The music track to remove.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the call succeeds.

<a id="Discussion"></a>

## Discussion

This method doesn’t destroy the method track since you can reuse it.

## See Also

### Handling Music Tracks

- [AVMusicTrack](../avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [createAndAppendTrack()](createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents()](reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [AVMusicTrackLoopCount](../avmusictrackloopcount.md): Options that define the number of times a track loops.

# removeTrack: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Removes the music track from the sequencer.

## Declaration

```objectivec
- (BOOL) removeTrack:(AVMusicTrack *) track;
```

## Parameters

- `track`: The music track to remove.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the call succeeds.

<a id="Discussion"></a>

## Discussion

This method doesn’t destroy the method track since you can reuse it.

## See Also

### Handling Music Tracks

- [AVMusicTrack](../avmusictrack.md): A collection of music events that you can offset, set to a muted state, modify independently from other track events, and send to a specified destination.
- [createAndAppendTrack](createandappendtrack%28%29.md): Creates a new music track and appends it to the sequencer’s list.
- [reverseEvents](reverseevents%28%29.md): Reverses the order of all events in all music tracks, including the tempo track.
- [AVMusicTrackLoopCount](../avmusictrackloopcount.md): Options that define the number of times a track loops.
