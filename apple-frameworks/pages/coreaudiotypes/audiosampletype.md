> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiosampletype](https://developer.apple.com/documentation/coreaudiotypes/audiosampletype)

# AudioSampleType (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The canonical audio data sample type for input and output.

> The concept of canonical formats is deprecated

## Declaration

```swift
typealias AudioSampleType = Int16
```

```swift
typealias AudioSampleType = Float32
```

<a id="Discussion"></a>

## Discussion

The canonical audio sample type for input and output in iPhone OS is linear PCM with 16-bit integer samples.

## See Also

### Common Types

- [AVAudioInteger](avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [COREAUDIOTYPES_VERSION](coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioUnitSampleType](audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.
- [AudioFormatListItem](audioformatlistitem.md)

# AudioSampleType (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The canonical audio data sample type for input and output.

> The concept of canonical formats is deprecated

## Declaration

```objectivec
typedef SInt16 AudioSampleType;
```

```objectivec
typedef Float32 AudioSampleType;
```

<a id="Discussion"></a>

## Discussion

The canonical audio sample type for input and output in iPhone OS is linear PCM with 16-bit integer samples.

## See Also

### Common Types

- [AVAudioInteger](avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [AVAudioSessionErrorInsufficientPriority](avaudiosessionerrorinsufficientpriority.md): Deprecated. An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.
- [COREAUDIOTYPES_VERSION](coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioUnitSampleType](audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.
- [AudioFormatListItem](audioformatlistitem.md)
