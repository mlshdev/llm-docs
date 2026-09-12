> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/init(commonformat:samplerate:channels:interleaved:)](https://developer.apple.com/documentation/avfaudio/avaudioformat/init(commonformat:samplerate:channels:interleaved:))

# init(commonFormat:sampleRate:channels:interleaved:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance.

## Declaration

```swift
init?(commonFormat format: AVAudioCommonFormat, sampleRate: Double, channels: AVAudioChannelCount, interleaved: Bool)
```

## Parameters

- `format`: The audio format.
- `sampleRate`: The sampling rate, in hertz.
- `channels`: The channel count.
- `interleaved`: The Boolean value that indicates whether `format` is in an interleaved state.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

For information about possible `format` values, see [AVAudioCommonFormat](../avaudiocommonformat.md).

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(standardFormatWithSampleRate:channels:)](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [init(commonFormat:sampleRate:interleaved:channelLayout:)](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [init(settings:)](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:)](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(formatDescription:)](init%28formatdescription_%29.md)
- [init(cmAudioFormatDescription:)](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

# initWithCommonFormat:sampleRate:channels:interleaved: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance.

## Declaration

```objectivec
- (instancetype) initWithCommonFormat:(AVAudioCommonFormat) format sampleRate:(double) sampleRate channels:(AVAudioChannelCount) channels interleaved:(BOOL) interleaved;
```

## Parameters

- `format`: The audio format.
- `sampleRate`: The sampling rate, in hertz.
- `channels`: The channel count.
- `interleaved`: The Boolean value that indicates whether `format` is in an interleaved state.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

For information about possible `format` values, see [AVAudioCommonFormat](../avaudiocommonformat.md).

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initStandardFormatWithSampleRate:channels:](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [initWithCommonFormat:sampleRate:interleaved:channelLayout:](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [initWithSettings:](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithFormatDescription:](init%28formatdescription_%29.md)
- [initWithCMAudioFormatDescription:](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.
