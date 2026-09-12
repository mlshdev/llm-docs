> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/init(standardformatwithsamplerate:channels:)](https://developer.apple.com/documentation/avfaudio/avaudioformat/init(standardformatwithsamplerate:channels:))

# init(standardFormatWithSampleRate:channels:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance with the specified sample rate and channel count.

## Declaration

```swift
init?(standardFormatWithSampleRate sampleRate: Double, channels: AVAudioChannelCount)
```

## Parameters

- `sampleRate`: The sampling rate, in hertz.
- `channels`: The channel count.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

The returned `AVAudioFormat` instance uses the [AVAudioCommonFormat.pcmFormatFloat32](../avaudiocommonformat/pcmformatfloat32.md) format.

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelLayout](channellayout.md): The underlying audio channel layout.

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(commonFormat:sampleRate:channels:interleaved:)](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [init(commonFormat:sampleRate:interleaved:channelLayout:)](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [init(settings:)](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:)](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(formatDescription:)](init%28formatdescription_%29.md)
- [init(cmAudioFormatDescription:)](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

# initStandardFormatWithSampleRate:channels: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance with the specified sample rate and channel count.

## Declaration

```objectivec
- (instancetype) initStandardFormatWithSampleRate:(double) sampleRate channels:(AVAudioChannelCount) channels;
```

## Parameters

- `sampleRate`: The sampling rate, in hertz.
- `channels`: The channel count.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

The returned `AVAudioFormat` instance uses the [AVAudioPCMFormatFloat32](../avaudiocommonformat/pcmformatfloat32.md) format.

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [channelLayout](channellayout.md): The underlying audio channel layout.

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initWithCommonFormat:sampleRate:channels:interleaved:](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [initWithCommonFormat:sampleRate:interleaved:channelLayout:](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [initWithSettings:](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithFormatDescription:](init%28formatdescription_%29.md)
- [initWithCMAudioFormatDescription:](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.
