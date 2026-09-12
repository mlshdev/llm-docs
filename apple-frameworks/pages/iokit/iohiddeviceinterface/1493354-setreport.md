> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493354-setreport](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493354-setreport)

# setReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*setReport)(void *self, IOHIDReportType reportType, uint32_t reportID, void *reportBuffer, uint32_t reportBufferSize, uint32_t timeoutMS, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```
