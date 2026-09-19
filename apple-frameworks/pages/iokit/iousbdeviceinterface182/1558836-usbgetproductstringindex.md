> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1558836-usbgetproductstringindex

# USBGetProductStringIndex

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Returns the product string index in the device descriptor.

## Declaration

```objectivec
IOReturn (*USBGetProductStringIndex)(void *self, UInt8 *psi);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `psi`: Pointer to UInt8 to hold the string index.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

The device does not have to be open to use this function.
