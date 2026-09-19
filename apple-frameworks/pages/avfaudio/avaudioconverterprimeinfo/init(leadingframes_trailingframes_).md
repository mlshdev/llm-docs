> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo/init(leadingframes:trailingframes:)

# init(leadingFrames:trailingFrames:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a priming information instance with the specified leading and trailing frames.

## Declaration

```swift
init(leadingFrames: AVAudioFrameCount, trailingFrames: AVAudioFrameCount)
```

## Parameters

- `leadingFrames`: Specifies the number of leading (previous) input frames relative to the start input frame.
- `trailingFrames`: Specifies the number of trailing input frames past the end input frame.

## See Also

### Creating Priming Information

- [init()](init%28%29.md): Creates a priming information instance.
