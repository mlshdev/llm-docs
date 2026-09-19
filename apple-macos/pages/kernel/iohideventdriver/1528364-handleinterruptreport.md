> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventdriver/1528364-handleinterruptreport

# handleInterruptReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void handleInterruptReport(AbsoluteTime timeStamp, IOMemoryDescriptor *report, IOHIDReportType reportType, UInt32 reportID);
```
