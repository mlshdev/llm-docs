> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iohistogramreporter_ivars/iohistogramreporter_ivars](https://developer.apple.com/documentation/driverkit/iohistogramreporter_ivars/iohistogramreporter_ivars)

# IOHistogramReporter_IVars

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Constructor  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
IOHistogramReporter_IVars(IOService *reportingService, IOReportChannelType channelType, IOReportUnit unit, const OSString *channelName, IOReportCategories categories, uint64_t channelID, int nSegments, IOHistogramSegmentConfig *config);
```
