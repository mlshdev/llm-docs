> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetnextassociateddescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbgetnextassociateddescriptor)

# IOUSBGetNextAssociatedDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Gets the next descriptor in the specified configuration descriptor that belongs to another container descriptor.

## Declaration

```objectivec
const IOUSBDescriptorHeader *IOUSBGetNextAssociatedDescriptor(const IOUSBConfigurationDescriptor *configurationDescriptor, const IOUSBDescriptorHeader *parentDescriptor, const IOUSBDescriptorHeader *currentDescriptor);
```

## Parameters

- `configurationDescriptor`: A configuration descriptor that contains the descriptors to iterate through.
- `parentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor.
- `currentDescriptor`: A descriptor pointer within the bounds of the configuration descriptor, or `NULL`.

<a id="return-value"></a>

## Return Value

A descriptor pointer, or `NULL` if no descriptor can be returned.

<a id="Discussion"></a>

## Discussion

This method uses `getNextDescriptor`, but returns `NULL` if it finds another descriptor whose descriptor type field matches the value used for the parent descriptor’s type. Using `NULL` for the current descriptor returns the first descriptor after the parent descriptor.

## See Also

### Configuration Descriptors

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor.md): Gets the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype.md): Finds the next descriptor matching a given type within a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype.md): Finds the next descriptor matching a specific type within a configuration descriptor that belongs to another container descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps.md): Extracts the maximum bus current a configuration descriptor requires.
