> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextinterfaceassociationdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextinterfaceassociationdescriptor)

# IOUSBGetNextInterfaceAssociationDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the next interface association descriptor in a configuration descriptor.

## Declaration

```objectivec
const IOUSBInterfaceAssociationDescriptor *IOUSBGetNextInterfaceAssociationDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor, or `NULL`.

<a id="return-value"></a>

## Return Value

An interface association descriptor pointer, or `NULL` if no matching descriptor can be found.

<a id="Discussion"></a>

## Discussion

This method uses `getNextDescriptorWithType` to fetch the next interface association descriptor.

## See Also

### Interface Descriptors

- [IOUSBGetNextInterfaceDescriptor](iousbgetnextinterfacedescriptor.md): Finds the next interface descriptor in a configuration descriptor.
