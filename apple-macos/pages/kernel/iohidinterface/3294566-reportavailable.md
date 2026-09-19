> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidinterface/3294566-reportavailable

# ReportAvailable

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
void ReportAvailable(uint64_t timestamp, uint32_t reportID, uint32_t reportLength, IOHIDReportType type, IOMemoryDescriptor *report, OSAction *action, OSDispatchMethod supermethod);
```
