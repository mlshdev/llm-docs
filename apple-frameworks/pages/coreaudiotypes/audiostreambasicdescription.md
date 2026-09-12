> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreambasicdescription](https://developer.apple.com/documentation/coreaudiotypes/audiostreambasicdescription)

# AudioStreamBasicDescription (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A format specification for an audio stream.

## Declaration

```swift
struct AudioStreamBasicDescription
```

<a id="overview"></a>

## Overview

You can configure an audio stream basic description (ASBD) to specify a linear PCM format or a constant bit rate (CBR) format that has channels of equal size. For variable bit rate (VBR) audio, and for CBR audio where the channels have unequal sizes, also use an [AudioStreamPacketDescription](audiostreampacketdescription.md) structure to additionally describe each packet.

A field value of `0` indicates that the value is either unknown or not applicable to the format.

Always initialize the fields of a new audio stream basic description structure to `0`, as the example below shows:

```objc
AudioStreamBasicDescription myAudioDataFormat = {0};
```

To determine the duration that one packet represents, use the [mSampleRate](audiostreambasicdescription/msamplerate.md) field with the [mFramesPerPacket](audiostreambasicdescription/mframesperpacket.md) field, as follows:

```objc
duration = (1 / mSampleRate) * mFramesPerPacket
```

In Core Audio, the following definitions apply:

- An *audio stream* is a continuous series of data that represents a sound, such as a song.
- A *channel* is a discrete track of monophonic audio. A monophonic stream has one channel; a stereo stream has two channels.
- A *sample* is single numerical value for a single audio channel in an audio stream.
- A *frame* is a collection of time-coincident samples. For instance, a linear PCM stereo sound file has two samples per frame, one for the left channel and one for the right channel.
- A *packet* is a collection of one or more contiguous frames. A packet defines the smallest meaningful set of frames for a given audio data format, and is the smallest data unit for which time can be measured. In linear PCM audio, a packet holds a single frame. In compressed formats, it typically holds more frames. In some formats, the number of frames per packet varies.
- The *sample rate* for a stream is the number of frames per second of uncompressed audio, or, for compressed formats, the equivalent in decompressed audio.

## Topics

### Inspecting a description

- [mFormatID](audiostreambasicdescription/mformatid.md): An identifier specifying the general audio data format in the stream.
- [mFormatFlags](audiostreambasicdescription/mformatflags.md): Format-specific flags to specify details of the format.
- [mSampleRate](audiostreambasicdescription/msamplerate.md): The number of frames per second of the data in the stream, when playing the stream at normal speed.
- [mBitsPerChannel](audiostreambasicdescription/mbitsperchannel.md): The number of bits for one audio sample.
- [mBytesPerFrame](audiostreambasicdescription/mbytesperframe.md): The number of bytes from the start of one frame to the start of the next frame in an audio buffer.
- [mChannelsPerFrame](audiostreambasicdescription/mchannelsperframe.md): The number of channels in each frame of audio data.
- [mBytesPerPacket](audiostreambasicdescription/mbytesperpacket.md): The number of bytes in a packet of audio data.
- [mFramesPerPacket](audiostreambasicdescription/mframesperpacket.md): The number of frames in a packet of audio data.
- [mReserved](audiostreambasicdescription/mreserved.md): The amount to pad the structure to force an even 8-byte alignment.

### Initializers

- [init()](audiostreambasicdescription/init%28%29.md): Creates an empty description.
- [init(mSampleRate:mFormatID:mFormatFlags:mBytesPerPacket:mFramesPerPacket:mBytesPerFrame:mChannelsPerFrame:mBitsPerChannel:mReserved:)](audiostreambasicdescription/init%28msamplerate_mformatid_mformatflags_mbytesperpacket_mframesperpacket_mbytesperframe_mchannelsperframe_mbitsperchannel_mreserved_%29.md): Creates a description with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Streams

- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [Audio Format Flags](audio-format-flags.md): Commonly used combinations of data format flags for an audio stream description.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [Audio Format Identifiers](audio-format-identifiers.md): Identifiers for supported audio formats.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

# AudioStreamBasicDescription (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A format specification for an audio stream.

## Declaration

```objectivec
struct AudioStreamBasicDescription;
```

<a id="overview"></a>

## Overview

You can configure an audio stream basic description (ASBD) to specify a linear PCM format or a constant bit rate (CBR) format that has channels of equal size. For variable bit rate (VBR) audio, and for CBR audio where the channels have unequal sizes, also use an [AudioStreamPacketDescription](audiostreampacketdescription.md) structure to additionally describe each packet.

A field value of `0` indicates that the value is either unknown or not applicable to the format.

Always initialize the fields of a new audio stream basic description structure to `0`, as the example below shows:

```objc
AudioStreamBasicDescription myAudioDataFormat = {0};
```

To determine the duration that one packet represents, use the [mSampleRate](audiostreambasicdescription/msamplerate.md) field with the [mFramesPerPacket](audiostreambasicdescription/mframesperpacket.md) field, as follows:

```objc
duration = (1 / mSampleRate) * mFramesPerPacket
```

In Core Audio, the following definitions apply:

- An *audio stream* is a continuous series of data that represents a sound, such as a song.
- A *channel* is a discrete track of monophonic audio. A monophonic stream has one channel; a stereo stream has two channels.
- A *sample* is single numerical value for a single audio channel in an audio stream.
- A *frame* is a collection of time-coincident samples. For instance, a linear PCM stereo sound file has two samples per frame, one for the left channel and one for the right channel.
- A *packet* is a collection of one or more contiguous frames. A packet defines the smallest meaningful set of frames for a given audio data format, and is the smallest data unit for which time can be measured. In linear PCM audio, a packet holds a single frame. In compressed formats, it typically holds more frames. In some formats, the number of frames per packet varies.
- The *sample rate* for a stream is the number of frames per second of uncompressed audio, or, for compressed formats, the equivalent in decompressed audio.

## Topics

### Inspecting a description

- [mFormatID](audiostreambasicdescription/mformatid.md): An identifier specifying the general audio data format in the stream.
- [mFormatFlags](audiostreambasicdescription/mformatflags.md): Format-specific flags to specify details of the format.
- [mSampleRate](audiostreambasicdescription/msamplerate.md): The number of frames per second of the data in the stream, when playing the stream at normal speed.
- [mBitsPerChannel](audiostreambasicdescription/mbitsperchannel.md): The number of bits for one audio sample.
- [mBytesPerFrame](audiostreambasicdescription/mbytesperframe.md): The number of bytes from the start of one frame to the start of the next frame in an audio buffer.
- [mChannelsPerFrame](audiostreambasicdescription/mchannelsperframe.md): The number of channels in each frame of audio data.
- [mBytesPerPacket](audiostreambasicdescription/mbytesperpacket.md): The number of bytes in a packet of audio data.
- [mFramesPerPacket](audiostreambasicdescription/mframesperpacket.md): The number of frames in a packet of audio data.
- [mReserved](audiostreambasicdescription/mreserved.md): The amount to pad the structure to force an even 8-byte alignment.

## See Also

### Streams

- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.
