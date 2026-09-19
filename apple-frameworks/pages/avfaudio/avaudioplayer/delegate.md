> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioplayer/delegate

# delegate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The delegate object for the audio player.

## Declaration

```swift
weak var delegate: (any AVAudioPlayerDelegate)? { get set }
```

## See Also

### Responding to player events

- [AVAudioPlayerDelegate](../avaudioplayerdelegate.md): A protocol that defines the methods to respond to audio playback events and decoding errors.

# delegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The delegate object for the audio player.

## Declaration

```objectivec
@property (weak, nullable) id<AVAudioPlayerDelegate> delegate;
```

## See Also

### Responding to player events

- [AVAudioPlayerDelegate](../avaudioplayerdelegate.md): A protocol that defines the methods to respond to audio playback events and decoding errors.
