> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer/channeldata](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer/channeldata)

# AVReadOnlyAudioPCMBuffer.ChannelData

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Represents read-only channel data.

## Declaration

```swift
enum ChannelData
```

<a id="overview"></a>

## Overview

For **deinterleaved** formats:

- The span contains only the requested channel’s samples in contiguous memory

For **interleaved** formats:

- The span contains the entire interleaved buffer starting at the channel’s first sample

## Topics

### Getting typed channel data

- [AVReadOnlyAudioPCMBuffer.ChannelData.float(\_:)](channeldata/float%28__%29.md)
- [AVReadOnlyAudioPCMBuffer.ChannelData.int16(\_:)](channeldata/int16%28__%29.md)
- [AVReadOnlyAudioPCMBuffer.ChannelData.int32(\_:)](channeldata/int32%28__%29.md)

## See Also

### Accessing channel data

- [channelData(\_:)](channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [withUnsafeAudioBufferList(\_:)](withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
