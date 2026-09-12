> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/stop()](https://developer.apple.com/documentation/appkit/nssound/stop())

# stop() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Concludes audio playback.

## Declaration

```swift
func stop() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is concluded successfully or if it’s paused, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [sound(\_:didFinishPlaying:)](../nssounddelegate/sound%28__didfinishplaying_%29.md): This delegate method is called when an `NSSound` instance has completed playback of its sound data.

### Playing Sounds

- [beep()](beep%28%29.md): Plays the system beep.
- [isPlaying](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause()](pause%28%29.md): Pauses audio playback.
- [play()](play%28%29.md): Initiates audio playback.
- [resume()](resume%28%29.md): Resumes audio playback.

# stop (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Concludes audio playback.

## Declaration

```objectivec
- (BOOL) stop;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is concluded successfully or if it’s paused, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [sound:didFinishPlaying:](../nssounddelegate/sound%28__didfinishplaying_%29.md): This delegate method is called when an `NSSound` instance has completed playback of its sound data.

### Playing Sounds

- [playing](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause](pause%28%29.md): Pauses audio playback.
- [play](play%28%29.md): Initiates audio playback.
- [resume](resume%28%29.md): Resumes audio playback.
