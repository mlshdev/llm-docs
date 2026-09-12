> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface187/1559027-usbdevicereenumerate](https://developer.apple.com/documentation/iokit/iousbdeviceinterface187/1559027-usbdevicereenumerate)

# USBDeviceReEnumerate

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Tells the IOUSBFamily to reenumerate the device.

## Declaration

```objectivec
IOReturn (*USBDeviceReEnumerate)(void *self, UInt32 options);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `options`: A UInt32 reserved for future use. Ignored in current implementation. Set to zero.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNotOpen if the device is not open for exclusive access.

<a id="discussion"></a>

## Discussion

This function will send a terminate message to all clients of the IOUSBDevice (such as IOUSBInterfaces and their drivers, as well as the current User Client), emulating an unplug of the device. The IOUSBFamily will then enumerate the device as if it had just been plugged in. This call should be used by clients wishing to take advantage of the Device Firmware Update Class specification. The device must be open to use this function.
