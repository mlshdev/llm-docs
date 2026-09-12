> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/mpeg4objectid](https://developer.apple.com/documentation/coreaudiotypes/mpeg4objectid)

# MPEG4ObjectID (Swift)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that define the type of MPEG-4 audio data.

> Deprecated in Mac OS X 10.5.

## Declaration

```swift
enum MPEG4ObjectID
```

## Topics

### Constants

- [MPEG4ObjectID.AAC_LC](mpeg4objectid/aac_lc.md): A constant that specifies lossless coding, which provides compression with no loss of quality.
- [MPEG4ObjectID.AAC_LTP](mpeg4objectid/aac_ltp.md): A constant that specifies long-term prediction, which reduces redundancy in a coded signal.
- [MPEG4ObjectID.aac_Main](mpeg4objectid/aac_main.md): A constant that specifies advanced audio coding, which is the basic MPEG-4 technology.
- [MPEG4ObjectID.AAC_SBR](mpeg4objectid/aac_sbr.md): A constant that specifies spectral band replication, which reconstructs high-frequency content from lower frequencies and side information.
- [MPEG4ObjectID.AAC_SSR](mpeg4objectid/aac_ssr.md): A constant that specifies scalable sampling rate, which provides different sampling frequencies for different targets.
- [MPEG4ObjectID.aac_Scalable](mpeg4objectid/aac_scalable.md): A constant that specifies scalable lossless coding.
- [MPEG4ObjectID.CELP](mpeg4objectid/celp.md): A constant that specifies code-excited linear prediction, which is a narrow-band/wide-band speech codec.
- [MPEG4ObjectID.HVXC](mpeg4objectid/hvxc.md): A constant that specifies harmonic vector excitation coding, which is a very-low bit-rate parametric speech codec.
- [MPEG4ObjectID.twinVQ](mpeg4objectid/twinvq.md): A constant that specifies transform-domain weighted interleaved vector quantization.

### Initializers

- [init(rawValue:)](mpeg4objectid/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [Audio Format Flags](audio-format-flags.md): Commonly used combinations of data format flags for an audio stream description.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [Audio Format Identifiers](audio-format-identifiers.md): Identifiers for supported audio formats.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.

# MPEG4ObjectID (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that define the type of MPEG-4 audio data.

> Deprecated in Mac OS X 10.5.

## Declaration

```objectivec
enum MPEG4ObjectID : long;
```

## Topics

### Constants

- [kMPEG4Object_AAC_LC](mpeg4objectid/aac_lc.md): A constant that specifies lossless coding, which provides compression with no loss of quality.
- [kMPEG4Object_AAC_LTP](mpeg4objectid/aac_ltp.md): A constant that specifies long-term prediction, which reduces redundancy in a coded signal.
- [kMPEG4Object_AAC_Main](mpeg4objectid/aac_main.md): A constant that specifies advanced audio coding, which is the basic MPEG-4 technology.
- [kMPEG4Object_AAC_SBR](mpeg4objectid/aac_sbr.md): A constant that specifies spectral band replication, which reconstructs high-frequency content from lower frequencies and side information.
- [kMPEG4Object_AAC_SSR](mpeg4objectid/aac_ssr.md): A constant that specifies scalable sampling rate, which provides different sampling frequencies for different targets.
- [kMPEG4Object_AAC_Scalable](mpeg4objectid/aac_scalable.md): A constant that specifies scalable lossless coding.
- [kMPEG4Object_CELP](mpeg4objectid/celp.md): A constant that specifies code-excited linear prediction, which is a narrow-band/wide-band speech codec.
- [kMPEG4Object_HVXC](mpeg4objectid/hvxc.md): A constant that specifies harmonic vector excitation coding, which is a very-low bit-rate parametric speech codec.
- [kMPEG4Object_TwinVQ](mpeg4objectid/twinvq.md): A constant that specifies transform-domain weighted interleaved vector quantization.

## See Also

### Streams

- [AudioStreamBasicDescription](audiostreambasicdescription.md): A format specification for an audio stream.
- [AudioStreamPacketDescription](audiostreampacketdescription.md): A value that describes a packet in a buffer of audio data.
- [AudioFormatFlags](audioformatflags.md): A type definition for audio format flags.
- [AudioFormatID](audioformatid.md): A type definition for audio format identifiers.
- [kAudioStreamAnyRate](kaudiostreamanyrate.md): A value that indicates that an audio stream can use any sample rate.
