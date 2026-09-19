> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiorecorder/delegate

# delegate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The delegate object for the audio recorder.

## Declaration

```swift
weak var delegate: (any AVAudioRecorderDelegate)? { get set }
```

## See Also

### Responding to recorder events

- [AVAudioRecorderDelegate](../avaudiorecorderdelegate.md): A protocol that defines the methods to respond to audio recording events and encoding errors.

# delegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The delegate object for the audio recorder.

## Declaration

```objectivec
@property (weak, nullable) id<AVAudioRecorderDelegate> delegate;
```

## See Also

### Responding to recorder events

- [AVAudioRecorderDelegate](../avaudiorecorderdelegate.md): A protocol that defines the methods to respond to audio recording events and encoding errors.
