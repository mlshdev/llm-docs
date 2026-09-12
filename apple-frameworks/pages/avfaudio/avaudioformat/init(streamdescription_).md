> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/init(streamdescription:)](https://developer.apple.com/documentation/avfaudio/avaudioformat/init(streamdescription:))

# init(streamDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance from a stream description.

## Declaration

```swift
init?(streamDescription asbd: UnsafePointer<AudioStreamBasicDescription>)
```

## Parameters

- `asbd`: The audio stream description.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

If the [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) specifies more than two channels, this method fails and returns `nil`. Instead, use the [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md) method.

## See Also

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(standardFormatWithSampleRate:channels:)](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [init(commonFormat:sampleRate:channels:interleaved:)](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [init(commonFormat:sampleRate:interleaved:channelLayout:)](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [init(settings:)](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(formatDescription:)](init%28formatdescription_%29.md)
- [init(cmAudioFormatDescription:)](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

# initWithStreamDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio format instance from a stream description.

## Declaration

```objectivec
- (instancetype) initWithStreamDescription:(const AudioStreamBasicDescription *) asbd;
```

## Parameters

- `asbd`: The audio stream description.

<a id="return-value"></a>

## Return Value

A new `AVAudioFormat` instance, or `nil` if the initialization fails.

<a id="Discussion"></a>

## Discussion

If the [AudioStreamBasicDescription](../../coreaudiotypes/audiostreambasicdescription.md) specifies more than two channels, this method fails and returns `nil`. Instead, use the [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md) method.

## See Also

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initStandardFormatWithSampleRate:channels:](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [initWithCommonFormat:sampleRate:channels:interleaved:](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [initWithCommonFormat:sampleRate:interleaved:channelLayout:](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [initWithSettings:](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithFormatDescription:](init%28formatdescription_%29.md)
- [initWithCMAudioFormatDescription:](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.
