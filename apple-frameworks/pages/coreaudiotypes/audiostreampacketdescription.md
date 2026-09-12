> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreampacketdescription](https://developer.apple.com/documentation/coreaudiotypes/audiostreampacketdescription)

# AudioStreamPacketDescription (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A value that describes a packet in a buffer of audio data.

## Declaration

```swift
struct AudioStreamPacketDescription
```

<a id="overview"></a>

## Overview

For data formats where the packet size isn’t constant, such as variable bit rate data and data where the channels have unequal sizes, use this structure to supplement the information in the [AudioStreamBasicDescription](audiostreambasicdescription.md) structure.

## Topics

### Inspecting an audio stream packet description

- [mDataByteSize](audiostreampacketdescription/mdatabytesize.md): The number of bytes in the packet.
- [mStartOffset](audiostreampacketdescription/mstartoffset.md): The number of bytes from the start of the buffer to the beginning of the packet.
- [mVariableFramesInPacket](audiostreampacketdescription/mvariableframesinpacket.md): The number of sample frames of data in the packet.

### Creating an audio stream packet descripiton

- [init()](audiostreampacketdescription/init%28%29.md): Creates an audio stream basic description.
- [init(mStartOffset:mVariableFramesInPacket:mDataByteSize:)](audiostreampacketdescription/init%28mstartoffset_mvariableframesinpacket_mdatabytesize_%29.md): Creates an audio stream basic description with the start offset, and the number of sample frames and bytes in the packet that you specify.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [Audio Format Flags](audio-format-flags.md): Commonly used combinations of data format flags for an audio stream description.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [Audio Format Identifiers](audio-format-identifiers.md): Identifiers for supported audio formats.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.

# AudioStreamPacketDescription (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A value that describes a packet in a buffer of audio data.

## Declaration

```objectivec
struct AudioStreamPacketDescription;
```

<a id="overview"></a>

## Overview

For data formats where the packet size isn’t constant, such as variable bit rate data and data where the channels have unequal sizes, use this structure to supplement the information in the [AudioStreamBasicDescription](audiostreambasicdescription.md) structure.

## Topics

### Inspecting an audio stream packet description

- [mDataByteSize](audiostreampacketdescription/mdatabytesize.md): The number of bytes in the packet.
- [mStartOffset](audiostreampacketdescription/mstartoffset.md): The number of bytes from the start of the buffer to the beginning of the packet.
- [mVariableFramesInPacket](audiostreampacketdescription/mvariableframesinpacket.md): The number of sample frames of data in the packet.

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
- [MPEG4ObjectID](mpeg4objectid.md): Deprecated. Constants that define the type of MPEG-4 audio data.
