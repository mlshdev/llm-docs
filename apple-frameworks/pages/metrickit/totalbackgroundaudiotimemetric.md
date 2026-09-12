> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totalbackgroundaudiotimemetric](https://developer.apple.com/documentation/metrickit/totalbackgroundaudiotimemetric)

# TotalBackgroundAudioTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the total time the app spent in the background playing audio.

## Declaration

```swift
struct TotalBackgroundAudioTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalBackgroundAudioTime(\_:)](metricresult/totalbackgroundaudiotime%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

## Topics

### Measurements

- [value](totalbackgroundaudiotimemetric/value.md): The total time the app is in the background and playing audio.

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
- [TotalBackgroundLocationTimeMetric](totalbackgroundlocationtimemetric.md): A metric that measures the total time the app spent in the background using location services.
- [LocationActivityTimeMetric](locationactivitytimemetric.md): A metric that measures time spent using location services at each accuracy level.
- [CellularConditionTimeMetric](cellularconditiontimemetric.md): A metric that measures time spent at each cellular signal strength.
