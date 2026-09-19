> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddevicetimestampeddeviceinterface/1395683-setinputreportcallback

# setInputReportCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
IOReturn (*setInputReportCallback)(void *self, uint8_t *report, CFIndex reportLength, IOHIDReportCallback callback, void *context, IOOptionBits options);
```
