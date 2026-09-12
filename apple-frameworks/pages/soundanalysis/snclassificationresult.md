> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassificationresult](https://developer.apple.com/documentation/soundanalysis/snclassificationresult)

# SNClassificationResult (Swift)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A result that contains the highest-ranking classifications in a time range.

## Declaration

```swift
class SNClassificationResult
```

<a id="overview"></a>

## Overview

An `SNClassificationResult` represents the predictions that a sound classification model made for a time span in an audio file or stream. Each result contains one or more classification predictions and a time range within the audio data.

An audio analyzer, such as [SNAudioFileAnalyzer](snaudiofileanalyzer.md) and [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md), produces an `SNClassificationResult` each time it recognizes a sound for any of its [SNClassifySoundRequest](snclassifysoundrequest.md) instances.

## Topics

### Inspecting the Result

- [timeRange](snclassificationresult/timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](snclassificationresult/classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classification(forIdentifier:)](snclassificationresult/classification%28foridentifier_%29.md): Returns the classification for an identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SNResult](snresult.md)

## See Also

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassifySoundRequest](snclassifysoundrequest.md): A request that classifies sound using a Core ML model.

# SNClassificationResult (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A result that contains the highest-ranking classifications in a time range.

## Declaration

```objectivec
@interface SNClassificationResult : NSObject
```

<a id="overview"></a>

## Overview

An `SNClassificationResult` represents the predictions that a sound classification model made for a time span in an audio file or stream. Each result contains one or more classification predictions and a time range within the audio data.

An audio analyzer, such as [SNAudioFileAnalyzer](snaudiofileanalyzer.md) and [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md), produces an `SNClassificationResult` each time it recognizes a sound for any of its [SNClassifySoundRequest](snclassifysoundrequest.md) instances.

## Topics

### Inspecting the Result

- [timeRange](snclassificationresult/timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](snclassificationresult/classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classificationForIdentifier:](snclassificationresult/classification%28foridentifier_%29.md): Returns the classification for an identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [SNResult](snresult.md)

## See Also

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassifySoundRequest](snclassifysoundrequest.md): A request that classifies sound using a Core ML model.
