> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/play(attime:)](https://developer.apple.com/documentation/avfaudio/avaudioplayer/play(attime:))

# play(atTime:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.

## Declaration

```swift
func play(atTime time: TimeInterval) -> Bool
```

## Parameters

- `time`: The audio device time to begin playback. This time must be later than the device’s current time.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if playback starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to precisely synchronize the playback of two or more audio player objects as the following example shows:

```swift
func startSynchronizedPlayback() {
    // Create a time offset relative to the current device time.
    let timeOffset = playerOne.deviceCurrentTime + 0.01
    
    // Start playback of both players at the same time.
    playerOne.play(atTime: timeOffset)
    playerTwo.play(atTime: timeOffset)
}
```

Calling this method implicitly calls [prepareToPlay()](preparetoplay%28%29.md) if the audio player is unprepared for playback.

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play()](play%28%29.md): Plays audio asynchronously.
- [pause()](pause%28%29.md): Pauses audio playback.
- [stop()](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

# playAtTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.

## Declaration

```objectivec
- (BOOL) playAtTime:(NSTimeInterval) time;
```

## Parameters

- `time`: The audio device time to begin playback. This time must be later than the device’s current time.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if playback starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to precisely synchronize the playback of two or more audio player objects as the following example shows:

```swift
func startSynchronizedPlayback() {
    // Create a time offset relative to the current device time.
    let timeOffset = playerOne.deviceCurrentTime + 0.01
    
    // Start playback of both players at the same time.
    playerOne.play(atTime: timeOffset)
    playerTwo.play(atTime: timeOffset)
}
```

Calling this method implicitly calls [prepareToPlay](preparetoplay%28%29.md) if the audio player is unprepared for playback.

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play](play%28%29.md): Plays audio asynchronously.
- [pause](pause%28%29.md): Pauses audio playback.
- [stop](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [playing](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.
