> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetnextcapabilitydescriptor(_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetnextcapabilitydescriptor(_:_:))

# IOUSBGetNextCapabilityDescriptor(\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next device capability descriptor in a BOS descriptor.

## Declaration

```swift
func IOUSBGetNextCapabilityDescriptor(_ bosDescriptor: UnsafePointer<IOUSBBOSDescriptor>!, _ currentDescriptor: UnsafePointer<IOUSBDeviceCapabilityDescriptorHeader>!) -> UnsafePointer<IOUSBDeviceCapabilityDescriptorHeader>!
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

A device capability descriptor pointer, or `nil` if no descriptor returns.

<a id="Discussion"></a>

## Discussion

This method advances the current descriptor by its length, and validates that the new descriptor fits within the bounds of `bosDescriptor`. Use `nil` for `currentDescriptor` to return the first descriptor after the BOS descriptor.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(\_:)](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptorWithType(\_:\_:\_:)](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor(\_:)](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor(\_:)](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor(\_:)](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.

# IOUSBGetNextCapabilityDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next device capability descriptor in a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityDescriptorHeader *IOUSBGetNextCapabilityDescriptor(const IOUSBBOSDescriptor *bosDescriptor, const IOUSBDeviceCapabilityDescriptorHeader *currentDescriptor);
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.

<a id="return-value"></a>

## Return Value

A device capability descriptor pointer, or `nil` if no descriptor returns.

<a id="Discussion"></a>

## Discussion

This method advances the current descriptor by its length, and validates that the new descriptor fits within the bounds of `bosDescriptor`. Use `nil` for `currentDescriptor` to return the first descriptor after the BOS descriptor.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.
