> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/init(copying:)-68es5

# init(copying:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a mutable buffer by copying another PCM buffer’s audio data.

## Declaration

```swift
convenience init(copying source: AVAudioPCMBuffer)
```

## Parameters

- `source`: The source PCM buffer to copy from.

<a id="discussion"></a>

## Discussion

This initializer allocates a new mutable buffer and copies all audio data channel by channel.
