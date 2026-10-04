> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioreporter_ivars/handleconfigurereport

# handleConfigureReport

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleConfigureReport(IOReportChannelList *channelList, IOReportConfigureAction action, uint32_t & elementCount);
```
