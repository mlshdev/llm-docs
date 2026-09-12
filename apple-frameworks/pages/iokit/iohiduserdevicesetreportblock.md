> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiduserdevicesetreportblock](https://developer.apple.com/documentation/iokit/iohiduserdevicesetreportblock)

# IOHIDUserDeviceSetReportBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15+

## Declaration

```objectivec
typedef IOReturn (^IOHIDUserDeviceSetReportBlock)(IOHIDReportType type, uint32_t reportID, const uint8_t *report, CFIndex reportLength);
```
