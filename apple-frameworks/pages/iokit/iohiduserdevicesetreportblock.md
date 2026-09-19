> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiduserdevicesetreportblock

# IOHIDUserDeviceSetReportBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15+

## Declaration

```objectivec
typedef IOReturn (^IOHIDUserDeviceSetReportBlock)(IOHIDReportType type, uint32_t reportID, const uint8_t *report, CFIndex reportLength);
```
