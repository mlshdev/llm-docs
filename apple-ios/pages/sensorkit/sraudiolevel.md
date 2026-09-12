> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/sraudiolevel](https://developer.apple.com/documentation/sensorkit/sraudiolevel)

# SRAudioLevel (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents the audio level for a range of speech.

## Declaration

```swift
class SRAudioLevel
```

<a id="overview"></a>

## Overview

Use the [loudness](sraudiolevel/loudness.md) property to get the value of the audio level.

## Topics

### Getting metrics

- [timeRange](sraudiolevel/timerange.md): The time range in the audio stream that the level applies to.
- [loudness](sraudiolevel/loudness.md): The measure of the audio level in decibels.

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

### Getting speech metrics and analytics

- [audioLevel](srspeechmetrics/audiolevel.md): The audio level of the speech.
- [speechRecognition](srspeechmetrics/speechrecognition.md): The partial or final results of the speech recognition request.
- [soundClassification](srspeechmetrics/soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](srspeechmetrics/speechexpression.md): The metrics and voice analytics for the range of speech.

# SRAudioLevel (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents the audio level for a range of speech.

## Declaration

```objectivec
@interface SRAudioLevel : NSObject
```

<a id="overview"></a>

## Overview

Use the [loudness](sraudiolevel/loudness.md) property to get the value of the audio level.

## Topics

### Getting metrics

- [timeRange](sraudiolevel/timerange.md): The time range in the audio stream that the level applies to.
- [loudness](sraudiolevel/loudness.md): The measure of the audio level in decibels.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Getting speech metrics and analytics

- [audioLevel](srspeechmetrics/audiolevel.md): The audio level of the speech.
- [speechRecognition](srspeechmetrics/speechrecognition.md): The partial or final results of the speech recognition request.
- [soundClassification](srspeechmetrics/soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](srspeechmetrics/speechexpression.md): The metrics and voice analytics for the range of speech.
