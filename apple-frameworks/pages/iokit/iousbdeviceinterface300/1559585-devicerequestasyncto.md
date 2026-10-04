> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface300/1559585-devicerequestasyncto

# DeviceRequestAsyncTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
IOReturn (*DeviceRequestAsyncTO)(void *self, IOUSBDevRequestTO *req, IOAsyncCallback1 callback, void *refCon);
```
