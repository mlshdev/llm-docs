> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/statisticsreportfrequency](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/statisticsreportfrequency)

# statisticsReportFrequency (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

The frequencty at which to provide flow statistics to the data provider.

## Declaration

```swift
var statisticsReportFrequency: NEFilterReport.Frequency { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the frequency at which the provider receives a call to its [handle(\_:)](../nefilterprovider/handle%28__%29.md) method with an [NEFilterReport.Event.statistics](../nefilterreport/event-swift.enum/statistics.md) event.

The default value of this property [NEFilterReport.Frequency.none](../nefilterreport/frequency/none.md), meaning that the provider receives no statistics by default.

# statisticsReportFrequency (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15.4+

The frequencty at which to provide flow statistics to the data provider.

## Declaration

```objectivec
@property NEFilterReportFrequency statisticsReportFrequency;
```

<a id="Discussion"></a>

## Discussion

This property determines the frequency at which the provider receives a call to its [handleReport:](../nefilterprovider/handle%28__%29.md) method with an [NEFilterReportEventStatistics](../nefilterreport/event-swift.enum/statistics.md) event.

The default value of this property [NEFilterReportFrequencyNone](../nefilterreport/frequency/none.md), meaning that the provider receives no statistics by default.
