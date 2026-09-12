> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiduserdevicegetreportblock](https://developer.apple.com/documentation/iokit/iohiduserdevicegetreportblock)

# IOHIDUserDeviceGetReportBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15+

## Declaration

```objectivec
typedef IOReturn (^IOHIDUserDeviceGetReportBlock)(IOHIDReportType type, uint32_t reportID, uint8_t *report, CFIndex *reportLength);
```
