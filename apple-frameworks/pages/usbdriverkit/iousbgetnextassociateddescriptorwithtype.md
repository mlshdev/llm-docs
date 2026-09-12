> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextassociateddescriptorwithtype](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextassociateddescriptorwithtype)

# IOUSBGetNextAssociatedDescriptorWithType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Finds the next descriptor matching a specific type within a configuration descriptor that belongs to another container descriptor.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextAssociatedDescriptorWithType(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *parentDescriptor, const IOUSBDescriptorHeader *currentDescriptor, const uint8_t type);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `parentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor.
- `currentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor, or `NULL`.
- `type`: The descriptor type to find.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `NULL` if no matching descriptor is found.

<a id="Discussion"></a>

## Discussion

This method uses `getNextAssociatedDescriptor`, and further validates that the returned descriptor’s type field matches the type parameter passed to this method.

## See Also

### Configuration Descriptors

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor.md): Gets the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype.md): Finds the next descriptor matching a given type within a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor.md): Gets the next descriptor in the specified configuration descriptor that belongs to another container descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps.md): Extracts the maximum bus current a configuration descriptor requires.
