> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface182/1558963-controlrequestto](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface182/1558963-controlrequestto)

# ControlRequestTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Sends a USB request on a control pipe.

## Declaration

```objectivec
IOReturn (*ControlRequestTO)(void *self, UInt8 pipeRef, IOUSBDevRequestTO *req);
```

<a id="discussion"></a>

## Discussion

The IOUSBDevRequestTO structure allows the client to specify timeout values for this request. If the request is a standard request which will change the state of the device, the device must be open, which means you should be using the IOUSBDeviceInterface for this command.
