> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface122/1493431-getreport](https://developer.apple.com/documentation/iokit/iohiddeviceinterface122/1493431-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
IOReturn (*getReport)(void *self, IOHIDReportType reportType, uint32_t reportID, void *reportBuffer, uint32_t *reportBufferSize, uint32_t timeoutMS, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```
