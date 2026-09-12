> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/resume()](https://developer.apple.com/documentation/appkit/nssound/resume())

# resume() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resumes audio playback.

## Declaration

```swift
func resume() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is resumed, [false](https://developer.apple.com/documentation/swift/false) when playback is in progress or when an error occurred.

<a id="Discussion"></a>

## Discussion

Assumes the receiver has been previously paused by sending it [NSSound](../nssound.md).

## See Also

### Playing Sounds

- [beep()](beep%28%29.md): Plays the system beep.
- [isPlaying](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause()](pause%28%29.md): Pauses audio playback.
- [play()](play%28%29.md): Initiates audio playback.
- [stop()](stop%28%29.md): Concludes audio playback.

# resume (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resumes audio playback.

## Declaration

```objectivec
- (BOOL) resume;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is resumed, [false](https://developer.apple.com/documentation/swift/false) when playback is in progress or when an error occurred.

<a id="Discussion"></a>

## Discussion

Assumes the receiver has been previously paused by sending it [NSSound](../nssound.md).

## See Also

### Playing Sounds

- [playing](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause](pause%28%29.md): Pauses audio playback.
- [play](play%28%29.md): Initiates audio playback.
- [stop](stop%28%29.md): Concludes audio playback.
