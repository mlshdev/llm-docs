> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioquality](https://developer.apple.com/documentation/avfaudio/avaudioquality)

# AVAudioQuality (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The values that specify the sample rate audio quality for encoding and conversion.

## Declaration

```swift
enum AVAudioQuality
```

<a id="overview"></a>

## Overview

You use this value with [AVEncoderAudioQualityKey](avencoderaudioqualitykey.md) and [AVSampleRateConverterAudioQualityKey](avsamplerateconverteraudioqualitykey.md).

## Topics

### Constants

- [AVAudioQuality.min](avaudioquality/min.md): A value that represents a minimum audio quality for encoding and conversion.
- [AVAudioQuality.low](avaudioquality/low.md): A value that represents a low audio quality for encoding and conversion.
- [AVAudioQuality.medium](avaudioquality/medium.md): A value that represents a medium audio quality for encoding and conversion.
- [AVAudioQuality.high](avaudioquality/high.md): A value that represents a high audio quality for encoding and conversion.
- [AVAudioQuality.max](avaudioquality/max.md): A value that represents a maximum audio quality for encoding and conversion.

### Initializers

- [init(rawValue:)](avaudioquality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Settings

- [Sample Rate Conversion Settings](sample-rate-conversion-settings.md): The constants that define sample rate converter audio quality settings.
- [AVEncoderAudioQualityKey](avencoderaudioqualitykey.md): A constant that represents an integer from the audio quality enumeration.
- [Encoder Settings](encoder-settings.md): The constants that define the audio encoder settings for the audio recorder class.
- [Time pitch algorithm settings](../avfoundation/time-pitch-algorithm-settings.md): The constants that define the values for the time pitch algorithms.

# AVAudioQuality (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The values that specify the sample rate audio quality for encoding and conversion.

## Declaration

```objectivec
enum AVAudioQuality : NSInteger;
```

<a id="overview"></a>

## Overview

You use this value with [AVEncoderAudioQualityKey](avencoderaudioqualitykey.md) and [AVSampleRateConverterAudioQualityKey](avsamplerateconverteraudioqualitykey.md).

## Topics

### Constants

- [AVAudioQualityMin](avaudioquality/min.md): A value that represents a minimum audio quality for encoding and conversion.
- [AVAudioQualityLow](avaudioquality/low.md): A value that represents a low audio quality for encoding and conversion.
- [AVAudioQualityMedium](avaudioquality/medium.md): A value that represents a medium audio quality for encoding and conversion.
- [AVAudioQualityHigh](avaudioquality/high.md): A value that represents a high audio quality for encoding and conversion.
- [AVAudioQualityMax](avaudioquality/max.md): A value that represents a maximum audio quality for encoding and conversion.

## See Also

### Settings

- [Sample Rate Conversion Settings](sample-rate-conversion-settings.md): The constants that define sample rate converter audio quality settings.
- [AVEncoderAudioQualityKey](avencoderaudioqualitykey.md): A constant that represents an integer from the audio quality enumeration.
- [Encoder Settings](encoder-settings.md): The constants that define the audio encoder settings for the audio recorder class.
- [Time pitch algorithm settings](../avfoundation/time-pitch-algorithm-settings.md): The constants that define the values for the time pitch algorithms.
