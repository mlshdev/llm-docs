> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totalforegroundtimemetric](https://developer.apple.com/documentation/metrickit/totalforegroundtimemetric)

# TotalForegroundTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the total time the app spent in the foreground.

## Declaration

```swift
struct TotalForegroundTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalForegroundTime(\_:)](metricresult/totalforegroundtime%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

## Topics

### Measurements

- [value](totalforegroundtimemetric/value.md): The total time the app is in the foreground.

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

- [TotalBackgroundTimeMetric](totalbackgroundtimemetric.md): A metric that measures the total time the app spent active in the background.
- [TotalBackgroundAudioTimeMetric](totalbackgroundaudiotimemetric.md): A metric that measures the total time the app spent in the background playing audio.
- [TotalBackgroundLocationTimeMetric](totalbackgroundlocationtimemetric.md): A metric that measures the total time the app spent in the background using location services.
- [LocationActivityTimeMetric](locationactivitytimemetric.md): A metric that measures time spent using location services at each accuracy level.
- [CellularConditionTimeMetric](cellularconditiontimemetric.md): A metric that measures time spent at each cellular signal strength.
