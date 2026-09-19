> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo/leadingframes

# leadingFrames (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of leading (previous) input frames the converter requires to perform a high-quality conversion.

## Declaration

```swift
var leadingFrames: AVAudioFrameCount
```

## See Also

### Getting Frame Properties

- [trailingFrames](trailingframes.md): The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.

# leadingFrames (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of leading (previous) input frames the converter requires to perform a high-quality conversion.

## Declaration

```objectivec
AVAudioFrameCount leadingFrames;
```

## See Also

### Getting Frame Properties

- [trailingFrames](trailingframes.md): The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.
