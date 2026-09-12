> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioformat/init(formatdescription:)](https://developer.apple.com/documentation/avfaudio/avaudioformat/init(formatdescription:))

# init(formatDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
init?(formatDescription: CMAudioFormatDescription)
```

## Parameters

- `formatDescription`: The CMAudioFormatDescriptionRef.

<a id="discussion"></a>

## Discussion

Initialize from a CMAudioFormatDescriptionRef.

If formatDescription is invalid, this method fails (returns nil).

## See Also

### Creating a New Audio Format Representation

- [init(standardFormatWithSampleRate:channelLayout:)](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [init(standardFormatWithSampleRate:channels:)](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [init(commonFormat:sampleRate:channels:interleaved:)](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [init(commonFormat:sampleRate:interleaved:channelLayout:)](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [init(settings:)](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [init(streamDescription:)](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [init(streamDescription:channelLayout:)](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [init(cmAudioFormatDescription:)](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.

# initWithFormatDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithFormatDescription:(CMAudioFormatDescriptionRef) formatDescription;
```

## Parameters

- `formatDescription`: The CMAudioFormatDescriptionRef.

<a id="discussion"></a>

## Discussion

Initialize from a CMAudioFormatDescriptionRef.

If formatDescription is invalid, this method fails (returns nil).

## See Also

### Creating a New Audio Format Representation

- [initStandardFormatWithSampleRate:channelLayout:](init%28standardformatwithsamplerate_channellayout_%29.md): Creates an audio format instance as a deinterleaved float with the specified sample rate and channel layout.
- [initStandardFormatWithSampleRate:channels:](init%28standardformatwithsamplerate_channels_%29.md): Creates an audio format instance with the specified sample rate and channel count.
- [initWithCommonFormat:sampleRate:channels:interleaved:](init%28commonformat_samplerate_channels_interleaved_%29.md): Creates an audio format instance.
- [initWithCommonFormat:sampleRate:interleaved:channelLayout:](init%28commonformat_samplerate_interleaved_channellayout_%29.md): Creates an audio format instance with the specified audio format, sample rate, interleaved state, and channel layout.
- [initWithSettings:](init%28settings_%29.md): Creates an audio format instance using the specified settings dictionary.
- [initWithStreamDescription:](init%28streamdescription_%29.md): Creates an audio format instance from a stream description.
- [initWithStreamDescription:channelLayout:](init%28streamdescription_channellayout_%29.md): Creates an audio format instance from a stream description and channel layout.
- [initWithCMAudioFormatDescription:](init%28cmaudioformatdescription_%29-8rdfj.md): Deprecated. Creates an audio format instance from a Core Media audio format description.
