> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/pause()](https://developer.apple.com/documentation/appkit/nssound/pause())

# pause() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Pauses audio playback.

## Declaration

```swift
func pause() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is paused successfully, [false](https://developer.apple.com/documentation/swift/false) when playback is already paused or when an error occurred.

## See Also

### Playing Sounds

- [beep()](beep%28%29.md): Plays the system beep.
- [isPlaying](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [play()](play%28%29.md): Initiates audio playback.
- [resume()](resume%28%29.md): Resumes audio playback.
- [stop()](stop%28%29.md): Concludes audio playback.

# pause (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Pauses audio playback.

## Declaration

```objectivec
- (BOOL) pause;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is paused successfully, [false](https://developer.apple.com/documentation/swift/false) when playback is already paused or when an error occurred.

## See Also

### Playing Sounds

- [playing](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [play](play%28%29.md): Initiates audio playback.
- [resume](resume%28%29.md): Resumes audio playback.
- [stop](stop%28%29.md): Concludes audio playback.
