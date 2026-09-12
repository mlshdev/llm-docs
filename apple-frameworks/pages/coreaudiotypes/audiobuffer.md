> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobuffer](https://developer.apple.com/documentation/coreaudiotypes/audiobuffer)

# AudioBuffer (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that holds a buffer of audio data.

## Declaration

```swift
struct AudioBuffer
```

<a id="overview"></a>

## Overview

An audio buffer holds a single buffer of audio data in its [mData](audiobuffer/mdata.md) field. The buffer can represent two types of audio:

- A single, monophonic, noninterleaved channel of audio
- Interleaved audio with the number of channels set by the [mNumberChannels](audiobuffer/mnumberchannels.md) field

> **Note**

>  The [mDataByteSize](audiostreampacketdescription/mdatabytesize.md) and [mNumberChannels](audiobuffer/mnumberchannels.md) parameters needs to match the memory layout of [mData](audiobuffer/mdata.md), so update the size and number of channels when you update the data field.

## Topics

### Creating a Buffer

- [init()](audiobuffer/init%28%29.md): Creates an empty audio buffer.
- [init(mNumberChannels:mDataByteSize:mData:)](audiobuffer/init%28mnumberchannels_mdatabytesize_mdata_%29.md): Creates an audio buffer with audio data.

### Accessing the Audio

- [mNumberChannels](audiobuffer/mnumberchannels.md): The number of interleaved channels in the buffer.
- [mDataByteSize](audiobuffer/mdatabytesize.md): The number of bytes in the buffer.
- [mData](audiobuffer/mdata.md): A pointer to a buffer of audio data.

### Initializers

- [init(\_:numberOfChannels:)](audiobuffer/init%28__numberofchannels_%29.md): Initialize an `AudioBuffer` from an `UnsafeMutableBufferPointer<Element>`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Buffers

- [AudioBufferList](audiobufferlist.md): A structure that stores a variable-length array of audio buffers.

# AudioBuffer (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that holds a buffer of audio data.

## Declaration

```objectivec
struct AudioBuffer;
```

<a id="overview"></a>

## Overview

An audio buffer holds a single buffer of audio data in its [mData](audiobuffer/mdata.md) field. The buffer can represent two types of audio:

- A single, monophonic, noninterleaved channel of audio
- Interleaved audio with the number of channels set by the [mNumberChannels](audiobuffer/mnumberchannels.md) field

> **Note**

>  The [mDataByteSize](audiostreampacketdescription/mdatabytesize.md) and [mNumberChannels](audiobuffer/mnumberchannels.md) parameters needs to match the memory layout of [mData](audiobuffer/mdata.md), so update the size and number of channels when you update the data field.

## Topics

### Accessing the Audio

- [mNumberChannels](audiobuffer/mnumberchannels.md): The number of interleaved channels in the buffer.
- [mDataByteSize](audiobuffer/mdatabytesize.md): The number of bytes in the buffer.
- [mData](audiobuffer/mdata.md): A pointer to a buffer of audio data.

## See Also

### Buffers

- [AudioBufferList](audiobufferlist.md): A structure that stores a variable-length array of audio buffers.
