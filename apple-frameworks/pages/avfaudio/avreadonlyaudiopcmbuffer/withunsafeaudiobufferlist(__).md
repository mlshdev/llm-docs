> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/withunsafeaudiobufferlist(_:)](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/withunsafeaudiobufferlist(_:))

# withUnsafeAudioBufferList(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Provides scoped read-only access to the audio buffer list.

## Declaration

```swift
func withUnsafeAudioBufferList<R>(_ body: (UnsafePointer<AudioBufferList>) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure that receives a pointer to the audio buffer list.

<a id="return-value"></a>

## Return Value

The value returned by the closure.

<a id="discussion"></a>

## Discussion

> **Warning**

> Although the `AudioBufferList` pointer is const, each `AudioBuffer` within the list exposes `mData` as `UnsafeMutableRawPointer`. You must not modify the buffer data through these pointers. Doing so results in undefined behavior and violates the read-only contract of this type.

## See Also

### Accessing channel data

- [channelData(\_:)](channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [AVReadOnlyAudioPCMBuffer.ChannelData](channeldata.md): Represents read-only channel data.
