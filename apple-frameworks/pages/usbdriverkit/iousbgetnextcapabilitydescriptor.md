> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextcapabilitydescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextcapabilitydescriptor)

# IOUSBGetNextCapabilityDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Gets the next device capability descriptor in a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityDescriptorHeader *IOUSBGetNextCapabilityDescriptor(const IOUSBBOSDescriptor *bosDescriptor, const IOUSBDeviceCapabilityDescriptorHeader *currentDescriptor);
```

## Parameters

- `bosDescriptor`: The BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of the BOS descriptor, or `NULL`.

<a id="return-value"></a>

## Return Value

The device capability descriptor pointer, or `NULL` if no descriptor is available.

<a id="Discussion"></a>

## Discussion

This method advances the current descriptor by its length, and validates that the new descriptor fits within the bounds of the BOS descriptor. Passing `NULL` for `currentDescriptor` returns the first descriptor after the BOS descriptor.

## See Also

### BOS Descriptors

- [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype.md): Finds the next descriptor matching a given type within a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor.md): Finds the first SuperSpeed device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor](iousbgetsuperspeedplusdevicecapabilitydescriptor.md): Finds the first SuperSpeed Plus device capability descriptor in a BOS descriptor.
- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor.md): Finds the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor.md): Finds the first Container ID capability descriptor in a BOS descriptor.
- [IOUSBGetPlatformCapabilityDescriptor](iousbgetplatformcapabilitydescriptor.md): Finds the first platform capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor.md): Finds the first billboard capability descriptor in a BOS descriptor.
