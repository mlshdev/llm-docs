> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest)

# SNClassifySoundRequest (Swift)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A request that classifies sound using a Core ML model.

## Declaration

```swift
class SNClassifySoundRequest
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

An `SNClassifySoundRequest` represents a specific sound classification model. Analyze audio data with a sound classification model by:

1. Creating an `SNClassifySoundRequest`, either with the Sound Analysis model, or by providing your custom Core ML model.
2. Adding the sound request to an [SNAudioFileAnalyzer](snaudiofileanalyzer.md) or [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md) to process an audio file or stream, respectively.

```swift
func makeRequest(_ customModel: MLModel? = nil) throws -> SNClassifySoundRequest {
    // If applicable, create a request with a custom sound classification model.
    if let model = customModel {
        let customRequest = try SNClassifySoundRequest(mlModel: model)
        return customRequest
    }

    // Create a request with the Sound Analysis model.
    let version1 = SNClassifierIdentifier.version1
    let request = try SNClassifySoundRequest(classifierIdentifier: version1)

    return request
}

let classifySoundRequest = try makeRequest()

// Prints every label in the request's sound classification model.
print(classifySoundRequest.knownClassifications)
```

For more information about creating and using classify sound requests, see:

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

## Topics

### Creating a Request

- [init(mlModel:)](snclassifysoundrequest/init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [init(classifierIdentifier:)](snclassifysoundrequest/init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.
- [SNClassifierIdentifier](snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.

### Configuring a Request

- [overlapFactor](snclassifysoundrequest/overlapfactor.md): The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.
- [windowDuration](snclassifysoundrequest/windowduration.md): The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.

### Inspecting a Request

- [knownClassifications](snclassifysoundrequest/knownclassifications.md): A string array that contains every prediction label in the request’s underlying sound classifier model.
- [SNTimeDurationConstraint](sntimedurationconstraint-swift.enum.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

### Instance Properties

- [windowDurationConstraint](snclassifysoundrequest/windowdurationconstraint-5no60.md): A range or list of sound duration times the request’s underlying sound classifier supports.

### Initializers

- [init(MLModel:)](snclassifysoundrequest/init%28mlmodel_%29-9p7qz.md)

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
- [SNRequest](snrequest.md)

## See Also

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassificationResult](snclassificationresult.md): A result that contains the highest-ranking classifications in a time range.

# SNClassifySoundRequest (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A request that classifies sound using a Core ML model.

## Declaration

```objectivec
@interface SNClassifySoundRequest : NSObject
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

An `SNClassifySoundRequest` represents a specific sound classification model. Analyze audio data with a sound classification model by:

1. Creating an `SNClassifySoundRequest`, either with the Sound Analysis model, or by providing your custom Core ML model.
2. Adding the sound request to an [SNAudioFileAnalyzer](snaudiofileanalyzer.md) or [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md) to process an audio file or stream, respectively.

```swift
func makeRequest(_ customModel: MLModel? = nil) throws -> SNClassifySoundRequest {
    // If applicable, create a request with a custom sound classification model.
    if let model = customModel {
        let customRequest = try SNClassifySoundRequest(mlModel: model)
        return customRequest
    }

    // Create a request with the Sound Analysis model.
    let version1 = SNClassifierIdentifier.version1
    let request = try SNClassifySoundRequest(classifierIdentifier: version1)

    return request
}

let classifySoundRequest = try makeRequest()

// Prints every label in the request's sound classification model.
print(classifySoundRequest.knownClassifications)
```

For more information about creating and using classify sound requests, see:

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

## Topics

### Creating a Request

- [initWithMLModel:error:](snclassifysoundrequest/init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [initWithClassifierIdentifier:error:](snclassifysoundrequest/init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.
- [SNClassifierIdentifier](snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.

### Configuring a Request

- [overlapFactor](snclassifysoundrequest/overlapfactor.md): The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.
- [windowDuration](snclassifysoundrequest/windowduration.md): The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.

### Inspecting a Request

- [knownClassifications](snclassifysoundrequest/knownclassifications.md): A string array that contains every prediction label in the request’s underlying sound classifier model.
- [SNTimeDurationConstraint](sntimedurationconstraint-c.class.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

### Instance Properties

- [windowDurationConstraint](snclassifysoundrequest/windowdurationconstraint-5aqvx.md): A range or list of sound duration times the request’s underlying sound classifier supports.
- [SNTimeDurationConstraint](sntimedurationconstraint-c.class.md): Defines the time duration windows the request’s underlying sound classifier accepts with a range, or an array, of durations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [SNRequest](snrequest.md)

## See Also

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassificationResult](snclassificationresult.md): A result that contains the highest-ranking classifications in a time range.
