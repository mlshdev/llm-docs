> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1559217-devicerequestto](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1559217-devicerequestto)

# DeviceRequestTO

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Sends a USB request on the default control pipe.

## Declaration

```objectivec
IOReturn (*DeviceRequestTO)(void *self, IOUSBDevRequestTO *req);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `req`: Pointer to an IOUSBDevRequestTO containing the request.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnAborted if the thread is interrupted before the call completes, or kIOReturnNotOpen if the device is not open for exclusive access.

<a id="discussion"></a>

## Discussion

This function sends a USB request on the default control pipe. The IOUSBDevRequestTO structure allows the client to specify timeout values for this request. The device must be open to issue this command. Care should be taken when issuing a device request which changes the state of the device. Use the API, for example, to change the configuration of the device or to select an alternate setting on an interface.
