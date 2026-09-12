> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction](https://developer.apple.com/documentation/wirelessinsights/serviceprediction)

# ServicePrediction

**Framework:** WirelessInsights  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An individual prediction of anticipated cellular network availability.

## Declaration

```swift
struct ServicePrediction
```

<a id="overview"></a>

## Overview

Your app receives arrays of curent predictions from the [servicePredictions](servicepredictionprovider/servicepredictions.md) asynchronous sequence. Inspect the timing and impact properties of these predictions, and the associated confidence scores, to determine if your app takes action before a possible change in cellular conditions.

## Topics

### Accessing prediction impact

- [impact](serviceprediction/impact-swift.property.md): The expected impact of the predicted event.
- [ServicePrediction.Impact](serviceprediction/impact-swift.enum.md): An enumeration of levels of impact for a predicted event.

### Accessing prediction timing

- [predictedStartTime](serviceprediction/predictedstarttime.md): The start time of the predicted event.
- [predictedInterval](serviceprediction/predictedinterval.md): The expected duration of the predicted event.
- [ServicePrediction.QuantizedInterval](serviceprediction/quantizedinterval.md): A type that provides discrete time intervals to express the expected duration of a predicted event.

### Accessing prediction confidence

- [confidenceScore](serviceprediction/confidencescore-swift.property.md): A score that represents the level of confidence in various aspects of the prediction.
- [ServicePrediction.ConfidenceScore](serviceprediction/confidencescore-swift.struct.md): A type that represents the confidence in various aspects of the prediction.
- [ServicePrediction.Confidence](serviceprediction/confidence.md): An enumeration of levels of confidence for a prediction or one of its properties.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving service predictions

- [servicePredictions](servicepredictionprovider/servicepredictions.md): An asychronous sequence of current predictions.
- [ServicePredictionError](servicepredictionerror.md): A type that represents errors encountered while using the WirelessInsights framework.
