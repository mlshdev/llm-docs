> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterreport/frequency](https://developer.apple.com/documentation/networkextension/nefilterreport/frequency)

# NEFilterReport.Frequency (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15.4+

An enumeration that represents the frequency of filter report delivery.

## Declaration

```swift
enum Frequency
```

## Topics

### Report frequencies

- [NEFilterReport.Frequency.none](frequency/none.md): A frequency value that indicates no report delivery.
- [NEFilterReport.Frequency.low](frequency/low.md): A low frequency of reports, about once every five seconds.
- [NEFilterReport.Frequency.medium](frequency/medium.md): A low frequency of reports, about once every second.
- [NEFilterReport.Frequency.high](frequency/high.md): A low frequency of reports, about once every half-second.

### Initializers

- [init(rawValue:)](frequency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting new flow verdict properties

- [statisticsReportFrequency](../nefilternewflowverdict/statisticsreportfrequency.md): The frequency at which the data provider receives reports.

# NEFilterReportFrequency (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15.4+

An enumeration that represents the frequency of filter report delivery.

## Declaration

```objectivec
enum NEFilterReportFrequency : NSInteger;
```

## Topics

### Report frequencies

- [NEFilterReportFrequencyNone](frequency/none.md): A frequency value that indicates no report delivery.
- [NEFilterReportFrequencyLow](frequency/low.md): A low frequency of reports, about once every five seconds.
- [NEFilterReportFrequencyMedium](frequency/medium.md): A low frequency of reports, about once every second.
- [NEFilterReportFrequencyHigh](frequency/high.md): A low frequency of reports, about once every half-second.

## See Also

### Inspecting new flow verdict properties

- [statisticsReportFrequency](../nefilternewflowverdict/statisticsreportfrequency.md): The frequency at which the data provider receives reports.
