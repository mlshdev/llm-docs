> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audioformatlistitem](https://developer.apple.com/documentation/coreaudiotypes/audioformatlistitem)

# AudioFormatListItem (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
struct AudioFormatListItem
```

<a id="overview"></a>

## Overview

This struct is used as output from the kAudioFormatProperty_FormatList property

```
            an AudioStreamBasicDescription
```

```
            an AudioChannelLayoutTag
```

## Topics

### Initializers

- [init()](audioformatlistitem/init%28%29.md)
- [init(mASBD:mChannelLayoutTag:)](audioformatlistitem/init%28masbd_mchannellayouttag_%29.md)

### Instance Properties

- [mASBD](audioformatlistitem/masbd.md)
- [mChannelLayoutTag](audioformatlistitem/mchannellayouttag.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Common Types

- [AVAudioInteger](avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [COREAUDIOTYPES_VERSION](coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioSampleType](audiosampletype.md): Deprecated. The canonical audio data sample type for input and output.
- [AudioUnitSampleType](audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.

# AudioFormatListItem (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
struct AudioFormatListItem;
```

<a id="overview"></a>

## Overview

This struct is used as output from the kAudioFormatProperty_FormatList property

```
            an AudioStreamBasicDescription
```

```
            an AudioChannelLayoutTag
```

## Topics

### Instance Properties

- [mASBD](audioformatlistitem/masbd.md)
- [mChannelLayoutTag](audioformatlistitem/mchannellayouttag.md)

## See Also

### Common Types

- [AVAudioInteger](avaudiointeger.md): An integer type for audio operations.
- [AVAudioUInteger](avaudiouinteger.md): An unsigned integer type for audio operations.
- [AudioSessionID](audiosessionid.md): A unique identifier of an audio session.
- [kAudioUnitSampleFractionBits](kaudiounitsamplefractionbits.md): The number of fractional bits in fixed-point samples.
- [AVAudioSessionErrorInsufficientPriority](avaudiosessionerrorinsufficientpriority.md): Deprecated. An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.
- [COREAUDIOTYPES_VERSION](coreaudiotypes_version.md): A value that represents the Core Audio Types version.
- [AudioSampleType](audiosampletype.md): Deprecated. The canonical audio data sample type for input and output.
- [AudioUnitSampleType](audiounitsampletype.md): Deprecated. The canonical audio data sample type for audio processing.
