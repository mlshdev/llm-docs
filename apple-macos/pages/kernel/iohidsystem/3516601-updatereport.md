> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/3516601-updatereport

# updateReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn updateReport(IOReportChannelList *channels, IOReportUpdateAction action, void *result, void *destination);
```
