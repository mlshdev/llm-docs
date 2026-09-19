> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface300/1559639-devicerequestasync

# DeviceRequestAsync

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
IOReturn (*DeviceRequestAsync)(void *self, IOUSBDevRequest *req, IOAsyncCallback1 callback, void *refCon);
```
