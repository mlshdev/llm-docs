> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1559151-usbdeviceopenseize](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1559151-usbdeviceopenseize)

# USBDeviceOpenSeize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Opens the IOUSBDevice for exclusive access.

## Declaration

```objectivec
IOReturn (*USBDeviceOpenSeize)(void *self);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnExclusiveAccess if some other task has the device opened already and refuses to close it, kIOReturnError if the connection with the kernel can not be established or kIOReturnSuccess if successful.

<a id="discussion"></a>

## Discussion

This function opens the IOUSBDevice for exclusive access. If another client has the device opened, an attempt is made to get that client to close it before returning. Before the client can issue commands that change the state of the device, it must have succeeded in opening the device. This establishes an exclusive link between the client's task and the actual device.
