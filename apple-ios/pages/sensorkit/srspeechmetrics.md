> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics](https://developer.apple.com/documentation/sensorkit/srspeechmetrics)

# SRSpeechMetrics (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents metrics about a range of speech.

## Declaration

```swift
class SRSpeechMetrics
```

<a id="overview"></a>

## Overview

To get the audio level, use the [audioLevel](srspeechmetrics/audiolevel.md) property. Otherwise, use the [speechRecognition](srspeechmetrics/speechrecognition.md), [soundClassification](srspeechmetrics/soundclassification.md), and [speechExpression](srspeechmetrics/speechexpression.md) properties to get characteristics of the speech.

The [siriSpeechMetrics](srsensor/sirispeechmetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting session information

- [sessionIdentifier](srspeechmetrics/sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](srspeechmetrics/sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetrics.SessionFlags](srspeechmetrics/sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](srspeechmetrics/timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](srspeechmetrics/timestamp.md): The date and time when the speech occurs.

### Getting speech metrics and analytics

- [audioLevel](srspeechmetrics/audiolevel.md): The audio level of the speech.
- [SRAudioLevel](sraudiolevel.md): An object that represents the audio level for a range of speech.
- [speechRecognition](srspeechmetrics/speechrecognition.md): The partial or final results of the speech recognition request.
- [soundClassification](srspeechmetrics/soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](srspeechmetrics/speechexpression.md): The metrics and voice analytics for the range of speech.

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

- [SRSpeechExpression](srspeechexpression.md): An object that represents the metrics and voice analytics for a range of speech.

# SRSpeechMetrics (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents metrics about a range of speech.

## Declaration

```objectivec
@interface SRSpeechMetrics : NSObject
```

<a id="overview"></a>

## Overview

To get the audio level, use the [audioLevel](srspeechmetrics/audiolevel.md) property. Otherwise, use the [speechRecognition](srspeechmetrics/speechrecognition.md), [soundClassification](srspeechmetrics/soundclassification.md), and [speechExpression](srspeechmetrics/speechexpression.md) properties to get characteristics of the speech.

The [SRSensorSiriSpeechMetrics](srsensor/sirispeechmetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting session information

- [sessionIdentifier](srspeechmetrics/sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](srspeechmetrics/sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetricsSessionFlags](srspeechmetrics/sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](srspeechmetrics/timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](srspeechmetrics/timestamp.md): The date and time when the speech occurs.

### Getting speech metrics and analytics

- [audioLevel](srspeechmetrics/audiolevel.md): The audio level of the speech.
- [SRAudioLevel](sraudiolevel.md): An object that represents the audio level for a range of speech.
- [speechRecognition](srspeechmetrics/speechrecognition.md): The partial or final results of the speech recognition request.
- [soundClassification](srspeechmetrics/soundclassification.md): The highest-ranking classifications in the time range.
- [speechExpression](srspeechmetrics/speechexpression.md): The metrics and voice analytics for the range of speech.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Analyzing speech

- [SRSpeechExpression](srspeechexpression.md): An object that represents the metrics and voice analytics for a range of speech.
