> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction/predictedstarttime](https://developer.apple.com/documentation/wirelessinsights/serviceprediction/predictedstarttime)

# predictedStartTime

**Framework:** WirelessInsights  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The start time of the predicted event.

## Declaration

```swift
let predictedStartTime: Date
```

<a id="discussion"></a>

## Discussion

The resolution of the time isn’t exact and is limited for privacy.

## See Also

### Accessing prediction timing

- [predictedInterval](predictedinterval.md): The expected duration of the predicted event.
- [ServicePrediction.QuantizedInterval](quantizedinterval.md): A type that provides discrete time intervals to express the expected duration of a predicted event.
