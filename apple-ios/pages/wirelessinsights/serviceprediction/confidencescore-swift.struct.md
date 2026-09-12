> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction/confidencescore-swift.struct](https://developer.apple.com/documentation/wirelessinsights/serviceprediction/confidencescore-swift.struct)

# ServicePrediction.ConfidenceScore

**Framework:** WirelessInsights  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that represents the confidence in various aspects of the prediction.

## Declaration

```swift
struct ConfidenceScore
```

## Topics

### Accessing prediction confidence scores

- [prediction](confidencescore-swift.struct/prediction.md): Confidence that the predicted event will occur.
- [startTime](confidencescore-swift.struct/starttime.md): Confidence of the start time if the predicted event occurs.
- [duration](confidencescore-swift.struct/duration.md): Confidence of the duration if the predicted event occurs.
- [ServicePrediction.Confidence](confidence.md): An enumeration of levels of confidence for a prediction or one of its properties.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing prediction confidence

- [confidenceScore](confidencescore-swift.property.md): A score that represents the level of confidence in various aspects of the prediction.
- [ServicePrediction.Confidence](confidence.md): An enumeration of levels of confidence for a prediction or one of its properties.
