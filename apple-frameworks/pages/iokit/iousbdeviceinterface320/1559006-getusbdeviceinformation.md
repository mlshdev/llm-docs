> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface320/1559006-getusbdeviceinformation](https://developer.apple.com/documentation/iokit/iousbdeviceinterface320/1559006-getusbdeviceinformation)

# GetUSBDeviceInformation

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Returns status information about the USB device, such as whether the device is captive or whether it is in the suspended state.

## Declaration

```objectivec
IOReturn (*GetUSBDeviceInformation)(void *self, UInt32 *info);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `info`: Pointer to a buffer that returns a bit field of information on the device (see the USBDeviceInformationBits in USB.h).

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnUnsupported is the bus doesn't support this function.

<a id="discussion"></a>

## Discussion

The device does not have to be open to use this function.
