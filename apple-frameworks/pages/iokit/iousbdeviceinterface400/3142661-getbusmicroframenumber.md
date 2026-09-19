> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface400/3142661-getbusmicroframenumber

# GetBusMicroFrameNumber

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15+

## Declaration

```objectivec
IOReturn (*GetBusMicroFrameNumber)(void *self, UInt64 *microFrame, AbsoluteTime *atTime);
```
