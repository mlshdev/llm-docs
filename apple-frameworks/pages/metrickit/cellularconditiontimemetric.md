> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/cellularconditiontimemetric](https://developer.apple.com/documentation/metrickit/cellularconditiontimemetric)

# CellularConditionTimeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures time spent at each cellular signal strength.

## Declaration

```swift
struct CellularConditionTimeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.cellularConditionTime(\_:)](metricresult/cellularconditiontime%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

The histogram represents the fraction of the reporting interval spent at each cellular signal strength tier. If no cellular data was collected during the interval, the histogram is empty.

## Topics

### Measurements

- [histogram](cellularconditiontimemetric/histogram.md): Histogram of cellular condition time.

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
- [LocationActivityTimeMetric](locationactivitytimemetric.md): A metric that measures time spent using location services at each accuracy level.
