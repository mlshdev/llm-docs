> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter/createlegend](https://developer.apple.com/documentation/driverkit/ioreporter/createlegend)

# createLegend

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Create a legend entry represending this reporter’s channels.

## Declaration

```objectivec
OSDictionary * createLegend();
```

<a id="return-value"></a>

## Return Value

An [IOReportLegendEntry](../ioreportlegendentry.md) object or `NULL` on failure.

<a id="discussion"></a>

## Discussion

All channels added to the reporter will be represented in the resulting legend entry.

Legends must be published together as an array under the `kIOReportLegendKey` in the I/O Kit registry.  The [IOReportLegend](../ioreportlegend.md) class can be used to properly combine legend entries from multiple reporters as well as to put channels into groups of interest to observers.  When published, individual legend entries share characteristics such as group and sub-group.  Multiple [IOReporter](../ioreporter.md) instances are required to produce independent legend entries which can then be published with different characteristics.

Drivers wishing to publish legends should do so as part of their `::start()` routine.  As superclasses *may* have installed legend entries, any existing existing legend should be retrieved and IOReportLegend used to merge it with the new entries.

Recommendations for best practices are forthcoming.

Instead of calling createLegend on your reporter object and then appending it manually to IOReportLegend, one may prefer to call [addReporterLegend](../ioreportlegend/addreporterlegend-c.method.md) which creates and appends a reporter’s [IOReportLegendEntry](../ioreportlegendentry.md) in a single call.

Locking: same-instance concurrency SAFE, MAY BLOCK

## See Also

### Instance Methods

- [addChannel](addchannel.md): Add an additional, similar channel to the reporter.
- [configureReport](configurereport.md): Track IOService::configureReport(), provide sizing info
- [free](free.md)
- [updateReport](updatereport.md): Produce standard reply to IOService::updateReport()
