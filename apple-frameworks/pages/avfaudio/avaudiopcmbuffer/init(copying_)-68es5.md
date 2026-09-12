> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/init(copying:)-68es5](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/init(copying:)-68es5)

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
