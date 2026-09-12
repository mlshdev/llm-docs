> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface182/1559506-controlrequestasyncto](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface182/1559506-controlrequestasyncto)

# ControlRequestAsyncTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Sends an asynchronous USB request on a control pipe.

## Declaration

```objectivec
IOReturn (*ControlRequestAsyncTO)(void *self, UInt8 pipeRef, IOUSBDevRequestTO *req, IOAsyncCallback1 callback, void *refCon);
```

<a id="discussion"></a>

## Discussion

The IOUSBDevRequestTO structure allows the client to specify timeout values for this request. Use pipeRef=0 for the default device control pipe. If the request is a standard request which will change the state of the device, the device must be open, which means you should be using the IOUSBDeviceInterface for this command.
