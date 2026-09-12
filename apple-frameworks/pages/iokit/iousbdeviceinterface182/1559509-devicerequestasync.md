> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1559509-devicerequestasync](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1559509-devicerequestasync)

# DeviceRequestAsync

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

## Declaration

```objectivec
IOReturn (*DeviceRequestAsync)(void *self, IOUSBDevRequest *req, IOAsyncCallback1 callback, void *refCon);
```
