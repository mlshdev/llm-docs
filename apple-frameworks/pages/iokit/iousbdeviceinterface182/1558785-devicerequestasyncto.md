> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1558785-devicerequestasyncto](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1558785-devicerequestasyncto)

# DeviceRequestAsyncTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Sends an asynchronous USB request on the default control pipe.

## Declaration

```objectivec
IOReturn (*DeviceRequestAsyncTO)(void *self, IOUSBDevRequestTO *req, IOAsyncCallback1 callback, void *refCon);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `req`: Pointer to an IOUSBDevRequestTO containing the request.
- `callback`: An IOAsyncCallback1 method. A message addressed to this callback is posted to the Async port upon completion.
- `refCon`: Arbitrary pointer which is passed as a parameter to the callback routine.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnNotOpen if the device is not open for exclusive access, orkIOUSBNoAsyncPortErr if no Async port has been created for this interface.

<a id="discussion"></a>

## Discussion

This function sends an asynchronous USB request on the default control pipe. The IOUSBDevRequestTO structure allows the client to specify timeout values for this request. The device must be open to issue this command. Care should be taken when issuing a device request which changes the state of the device. Use the API, for example, to change the configuration of the device or to select an alternate setting on an interface.
