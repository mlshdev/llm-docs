> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilternewflowverdict/statisticsreportfrequency](https://developer.apple.com/documentation/networkextension/nefilternewflowverdict/statisticsreportfrequency)

# statisticsReportFrequency (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

The frequency at which the data provider receives reports.

## Declaration

```swift
var statisticsReportFrequency: NEFilterReport.Frequency { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the frequency at which the system calls the data provider’s [handle(\_:)](../nefilterprovider/handle%28__%29.md) method with an [NEFilterReport](../nefilterreport.md) instance that contains an [NEFilterReport.Event.statistics](../nefilterreport/event-swift.enum/statistics.md) [event](../nefilterreport/event-swift.property.md).

## See Also

### Inspecting new flow verdict properties

- [NEFilterReport.Frequency](../nefilterreport/frequency.md): An enumeration that represents the frequency of filter report delivery.

# statisticsReportFrequency (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

The frequency at which the data provider receives reports.

## Declaration

```objectivec
@property NEFilterReportFrequency statisticsReportFrequency;
```

<a id="Discussion"></a>

## Discussion

This property determines the frequency at which the system calls the data provider’s [handleReport:](../nefilterprovider/handle%28__%29.md) method with an [NEFilterReport](../nefilterreport.md) instance that contains an [NEFilterReportEventStatistics](../nefilterreport/event-swift.enum/statistics.md) [event](../nefilterreport/event-swift.property.md).

## See Also

### Inspecting new flow verdict properties

- [NEFilterReportFrequency](../nefilterreport/frequency.md): An enumeration that represents the frequency of filter report delivery.
