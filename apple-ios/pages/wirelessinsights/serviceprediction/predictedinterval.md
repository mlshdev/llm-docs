> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction/predictedinterval](https://developer.apple.com/documentation/wirelessinsights/serviceprediction/predictedinterval)

# predictedInterval

**Framework:** WirelessInsights  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The expected duration of the predicted event.

## Declaration

```swift
let predictedInterval: TimeInterval
```

<a id="discussion"></a>

## Discussion

The value of this property is one of the defined values of the [ServicePrediction.QuantizedInterval](quantizedinterval.md) type.

## See Also

### Accessing prediction timing

- [predictedStartTime](predictedstarttime.md): The start time of the predicted event.
- [ServicePrediction.QuantizedInterval](quantizedinterval.md): A type that provides discrete time intervals to express the expected duration of a predicted event.
