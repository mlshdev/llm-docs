> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/servicepredictionerror](https://developer.apple.com/documentation/wirelessinsights/servicepredictionerror)

# ServicePredictionError

**Framework:** WirelessInsights  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that represents errors encountered while using the WirelessInsights framework.

## Declaration

```swift
enum ServicePredictionError
```

## Topics

### Handling configuration errors

- [ServicePredictionError.unsupportedDevice](servicepredictionerror/unsupporteddevice.md): The device doesn’t currently support service predictions.

### Handling connectivity errors

- [ServicePredictionError.connectionError](servicepredictionerror/connectionerror.md): An unexpected error occurred while setting up the event stream.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving service predictions

- [servicePredictions](servicepredictionprovider/servicepredictions.md): An asychronous sequence of current predictions.
- [ServicePrediction](serviceprediction.md): An individual prediction of anticipated cellular network availability.
