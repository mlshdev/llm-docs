> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface245/1559582-devicerequestasyncto

# DeviceRequestAsyncTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.4+

## Declaration

```objectivec
IOReturn (*DeviceRequestAsyncTO)(void *self, IOUSBDevRequestTO *req, IOAsyncCallback1 callback, void *refCon);
```
