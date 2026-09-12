> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/3334955-iohiduserdevicehandlereportwitht](https://developer.apple.com/documentation/iokit/3334955-iohiduserdevicehandlereportwitht)

# IOHIDUserDeviceHandleReportWithTimeStamp

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
IOReturn IOHIDUserDeviceHandleReportWithTimeStamp(IOHIDUserDeviceRef device, uint64_t timestamp, const uint8_t *report, CFIndex reportLength);
```
