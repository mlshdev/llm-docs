> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface182/1558708-usbgetmanufacturerstringindex](https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1558708-usbgetmanufacturerstringindex)

# USBGetManufacturerStringIndex

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Returns the manufacturer string index in the device descriptor.

## Declaration

```objectivec
IOReturn (*USBGetManufacturerStringIndex)(void *self, UInt8 *msi);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `msi`: Pointer to UInt8 to hold the string index.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

The device does not have to be open to use this function.
