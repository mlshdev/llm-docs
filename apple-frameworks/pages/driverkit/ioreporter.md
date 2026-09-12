> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter](https://developer.apple.com/documentation/driverkit/ioreporter)

# IOReporter

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Class  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
class IOReporter;
```

## Topics

### Instance Methods

- [addChannel](ioreporter/addchannel.md): Add an additional, similar channel to the reporter.
- [configureReport](ioreporter/configurereport.md): Track IOService::configureReport(), provide sizing info
- [createLegend](ioreporter/createlegend.md): Create a legend entry represending this reporter’s channels.
- [free](ioreporter/free.md)
- [updateReport](ioreporter/updatereport.md): Produce standard reply to IOService::updateReport()

### Type Methods

- [configureAllReports](ioreporter/configureallreports.md): Calls `configureReport()` on multiple `IOReporter` objects
- [updateAllReports](ioreporter/updateallreports.md): Calls `updateReport()` on multiple IOReporter objects.

## Relationships

### Inherits From

- [OSObject](osobject.md)

### Inherited By

- [IOHistogramReporter](iohistogramreporter.md)
- [IOSimpleReporter](iosimplereporter.md)
- [IOStateReporter](iostatereporter.md)

## See Also

### Classes

- [IOHistogramReporter](iohistogramreporter.md)
- [IOReportLegend](ioreportlegend.md)
- [IOServiceStateNotificationDispatchSource](ioservicestatenotificationdispatchsource.md)
- [IOSimpleReporter](iosimplereporter.md)
- [IOStateReporter](iostatereporter.md)
- [OSBundle](osbundle.md)
- [OSMappedFile](osmappedfile.md)
