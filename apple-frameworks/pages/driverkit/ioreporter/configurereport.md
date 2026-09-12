> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter/configurereport](https://developer.apple.com/documentation/driverkit/ioreporter/configurereport)

# configureReport

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Track IOService::configureReport(), provide sizing info

## Declaration

```objectivec
IOReturn configureReport(IOReportChannelList *channelList, IOReportConfigureAction action, uint32_t & elementCount);
```

## Parameters

- `channelList`: Channels to configure.
- `action`: Enable/disable/size, etc (see `IOReportTypes.h`).
- `elementCount`: Element count.

<a id="return-value"></a>

## Return Value

Appropriate `IOReturn` code.

<a id="discussion"></a>

## Discussion

Any time a reporting driver’s ::configureReport method is invoked, this method should be invoked on each IOReporter that is being used by that driver to report channels in channelList.

Any channels in channelList which are not tracked by this reporter are ignored.  ::configureReport(kIOReportGetDimensions) expects the full size of all channels, including any reported by superclasses.  It is valid to call this routine on multiple reporter objects in succession and they will increment ‘result’ to provide the correct total.

The static IOReporter::configureAllReports() will call this method on multiple reporters grouped in an OSSet.

Locking: same-instance concurrency SAFE, MAY BLOCK

## See Also

### Instance Methods

- [addChannel](addchannel.md): Add an additional, similar channel to the reporter.
- [createLegend](createlegend.md): Create a legend entry represending this reporter’s channels.
- [free](free.md)
- [updateReport](updatereport.md): Produce standard reply to IOService::updateReport()
