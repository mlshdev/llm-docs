> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/preparetoplay()](https://developer.apple.com/documentation/avfaudio/avaudioplayer/preparetoplay())

# prepareToPlay() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Prepares the player for audio playback.

## Declaration

```swift
func prepareToPlay() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system successfully prepares the player; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method preloads audio buffers and acquires the audio hardware necessary for playback. This method activates the audio session, so pass [false](https://developer.apple.com/documentation/swift/false) to [setActive:error:](../avaudiosession/setactive_error_.md) if immediate playback isn’t necessary. For example, when using the category option [duckOthers](../avaudiosession/categoryoptions-swift.struct/duckothers.md), this method lowers the audio outside of the app.

The system calls this method when using the method [play()](play%28%29.md), but calling it in advance minimizes the delay between calling `play()` and the start of sound output.

Calling [stop()](stop%28%29.md), or allowing a sound to finish playing, undoes this setup.

## See Also

### Controlling playback

- [play()](play%28%29.md): Plays audio asynchronously.
- [play(atTime:)](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause()](pause%28%29.md): Pauses audio playback.
- [stop()](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

# prepareToPlay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Prepares the player for audio playback.

## Declaration

```objectivec
- (BOOL) prepareToPlay;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system successfully prepares the player; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method preloads audio buffers and acquires the audio hardware necessary for playback. This method activates the audio session, so pass [false](https://developer.apple.com/documentation/swift/false) to [setActive:error:](../avaudiosession/setactive_error_.md) if immediate playback isn’t necessary. For example, when using the category option [AVAudioSessionCategoryOptionDuckOthers](../avaudiosession/categoryoptions-swift.struct/duckothers.md), this method lowers the audio outside of the app.

The system calls this method when using the method [play](play%28%29.md), but calling it in advance minimizes the delay between calling `play()` and the start of sound output.

Calling [stop](stop%28%29.md), or allowing a sound to finish playing, undoes this setup.

## See Also

### Controlling playback

- [play](play%28%29.md): Plays audio asynchronously.
- [playAtTime:](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause](pause%28%29.md): Pauses audio playback.
- [stop](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [playing](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.
