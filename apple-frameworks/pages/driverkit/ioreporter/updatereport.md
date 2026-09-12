> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter/updatereport](https://developer.apple.com/documentation/driverkit/ioreporter/updatereport)

# updateReport

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Produce standard reply to IOService::updateReport()

## Declaration

```objectivec
IOReturn updateReport(IOReportChannelList *channelList, IOReportConfigureAction action, uint32_t & elementCount, uint8_t * & buffer, size_t & capacity);
```

## Parameters

- `channelList`: Channels to update
- `action`: Copy/trace data (see `IOReportTypes.h`)
- `elementCount`: Element count.
- `buffer`: Buffer.
- `capacity`: Capacity.

<a id="return-value"></a>

## Return Value

Appropriate [IOReturn](../ioreturn.md) code

<a id="discussion"></a>

## Discussion

This method searches channelList for channels tracked by this reporter, writes the corresponding data into ‘destination’, and updates ‘result’.  It should be possible to pass a given set of [UpdateReport](../ioservice/updatereport.md) arguments to any and all reporters as well as to `super::updateReport()` and get the right result.

The static \`\`IOReporter/updateAllReports\` will call this method on an OSSet of reporters.

Locking: same-instance concurrency SAFE, WILL NOT BLOCK

## See Also

### Instance Methods

- [addChannel](addchannel.md): Add an additional, similar channel to the reporter.
- [configureReport](configurereport.md): Track IOService::configureReport(), provide sizing info
- [createLegend](createlegend.md): Create a legend entry represending this reporter’s channels.
- [free](free.md)
