> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/isplaying](https://developer.apple.com/documentation/appkit/nssound/isplaying)

# isPlaying (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the sound is playing its audio data.

## Declaration

```swift
var isPlaying: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the receiver is playing its audio data.

## See Also

### Playing Sounds

- [beep()](beep%28%29.md): Plays the system beep.
- [pause()](pause%28%29.md): Pauses audio playback.
- [play()](play%28%29.md): Initiates audio playback.
- [resume()](resume%28%29.md): Resumes audio playback.
- [stop()](stop%28%29.md): Concludes audio playback.

# playing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the sound is playing its audio data.

## Declaration

```objectivec
@property (readonly, getter=isPlaying) BOOL playing;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the receiver is playing its audio data.

## See Also

### Playing Sounds

- [pause](pause%28%29.md): Pauses audio playback.
- [play](play%28%29.md): Initiates audio playback.
- [resume](resume%28%29.md): Resumes audio playback.
- [stop](stop%28%29.md): Concludes audio playback.
