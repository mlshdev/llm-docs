> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechexpression](https://developer.apple.com/documentation/sensorkit/srspeechexpression)

# SRSpeechExpression (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents the metrics and voice analytics for a range of speech.

## Declaration

```swift
class SRSpeechExpression
```

<a id="overview"></a>

## Overview

Use the properties of this class to get the characteristics of the speech, such as the user’s confidence level and mood.

## Topics

### Getting speech metrics

- [timeRange](srspeechexpression/timerange.md): The time range in the audio stream that the metrics and analytics apply to.
- [version](srspeechexpression/version.md): The version of the algorithm that the system uses to generate the metrics and analytics.

### Getting speech analytics

- [confidence](srspeechexpression/confidence.md): The level of confidence of the speaker.
- [mood](srspeechexpression/mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](srspeechexpression/valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](srspeechexpression/activation.md): The level of energy or activation of the speaker.
- [dominance](srspeechexpression/dominance.md): The degree of how strong or meek the speaker sounds.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Analyzing speech

- [SRSpeechMetrics](srspeechmetrics.md): An object that represents metrics about a range of speech.

# SRSpeechExpression (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents the metrics and voice analytics for a range of speech.

## Declaration

```objectivec
@interface SRSpeechExpression : NSObject
```

<a id="overview"></a>

## Overview

Use the properties of this class to get the characteristics of the speech, such as the user’s confidence level and mood.

## Topics

### Getting speech metrics

- [timeRange](srspeechexpression/timerange.md): The time range in the audio stream that the metrics and analytics apply to.
- [version](srspeechexpression/version.md): The version of the algorithm that the system uses to generate the metrics and analytics.

### Getting speech analytics

- [confidence](srspeechexpression/confidence.md): The level of confidence of the speaker.
- [mood](srspeechexpression/mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](srspeechexpression/valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](srspeechexpression/activation.md): The level of energy or activation of the speaker.
- [dominance](srspeechexpression/dominance.md): The degree of how strong or meek the speaker sounds.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Analyzing speech

- [SRSpeechMetrics](srspeechmetrics.md): An object that represents metrics about a range of speech.
