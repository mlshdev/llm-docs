> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbgetnextinterfacedescriptor

# IOUSBGetNextInterfaceDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the next interface descriptor in a configuration descriptor.

## Declaration

```objectivec
const IOUSBInterfaceDescriptor *IOUSBGetNextInterfaceDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `currentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor, or `NULL`.

<a id="return-value"></a>

## Return Value

An interface description pointer, or `NULL` if no matching descriptor is found.

<a id="Discussion"></a>

## Discussion

This method uses `getNextDescriptorWithType` to fetch the next interface descriptor.

## See Also

### Interface Descriptors

- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor.md): Finds the next interface association descriptor in a configuration descriptor.
