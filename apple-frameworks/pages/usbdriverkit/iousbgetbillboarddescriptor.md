> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetbillboarddescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbgetbillboarddescriptor)

# IOUSBGetBillboardDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the first billboard capability descriptor in a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityBillboard *IOUSBGetBillboardDescriptor(const IOUSBBOSDescriptor *bosDescriptor);
```

## Parameters

- `bosDescriptor`: The BOS descriptor that contains the descriptors to iterate through.

<a id="return-value"></a>

## Return Value

The descriptor pointer, or `NULL` if no matching descriptor can be found.

<a id="Discussion"></a>

## Discussion

This method uses `getNextCapabilityDescriptorWithType` to fetch the first `BillboardCapabilityDescriptor.`

## See Also

### BOS Descriptors

- [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor.md): Gets the next device capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype.md): Finds the next descriptor matching a given type within a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor.md): Finds the first SuperSpeed device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor](iousbgetsuperspeedplusdevicecapabilitydescriptor.md): Finds the first SuperSpeed Plus device capability descriptor in a BOS descriptor.
- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor.md): Finds the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor.md): Finds the first Container ID capability descriptor in a BOS descriptor.
- [IOUSBGetPlatformCapabilityDescriptor](iousbgetplatformcapabilitydescriptor.md): Finds the first platform capability descriptor in a BOS descriptor.
