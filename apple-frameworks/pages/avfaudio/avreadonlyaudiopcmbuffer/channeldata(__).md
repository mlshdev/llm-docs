> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/channeldata(_:)](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/channeldata(_:))

# channelData(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns read-only access to a specific channel’s data.

## Declaration

```swift
func channelData(_ index: Int) -> AVReadOnlyAudioPCMBuffer.ChannelData
```

## Parameters

- `index`: The zero-based channel index.

<a id="return-value"></a>

## Return Value

A `ChannelData` enum containing the channel’s sample data.

<a id="discussion"></a>

## Discussion

The returned `ChannelData` is tied to the lifetime of this buffer and provides type-safe access to the channel’s sample data.

- Example:

> **Note**

> Provides access to valid data only (up to `frameLength`).

```swift
for channelIndex in 0..<Int(buffer.format.channelCount) {
    let channelData = buffer.channelData(channelIndex)
    switch channelData {
    case .float(let samples):
        // Process Float32 data
        for frame in 0..<samples.count {
            let value = samples[frame]
        }
    case .int16(let samples):
        // Process Int16 data
    case .int32(let samples):
        // Process Int32 data
    }
}
```

## See Also

### Accessing channel data

- [withUnsafeAudioBufferList(\_:)](withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
- [AVReadOnlyAudioPCMBuffer.ChannelData](channeldata.md): Represents read-only channel data.
