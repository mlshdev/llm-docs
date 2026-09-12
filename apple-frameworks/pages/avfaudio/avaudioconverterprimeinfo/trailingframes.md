> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverterprimeinfo/trailingframes](https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo/trailingframes)

# trailingFrames (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.

## Declaration

```swift
var trailingFrames: AVAudioFrameCount
```

## See Also

### Getting Frame Properties

- [leadingFrames](leadingframes.md): The number of leading (previous) input frames the converter requires to perform a high-quality conversion.

# trailingFrames (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.

## Declaration

```objectivec
AVAudioFrameCount trailingFrames;
```

## See Also

### Getting Frame Properties

- [leadingFrames](leadingframes.md): The number of leading (previous) input frames the converter requires to perform a high-quality conversion.
