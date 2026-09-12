> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfvoiceanalytics](https://developer.apple.com/documentation/speech/sfvoiceanalytics)

# SFVoiceAnalytics (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A collection of vocal analysis metrics.

## Declaration

```swift
class SFVoiceAnalytics
```

<a id="overview"></a>

## Overview

Use an [SFAcousticFeature](sfacousticfeature.md) object to access the `SFVoiceAnalytics` insights. Voice analytics include the following features:

- Use [jitter](sfvoiceanalytics/jitter.md) to measure how pitch varies in audio.
- Use [shimmer](sfvoiceanalytics/shimmer.md) to measure how amplitude varies in audio.
- Use [pitch](sfvoiceanalytics/pitch.md) to measure the highness and lowness of the tone.
- Use [voicing](sfvoiceanalytics/voicing.md) to identify voiced regions in speech.

These results are part of the [SFTranscriptionSegment](sftranscriptionsegment.md) object and are available when the system sends the [isFinal](sfspeechrecognitionresult/isfinal.md) flag.

## Topics

### Analyzing voice

- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](sfvoiceanalytics/voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [pitch](sfvoiceanalytics/pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](sfvoiceanalytics/jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](sfvoiceanalytics/shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

### Initializers

- [init(coder:)](sfvoiceanalytics/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Voice analytics

- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.

# SFVoiceAnalytics (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A collection of vocal analysis metrics.

## Declaration

```objectivec
@interface SFVoiceAnalytics : NSObject
```

<a id="overview"></a>

## Overview

Use an [SFAcousticFeature](sfacousticfeature.md) object to access the `SFVoiceAnalytics` insights. Voice analytics include the following features:

- Use [jitter](sfvoiceanalytics/jitter.md) to measure how pitch varies in audio.
- Use [shimmer](sfvoiceanalytics/shimmer.md) to measure how amplitude varies in audio.
- Use [pitch](sfvoiceanalytics/pitch.md) to measure the highness and lowness of the tone.
- Use [voicing](sfvoiceanalytics/voicing.md) to identify voiced regions in speech.

These results are part of the [SFTranscriptionSegment](sftranscriptionsegment.md) object and are available when the system sends the [final](sfspeechrecognitionresult/isfinal.md) flag.

## Topics

### Analyzing voice

- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](sfvoiceanalytics/voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [pitch](sfvoiceanalytics/pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](sfvoiceanalytics/jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](sfvoiceanalytics/shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Voice analytics

- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.
