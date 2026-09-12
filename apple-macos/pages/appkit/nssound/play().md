> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/play()](https://developer.apple.com/documentation/appkit/nssound/play())

# play() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates audio playback.

## Declaration

```swift
func play() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is initiated, [false](https://developer.apple.com/documentation/swift/false) when playback is already in progress or when an error occurred.

<a id="Discussion"></a>

## Discussion

This method initiates playback asynchronously and returns control to your application. Therefore, your application can continue doing work while the audio is playing.

## See Also

### Playing Sounds

- [beep()](beep%28%29.md): Plays the system beep.
- [isPlaying](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause()](pause%28%29.md): Pauses audio playback.
- [resume()](resume%28%29.md): Resumes audio playback.
- [stop()](stop%28%29.md): Concludes audio playback.

# play (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates audio playback.

## Declaration

```objectivec
- (BOOL) play;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when playback is initiated, [false](https://developer.apple.com/documentation/swift/false) when playback is already in progress or when an error occurred.

<a id="Discussion"></a>

## Discussion

This method initiates playback asynchronously and returns control to your application. Therefore, your application can continue doing work while the audio is playing.

## See Also

### Playing Sounds

- [playing](isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause](pause%28%29.md): Pauses audio playback.
- [resume](resume%28%29.md): Resumes audio playback.
- [stop](stop%28%29.md): Concludes audio playback.
