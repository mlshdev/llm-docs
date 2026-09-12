> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetusb20extensiondevicecapabilitydescriptor(_:)](https://developer.apple.com/documentation/iousbhost/iousbgetusb20extensiondevicecapabilitydescriptor(_:))

# IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.

## Declaration

```swift
func IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(_ bosDescriptor: UnsafePointer<IOUSBBOSDescriptor>!) -> UnsafePointer<IOUSBDeviceCapabilityUSB2Extension>!
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.

<a id="return-value"></a>

## Return Value

The device capability extension pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextCapabilityDescriptorWithType(\_:\_:\_:)](iousbgetnextcapabilitydescriptorwithtype%28______%29.md) to find the first device capability extension.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetNextCapabilityDescriptorWithType(\_:\_:\_:)](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor(\_:\_:)](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor(\_:)](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor(\_:)](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor(\_:)](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.

# IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.

## Declaration

```objectivec
const IOUSBDeviceCapabilityUSB2Extension *IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(const IOUSBBOSDescriptor *bosDescriptor);
```

## Parameters

- `bosDescriptor`: A BOS descriptor that contains the descriptors to iterate through.

<a id="return-value"></a>

## Return Value

The device capability extension pointer, or `nil` if no matching descriptor returns.

<a id="Discussion"></a>

## Discussion

This method uses [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype%28______%29.md) to find the first device capability extension.

## See Also

### BOS Descriptor Parsing

- [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.
