> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/servicepredictionprovider/servicepredictions](https://developer.apple.com/documentation/wirelessinsights/servicepredictionprovider/servicepredictions)

# servicePredictions

**Framework:** WirelessInsights  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An asychronous sequence of current predictions.

## Declaration

```swift
final var servicePredictions: any AsyncSequence<[ServicePrediction], any Error> { get }
```

<a id="discussion"></a>

## Discussion

To act on predictions about wireless service changes, use a `for`-`await`-`in` loop to iterate over events produced by this sequence as conditions change. Each update provides either an array of [ServicePrediction](../serviceprediction.md) instances representing the current set of predictions or throws a [ServicePredictionError](../servicepredictionerror.md). Only act on the most recent array of predictions received from the sequence.

> **Note**

> The framework requires that your app have the `com.apple.developer.wireless-insights.service-predictions` entitlement in order to access predictions.

## See Also

### Receiving service predictions

- [ServicePrediction](../serviceprediction.md): An individual prediction of anticipated cellular network availability.
- [ServicePredictionError](../servicepredictionerror.md): A type that represents errors encountered while using the WirelessInsights framework.
