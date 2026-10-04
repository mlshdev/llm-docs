> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface320/1558850-getbusframenumberwithtime

# GetBusFrameNumberWithTime

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
IOReturn (*GetBusFrameNumberWithTime)(void *self, UInt64 *frame, AbsoluteTime *atTime);
```
