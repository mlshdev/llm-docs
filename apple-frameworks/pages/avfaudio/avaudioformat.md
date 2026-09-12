> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat](https://developer.apple.com/documentation/avfaudio/avaudioformat)

# AVAudioFormat (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the representation of an audio format.

## Declaration

```swift
class AVAudioFormat
```

<a id="overview"></a>

## Overview

The [AVAudioFormat](avaudioformat.md) class wraps Core Audio’s [AudioStreamBasicDescription](../coreaudiotypes/audiostreambasicdescription.md), and includes convenience initializers and accessors for common formats, including Core Audio’s standard deinterleaved 32-bit floating point format.

Instances of this class are immutable.

## Topics

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](avaudioformat/init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(standardFormatWithSampleRate:channels:)](avaudioformat/init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [init(commonFormat:sampleRate:channels:interleaved:)](avaudioformat/init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [init(commonFormat:sampleRate:interleaved:channelLayout:)](avaudioformat/init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [init(settings:)](avaudioformat/init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:)](avaudioformat/init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [init(streamDescription:channelLayout:)](avaudioformat/init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(formatDescription:)](avaudioformat/init%28formatdescription_%29.md)
- [init(cmAudioFormatDescription:)](avaudioformat/init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

### Getting the Audio Stream Description

- [streamDescription](avaudioformat/streamdescription.md): The audio format properties of a stream of audio data.

### Comparing Instances

- [isEqual(\_:)](avaudioformat/isequal%28__%29.md): Indicates whether the audio format instance and a specified object are functionally equivalent.

### Getting Audio Format Values

- [sampleRate](avaudioformat/samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](avaudioformat/channelcount.md): The number of channels of audio data.
- [channelLayout](avaudioformat/channellayout.md): The underlying audio channel layout.
- [formatDescription](avaudioformat/formatdescription.md): The audio format description to use with Core Media APIs.

### Determining the Audio Format

- [isInterleaved](avaudioformat/isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [isStandard](avaudioformat/isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](avaudioformat/commonformat.md): The common format identifier instance.
- [settings](avaudioformat/settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](avaudioformat/magiccookie.md): An object that contains metadata that encoders and decoders require.

### Constants

- [AVAudioCommonFormat](avaudiocommonformat.md): The format options that describe common audio formats.

### Initializers

- [init(CMAudioFormatDescription:)](avaudioformat/init%28cmaudioformatdescription_%29-2tldd.md): Deprecated.
- [init(coder:)](avaudioformat/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Formats

- [AVAudioChannelLayout](avaudiochannellayout.md): An object that describes the roles of a set of audio channels.
- [AVChannelLayoutKey](avchannellayoutkey.md)
- [Linear PCM Format Settings](linear-pcm-format-settings.md): The audio settings that apply to linear PCM audio formats.
- [Format Settings](format-settings.md): The audio settings that apply to all audio formats that the audio player and recorder classes support.

# AVAudioFormat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the representation of an audio format.

## Declaration

```objectivec
@interface AVAudioFormat : NSObject
```

<a id="overview"></a>

## Overview

The [AVAudioFormat](avaudioformat.md) class wraps Core Audio’s [AudioStreamBasicDescription](../coreaudiotypes/audiostreambasicdescription.md), and includes convenience initializers and accessors for common formats, including Core Audio’s standard deinterleaved 32-bit floating point format.

Instances of this class are immutable.

## Topics

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](avaudioformat/init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initStandardFormatWithSampleRate:channels:](avaudioformat/init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [initWithCommonFormat:sampleRate:channels:interleaved:](avaudioformat/init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [initWithCommonFormat:sampleRate:interleaved:channelLayout:](avaudioformat/init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [initWithSettings:](avaudioformat/init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:](avaudioformat/init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [initWithStreamDescription:channelLayout:](avaudioformat/init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithFormatDescription:](avaudioformat/init%28formatdescription_%29.md)
- [initWithCMAudioFormatDescription:](avaudioformat/init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

### Getting the Audio Stream Description

- [streamDescription](avaudioformat/streamdescription.md): The audio format properties of a stream of audio data.

### Comparing Instances

- [isEqual:](avaudioformat/isequal%28__%29.md): Indicates whether the audio format instance and a specified object are functionally equivalent.

### Getting Audio Format Values

- [sampleRate](avaudioformat/samplerate.md): The audio format sampling rate, in hertz.
- [channelCount](avaudioformat/channelcount.md): The number of channels of audio data.
- [channelLayout](avaudioformat/channellayout.md): The underlying audio channel layout.
- [formatDescription](avaudioformat/formatdescription.md): The audio format description to use with Core Media APIs.

### Determining the Audio Format

- [interleaved](avaudioformat/isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [standard](avaudioformat/isstandard.md): A Boolean value that indicates whether the format is in a deinterleaved native-endian float state.
- [commonFormat](avaudioformat/commonformat.md): The common format identifier instance.
- [settings](avaudioformat/settings.md): A dictionary that represents the format as a dictionary using audio setting keys.
- [magicCookie](avaudioformat/magiccookie.md): An object that contains metadata that encoders and decoders require.

### Constants

- [AVAudioCommonFormat](avaudiocommonformat.md): The format options that describe common audio formats.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formats

- [AVAudioChannelLayout](avaudiochannellayout.md): An object that describes the roles of a set of audio channels.
- [AVChannelLayoutKey](avchannellayoutkey.md)
- [Linear PCM Format Settings](linear-pcm-format-settings.md): The audio settings that apply to linear PCM audio formats.
- [Format Settings](format-settings.md): The audio settings that apply to all audio formats that the audio player and recorder classes support.
