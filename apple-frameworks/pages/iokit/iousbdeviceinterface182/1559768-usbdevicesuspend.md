> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1559768-usbdevicesuspend](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1559768-usbdevicesuspend)

# USBDeviceSuspend

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Tells the USB Family to either suspend or resume the port to which a device is attached.

## Declaration

```objectivec
IOReturn (*USBDeviceSuspend)(void *self, Boolean suspend);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `suspend`: TRUE to cause the port to be suspended, FALSE to cause it to be resumed.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNotOpen if the device is not open for exclusive access.

<a id="discussion"></a>

## Discussion

The device must be open to use this function.
