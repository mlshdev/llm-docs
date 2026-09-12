> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetimestampeddeviceinterface/1395735-getreport](https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395735-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*getReport)(void *self, IOHIDReportType reportType, uint32_t reportID, uint8_t *report, CFIndex *pReportLength, uint32_t timeout, IOHIDReportCallback callback, void *context, IOOptionBits options);
```
