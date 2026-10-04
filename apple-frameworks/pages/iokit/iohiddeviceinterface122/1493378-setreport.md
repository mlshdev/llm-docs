> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddeviceinterface122/1493378-setreport

# setReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
IOReturn (*setReport)(void *self, IOHIDReportType reportType, uint32_t reportID, void *reportBuffer, uint32_t reportBufferSize, uint32_t timeoutMS, IOHIDReportCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```
