> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiostreambasicdescription/mbitsperchannel](https://developer.apple.com/documentation/coreaudiotypes/audiostreambasicdescription/mbitsperchannel)

# mBitsPerChannel (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of bits for one audio sample.

## Declaration

```swift
var mBitsPerChannel: UInt32
```

<a id="Discussion"></a>

## Discussion

For example, for linear PCM audio using the [kAudioFormatFlagsCanonical](../kaudioformatflagscanonical.md) format flags, calculate the number of bits as follows:

```swift
mBitsPerChannel = 8 * sizeof(AudioSampleType);
```

Set the number of bits to `0` for compressed formats.

## See Also

### Inspecting a description

- [mFormatID](mformatid.md): An identifier specifying the general audio data format in the stream.
- [mFormatFlags](mformatflags.md): Format-specific flags to specify details of the format.
- [mSampleRate](msamplerate.md): The number of frames per second of the data in the stream, when playing the stream at normal speed.
- [mBytesPerFrame](mbytesperframe.md): The number of bytes from the start of one frame to the start of the next frame in an audio buffer.
- [mChannelsPerFrame](mchannelsperframe.md): The number of channels in each frame of audio data.
- [mBytesPerPacket](mbytesperpacket.md): The number of bytes in a packet of audio data.
- [mFramesPerPacket](mframesperpacket.md): The number of frames in a packet of audio data.
- [mReserved](mreserved.md): The amount to pad the structure to force an even 8-byte alignment.

# mBitsPerChannel (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bits for one audio sample.

## Declaration

```objectivec
UInt32 mBitsPerChannel;
```

<a id="Discussion"></a>

## Discussion

For example, for linear PCM audio using the [kAudioFormatFlagsCanonical](../kaudioformatflagscanonical.md) format flags, calculate the number of bits as follows:

```swift
mBitsPerChannel = 8 * sizeof(AudioSampleType);
```

Set the number of bits to `0` for compressed formats.

## See Also

### Inspecting a description

- [mFormatID](mformatid.md): An identifier specifying the general audio data format in the stream.
- [mFormatFlags](mformatflags.md): Format-specific flags to specify details of the format.
- [mSampleRate](msamplerate.md): The number of frames per second of the data in the stream, when playing the stream at normal speed.
- [mBytesPerFrame](mbytesperframe.md): The number of bytes from the start of one frame to the start of the next frame in an audio buffer.
- [mChannelsPerFrame](mchannelsperframe.md): The number of channels in each frame of audio data.
- [mBytesPerPacket](mbytesperpacket.md): The number of bytes in a packet of audio data.
- [mFramesPerPacket](mframesperpacket.md): The number of frames in a packet of audio data.
- [mReserved](mreserved.md): The amount to pad the structure to force an even 8-byte alignment.
