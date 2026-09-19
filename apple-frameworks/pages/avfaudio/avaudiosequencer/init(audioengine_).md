> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosequencer/init(audioengine:)

# init(audioEngine:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio sequencer that the framework attaches to an audio engine instance.

## Declaration

```swift
init(audioEngine engine: AVAudioEngine)
```

## Parameters

- `engine`: The engine to attach to.

## See Also

### Creating an Audio Sequencer

- [init()](init%28%29.md): Creates an audio sequencer object.

# initWithAudioEngine: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio sequencer that the framework attaches to an audio engine instance.

## Declaration

```objectivec
- (instancetype) initWithAudioEngine:(AVAudioEngine *) engine;
```

## Parameters

- `engine`: The engine to attach to.

## See Also

### Creating an Audio Sequencer

- [init](init%28%29.md): Creates an audio sequencer object.
