> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioreporter_ivars/handleupdatereport

# handleUpdateReport

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleUpdateReport(IOReportChannelList *channelList, IOReportConfigureAction action, uint32_t & elementCount, uint8_t * & buffer, size_t & capacity);
```
