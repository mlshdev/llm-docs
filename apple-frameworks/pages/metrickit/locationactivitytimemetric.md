> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/locationactivitytimemetric](https://developer.apple.com/documentation/metrickit/locationactivitytimemetric)

# LocationActivityTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures time spent using location services at each accuracy level.

## Declaration

```swift
struct LocationActivityTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.locationActivityTime(\_:)](metricresult/locationactivitytime%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

## Topics

### Accuracy levels

- [bestAccuracyForNavigation](locationactivitytimemetric/bestaccuracyfornavigation.md): The total time spent tracking the current location at the best accuracy for navigation.
- [bestAccuracy](locationactivitytimemetric/bestaccuracy.md): The total time spent tracking the current location at the best accuracy.
- [tenMeters](locationactivitytimemetric/tenmeters.md): The total time spent tracking the current location to an accuracy of 10 meters.
- [oneHundredMeter](locationactivitytimemetric/onehundredmeter.md): The total time spent tracking the current location to an accuracy of 100 meters.
- [oneKilometer](locationactivitytimemetric/onekilometer.md): The total time spent tracking the current location to an accuracy of 1 kilometer.
- [threeKilometers](locationactivitytimemetric/threekilometers.md): The total time spent tracking the current location to an accuracy of 3 kilometers.

### Instance Properties

- [reducedAccuracy](locationactivitytimemetric/reducedaccuracy.md): The total time spent tracking the current location at reduced accuracy.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time-in-use metrics

- [TotalForegroundTimeMetric](totalforegroundtimemetric.md): A metric that measures the total time the app spent in the foreground.
- [TotalBackgroundTimeMetric](totalbackgroundtimemetric.md): A metric that measures the total time the app spent active in the background.
- [TotalBackgroundAudioTimeMetric](totalbackgroundaudiotimemetric.md): A metric that measures the total time the app spent in the background playing audio.
- [TotalBackgroundLocationTimeMetric](totalbackgroundlocationtimemetric.md): A metric that measures the total time the app spent in the background using location services.
- [CellularConditionTimeMetric](cellularconditiontimemetric.md): A metric that measures time spent at each cellular signal strength.
