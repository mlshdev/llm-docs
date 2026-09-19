> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395735-getreport

# getReport

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*getReport)(void *self, IOHIDReportType reportType, uint32_t reportID, uint8_t *report, CFIndex *pReportLength, uint32_t timeout, IOHIDReportCallback callback, void *context, IOOptionBits options);
```
