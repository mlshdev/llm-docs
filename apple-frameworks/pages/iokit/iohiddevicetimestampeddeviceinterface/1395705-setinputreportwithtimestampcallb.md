> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddevicetimestampeddeviceinterface/1395705-setinputreportwithtimestampcallb](https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395705-setinputreportwithtimestampcallb)

# setInputReportWithTimeStampCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*setInputReportWithTimeStampCallback)(void *self, uint8_t *report, CFIndex reportLength, IOHIDReportWithTimeStampCallback callback, void *context, IOOptionBits options);
```
