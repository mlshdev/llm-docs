> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetnextcapabilitydescriptorwithtype(_:_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetnextcapabilitydescriptorwithtype(_:_:_:))

# IOUSBGetNextCapabilityDescriptorWithType(\_:\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next descriptor matching a specific type within a BOS descriptor.

## Declaration

```swift
func IOUSBGetNextCapabilityDescriptorWithType(_ bosDescriptor: UnsafePointer<IOUSBBOSDescriptor>!, _ currentDescriptor: UnsafePointer<IOUSBDeviceCapabilityDescriptorHeader>!, _ type: UInt8) -> UnsafePointer<IOUSBDeviceCapabilityDescriptorHeader>!
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A device capability descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextCapabilityDescriptor(\_:\_:)](iousbgetnextcapabilitydescriptor%28____%29.md), and further validates that the returned descriptor’s `bDevCapabilityType` field matches the type parameter.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(\_:)](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor(\_:\_:)](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor(\_:)](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor(\_:)](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor(\_:)](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.

# IOUSBGetNextCapabilityDescriptorWithType (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the next descriptor matching a specific type within a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityDescriptorHeader *IOUSBGetNextCapabilityDescriptorWithType(const IOUSBBOSDescriptor *bosDescriptor, const IOUSBDeviceCapabilityDescriptorHeader *currentDescriptor, const uint8_t type);
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of `configurationDescriptor`, or `nil`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A device capability descriptor pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor%28____%29.md), and further validates that the returned descriptor’s `bDevCapabilityType` field matches the type parameter.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.
