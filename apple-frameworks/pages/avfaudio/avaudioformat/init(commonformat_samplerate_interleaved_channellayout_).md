> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/init(commonformat:samplerate:interleaved:channellayout:)](https://developer.apple.com/documentation/avfaudio/avaudioformat/init(commonformat:samplerate:interleaved:channellayout:))

# init(commonFormat:sampleRate:interleaved:channelLayout:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.

## Declaration

```swift
init(commonFormat format: AVAudioCommonFormat, sampleRate: Double, interleaved: Bool, channelLayout layout: AVAudioChannelLayout)
```

## Parameters

- `format`: The audio format.
- `sampleRate`: The sampling rate, in hertz.
- `interleaved`: The Boolean value that indicates whether `format` is in an interleaved state.
- `layout`: The channel layout, which must not be `nil`.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance.

<a id="Discussion"></a>

## Discussion

For information about possible `format` values, see [AVAudioCommonFormat](../avaudiocommonformat.md).

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [isInterleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.
- [channelLayout](channellayout.md): The underlying audio channel layout.

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(standardFormatWithSampleRate:channels:)](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [init(commonFormat:sampleRate:channels:interleaved:)](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [init(settings:)](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:)](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(formatDescription:)](init%28formatdescription_%29.md)
- [init(cmAudioFormatDescription:)](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

# initWithCommonFormat:sampleRate:interleaved:channelLayout: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.

## Declaration

```objectivec
- (instancetype) initWithCommonFormat:(AVAudioCommonFormat) format sampleRate:(double) sampleRate interleaved:(BOOL) interleaved channelLayout:(AVAudioChannelLayout *) layout;
```

## Parameters

- `format`: The audio format.
- `sampleRate`: The sampling rate, in hertz.
- `interleaved`: The Boolean value that indicates whether `format` is in an interleaved state.
- `layout`: The channel layout, which must not be `nil`.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance.

<a id="Discussion"></a>

## Discussion

For information about possible `format` values, see [AVAudioCommonFormat](../avaudiocommonformat.md).

## See Also

### Related Documentation

- [sampleRate](samplerate.md): The audio format sampling rate, in hertz.
- [interleaved](isinterleaved.md): A Boolean value that indicates whether the samples mix into one stream.
- [commonFormat](commonformat.md): The common format identifier instance.
- [channelLayout](channellayout.md): The underlying audio channel layout.

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initStandardFormatWithSampleRate:channels:](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [initWithCommonFormat:sampleRate:channels:interleaved:](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [initWithSettings:](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithFormatDescription:](init%28formatdescription_%29.md)
- [initWithCMAudioFormatDescription:](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.
