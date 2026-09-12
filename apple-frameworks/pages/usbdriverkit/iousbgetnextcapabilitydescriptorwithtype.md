> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextcapabilitydescriptorwithtype](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextcapabilitydescriptorwithtype)

# IOUSBGetNextCapabilityDescriptorWithType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the next descriptor matching a given type within a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityDescriptorHeader *IOUSBGetNextCapabilityDescriptorWithType(const IOUSBBOSDescriptor *bosDescriptor, const IOUSBDeviceCapabilityDescriptorHeader *currentDescriptor, const uint8_t type);
```

## Parameters

- `bosDescriptor`: The BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of the BOS descriptor, or `NULL`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `NULL` if no matching descriptor is available.

<a id="Discussion"></a>

## Discussion

This method uses `getNextCapabilityDescriptor`, and further validates that the returned descriptor’s `bDevCapabilityType` field matches the type parameter.

## See Also

### BOS Descriptors

- [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor.md): Gets the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor.md): Finds the first SuperSpeed device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor](iousbgetsuperspeedplusdevicecapabilitydescriptor.md): Finds the first SuperSpeed Plus device capability descriptor in a BOS descriptor.
- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor.md): Finds the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor.md): Finds the first Container ID capability descriptor in a BOS descriptor.
- [IOUSBGetPlatformCapabilityDescriptor](iousbgetplatformcapabilitydescriptor.md): Finds the first platform capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor.md): Finds the first billboard capability descriptor in a BOS descriptor.
